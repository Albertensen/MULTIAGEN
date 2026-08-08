import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteStaticCopy({
			targets: [
				{
					src: 'node_modules/onnxruntime-web/dist/*.jsep.*',

					dest: 'wasm'
				}
			]
		})
	],
	define: {
		APP_VERSION: JSON.stringify(process.env.npm_package_version),
		APP_BUILD_HASH: JSON.stringify(process.env.APP_BUILD_HASH || 'dev-build')
	},
	build: {
		sourcemap: true
	},
	worker: {
		format: 'es'
	},
	server: {
		port: 8088,
		proxy: {
			// /api/agents = route SvelteKit sendiri (proxy Ollama) — TANPA proxy config,
			// Vite serve route lokal. Hanya /api lain diteruskan ke backend.
			'/api': {
				target: 'http://127.0.0.1:8080',
				changeOrigin: true,
				// kecualikan /api/agents dari proxy (biar route SvelteKit menang)
				bypass: (req) => (req.url.startsWith('/api/agents') ? req.url : undefined)
			}
		}
	},
	esbuild: {
		pure: process.env.ENV === 'dev' ? [] : ['console.log', 'console.debug', 'console.error']
	}
});
