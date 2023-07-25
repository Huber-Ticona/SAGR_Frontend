<script>
    import {obt_documentos_x_folio, obt_documentos_x_fecha } from '../../../lib/datos'
    import CuerpoTabla from './CuerpoTabla.svelte';

    export let tipo_doc;
    export let folio = 0; /* folio del tipo_doc. Puede ser tipo_orden= ['dim','elab',etc] */
    export let folio2 = 0; /* Si existe folio='tipo_orden' -> folio2= nro_orden */

    
    let fecha1 = '2023-03-06';
    let fecha2 = '2023-03-06';
    
    let documentos = [] 

    async function buscar_x_folio(){
        console.log( tipo_doc + ': buscando x folio ...')
        if(tipo_doc != 'ordenes'){
            console.log('buscando doc bol.fact guia credi')
            documentos = await obt_documentos_x_folio(tipo_doc, folio )
        }else{
            console.log('buscando orden')
        }
        
    }
    async function buscar_x_fecha(){
        console.log( tipo_doc + ': buscando x fecha ...')
        console.log('|-- Fecha1: ' + fecha1 + ' - Fecha2: ' + fecha2)
        if(fecha1 && fecha2){
            console.log('existe fecha1 y 2')
            documentos = await obt_documentos_x_fecha(tipo_doc,fecha1,fecha2)
            //console.log('JSON -',documentos)

        }else{
            alert('Ingrese rango de fechas.')
        }
        //obt_documentos_x_fecha(tipo_doc,)
    }
    
</script>
<div class="table-responsive">
    <table class="table table-bordered">
        <thead>
        <tr>
            <th scope="col" class="text-center">Nro Folio</th>
            <th scope="col" class="text-center">Fecha</th>
            <th scope="col" class="text-center">Nro Interno</th>
            <th scope="col" class="text-center">Cliente</th>
            <th scope="col" class="text-center">Detalle</th>
            <th scope="col" class="text-center">Vendedor</th>
           
        </tr>
        </thead>
        <tr>
            <td class="text-center">
                <div><input type="number"  value={tipo_doc === 'ordenes' ? folio2 : folio} 
                    on:input={(e) => {folio = e.target.value ; console.log(e.target.value)} }   id="folio">
                    <button class="btn btn-secondary" on:click={buscar_x_folio} >Buscar</button></div>
            </td>
            <td class="text-center">
                <div class="d-flex flex-column justify-items-center">
                    <input  type="date" value="{fecha1}" on:change={(event) => fecha1=event.target.value}>
                    <input  type="date" value="{fecha2}" on:change={(event) => fecha2=event.target.value}>
                <button class="btn btn-secondary" style="width: 100px;" on:click={buscar_x_fecha}>Buscar</button>
                 </div>
            </td>
            <td class="text-center"><div><input type="number" disabled><button class="btn btn-secondary"  disabled>Buscar</button></div></td>
            <td class="text-center"><div><input type="text"><button class="btn btn-secondary" >Buscar</button></div></td>
            <td class="text-center"><div><input type="number"  disabled><button class="btn btn-secondary" disabled >Buscar</button></div></td>
            <td class="text-center"><div><input type="number"  disabled><button class="btn btn-secondary"  disabled >Buscar</button></div></td>

        </tr>
        <tbody id="cuerpo-tabla">
           
           <CuerpoTabla documentos={documentos} {tipo_doc} />
        </tbody>
    </table>
    
    
</div>