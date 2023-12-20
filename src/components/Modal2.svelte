<script>
    import ModalList from "./ModalList.svelte";
    import {actualizar_retiro} from '../lib/datos'
    import { modalData } from '../stores/PanelStore';
    
    export let parametros_porteria;
    export let usuario;

    let LocalModalData;
    let aux_detalle;
    let vale_id = null

    // Suscribirse a los cambios del store
    $: {LocalModalData = $modalData ;
      aux_detalle = $modalData ? JSON.parse(JSON.stringify($modalData.detalle)) : null;
      vale_id = $modalData.vinculaciones !== null ? $modalData.vinculaciones.vale_id : null
      vale_id = vale_id === undefined ? null : vale_id
      console.log("(VINCULACIONES -> VALE_ID)",vale_id)
      console.log('Modal2: Inicializando localmodaldata y auxdetalle.') }

    function increase(index) {
        if( (LocalModalData.detalle[index][2]+ 1) <= LocalModalData.detalle[index][1])
        {LocalModalData.detalle[index][2] += 1}else{alert('Exede maximo comprado')}
    }
    function decrease(index) {
    if (LocalModalData.detalle[index][2] > 0) {
        LocalModalData.detalle[index][2] -= 1
    }else{alert('No puede retirar -1 productos.')}
  }
  function dar_baja(){

    console.log('Dando de baja ...')
    for (let i = 0; i < LocalModalData.detalle.length; i++) {
        LocalModalData.detalle[i][2] = LocalModalData.detalle[i][1];
    }
    console.log('Nuevo detalle: ',LocalModalData.detalle)
  }
  async function guardar_cambios(){
    console.log('----- GUARDANDO CAMBIOS: ', LocalModalData.tipo_doc, LocalModalData.interno)
    console.log('detalle old: ',aux_detalle)
    console.log('detalle actual: ',LocalModalData.detalle)
    console.log("datos_usuario: ", usuario)
    let estado = true; // checkea si se actualiza el documento o no.
    let estado_retiro = "NO RETIRADO";
    let total_retirada = 0;
    let total_comprada = 0;
    let total_ret_anterior = 0;
    let l_descripciones = []
    let l_ret_anterior  = []
    let l_retirado =[]
    let items = []
    for(let i=0; i<LocalModalData.detalle.length ;i++){
      total_comprada += LocalModalData.detalle[i][1]
      total_retirada += LocalModalData.detalle[i][2]
      l_descripciones.push(LocalModalData.detalle[i][0])
      l_ret_anterior.push(aux_detalle[i][2])
      total_ret_anterior += aux_detalle[i][2]
      l_retirado.push(LocalModalData.detalle[i][2])
      let z = [ LocalModalData.detalle[i][2] , LocalModalData.detalle[i][3] , LocalModalData.detalle[i][4] ]
      items.push(z)
    }


    console.log("TOTAL COMPRADA: " + total_comprada.toString());
    console.log("TOTAL retirada actual: " + total_retirada.toString());
    console.log("TOTAL ret ANTERIOR: " + total_ret_anterior.toString());
    if (total_retirada > total_comprada) {
        estado = false; //no puede modificar el documento
        alert("No puede retirar mas de lo comprado");
        console.log("no puede retirar mas de lo comprado");
    } else if (total_retirada < 0) {
        estado = false; //no puede modificar el documento
        alert("No puede retirar cantidades negativas");
        console.log("No puede retirar menos CANTIDADES NEGATIVAS");
    } else if (total_ret_anterior == total_retirada) {
        estado = false; //sin cambios
        alert("No se detectaron cambios.");
        console.log(
            "NO RETIRO NADA, DETECTADO , retiro anterior = retiro actual"
        );
    } else if (total_retirada > 0 && total_retirada < total_comprada) {
        estado_retiro = "INCOMPLETO";
        console.log("Retirado incompleto detectado");
    } else if (total_retirada == total_comprada) {
        estado_retiro = "COMPLETO";
        console.log("Retirado completamente detectado");
    }
    if(estado){
      let new_dato = [];
      new_dato.push(estado_retiro);
      new_dato.push(LocalModalData.tipo_doc === 'guia' ? l_retirado : items);/* [ [CANT_RETIRADA, CODIGO, INTERNO] , [] , ...] */
      new_dato.push(LocalModalData.interno);
      new_dato.push(l_descripciones);
      new_dato.push(l_ret_anterior);
      new_dato.push(l_retirado); 
      new_dato.push(usuario.nombre); //SE ENVIA USUARIO
      new_dato.push(vale_id) //vale id
      console.log(new_dato);

      const resp = await actualizar_retiro(LocalModalData.tipo_doc, LocalModalData.interno,new_dato)
      if(resp.data){
        // Cerrar el modal cuando el registro es exitoso
        // Cerrar el modal cuando el registro es exitoso
        const myModal = document.querySelector('#exampleModal');
        const modal = bootstrap.Modal.getInstance(myModal);    
        modal.hide();
        alert(LocalModalData.tipo_doc + " : " + LocalModalData.folio + " -> Actualizada Correctamente.")
      }
    }
  }

  function handleInputChange(event, index) {
    console.log('-- Actualizando input index: ', index)
    const newValue = event.target.valueAsNumber;
    if (!isNaN(newValue)) {
      // Validar que el valor esté dentro de los límites permitidos
      if (newValue >= 0 && newValue <= LocalModalData.detalle[index][1]) {
        LocalModalData.detalle[index][2] = newValue;
      } else {
        alert('El valor ingresado no es válido.');
      }
    }
  }

