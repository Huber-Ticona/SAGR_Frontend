import { PUBLIC_API_PROXY } from "$env/static/public";

export async function fetchData(fecha) {
    try {
        const response = await fetch(
            PUBLIC_API_PROXY + "/obtener/docs/" + fecha,
            {
                mode: "cors",
            }
        );
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error al obtener datos del servidor.");
        throw error;
    }
}

export async function obt_item_bol_fact(tipo_doc, nro_interno) {
    try {
        const response = await fetch(
            `${PUBLIC_API_PROXY}/obt_detalle_bol_fact/${nro_interno}`,
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
            }
        );
        const result = await response.json();
        return result;
        // Aquí puedes procesar los datos obtenidos del fetch y abrir el modal

        // Rellena el contenido del modal con los datos obtenidos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
export async function obt_detalle_guia(nro_interno) {
    try {
        const response = await fetch(
            `${PUBLIC_API_PROXY}/obt_detalle_guia/${nro_interno}`,
            {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
            }
        );
        const result = await response.json();
        return result;
        // Aquí puedes procesar los datos obtenidos del fetch y abrir el modal

        // Rellena el contenido del modal con los datos obtenidos
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

export async function obt_documentos_x_folio(tipo_doc, folio) {
    console.log("|--- API DOCUMENTOS X FOLIO ----|");
    console.log(tipo_doc + " folio: " + folio);
    let base_url = `documentos/${tipo_doc}/folio/${folio}`;
    console.log(base_url);
    try {
        const response = await fetch(`${PUBLIC_API_PROXY}/${base_url}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
        });
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
export async function obt_documentos_x_fecha(tipo_doc, fecha1, fecha2) {
    console.log("|--- API DOCUMENTOS X FECHA ----|");
    console.log("doc: " + tipo_doc + " fechas: " + fecha1, " - " + fecha2);
    let base_url = `documentos/${tipo_doc}/fecha/${fecha1}/${fecha2}`;
    console.log(base_url);
    try {
        const response = await fetch(`${PUBLIC_API_PROXY}/${base_url}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
        });
        const result = await response.json();
        console.log(typeof result);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

export async function actualizar_retiro(tipo_doc, interno, new_data) {
    console.log("|--- API actualizar retiro ----|");
    console.log("doc: " + tipo_doc + " | interno: " + interno);
    let base_url = "";

    if (tipo_doc == "boleta" || tipo_doc == "factura") {
        base_url = `${PUBLIC_API_PROXY}/actualizar/nota_venta/item`;
    } else if (tipo_doc == "guia") {
        base_url = `${PUBLIC_API_PROXY}/actualizar/guia/item`;
    }
    console.log(base_url);

    try {
        const response = await fetch(base_url, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_data),
        });

        const result = await response.json();
        //console.log(result);
        return result;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}

/* FUNCIONES ESTADISTICAS */
export async function obt_pendientes(fecha1, fecha2) {
    let url = `${PUBLIC_API_PROXY}/estadisticas/pendientes/${fecha1}/${fecha2}`;
    console.log("|------- API PENDIENTES ---------|");
    console.log("url: ", url);
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

/* PARAMETROS PORTERIA */
export async function obt_parametros_porteria({ fetch }) {
    console.log("|-- Obteniendo parametros porteria ... ");
    let url = `${PUBLIC_API_PROXY}/parametros_porteria`;
    console.log("url: ", url);
    try {
        const response = await fetch(url, { method: "post" });
        const result = await response.json();
        console.log("|-- Parametros porteria: ", result);
        return result;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}

export async function registrar_observaciones(
    observaciones,
    nueva_observacion,
    tipo_doc,
    interno
) {
    console.log("|--- API actualizar OBSERVACION ----|");
    console.log("observaciones: ", observaciones);
    console.log("Nuevba obs: " + nueva_observacion);
    console.log("tipo_doc | interno : " + tipo_doc + " | " + interno);
    let lista = observaciones;
    lista.push(nueva_observacion);
    console.log("Nueva LISTA: ", lista);
    let base_url = `${PUBLIC_API_PROXY}/registrar_observacion`;

    console.log(base_url);

    const new_data = {
        tipo_doc: tipo_doc,
        interno: interno,
        lista: JSON.stringify(lista),
    };
    console.log(new_data);

    try {
        const response = await fetch(base_url, {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(new_data),
        });

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
}
