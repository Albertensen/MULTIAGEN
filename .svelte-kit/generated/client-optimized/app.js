// in dev, this makes Vite inject its client as this module's first dependency,
// so that global constant replacements are installed before any other module
// (including user hooks) evaluates. In build it's inert.
import.meta.hot;




export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35'),
	() => import('./nodes/36'),
	() => import('./nodes/37'),
	() => import('./nodes/38'),
	() => import('./nodes/39'),
	() => import('./nodes/40'),
	() => import('./nodes/41'),
	() => import('./nodes/42'),
	() => import('./nodes/43'),
	() => import('./nodes/44'),
	() => import('./nodes/45'),
	() => import('./nodes/46'),
	() => import('./nodes/47'),
	() => import('./nodes/48'),
	() => import('./nodes/49'),
	() => import('./nodes/50'),
	() => import('./nodes/51'),
	() => import('./nodes/52'),
	() => import('./nodes/53'),
	() => import('./nodes/54'),
	() => import('./nodes/55')
];

export const server_loads = [];

export const dictionary = {
		"/(app)": [9,[2]],
		"/(app)/admin": [10,[2,3]],
		"/(app)/admin/analytics": [11,[2,3]],
		"/(app)/admin/analytics/[tab]": [12,[2,3]],
		"/(app)/admin/evaluations": [13,[2,3]],
		"/(app)/admin/evaluations/[tab]": [14,[2,3]],
		"/(app)/admin/functions": [15,[2,3]],
		"/(app)/admin/functions/create": [16,[2,3]],
		"/(app)/admin/functions/edit": [17,[2,3]],
		"/(app)/admin/settings": [18,[2,3]],
		"/(app)/admin/settings/[tab]": [19,[2,3]],
		"/(app)/admin/users": [20,[2,3]],
		"/(app)/admin/users/[tab]": [21,[2,3]],
		"/auth": [52],
		"/(app)/automations": [22,[2,4]],
		"/(app)/automations/[id]": [23,[2,4]],
		"/(app)/calendar": [25,[2]],
		"/(app)/channels/[id]": [26,[2]],
		"/(app)/c/[id]": [24,[2]],
		"/error": [53],
		"/(app)/folders/[folderId]": [27,[2]],
		"/(app)/home": [28,[2,5]],
		"/(app)/notes": [29,[2,6]],
		"/(app)/notes/new": [30,[2,6]],
		"/(app)/notes/[id]": [31,[2,6]],
		"/(app)/playground": [32,[2,7]],
		"/(app)/playground/completions": [33,[2,7]],
		"/(app)/playground/images": [34,[2,7]],
		"/s/[id]": [54],
		"/watch": [55],
		"/(app)/workspace": [35,[2,8]],
		"/(app)/workspace/functions/create": [36,[2,8]],
		"/(app)/workspace/knowledge": [37,[2,8]],
		"/(app)/workspace/knowledge/create": [38,[2,8]],
		"/(app)/workspace/knowledge/[id]": [39,[2,8]],
		"/(app)/workspace/models": [40,[2,8]],
		"/(app)/workspace/models/create": [41,[2,8]],
		"/(app)/workspace/models/edit": [42,[2,8]],
		"/(app)/workspace/prompts": [43,[2,8]],
		"/(app)/workspace/prompts/create": [44,[2,8]],
		"/(app)/workspace/prompts/[id]": [45,[2,8]],
		"/(app)/workspace/skills": [46,[2,8]],
		"/(app)/workspace/skills/create": [47,[2,8]],
		"/(app)/workspace/skills/edit": [48,[2,8]],
		"/(app)/workspace/tools": [49,[2,8]],
		"/(app)/workspace/tools/create": [50,[2,8]],
		"/(app)/workspace/tools/edit": [51,[2,8]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));
export const encoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.encode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';

export const get_error_template = () => import('../shared/error-template.js').then(m => m.default);