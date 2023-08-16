<script>
  import { onMount, onDestroy } from "svelte";
  import { fetchData , obt_despacho_atrasado_defecto} from "$lib/datos";
  import { formatFecha } from "$lib/tools";
  import Panel from "../../../components/Panel.svelte";
  import Modal2 from "../../../components/Modal2.svelte";
  import PanelSimbologia from "../../../components/PanelSimbologia.svelte";
  // PROPS GLOBALES
  export let data;
  console.log('Props globales: ',data)

  let venta= { boletas: [], facturas: [], guias: [] };
  let atrasados = {  boletas: [], facturas: [], guias: [] }
  let fecha_actual = formatFecha(new Date())
  // Función para formatear la fecha en el formato "YYYY-MM-DD"
  
  async function loadData(fecha) {
    try {
      venta = await fetchData(fecha);
      
    } catch (error) {
      console.error("Error loading data.");
    }
  }
  async function obt_despachos_atrasados(fecha) {
    try {
      atrasados = await obt_despacho_atrasado_defecto(fecha);
      console.log("atrasados: ", atrasados)
    } catch (error) {
      console.error("Error loading data.");
    }
  }
  async function mostrar(event){
      const fecha = event.target.value;
      fecha_actual = fecha;
      console.log('Fecha seleccionada:', fecha);
      console.log('Fecha actual:', fecha_actual);
      try {
        venta = await fetchData(fecha);
        console.log(venta);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    }
 // Obtener los datos al iniciar el componente solo en el cliente
 let interval;
 onMount(() => {
    loadData(fecha_actual);
    obt_despachos_atrasados();
    // Actualizar los datos cada 3 segundos solo en el cliente
    interval = setInterval(() => {
      loadData(fecha_actual);
    }, 3000);
  });

  // Limpiar el intervalo cuando el componente se desmonte
  onDestroy(() => {
    clearInterval(interval);
  });

  
</script>
<svelte:head>
  <title>Panel Clasico</title>
</svelte:head>

  <div class="d-flex flex-row ">
      <div class="border mx-1">Despachos atrasados: </div>
      <div class="border mx-1">Boleta  <span class="badge bg-secondary">{atrasados.boletas.length}</span></div>
      <div class="border mx-1">Factura <span class="badge bg-secondary">{atrasados.facturas.length}</span></div>
      <div class="border mx-1">Guia <span class="badge bg-secondary">{atrasados.guias.length}</span></div>
      <a class="btn bg-none border btn-sm mx-1" href="/informes">Revisar</a>
  </div>
<div class="text-center"><input type="date" id="" name="fecha" value={fecha_actual} on:change={mostrar}></div>

<PanelSimbologia />

<Panel venta={venta}/>

<Modal2 parametros_porteria={data.parametros_porteria} usuario={data.datos_usuario}/>