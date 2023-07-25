import { c as create_ssr_component, b as each, e as escape, v as validate_component, d as add_attribute, a as subscribe } from "../../../../../../chunks/ssr.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { B as BotonVenta, M as Modal2 } from "../../../../../../chunks/Modal2.js";
const CuerpoTabla = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { documentos } = $$props;
  let { tipo_doc } = $$props;
  if ($$props.documentos === void 0 && $$bindings.documentos && documentos !== void 0)
    $$bindings.documentos(documentos);
  if ($$props.tipo_doc === void 0 && $$bindings.tipo_doc && tipo_doc !== void 0)
    $$bindings.tipo_doc(tipo_doc);
  return ` ${each(documentos, (item, i) => {
    return `<tr><td>${escape(item[0])}</td> <td>${escape(item[1])}</td> <td>${escape(item[2])}</td> <td>${escape(item[3])}</td> <td>${["boletas", "facturas", "guias"].includes(tipo_doc) ? `${validate_component(BotonVenta, "BotonVenta").$$render(
      $$result,
      {
        tipo_doc: tipo_doc.slice(0, -1),
        folio: item[0],
        interno: item[2],
        vinculaciones: item[5] === null ? null : JSON.parse(item[5]),
        historial_retiros: item[9] === null ? null : JSON.parse(item[9]).lista_historial,
        observacion: item[5] === null ? null : JSON.parse(item[5]).observacion,
        estado_retiro: tipo_doc === "guias" ? item[6].replace(/^"(.*)"$/, "$1") : item[6],
        despacho: item[8],
        vendedor: item[4],
        revisor: item[7],
        total: 0,
        fecha: item[1],
        extra_data: tipo_doc === "guias" ? [item[10].replace(/^"(.*)"$/, "$1"), item[11]] : ["NINGUNO", 0]
      },
      {},
      {}
    )}` : `<button data-svelte-h="svelte-1iy7b6z">detalle</button>`} </td> <td>${escape(item[4])}</td> </tr>`;
  })}`;
});
const Tabla = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tipo_doc } = $$props;
  let { folio = 0 } = $$props;
  let { folio2 = 0 } = $$props;
  let fecha1 = "2023-03-06";
  let fecha2 = "2023-03-06";
  let documentos = [];
  if ($$props.tipo_doc === void 0 && $$bindings.tipo_doc && tipo_doc !== void 0)
    $$bindings.tipo_doc(tipo_doc);
  if ($$props.folio === void 0 && $$bindings.folio && folio !== void 0)
    $$bindings.folio(folio);
  if ($$props.folio2 === void 0 && $$bindings.folio2 && folio2 !== void 0)
    $$bindings.folio2(folio2);
  return `<div class="table-responsive"><table class="table table-bordered"><thead data-svelte-h="svelte-17f8ama"><tr><th scope="col" class="text-center">Nro Folio</th> <th scope="col" class="text-center">Fecha</th> <th scope="col" class="text-center">Nro Interno</th> <th scope="col" class="text-center">Cliente</th> <th scope="col" class="text-center">Detalle</th> <th scope="col" class="text-center">Vendedor</th></tr></thead> <tr><td class="text-center"><div><input type="number"${add_attribute("value", tipo_doc === "ordenes" ? folio2 : folio, 0)} id="folio"> <button class="btn btn-secondary" data-svelte-h="svelte-177v4rp">Buscar</button></div></td> <td class="text-center"><div class="d-flex flex-column justify-items-center"><input type="date"${add_attribute("value", fecha1, 0)}> <input type="date"${add_attribute("value", fecha2, 0)}> <button class="btn btn-secondary" style="width: 100px;" data-svelte-h="svelte-10qwgor">Buscar</button></div></td> <td class="text-center" data-svelte-h="svelte-1kfiqn4"><div><input type="number" disabled><button class="btn btn-secondary" disabled>Buscar</button></div></td> <td class="text-center" data-svelte-h="svelte-jgz5ga"><div><input type="text"><button class="btn btn-secondary">Buscar</button></div></td> <td class="text-center" data-svelte-h="svelte-84x2zi"><div><input type="number" disabled><button class="btn btn-secondary" disabled>Buscar</button></div></td> <td class="text-center" data-svelte-h="svelte-ha3c5g"><div><input type="number" disabled><button class="btn btn-secondary" disabled>Buscar</button></div></td></tr> <tbody id="cuerpo-tabla">${validate_component(CuerpoTabla, "CuerpoTabla").$$render($$result, { documentos, tipo_doc }, {}, {})}</tbody></table></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  console.log("extra slug");
  console.log($page.params);
  let folio2;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="text-center" style="margin-top: 10px;"><h1>Buscador de documentos:${escape($page.params.tipo_doc)}: ${escape($page.params.aux1)}</h1></div> ${validate_component(Tabla, "Tabla").$$render(
    $$result,
    {
      tipo_doc: $page.params.tipo_doc,
      folio: $page.params.aux1,
      folio2
    },
    {},
    {}
  )} ${validate_component(Modal2, "Modal2").$$render(
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
