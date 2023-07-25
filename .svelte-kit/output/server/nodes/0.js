import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.e3748a4a.js","_app/immutable/chunks/scheduler.3cb4159e.js","_app/immutable/chunks/index.a13ec469.js","_app/immutable/chunks/storable.8652c596.js","_app/immutable/chunks/index.c8aad9c8.js"];
export const stylesheets = [];
export const fonts = [];
