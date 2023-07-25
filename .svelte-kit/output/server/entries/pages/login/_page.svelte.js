import { c as create_ssr_component, a as subscribe, d as add_attribute } from "../../../chunks/ssr.js";
import { U as Usuario } from "../../../chunks/storable.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_Usuario;
  $$unsubscribe_Usuario = subscribe(Usuario, (value2) => value2);
  let value = "nuevo valor";
  $$unsubscribe_Usuario();
  return `<h1 data-svelte-h="svelte-ah25zo">LocalStorage Custom Store</h1> <input${add_attribute("value", value, 0)}> <button data-svelte-h="svelte-1fzeswn">Set Data</button> <button data-svelte-h="svelte-1sdh5ah">logout</button> <h2 data-svelte-h="svelte-1dt98a3">Data:</h2> <div class="container" data-svelte-h="svelte-1b5ymig"><div class="row"><div class="col"><div class="formulario"><p>Iniciar sesión</p> <form method="POST"><div class="form-group"><input type="text" class="form-control" name="usuario" placeholder="Usuario"></div> <div class="form-group"><input type="password" class="form-control" name="contra" placeholder="Contraseña"></div> <div class="col text-center"><br> <button type="submit" class="btn btn-primary">Ingresar</button></div></form></div></div></div></div> <form method="POST" data-svelte-h="svelte-19pse33"><button>log in</button></form>`;
});
export {
  Page as default
};
