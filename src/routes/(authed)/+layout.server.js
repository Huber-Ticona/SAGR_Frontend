import { redirect } from "@sveltejs/kit";
import { obt_parametros_porteria } from "../../lib/datos";

export async function load({ cookies, url, fetch }) {
    let usuario;

    if (!cookies.get("logged_in")) {
        console.log("No existe cokie de usuario");
        usuario = null;
        throw redirect(303, `/login?redirectTo=${url.pathname}`);
    } else {
        usuario = JSON.parse(cookies.get("logged_in"));
        console.log("Cokiie encontrada: ", usuario);
        console.log("nombre usuario: ", usuario.nombre);
    }

    const parametros_porteria = await obt_parametros_porteria({ fetch });

    return {
        parametros_porteria: parametros_porteria,
        datos_usuario: usuario,
    };
}
