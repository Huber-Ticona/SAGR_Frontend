import { c as create_ssr_component, e as escape, b as each, d as add_attribute, a as subscribe, v as validate_component } from "./ssr.js";
import { w as writable } from "./index2.js";
const modalDataDefaults = {
  tipo_doc: "",
  folio: 0,
  interno: 0,
  total: 0,
  vinculaciones: {},
  historial_retiros: [],
  observacion: {},
  detalle: [],
  vendedor: "",
  revisor: "",
  fecha: "",
  extra_data: ["Ninguno", 0]
};
const modalData = writable(modalDataDefaults);
const BotonVenta_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".boton_panel.svelte-awptwe{border:1px solid purple;width:100px;height:50px;margin:5px 2px;padding:0 0;cursor:pointer;font-size:18px;font-family:'Times New Roman', Times, serif;letter-spacing:5px;background:var(--color)}.content-box.svelte-awptwe{width:auto;height:auto;margin-left:auto;margin-right:auto}.badge_box.svelte-awptwe{width:100%;height:15px;border:1px solid red;display:flex}.circle_credito.svelte-awptwe{height:11px;width:11px;background:linear-gradient(to bottom, #ff0000 0%, #333300 100%);border-radius:50%;display:inline-block;margin-right:5px;margin-left:5px}.circle_orden.svelte-awptwe{height:11px;width:11px;background:linear-gradient(to bottom, #00ff00 0%, #003300 100%);border-radius:50%;display:inline-block;margin-right:5px;margin-left:5px}.circle_guia.svelte-awptwe{height:11px;width:11px;background:linear-gradient(to bottom, #ffff00 0%, #996600 100%);border-radius:50%;display:inline-block;margin-right:5px;margin-left:5px}.circle_doc.svelte-awptwe{height:11px;width:11px;background:linear-gradient(to bottom, #0000ff 0%, #000066  100%);border-radius:50%;display:inline-block;margin-right:5px;margin-left:5px}.circle_brown.svelte-awptwe{height:11px;width:11px;background:linear-gradient(to bottom, #ff9933  0%, #ff0066   100%);border-radius:50%;display:inline-block;margin-right:5px;margin-left:5px}.circle_obs.svelte-awptwe{height:11px;width:11px;background:linear-gradient(to bottom, #5a5551  0%, #e70fe3   100%);border-radius:50%;display:inline-block;margin-right:5px;margin-left:5px}",
  map: null
};
function getColor(status) {
  if (status == "COMPLETO") {
    return "linear-gradient(to bottom, #ff0000 0%, #ff6600 100%)";
  } else if (status == "INCOMPLETO") {
    return "linear-gradient(to bottom, #ffff00 0%, #ffff66 100%)";
  } else if (status == "NO RETIRADO") {
    return "linear-gradient(to top, #00ff00 0%, #99ff33 100%)";
  }
}
const BotonVenta = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tipo_doc } = $$props;
  let { folio } = $$props;
  let { interno } = $$props;
  let { vinculaciones } = $$props;
  let { historial_retiros } = $$props;
  let { observacion } = $$props;
  let { estado_retiro } = $$props;
  let { despacho } = $$props;
  let { revisor } = $$props;
  let { vendedor } = $$props;
  let { total } = $$props;
  let { fecha } = $$props;
  let { extra_data } = $$props;
  if ($$props.tipo_doc === void 0 && $$bindings.tipo_doc && tipo_doc !== void 0)
    $$bindings.tipo_doc(tipo_doc);
  if ($$props.folio === void 0 && $$bindings.folio && folio !== void 0)
    $$bindings.folio(folio);
  if ($$props.interno === void 0 && $$bindings.interno && interno !== void 0)
    $$bindings.interno(interno);
  if ($$props.vinculaciones === void 0 && $$bindings.vinculaciones && vinculaciones !== void 0)
    $$bindings.vinculaciones(vinculaciones);
  if ($$props.historial_retiros === void 0 && $$bindings.historial_retiros && historial_retiros !== void 0)
    $$bindings.historial_retiros(historial_retiros);
  if ($$props.observacion === void 0 && $$bindings.observacion && observacion !== void 0)
    $$bindings.observacion(observacion);
  if ($$props.estado_retiro === void 0 && $$bindings.estado_retiro && estado_retiro !== void 0)
    $$bindings.estado_retiro(estado_retiro);
  if ($$props.despacho === void 0 && $$bindings.despacho && despacho !== void 0)
    $$bindings.despacho(despacho);
  if ($$props.revisor === void 0 && $$bindings.revisor && revisor !== void 0)
    $$bindings.revisor(revisor);
  if ($$props.vendedor === void 0 && $$bindings.vendedor && vendedor !== void 0)
    $$bindings.vendedor(vendedor);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.fecha === void 0 && $$bindings.fecha && fecha !== void 0)
    $$bindings.fecha(fecha);
  if ($$props.extra_data === void 0 && $$bindings.extra_data && extra_data !== void 0)
    $$bindings.extra_data(extra_data);
  $$result.css.add(css$1);
  return `<button data-bs-toggle="modal" data-bs-target="#exampleModal" class="boton_panel svelte-awptwe" style="${"--color:" + escape(getColor(estado_retiro), true)}"><div class="content-box svelte-awptwe">${escape(folio)}</div>  <div class="badge_box svelte-awptwe" id="">${vinculaciones ? `${vinculaciones.ordenes ? `<span class="circle_orden svelte-awptwe"></span>` : ``} ${vinculaciones.guias ? `<span class="circle_guia svelte-awptwe"></span>` : ``} ${vinculaciones.creditos ? `<span class="circle_credito svelte-awptwe"></span>` : ``} ${vinculaciones.observacion ? `<span class="circle_obs svelte-awptwe"></span>` : ``}` : ``}  ${despacho == "SI" ? `<span class="circle_brown svelte-awptwe"></span>` : ``} ${tipo_doc == "guia" && (extra_data[0] == "BOLETA" || extra_data[0] == "FACTURA") ? `<span class="circle_doc svelte-awptwe"></span>` : ``} </div> </button>`;
});
function linkOrden(orden) {
  let aux;
  if (orden == "dimensionado") {
    aux = orden.slice(0, 3);
  } else {
    aux = orden.slice(0, 4);
  }
  return aux;
}
const ModalList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { vinculaciones } = $$props;
  let { historial_retiros } = $$props;
  let { observacion } = $$props;
  let { extra_data } = $$props;
  let { parametros_porteria } = $$props;
  let { tipo_doc } = $$props;
  let { interno } = $$props;
  if ($$props.vinculaciones === void 0 && $$bindings.vinculaciones && vinculaciones !== void 0)
    $$bindings.vinculaciones(vinculaciones);
  if ($$props.historial_retiros === void 0 && $$bindings.historial_retiros && historial_retiros !== void 0)
    $$bindings.historial_retiros(historial_retiros);
  if ($$props.observacion === void 0 && $$bindings.observacion && observacion !== void 0)
    $$bindings.observacion(observacion);
  if ($$props.extra_data === void 0 && $$bindings.extra_data && extra_data !== void 0)
    $$bindings.extra_data(extra_data);
  if ($$props.parametros_porteria === void 0 && $$bindings.parametros_porteria && parametros_porteria !== void 0)
    $$bindings.parametros_porteria(parametros_porteria);
  if ($$props.tipo_doc === void 0 && $$bindings.tipo_doc && tipo_doc !== void 0)
    $$bindings.tipo_doc(tipo_doc);
  if ($$props.interno === void 0 && $$bindings.interno && interno !== void 0)
    $$bindings.interno(interno);
  return `<div class="accordion accordion-flush p-0 m-0" id="accordionFlushExample" style="border: 1px solid red;"><div class="accordion-item p-0 m-0"><h2 class="accordion-header" id="flush-headingOne" data-svelte-h="svelte-1lc6md7"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">Vinculos</button></h2> <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body">${vinculaciones ? `${vinculaciones.ordenes ? `<div>ORDENES: 
                    ${each(vinculaciones.ordenes, (orden) => {
    return `<a class="btn btn-light" data-sveltekit-reload href="${"/documentos/ordenes/" + escape(linkOrden(JSON.parse(orden).tipo), true) + "/" + escape(JSON.parse(orden).folio, true)}">${escape(linkOrden(JSON.parse(orden).tipo))}_${escape(JSON.parse(orden).folio)} </a>`;
  })}</div>` : ``} ${vinculaciones.guias ? `<div>Guias:
                    ${each(vinculaciones.guias, (guia) => {
    return `<a class="btn btn-secondary" data-sveltekit-reload href="${"/documentos/guias/" + escape(guia, true)}">${escape(guia)}</a>`;
  })}</div>` : ``}` : ``}  ${extra_data[0] == "BOLETA" ? `<div>BOLETA : <a data-sveltekit-reload href="${"/documentos/boletas/" + escape(extra_data[1], true)}" class="btn btn-secondary">${escape(extra_data[1])}</a></div>` : ``} ${extra_data[0] == "FACTURA" ? `<div>FACTURA : <a data-sveltekit-reload href="${"/documentos/facturas/" + escape(extra_data[1], true)}" class="btn btn-secondary">${escape(extra_data[1])}</a></div>` : ``}</div></div></div> <div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo" data-svelte-h="svelte-1v0r6bx"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">Historial retiros</button></h2> <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><div class="accordion-body">${historial_retiros ? `<div class="accordion" id="">${each(historial_retiros, (registro, j) => {
    return `<div class="accordion-item"><h2 class="accordion-header" id="panelsStayOpen-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="${"#item-" + escape(j, true)}">Fecha: ${escape(JSON.parse(registro).fecha)} | Revisor: ${escape(JSON.parse(registro).revisor)} </button></h2> <div id="${"item-" + escape(j, true)}" class="accordion-collapse collapse"><table id=""><thead data-svelte-h="svelte-778pov"><tr><th class="th_h">Descripcion</th> <th class="th_h">Antes</th> <th class="th_h">Despues</th> </tr></thead> <tbody>${each(JSON.parse(registro).antes, (fila, i) => {
      return `<tr><td class="th_h">${escape(JSON.parse(registro).descripciones[i])}</td> <td class="th_h">${escape(JSON.parse(registro).antes[i])}</td> <td class="th_h">${escape(JSON.parse(registro).despues[i])}</td> </tr>`;
    })}</tbody> </table></div> </div>`;
  })}</div>` : `Sin historial`}</div></div> <div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree" data-svelte-h="svelte-3np6yj"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">Observacion</button></h2> <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><div class="accordion-body"><div style="border: 1px solid red;"><div style="border: 1px solid green; margin:2px 2px;">${observacion ? `${Array.isArray(observacion) ? `${each(observacion, (obs) => {
    return `<div>${escape(obs)}<button class="btn bg-none border border-lg" data-svelte-h="svelte-1ew0vz1"><i class="fas fa-trash"></i></button></div>`;
  })}` : ``}` : `Sin obs`}</div> <div class="d-flex " style="border: 1px solid blue;margin:2px 2px;"><strong data-svelte-h="svelte-suw9kq">Nueva Observacion:</strong> <select class="form-select form-select-sm" name="" id=""><option value="" data-svelte-h="svelte-s44g6z">Seleccione una Observacion...</option>${each(parametros_porteria, (parametro) => {
    return `<option${add_attribute("value", parametro, 0)}>${escape(parametro)}</option>`;
  })}</select> <button class="btn border border-lg bg-none" data-svelte-h="svelte-jt3wra">Registrar</button></div></div></div></div></div></div></div>`;
});
const Modal2_svelte_svelte_type_style_lang = "";
const css = {
  code: "input[type=number].svelte-whggv2::-webkit-inner-spin-button,input[type=number].svelte-whggv2::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number].svelte-whggv2{-moz-appearance:textfield}",
  map: null
};
const Modal2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $modalData, $$unsubscribe_modalData;
  $$unsubscribe_modalData = subscribe(modalData, (value) => $modalData = value);
  let { parametros_porteria } = $$props;
  let LocalModalData;
  if ($$props.parametros_porteria === void 0 && $$bindings.parametros_porteria && parametros_porteria !== void 0)
    $$bindings.parametros_porteria(parametros_porteria);
  $$result.css.add(css);
  {
    {
      LocalModalData = $modalData;
      $modalData ? JSON.parse(JSON.stringify($modalData.detalle)) : null;
      console.log("Inicializando localmodaldata y auxdetalle.");
    }
  }
  $$unsubscribe_modalData();
  return ` <div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog modal-dialog-scrollable"><div class="modal-content"><div class="modal-header" style="border:1px solid red;"><div><h5 class="modal-title" id="exampleModalLabel">${escape(LocalModalData.tipo_doc)}: ${escape(LocalModalData.folio)}</h5> <small>Interno: ${escape(LocalModalData.interno)} | Fecha: ${escape(LocalModalData.fecha)}</small></div> <button type="button" class="btn btn-secondary mx-2" data-svelte-h="svelte-15i85dp">Dar de Baja</button> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> <div class="modal-body"><div class="container-fluid"><table class="table"><thead data-svelte-h="svelte-7vp1jd"><tr><th scope="col-6">Descripción</th> <th scope="col-2">Cantidad</th> <th scope="col-4">Cantidad retirada</th></tr></thead> <tbody>${each(LocalModalData.detalle, (item, index) => {
    return `<tr><td>${escape(item[0])}</td> <td>${escape(item[1])}</td> <td><div class="d-flex flex-row"><button class="btn btn-light" data-svelte-h="svelte-qk4ng0">-</button> <input class="form-control w-50 svelte-whggv2" type="number"${add_attribute("value", LocalModalData.detalle[index][2], 0)}> <button class="btn btn-light" data-svelte-h="svelte-1rfs1sy">+</button> </div></td> </tr>`;
  })}</tbody></table></div> ${validate_component(ModalList, "ModalList").$$render(
    $$result,
    {
      extra_data: LocalModalData.extra_data,
      vinculaciones: LocalModalData.vinculaciones,
      historial_retiros: LocalModalData.historial_retiros,
      observacion: LocalModalData.observacion,
      parametros_porteria,
      tipo_doc: LocalModalData.tipo_doc,
      interno: LocalModalData.interno
    },
    {},
    {}
  )}</div> <div class="modal-footer justify-content-between" style="border:1px solid red;"><div style="border:1px solid blue; margin: 2px 2px;"><p>Vendedor: ${escape(LocalModalData.vendedor)}</p> <p>Revisor: ${escape(LocalModalData.revisor)}</p></div> <button type="button" class="btn btn-secondary" data-svelte-h="svelte-1iwr6lm">Guardar Cambios</button></div></div></div> </div>`;
});
export {
  BotonVenta as B,
  Modal2 as M
};
