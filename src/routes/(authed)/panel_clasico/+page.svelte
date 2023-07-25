<script>
  import { onMount, onDestroy } from "svelte";
  import { fetchData } from "$lib/datos";
  import Panel from "../../../components/Panel.svelte";
  import Modal2 from "../../../components/Modal2.svelte";
  
  // PROPS GLOBALES
  export let data;
  console.log('Props globales: ',data)

  let venta= { boletas: [], facturas: [], guias: [] };

  let fecha_actual = formatFecha(new Date())
  // Función para formatear la fecha en el formato "YYYY-MM-DD"
  function formatFecha(fecha) {
    const year = fecha.getFullYear();
    const month = String(fecha.getMonth() + 1).padStart(2, '0');
    const day = String(fecha.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  async function loadData(fecha) {
    try {
      venta = await fetchData(fecha);
      
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
<div class="text-center"><input type="date" id="" name="fecha" value={fecha_actual} on:change={mostrar}></div>
<Panel venta={venta}/>

<Modal2 parametros_porteria={data.parametros_porteria}/>