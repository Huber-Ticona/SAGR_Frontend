import { c as create_ssr_component, a as subscribe, e as escape, b as each } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let slug = $page.params;
  console.log(slug);
  let subrutas = Array.isArray(slug) ? slug : [];
  let ultimaSubruta = subrutas[subrutas.length - 1];
  $$unsubscribe_page();
  return `<div><h1>Ruta actual: ${escape($page.path)}</h1> ${subrutas.length > 0 ? `<h2 data-svelte-h="svelte-12hmyep">Subrutas:</h2> <ul>${each(subrutas, (subruta) => {
    return `<li>${escape(subruta)}</li>`;
  })}</ul> <p>Última subruta: ${escape(ultimaSubruta)}</p>` : `<p data-svelte-h="svelte-29xzqe">No hay subrutas</p>`}</div>`;
});
export {
  Page as default
};
