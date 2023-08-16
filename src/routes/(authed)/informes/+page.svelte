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
    <div id="contenido-lista-pendientes" style="display: none;">
        <div class="box-fecha">
          <label for="fecha1">Desde:</label>
          <input class="input-fecha" type="date" bind:value={pendienteFecha1} >
          <label for="fecha2">Hasta:</label>
          <input class="input-fecha" type="date" bind:value={pendienteFecha2} >
          <button class="btn btn-secondary" on:click={mostrar_pendientes}>Visualizar</button>
        </div>
  
        <div id="mensaje">
        </div>
        <PanelSimbologia />
        <Panel {venta} />
        <Modal2 parametros_porteria={data.parametros_porteria} usuario={data.datos_usuario}/>
  
    </div>
  </div>
  <div>

    <div class="mb-2">Despacho Domicilio Atrasado <button class="btn-estadistica" on:click={() => toggleCollapse('contenido-despacho-atrasado')}>Ver</button></div>
    <div id="contenido-despacho-atrasado" style="display: none;">
      
      <div class="box-parametros-atrasados">
        <div class="row">
          <div class="col">
            <p>Minima cantidad de Dias de atraso</p>
            <input type="number" id="rango1" min="1" value="3">
            <label for="fecha1">Dias</label>

          </div>
          <div class="col">
            <p>Maxima cantidad de Dias de atraso</p>
            <input type="number" id="rango2" min="0" value="0">
            <label for="fecha2">Dias</label>
          </div>

          <div class="col">
            <button class="btn btn-secondary" on:click={visualizar_despachos_atrasados}>Visualizar</button>
          </div>
        </div>
      </div>

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Doc</th>
              <th scope="col" id="tb-despacho-nombre-columna">Folios</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <th scope="row">Boletas <span class="badge bg-secondary">{lista_doc_atrasados.boletas.length}</span></th>
              <td>
                <div class="bol-despacho-atrasado">
                  {#each lista_doc_atrasados.boletas as item ,index}
                    <a class="btn btn-secondary mx-1 my-1" href="/documentos/boletas/{item[5]}"> {item[5]} </a>
                  {/each}
                </div>
              </td>
            </tr>

            <tr>
              <th scope="row">Facturas <span class="badge bg-secondary">{lista_doc_atrasados.facturas.length}</span></th>
              <td>
                <div class="fact-despacho-atrasado">
                  {#each lista_doc_atrasados.facturas as item ,index}
                  <a class="btn btn-secondary mx-1 my-1" href="/documentos/facturas/{item[2]}"> {item[2]} </a>
                {/each}
                </div>
              </td>

            </tr>

            <tr>
              <th scope="row">Guias <span class="badge bg-secondary">{lista_doc_atrasados.guias.length}</span></th>
              <td>
                <div class="guia-despacho-atrasado">
                  {#each lista_doc_atrasados.guias as item ,index}
                  <a class="btn btn-secondary mx-1 my-1" href="/documentos/guias/{item[0]}"> {item[0]} </a>
                  {/each}
                </div>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


<script>
  import Panel from '../../../components/Panel.svelte';
  import Modal2 from '../../../components/Modal2.svelte';
  import PanelSimbologia from '../../../components/PanelSimbologia.svelte';
  import {obt_pendientes,obt_despacho_atrasado_defecto} from '$lib/datos'
  import {formatFecha} from '$lib/tools'

  // PROPS GLOBALES
  export let data;

  function toggleCollapse(id) {
    const content = document.getElementById(id);
    content.style.display = content.style.display === "none" ? "block" : "none";
  }
  let venta={ boletas: [], facturas: [], guias: [] };
  let pendienteFecha1 = '2021-01-01';
  let pendienteFecha2 = formatFecha(new Date());
  let lista_doc_atrasados = {boletas: [], facturas: [], guias: [] }
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
  async function visualizar_despachos_atrasados(){
    console.log('visualizando atrasos...')
    try {
      lista_doc_atrasados = await obt_despacho_atrasado_defecto()
      console.log(lista_doc_atrasados)
    } catch (error) {
      console.error("Error loading data obt_todos_despachos_atrasados:", error);
    } 
  }



</script>
<style>
  .btn-estadistica{
    width: 100px;
    border-radius:5px;
  }
  a{
    text-decoration: none;
  }
</style>