</script>

<!-- Modal -->
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header" style="border:1px solid red;">
            <div>
                <h5 class="modal-title" id="exampleModalLabel">{LocalModalData.tipo_doc}: {LocalModalData.folio}</h5>
                <small>Interno: {LocalModalData.interno} | Fecha: {LocalModalData.fecha} | Monto Total: {LocalModalData.monto_total}</small>
            </div>
          
          <button type="button" class="btn btn-secondary mx-2" on:click={dar_baja}>Dar de Baja</button>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          
            <div class="container-fluid">
                 <table class="table">
                <thead>
                  <tr>
                    <th scope="col-6">Descripción</th>
                    <th scope="col-2">Cantidad</th>
                    <th scope="col-4">Cantidad retirada</th>
                  </tr>
                </thead>
                <tbody>
                {#each LocalModalData.detalle as item,index}
                <tr>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td>
                        <div class="d-flex flex-row">
                        <button class="btn btn-light" on:click={() => decrease(index)}>-</button>
                        <input class="form-control w-50" type="number" value={LocalModalData.detalle[index][2]} 
                        on:input={(e) => handleInputChange(e, index)} />
                        <button class="btn btn-light" on:click={() => increase(index)}>+</button>
                        </div>
                    </td>
                </tr>
                {/each}
                </tbody>
              </table>
            </div>
            <ModalList 
            extra_data={LocalModalData.extra_data} 
            vinculaciones={LocalModalData.vinculaciones} 
            historial_retiros={LocalModalData.historial_retiros} 
            observacion={LocalModalData.observacion}
            {parametros_porteria}
            tipo_doc = {LocalModalData.tipo_doc}
            interno = {LocalModalData.interno}
            />
          
        </div>

        <div class="modal-footer justify-content-between" style="border:1px solid red;">
            <div style="border:1px solid blue; margin: 2px 2px;">
                <p>Vendedor: {LocalModalData.vendedor}</p>
                <p>Revisor: {LocalModalData.revisor}</p>
            </div>
          <button type="button" class="btn btn-secondary" on:click={guardar_cambios}>Guardar Cambios</button>
        </div>
      </div>
    </div>
  </div>
<style>
    input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}

input[type=number] { -moz-appearance:textfield; }
</style>

