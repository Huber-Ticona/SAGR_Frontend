
<script>
    import BotonVenta from '../../../components/BotonVenta.svelte';
    export let documentos;
    export let tipo_doc;
</script>
<!-- 
    interno,vendedor,folio,monto_total,nro_boleta,nombre,vinculaciones,adjuntos,estado_retiro,revisor,despacho,fecha,historial_retiro

    nro_boleta,fecha,interno,'Cliente Boleta',vendedor,vinculaciones,estado_retiro,revisor,despacho,historial_retiro -->
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
             />
        {:else}
        <button>detalle</button>
        {/if}
        
    </td><!-- Detalle -->
    <td>{item[4]}</td><!-- Vendedor -->
</tr>
{/each}

