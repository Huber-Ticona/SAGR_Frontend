<script>
    import { obt_item_bol_fact, obt_detalle_guia } from "$lib/datos";
    import {modalData} from '../stores/PanelStore'

    export let tipo_doc;
    export let folio;
    export let interno;
    export let vinculaciones;
    export let historial_retiros;
    export let observacion;
    export let estado_retiro;
    export let despacho;
    export let revisor;
    export let vendedor;
    export let total;
    export let fecha;
    export let extra_data;
    export let monto_total;

    async function openModal(tipo_doc,interno) {
        // Definimos los datos del modal.
        let new_modalData = {
          tipo_doc: tipo_doc,
          folio: folio,
          interno: interno,
          total : total,
          vinculaciones: vinculaciones,
          historial_retiros: historial_retiros,
          observacion:observacion,
          detalle: [],
          vendedor: vendedor,
          revisor:revisor,
          fecha: fecha,
          extra_data : extra_data,
          monto_total : monto_total
        };
        if(tipo_doc=='boleta' || tipo_doc =='factura'){
            console.log('<botonVenta> BOL-FACT DETECTADA -> Fetch items')
              console.log('tipo doc : ' + tipo_doc + ' | interno: '  + interno)
            try {
                new_modalData.detalle = await obt_item_bol_fact(tipo_doc,interno);
                console.log("(BOTON VENTA-> NEW MODALDATA)", new_modalData)
                 // Actualizar el valor del store modalData
                modalData.set(new_modalData);
                
            } catch (error) {
            console.error("Error loading data:", error);
            }
        }
        else{
            console.log('guia interno: ',interno)
            try {
                new_modalData.detalle = await obt_detalle_guia(interno);
                console.log("(BOTON VENTA-> NEW MODALDATA)", new_modalData)
                // Actualizar el valor del store modalData
                modalData.set(new_modalData);
            } catch (error) {
            console.error("Error loading data:", error);

        } 
        // Obtén los datos necesarios para el modal según el tipo de documento
        // Puedes utilizar el método fetch u otra lógica para obtener los datos
        // y asignarlos a la variable new_modalData

        // Abre el modal
    }}
    function getColor(status) {
    if (status =='COMPLETO') {
      return 'linear-gradient(to bottom, #ff0000 0%, #ff6600 100%)';
    } else if(status == 'INCOMPLETO'){
      return 'linear-gradient(to bottom, #ffff00 0%, #ffff66 100%)';
    }else if(status == 'NO RETIRADO'){
      return 'linear-gradient(to top, #00ff00 0%, #99ff33 100%)'
    }
  }
  
</script>
<button data-bs-toggle="modal" data-bs-target="#exampleModal" class="boton_panel" 
    style="--color:{getColor(estado_retiro)}" on:click={() => openModal(tipo_doc,interno)} >
    <div class="content-box">{folio}</div>
    <!-- SE ANALIZA LOS VINCULOS ASOCIADOS -->
    <div class="badge_box" id="">
        {#if vinculaciones}
            {#if vinculaciones.ordenes}
                <span class='circle_orden'></span>
            {/if}
            {#if vinculaciones.guias}
                <span class='circle_guia'></span>
            {/if}
            {#if vinculaciones.creditos}
                <span class='circle_credito'></span>
            {/if}
            {#if vinculaciones.observacion}
                <span class='circle_obs'></span>
            {/if}

        {/if}
        <!-- SE ANALIZA DESPACHO DOMICILIO -->
        {#if despacho == "SI"}
            <span class='circle_brown'></span>
        {/if}

        {#if tipo_doc == 'guia' && ( extra_data[0] == "BOLETA" || extra_data[0] == "FACTURA" )}
            <span class='circle_doc'></span>
        {/if}

        <!--
        <span class='circle_guia'></span>
        <span class='circle_credito'></span>
        <span class='circle_brown'></span>
        <span class='circle_doc'></span>-->
    </div>
</button>

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
        background: var(--color);
        /*background: linear-gradient(to top, #00ff00 0%, #99ff33 100%);*/
}

.content-box{
  width: auto;
  height: auto;
  margin-left:auto;
  margin-right:auto;
  /*border: 1px solid green; */
}
.badge_box{
  width: 100%;
  height: 15px;
  border: 1px solid red;
  display: flex;
}
.circle_credito{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #ff0000 0%, #333300 100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}

.circle_orden{  
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #00ff00 0%, #003300 100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_guia{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #ffff00 0%, #996600 100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_doc{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #0000ff 0%, #000066  100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_brown{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #ff9933  0%, #ff0066   100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
.circle_obs{
  height: 11px;
  width: 11px;
  background: linear-gradient(to bottom, #5a5551  0%, #e70fe3   100%);
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
  margin-left: 5px;
}
</style>