

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authed)/home/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.a650e2ec.js","_app/immutable/chunks/scheduler.3cb4159e.js","_app/immutable/chunks/index.a13ec469.js"];
export const stylesheets = [];
export const fonts = [];
