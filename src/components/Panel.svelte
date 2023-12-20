<script>
    
    
    import BotonVenta from './BotonVenta.svelte';

    export let venta;
    
</script>


    <div class="container">
    <div class="row">
        <div class="col">
          <p>Boletas <small>{venta.boletas.length}</small></p>
          <div>
            {#each venta.boletas as item}
             <BotonVenta 
             tipo_doc={'boleta'}
             folio = {item[4]}
             interno = {item[0]}
             vinculaciones = {item[6] === null ? null :JSON.parse(item[6])}
             historial_retiros = {item[12] === null ? null : JSON.parse(item[12]).lista_historial}
             observacion = {item[6] === null ? null :JSON.parse(item[6]).observacion}
             estado_retiro = {item[8]}
             despacho = {item[10]}
             vendedor = {item[1]}
             revisor = {item[9]}
             total = {item[3]}
             fecha = {item[11]}
             extra_data = {[ "NINGUNO" , 0 ]}
             monto_total = {item[3]}
             />
            {/each}
          </div>
        </div>
        <div class="col">
          <p>Facturas <small>{venta.facturas.length}</small></p>
          <div>
            {#each venta.facturas as item}
              <BotonVenta 
              tipo_doc={'factura'}
              folio = {item[2]}
              interno = {item[0]}
              vinculaciones = {item[6] === null ? null :JSON.parse(item[6])}
              historial_retiros = {item[12] === null ? null : JSON.parse(item[12]).lista_historial}
              observacion = {item[6] === null ? null :JSON.parse(item[6]).observacion}
              estado_retiro = {item[8]}
              despacho = {item[10]}
              vendedor = {item[1]}
              revisor = {item[9]}
              total = {item[3]}
              fecha = {item[11]}
              extra_data = {[ "NINGUNO" , 0 ]}
              monto_total = {item[3]}
              />
            {/each}
          </div>
        </div>
        <div class="col">
          <p>Guias <small>{venta.guias.length}</small></p>
          <div>
            {#each venta.guias as item}
            <BotonVenta 
             tipo_doc={'guia'}
             folio = {item[0]}
             interno = {item[1]}
             vinculaciones = {item[5] === null ? null :JSON.parse(item[5])}
             historial_retiros = {item[9] === null ? null : JSON.parse(item[9]).lista_historial}
             observacion = {item[5] === null ? null :JSON.parse(item[5]).observacion}
             estado_retiro = {item[4].replace(/^"(.*)"$/, '$1')}
             despacho = {item[7]}
             vendedor = {item[2]}
             revisor = {item[8]}
             total = {item[3]}
             fecha = {item[10]}
             extra_data = {[ item[6].replace(/^"(.*)"$/, '$1') , item[11]]}
             monto_total = {item[3]}
             />
             
            {/each}
          </div>
        </div>
      </div> 
    </div>


