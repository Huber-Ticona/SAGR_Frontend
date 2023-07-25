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
	() => import('./nodes/10')
];

export const server_loads = [0,2];

export const dictionary = {
		"/": [3],
		"/(authed)/documentos/[tipo_doc]/[...extra_slug]": [4,[2]],
		"/(authed)/home": [5,[2]],
		"/(authed)/home/[...slug]": [6,[2]],
		"/(authed)/informes": [7,[2]],
		"/login": [~9],
		"/logout": [~10],
		"/(authed)/panel_clasico": [8,[2]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';