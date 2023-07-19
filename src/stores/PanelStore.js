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
};

// Crea el store con el objeto modalData y sus valores predeterminados
export const modalData = writable(modalDataDefaults);
