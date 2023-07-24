<script>
    import { registrar_observaciones } from "../lib/datos";

    export let vinculaciones;
    export let historial_retiros;
    export let observacion;
    export let extra_data;
    export let parametros_porteria;
    export let tipo_doc;
    export let interno;

    let new_observacion = "";
    function linkOrden(orden){
        let aux;
        if (orden == "dimensionado") {
            aux = orden.slice(0, 3);}
        else {
            aux = orden.slice(0, 4);
        }
        return aux
    }
    function actualizar_observacion() {
        console.log('|--- ACTUALIZANDO  OBS -----|')
        let aux_lista_obs = observacion
        if(!observacion){
            aux_lista_obs = []
            console.log('documento NO tiene observaciones.')
        }else{console.log('documento tiene observaciones.')}

        if ( new_observacion !== "") {
            //console.log("Registrando observacion:", new_observacion);
            if (!aux_lista_obs.includes(new_observacion)) {
                console.log("|-- Nueva observacion detectada:", new_observacion);
                registrar_observaciones(aux_lista_obs,new_observacion,tipo_doc,interno)
                    .then((response) => {
                    // Cerrar el modal cuando el registro es exitoso
                    const myModal = document.querySelector('#exampleModal');
                    const modal = bootstrap.Modal.getInstance(myModal);    
                    modal.hide();
                    alert(response.msg)
                    })
                    .catch(() => {
                    // Mostrar un alert si el registro no tiene éxito
                    alert('Sin éxito al registrar la observación');
                    });
            } else {
                console.log("|-- Observacion ya existe:", new_observacion);
            }
        } else {
        console.log("Selecciona una observacion válida");
        alert("Selecciona una observacion válida");
        }
        console.log('|--- ACTUALIZANDO OBS END -----|')
  }
</script>


<div class="accordion accordion-flush p-0 m-0" id="accordionFlushExample" style="border: 1px solid red;"> 
    <div class="accordion-item p-0 m-0">
        <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"data-bs-target="#flush-collapseOne">
            Vinculos
        </button>
        </h2>
        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            {#if vinculaciones}
                
                {#if vinculaciones.ordenes}
                    <div>ORDENES: 
                    {#each vinculaciones.ordenes as orden }
                    <a class="btn btn-light" data-sveltekit-reload
                    href="/documentos/ordenes/{linkOrden(JSON.parse(orden).tipo)}/{JSON.parse(orden).folio}">
                        {linkOrden(JSON.parse(orden).tipo)}_{JSON.parse(orden).folio} </a>
                    {/each}
                    </div>
                {/if}
            
                {#if vinculaciones.guias }
                    <div>
                    Guias:
                    {#each vinculaciones.guias as guia}
                        <a class="btn btn-secondary" data-sveltekit-reload href="/documentos/guias/{guia}">{guia}</a>
                    {/each}
                    </div>
                {/if}

            {/if}
            <!-- Guia: Vinculo a doc_venta -->
            {#if extra_data[0] == "BOLETA" }
                <div> BOLETA : <a data-sveltekit-reload href="/documentos/boletas/{extra_data[1]}" class="btn btn-secondary">{extra_data[1]}</a></div>
            {/if}

            {#if extra_data[0] == "FACTURA" }
                <div> FACTURA : <a data-sveltekit-reload href="/documentos/facturas/{extra_data[1]}" class="btn btn-secondary">{extra_data[1]}</a></div>
            {/if}
        </div>
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
            Historial retiros
        </button>
        </h2>
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            {#if historial_retiros}
            <div class="accordion" id="">
            {#each historial_retiros as registro ,j}
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#item-{j}">
                    Fecha: {JSON.parse(registro).fecha} | Revisor: {JSON.parse(registro).revisor}
                </button>
                </h2>
                <div id="item-{j}" class="accordion-collapse collapse">
                
                <table id = "">
                    <thead>
                    <tr>
                        <th class="th_h">Descripcion</th>
                        <th class="th_h">Antes</th>
                        <th class="th_h">Despues</th>
                    </tr>
                    </thead>
                    <tbody>
                    {#each JSON.parse(registro).antes as fila ,i}
                    <tr>
                        <td class="th_h"> {JSON.parse(registro).descripciones[i]}</td>
                        <td class="th_h">{JSON.parse(registro).antes[i]}</td>
                        <td class="th_h">{JSON.parse(registro).despues[i]}</td>
                    </tr> 
                    {/each}   
                    </tbody>
                </table>
                </div>
                </div>
                {/each}
            </div>
                
            {:else}
            Sin historial
            {/if}
        </div>
    </div>

    <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
            Observacion
        </button>
        </h2>
        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        <div class="accordion-body">
            

            <div style="border: 1px solid red;">
                <div style="border: 1px solid green; margin:2px 2px;">
                    {#if observacion}
                        {#if  Array.isArray(observacion)}
                            {#each observacion as obs }
                                <div>{obs}<button class="btn bg-none border border-lg"><i class="fas fa-trash"></i></button></div>
                            {/each}
                        {/if}
                    {:else}
                    Sin obs
                    {/if}

                </div>

                <div class="d-flex " style="border: 1px solid blue;margin:2px 2px;">
                    <strong>Nueva Observacion:</strong>
                    <select class="form-select form-select-sm" name="" id="" bind:value={new_observacion}>
                        <option value="">Seleccione una Observacion...</option>
                        {#each parametros_porteria as parametro }
                        <option value="{parametro}">{parametro}</option>
                        {/each}
                    </select>
                    <button class="btn border border-lg bg-none"
                     on:click={actualizar_observacion}>Registrar</button>
                </div>
            </div>
           
        </div>
        </div>
    </div>
    </div>

</div>