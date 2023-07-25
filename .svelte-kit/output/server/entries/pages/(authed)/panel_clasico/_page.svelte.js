import { c as create_ssr_component, o as onDestroy, d as add_attribute, v as validate_component } from "../../../../chunks/ssr.js";
import { P as Panel } from "../../../../chunks/Panel.js";
import { M as Modal2 } from "../../../../chunks/Modal2.js";
function formatFecha(fecha) {
  const year = fecha.getFullYear();
  const month = String(fecha.getMonth() + 1).padStart(2, "0");
  const day = String(fecha.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log("Props globales: ", data);
  let venta = { boletas: [], facturas: [], guias: [] };
  let fecha_actual = formatFecha(/* @__PURE__ */ new Date());
  let interval;
  onDestroy(() => {
    clearInterval(interval);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-14ub5w3_START -->${$$result.title = `<title>Panel Clasico</title>`, ""}<!-- HEAD_svelte-14ub5w3_END -->`, ""} <div class="text-center"><input type="date" id="" name="fecha"${add_attribute("value", fecha_actual, 0)}></div> ${validate_component(Panel, "Panel").$$render($$result, { venta }, {}, {})} ${validate_component(Modal2, "Modal2").$$render(
    $$result,
    {
      parametros_porteria: data.parametros_porteria
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
