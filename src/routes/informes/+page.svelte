<svelte:head>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <title>informes</title>
</svelte:head>



<div class="d-flex flex-column text-center">
  <div>
    <div class="mb-2">Estadisticas <button class="btn-estadistica" on:click={() => toggleCollapse('contenido-estadisticas')}>Ver</button></div>
    <div id="contenido-estadisticas" style="display: none;">Contenido Estadisticas...</div>
  </div>

  <div>
    <div class="mb-2">Lista Pendientes <button class="btn-estadistica" on:click={() => toggleCollapse('contenido-lista-pendientes')}>Ver</button></div>
    <div id="contenido-lista-pendientes" style="display: none;">Contenido Lista Pendientes...
        <div class="box-fecha">
          <label for="fecha1">Desde:</label>
          <input class="input-fecha" type="date" bind:value={pendienteFecha1} >
          <label for="fecha2">Hasta:</label>
          <input class="input-fecha" type="date" bind:value={pendienteFecha2} >
          <button class="btn btn-secondary" on:click={mostrar_pendientes}>Visualizar</button>
        </div>
  
        <div id="mensaje">
        </div>
        <Panel {venta} />
  
    </div>
  </div>
  <div>

    <div class="mb-2">Despacho Domicilio Atrasado <button class="btn-estadistica" on:click={() => toggleCollapse('contenido-despacho-atrasado')}>Ver</button></div>
    <div id="contenido-despacho-atrasado" style="display: none;">Contenido Despacho Domicilio Atrasado...</div>
  </div>
</div>

<script>
  import Panel from '../../components/Panel.svelte';
   import {obt_pendientes} from '../../lib/datos'

  function toggleCollapse(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "none" ? "block" : "none";
  }
  let venta={ boletas: [], facturas: [], guias: [] };
  let pendienteFecha1 = '2021-01-01';
  let pendienteFecha2 = '2023-03-06';

  async function mostrar_pendientes(){
    //const fecha = event.target.value;
    console.log('Fechas seleccionada:', pendienteFecha1 , pendienteFecha2);
    try {
      venta = await obt_pendientes(pendienteFecha1,pendienteFecha2)
    console.log(venta)
    } catch (error) {
      console.error("Error loading data:", error);
    } 
  }

</script>
<style>
  .btn-estadistica{
    width: 100px;
    border: 1px solid red;
    border-radius:5px;
  }
</style>