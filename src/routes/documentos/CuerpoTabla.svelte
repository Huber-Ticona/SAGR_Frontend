
<script>
    import Modal2 from "../../components/Modal2.svelte";
    import BotonVenta from '../../components/BotonVenta.svelte';

    export let documentos;
    import { obt_item_bol_fact } from "$lib/datos";
    let modalData = {
      tipo_doc:'',
      folio:0,
      total : 0,
      adjuntos:{},
      vinculaciones: {},
      historial_retiros:[],
      observacion:'',
      detalle: [],
      vendedor:'',
      revisor:'',
    };

    async function openModal(tipo_doc,interno,item) {
        if(tipo_doc=='boleta' || tipo_doc =='factura'){
            console.log('BOL-FACT DETECTADA -> Fetch items')
            console.log('|-- Items',item)
            modalData.tipo_doc = tipo_doc,
            modalData.nro_doc = tipo_doc == 'factura' ? item[2] : item[4]
            modalData.total = item[3]
            modalData.adjuntos = item[7]
           /*  modalData.vinculaciones = item[6] === null ? null :JSON.parse(item[6])
            modalData.historial_retiros = item[12] === null ? null : JSON.parse(item[12]).lista_historial
            modalData.observacion = item[6] === null ? null :JSON.parse(item[6]).observacion */
            modalData.vendedor = item[1]
            modalData.revisor = item[9]
            try {
                modalData.detalle = await obt_item_bol_fact(tipo_doc,interno);
                console.log( modalData)
            } catch (error) {
            console.error("Error loading data:", error);
            }
        }
        else{
            console.log('guia detectada')
        }
        // Obtén los datos necesarios para el modal según el tipo de documento
        // Puedes utilizar el método fetch u otra lógica para obtener los datos
        // y asignarlos a la variable modalData

        // Abre el modal
        
    }
</script>

{#each documentos as fila,i }
<tr>
    <td>{fila[0]}</td><!-- folio -->
    <td>{fila[1]}</td><!-- fecha -->
    <td>{fila[2]}</td><!-- interno -->
    <td>{fila[3]}</td><!-- cliente -->
    <td>
        <BotonVenta 
             tipo_doc={'boleta'}
             folio = {100}
             interno = {1200}
             vinculaciones = {'{}'}
             estado_retiro = {'INCOMPLETO'}
             despacho = {'SI'}
             item = {[]}
             />
    </td><!-- Detalle -->
    <td>{fila[4]}</td><!-- Vendedor -->
</tr>
{/each}

<Modal2 />