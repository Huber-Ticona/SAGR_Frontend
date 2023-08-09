import "../../chunks/index.js";
import "dotenv/config";
console.log("URL API: ", process.env.PUBLIC_API_PROXY);
console.log("ORIGIN: ", process.env.PUBLIC_ORIGIN);
async function load({ cookies, url, fetch }) {
  let usuario;
  if (!cookies.get("logged_in")) {
    console.log("|--(Root Layout) No existe cokie de usuario");
    usuario = null;
  } else {
    usuario = JSON.parse(cookies.get("logged_in"));
    console.log("|--(Root Layout) Cokie encontrada: ", usuario);
    console.log("|--(Root Layout) nombre usuario: ", usuario.nombre);
  }
  return {
    datos_usuario: usuario
  };
}
export {
  load
};
