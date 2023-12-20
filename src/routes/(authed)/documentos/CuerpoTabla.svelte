
<script>
    import BotonVenta from '../../../components/BotonVenta.svelte';
    import {modalExtraData} from '../../../stores/PanelStore'
    export let documentos;
    export let tipo_doc;
    export let tipo_orden;
    $: if (tipo_doc) {
        console.log('Actualizando cuerpo-tabla...')
        documentos = [];
    }
    let new_modalExtraData = {
        documento : '',
        folio: 0,
        fecha : '',
        detalle: {},
        monto_total : 0
    }

    function enviar_datos_modal(doc,folio,fecha,detalle,item){
        console.log('enviando datos modal ...')
        new_modalExtraData.documento = doc === 'ordenes' ? tipo_orden : doc
        new_modalExtraData.folio = folio
        new_modalExtraData.fecha = fecha
        new_modalExtraData.detalle = JSON.parse(detalle)
        new_modalExtraData.vinculaciones = tipo_doc === 'ordenes' ? [ item[6],  item[7]] : [JSON.parse(item[4]).tipo_doc , JSON.parse(item[4]).doc_ref ]
        new_modalExtraData.monto_total = tipo_doc === 'creditos' ? JSON.parse(detalle).monto_final : 0
        console.log("new_modal_extra: ",new_modalExtraData)
        modalExtraData.set(new_modalExtraData)
    }
</script>
<!-- 
    interno,vendedor,folio,monto_total,nro_boleta,nombre,vinculaciones,adjuntos,estado_retiro,revisor,despacho,fecha,historial_retiro

    nro_boleta,fecha,interno,'Cliente Boleta',vendedor,vinculaciones,estado_retiro,revisor,despacho,historial_retiro -->

    <!-- Ordenes 
    nro_orden,fecha_orden,telefono,nombre,detalle, JSON_EXTRACT(detalle, '$.creado_por'),despacho,JSON_EXTRACT(extra, '$.estado'),tipo_doc ,nro_doc
-->
<!-- creditos
    folio,fecha,interno,nombre,detalle
 -->
    
{#each documentos as item,i }
<tr>
    <td>{item[0]}</td><!-- folio -->
    <td>{item[1]}</td><!-- fecha -->
    <td>{item[2]}</td><!-- interno -->
    <td>{item[3]}</td><!-- cliente -->
    <td>
        {#if ["boletas", "facturas", "guias"].includes(tipo_doc)}
        <BotonVenta 
        tipo_doc={tipo_doc.slice(0, -1)}
        folio = {item[0]}
        interno = {item[2]}
        vinculaciones = {item[5] === null ? null :JSON.parse(item[5])}
        historial_retiros = {item[9] === null ? null : JSON.parse(item[9]).lista_historial}
        observacion = {item[5] === null ? null :JSON.parse(item[5]).observacion}
        estado_retiro = {tipo_doc === 'guias' ? item[6].replace(/^"(.*)"$/, '$1')  :  item[6]}
        despacho = {item[8]}
        vendedor = {item[4]}
        revisor = {item[7]}
        total = {0} 
        fecha = {item[1]}
        extra_data = {tipo_doc === 'guias' ? [ item[10].replace(/^"(.*)"$/, '$1') , item[11] ] :   [ "NINGUNO" , 0] }
        monto_total = {tipo_doc === 'guias' ? JSON.parse(item[12]).monto_final  :  item[10] }
             />
        {:else}
        <button class="boton_panel" data-bs-toggle="modal" data-bs-target="#ModalExtra" 
        on:click={enviar_datos_modal(
            tipo_doc,
            item[0],
            item[1],
            item[4],
            item,
            )
            }>Detalle</button>
        {/if}
        
    </td><!-- Detalle -->
    <td>{["boletas","facturas","guias"].includes(tipo_doc) ? item[4] : item[5] }</td><!-- Vendedor -->
</tr>
{/each}

<style>
    .boton_panel{
    border:1px solid purple;
    width: 100px;
    height: 50px;
    margin: 5px 2px;
    padding: 0 0;
    cursor: pointer;
    font-size: 18px;
    font-family: 'Times New Roman', Times, serif;
    letter-spacing: 5px;
    /*background: linear-gradient(to top, #00ff00 0%, #99ff33 100%);*/
}
</style>