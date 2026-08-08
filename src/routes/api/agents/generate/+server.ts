// +server.ts — proxy ke Ollama: frontend POST /api/agents/generate
// → SvelteKit forward ke Ollama /api/chat (OpenAI-compatible)
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	let body: { model?: string; messages?: { role: string; content: string }[] } = {};
	try {
		body = await request.json();
	} catch {
		/* ignore */
	}
	const model = body.model ?? 'gemma4:e4b';
	const messages = body.messages ?? [];

	const ollamaUrl = process.env.OLLAMA_BASE_URL ?? 'http://127.0.0.1:11434';
	try {
		const res = await fetch(`${ollamaUrl}/api/chat`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			signal: AbortSignal.timeout(180000),
			body: JSON.stringify({ model, messages, stream: false })
		});
		if (!res.ok) {
			return json({ error: `ollama ${res.status}` }, { status: 502 });
		}
		const data = await res.json();
		const text = data?.message?.content ?? '';
		return json({ text });
	} catch (e) {
		return json({ error: String(e) }, { status: 503 });
	}
};
