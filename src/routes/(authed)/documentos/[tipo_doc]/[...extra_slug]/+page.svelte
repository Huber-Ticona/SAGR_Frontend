<script>
    import { page } from "$app/stores";
    import Tabla from '../../Tabla.svelte';
    import Modal2 from '../../../../../components/Modal2.svelte';
    import ModalExtra from '../../../../../components/ModalExtra.svelte';
    
    // PROPS GLOBALES
    export let data;
    $: tipo_doc = $page.params.tipo_doc
    let params_list = $page.params.extra_slug.split('/');
    let folio = params_list[0]
    let documentos = []
    // Obtener los argumentos de la ruta y los parámetros de la consulta
    let tipo_orden = $page.url.searchParams.get('tipo_orden')

    console.log('Tipo_orden',tipo_orden)
    console.log('Folio: ',folio)
     // Vaciar el contenido de la tabla

</script>

<div class="text-center" style="margin-top: 10px;">
    <h1>Buscador de {tipo_doc}</h1>
  </div>

{#if tipo_doc === 'ordenes'}
<div class="text-center">

    <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="dimensionado" bind:group={tipo_orden}>
        <label class="form-check-label" for="inlineRadio1">Dimensionado</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions" value="elaboracion" bind:group={tipo_orden}>
        <label class="form-check-label" for="inlineRadio2">Elaboracion</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions"  value="carpinteria" bind:group={tipo_orden}>
        <label class="form-check-label" for="inlineRadio3">Carpinteria</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="radio" name="inlineRadioOptions"  value="pallets" bind:group={tipo_orden}>
        <label class="form-check-label" for="inlineRadio3">Pallet</label>
      </div>
</div>
{/if}

{#if tipo_doc}
    <Tabla {tipo_doc} {folio} {tipo_orden} {documentos}/>
    {#if ["boletas","facturas","guias"].includes(tipo_doc)}
        <Modal2 parametros_porteria={data.parametros_porteria} usuario={data.datos_usuario}/>
    {:else}
    <ModalExtra />
    {/if}
    
{:else}
  documento no detectado.
{/if}
  