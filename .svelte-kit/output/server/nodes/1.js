

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b71fbd66.js","_app/immutable/chunks/scheduler.3cb4159e.js","_app/immutable/chunks/index.a13ec469.js","_app/immutable/chunks/stores.1035636c.js","_app/immutable/chunks/singletons.2e63ba45.js","_app/immutable/chunks/index.c8aad9c8.js"];
export const stylesheets = [];
export const fonts = [];