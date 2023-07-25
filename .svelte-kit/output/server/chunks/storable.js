import { w as writable } from "./index2.js";
const usuario = writable(null);
const Usuario = {
  subscribe: usuario.subscribe,
  value: () => {
    return null;
  },
  set: (n) => {
    usuario.set(n);
  }
};
export {
  Usuario as U
};
