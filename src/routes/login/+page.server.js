import { redirect } from "@sveltejs/kit";
import { login } from "../../lib/datos";
export const actions = {
    default: async ({ request, cookies, url }) => {
        const form = await request.formData();
        const usuario = form.get("usuario");
        const contra = form.get("contra");
        if (usuario === "" || contra === "") {
            console.log("Datos vacios. Ingrese datos del login.");
            throw redirect(303, "/login");
        } else {
            console.log(usuario + " | " + contra);
        }

        const user = {
            id: 1,
            nombre: "huber",
            rol: "admin",
        };

        const result = await login(usuario, contra);
        if (result.success) {
            console.log("|--- Exito al iniciar sesion.");
            cookies.set("logged_in", JSON.stringify(result.datos_usuario), {
                path: "/",
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7, // one week
            });
            throw redirect(303, url.searchParams.get("redirectTo") ?? "/");
        } else {
            throw redirect(303, "/login");
        }
    },
};
