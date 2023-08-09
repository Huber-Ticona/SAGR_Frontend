import { r as redirect } from "../../../chunks/index.js";
import { o as obt_parametros_porteria } from "../../../chunks/datos.js";
async function load({ cookies, url, fetch }) {
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
  const isLoginPage = url.pathname === "/login";
  if (!usuario && isLoginPage) {
    console.log("(authed) isloginPage: ", isLoginPage);
    return { datos_usuario: null };
  }
  const parametros_porteria = await obt_parametros_porteria({ fetch });
  return {
    parametros_porteria,
    datos_usuario: usuario
  };
}
export {
  load
};
