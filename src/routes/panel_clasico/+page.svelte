<script>
  import { onMount } from "svelte";
  import { fetchData } from "$lib/datos";
  import Panel from "../../components/Panel.svelte";
 
  let venta={ boletas: [], facturas: [], guias: [] };

  async function loadData() {
    try {
      venta = await fetchData('2023-03-06');
      console.log(venta);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }
  onMount(loadData);

  async function mostrar(event){
    const fecha = event.target.value;
    console.log('Fecha seleccionada:', fecha);
    try {
      venta = await fetchData(fecha);
      console.log(venta);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  }
</script>

<svelte:head>
  <title>Panel Clasico</title>
</svelte:head>

<div class="text-center"><input type="date" id="" name="fecha" value="2023-03-06" on:change={mostrar}></div>

<Panel venta={venta}/>

