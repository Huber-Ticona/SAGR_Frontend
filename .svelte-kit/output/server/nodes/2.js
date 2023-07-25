import * as server from '../entries/pages/(authed)/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(authed)/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/(authed)/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.7f870350.js","_app/immutable/chunks/scheduler.3cb4159e.js","_app/immutable/chunks/index.a13ec469.js"];
export const stylesheets = [];
export const fonts = [];
