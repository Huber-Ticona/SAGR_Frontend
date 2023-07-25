const PUBLIC_API_PROXY = "http://192.168.0.3:4500/api";
async function obt_parametros_porteria({ fetch: fetch2 }) {
  console.log("|-- Obteniendo parametros porteria ... ");
  let url = `${PUBLIC_API_PROXY}/parametros_porteria`;
  console.log("url: ", url);
  try {
    const response = await fetch2(url, { method: "post" });
    const result = await response.json();
    console.log("|-- Parametros porteria: ", result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
async function login(usuario, contra) {
  console.log("login ...", usuario, contra);
  let url = `${PUBLIC_API_PROXY}/login`;
  console.log("|------- API login ---------|");
  console.log("url: ", url);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ usuario, contra })
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
export {
  login as l,
  obt_parametros_porteria as o
};
