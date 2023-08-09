import { redirect } from "@sveltejs/kit";
import { obt_parametros_porteria } from "../../lib/datos";

export async function load({ cookies, url, fetch }) {
    let usuario;
    if (!cookies.get("logged_in")) {
        console.log("(authed) No existe cokie de usuario");
        usuario = null;
        throw redirect(303, `/login?redirectTo=${url.pathname}`);
    } else {
        usuario = JSON.parse(cookies.get("logged_in"));
        console.log("(authed) Cokie encontrada: ", usuario);
        console.log("(authed) nombre usuario: ", usuario.nombre);
    }
    // Verifica si ya estás en la página de inicio de sesión
    const isLoginPage = url.pathname === "/login";
    if (!usuario && isLoginPage) {
        console.log("(authed) isloginPage: ", isLoginPage);
        return { datos_usuario: null }; // No realices una redirección adicional
    }

    const parametros_porteria = await obt_parametros_porteria({ fetch });
    return {
        parametros_porteria: parametros_porteria,
        datos_usuario: usuario,
    };
}
