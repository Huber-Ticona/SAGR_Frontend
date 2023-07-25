import { redirect } from "@sveltejs/kit";

export async function load({ cookies, url, fetch }) {
    let usuario;

    if (!cookies.get("logged_in")) {
        console.log("|--(Root Layout) No existe cokie de usuario");
        usuario = null;
        //throw redirect(303, `/login?redirectTo=${url.pathname}`);
    } else {
        usuario = JSON.parse(cookies.get("logged_in"));
        console.log("|--(Root Layout) Cokiie encontrada: ", usuario);
        console.log("|--(Root Layout) nombre usuario: ", usuario.nombre);
    }

    return {
        datos_usuario: usuario,
    };
}
