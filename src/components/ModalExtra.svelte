<script>
    
    import { modalExtraData } from '../stores/PanelStore';

    let aux_detalle;
    $: {
        console.log('MODALEXTRADATA ',$modalExtraData)
        aux_detalle = $modalExtraData ? JSON.parse(JSON.stringify($modalExtraData.detalle)) : null;
        console.log(aux_detalle)
    }
    
    
</script>
<!-- Modal extra -->
<div class="modal" id="ModalExtra" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header" style="border:1px solid red;">
            <div>
                <h5 class="modal-title" id="exampleModalLabel">{$modalExtraData.documento}: {$modalExtraData.folio}</h5>
                <small>Fecha: {$modalExtraData.fecha} | Monto total: {$modalExtraData.monto_total}</small>
            </div>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="container-fluid">
                 <table class="table">
                <thead>
                  <tr>
                    <th scope="col-6">Descripción</th>
                    <th scope="col-2">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                {#if aux_detalle.cantidades}
                    {#each aux_detalle.cantidades as item,index}
                <tr>
                    <td>{aux_detalle.descripciones[index]}</td>
                    <td>{aux_detalle.cantidades[index]}</td>
                  
                </tr>
                {/each}
                {/if}
                
                </tbody>
              </table>
            </div>
           
        </div>

        <div class="modal-footer justify-content-between" style="border:1px solid red;">
            <div style="border:1px solid blue; margin: 2px 2px;">
                {#if $modalExtraData.vinculaciones}
                <div> Vinculaciones: 
                   
                    {#if $modalExtraData.vinculaciones[0] == "BOLETA" }
                    <div> BOLETA : <a data-sveltekit-reload href="/documentos/boletas/{$modalExtraData.vinculaciones[1]}" class="btn btn-secondary">
                        {$modalExtraData.vinculaciones[1]}</a></div>
                    {/if}

                    {#if $modalExtraData.vinculaciones[0] == "FACTURA" }
                    <div> FACTURA : <a data-sveltekit-reload href="/documentos/facturas/{$modalExtraData.vinculaciones[1]}" class="btn btn-secondary">
                        {$modalExtraData.vinculaciones[1]}</a></div>
                    {/if}
                </div>
                {:else}
                <div> SIN Vinculaciones </div>
                {/if}
            </div>
        </div>
      </div>
    </div>
  </div>
