<script>
    
    export let vinculaciones;
    export let historial_retiros;
    export let observacion;

    function linkOrden(orden){
        let aux;
        if (orden == "dimensionado") {
            aux = orden.slice(0, 3);}
        else {
            aux = orden.slice(0, 4);
        }
        return aux
    }
</script>


<div class="accordion accordion-flush" id="accordionFlushExample" style="border: 1px solid red;"> 
    <div class="accordion-item">
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
            
            
            {:else}
            Sin vinculaciones
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
            {observacion ? observacion : 'SIN OBSERVACION'}
        </div>
        </div>
    </div>
    </div>

</div>