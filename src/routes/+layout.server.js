import { redirect } from "@sveltejs/kit";
import { PUBLIC_API_PROXY, PUBLIC_ORIGIN } from "$env/static/public";
import "dotenv/config";

// Accede a las variables de entorno en tiempo de ejecución usando process.env
console.log("URL API: ", process.env.PUBLIC_API_PROXY);
console.log("ORIGIN: ", process.env.PUBLIC_ORIGIN);

export async function load({ cookies, url, fetch }) {
    let usuario;

    if (!cookies.get("logged_in")) {
        console.log("|--(Root Layout) No existe cokie de usuario");
        usuario = null;
        //throw redirect(303, `/login?redirectTo=${url.pathname}`);
    } else {
        usuario = JSON.parse(cookies.get("logged_in"));
        console.log("|--(Root Layout) Cokie encontrada: ", usuario);
        console.log("|--(Root Layout) nombre usuario: ", usuario.nombre);
    }
    return {
        datos_usuario: usuario,
    };
}
