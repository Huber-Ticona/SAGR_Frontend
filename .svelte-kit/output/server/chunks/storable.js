import { w as writable } from "./index2.js";
const usuario = writable(null);
({
  subscribe: usuario.subscribe,
  value: () => {
    return null;
  },
  set: (n) => {
    usuario.set(n);
  }
});
