import { writable } from "svelte/store";

// Objeto con los valores predeterminados para modalData
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
    extra_data: ["Ninguno", 0],
    monto_total: 0,
};

// Crea el store con el objeto modalData y sus valores predeterminados
export const modalData = writable(modalDataDefaults);

const modalExtraDataDefault = {
    documento: "",
    folio: 0,
    fecha: "",
    detalle: {},
    vinculaciones: {},
    monto_total: 0,
};
export const modalExtraData = writable(modalExtraDataDefault);
