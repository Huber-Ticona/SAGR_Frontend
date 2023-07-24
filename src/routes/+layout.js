import { obt_parametros_porteria } from "../lib/datos";

/** @type {import('./$types').LayoutServerLoad} */
export async function load({ fetch }) {
    const parametros_porteria = await obt_parametros_porteria({ fetch });

    return {
        parametros_porteria: parametros_porteria,
    };
}

/* import { obt_parametros_porteria } from "../lib/datos";
import { PUBLIC_API_PROXY } from "$env/static/public";
/** @type {import('./$types').LayoutServerLoad} 
export async function load({ fetch }) {
    const url = `${PUBLIC_API_PROXY}/parametros_porteria`;
    const response = await fetch(url, { method: "post" });
    const result = await response.json();
    return {
        parametros_porteria: result,
    };
} */
