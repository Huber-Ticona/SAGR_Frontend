

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.3b526450.js","_app/immutable/chunks/scheduler.3cb4159e.js","_app/immutable/chunks/index.a13ec469.js"];
export const stylesheets = [];
export const fonts = [];
