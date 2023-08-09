import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "../../../chunks/storable.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container" data-svelte-h="svelte-1b5ymig"><div class="row"><div class="col"><div class="formulario"><p>Iniciar sesión</p> <form method="POST"><div class="form-group"><input type="text" class="form-control" name="usuario" placeholder="Usuario"></div> <div class="form-group"><input type="password" class="form-control" name="contra" placeholder="Contraseña"></div> <div class="col text-center"><br> <button type="submit" class="btn btn-primary">Ingresar</button></div></form></div></div></div></div> <form method="POST" data-svelte-h="svelte-19pse33"><button>log in</button></form> <button data-svelte-h="svelte-9s86mb">registrar cookie</button> <button data-svelte-h="svelte-pe04qn">ELIMINAR cookie</button>`;
});
export {
  Page as default
};
