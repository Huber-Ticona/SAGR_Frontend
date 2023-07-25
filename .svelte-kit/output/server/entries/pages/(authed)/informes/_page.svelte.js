import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { P as Panel } from "../../../../chunks/Panel.js";
import { M as Modal2 } from "../../../../chunks/Modal2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".btn-estadistica.svelte-1hknmkn{width:100px;border:1px solid red;border-radius:5px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let venta = { boletas: [], facturas: [], guias: [] };
  let pendienteFecha1 = "2021-01-01";
  let pendienteFecha2 = "2023-03-06";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-7zdenq_START --><script src="https://cdn.jsdelivr.net/npm/chart.js" data-svelte-h="svelte-1e9rh9h"><\/script>${$$result.title = `<title>informes</title>`, ""}<!-- HEAD_svelte-7zdenq_END -->`, ""} <div class="d-flex flex-column text-center"><div><div class="mb-2">Estadisticas <button class="btn-estadistica svelte-1hknmkn" data-svelte-h="svelte-1a0pspe">Ver</button></div> <div id="contenido-estadisticas" style="display: none;" data-svelte-h="svelte-60266g">Contenido Estadisticas...</div></div> <div><div class="mb-2">Lista Pendientes <button class="btn-estadistica svelte-1hknmkn" data-svelte-h="svelte-2ch1l6">Ver</button></div> <div id="contenido-lista-pendientes" style="display: none;">Contenido Lista Pendientes...
        <div class="box-fecha"><label for="fecha1" data-svelte-h="svelte-6px2bd">Desde:</label> <input class="input-fecha" type="date"${add_attribute("value", pendienteFecha1, 0)}> <label for="fecha2" data-svelte-h="svelte-u51idg">Hasta:</label> <input class="input-fecha" type="date"${add_attribute("value", pendienteFecha2, 0)}> <button class="btn btn-secondary" data-svelte-h="svelte-qk0hlg">Visualizar</button></div> <div id="mensaje" data-svelte-h="svelte-1cknnrv"></div> ${validate_component(Panel, "Panel").$$render($$result, { venta }, {}, {})} ${validate_component(Modal2, "Modal2").$$render(
    $$result,
    {
      parametros_porteria: data.parametros_porteria
    },
    {},
    {}
  )}</div></div> <div><div class="mb-2">Despacho Domicilio Atrasado <button class="btn-estadistica svelte-1hknmkn" data-svelte-h="svelte-1f2q7tu">Ver</button></div> <div id="contenido-despacho-atrasado" style="display: none;" data-svelte-h="svelte-f6tzhi">Contenido Despacho Domicilio Atrasado...</div></div></div> <div><h1>${escape(data.datos_usuario.nombre)}</h1> </div>`;
});
export {
  Page as default
};
