<script>
    import { page } from '$app/stores';
    import Tabla from '../../Tabla.svelte';
    
    console.log($page.params)
    let folio2;

</script>
<div class="text-center" style="margin-top: 10px;">
    <h1>Buscador de documentos:{$page.params.tipo_doc}: {$page.params.aux1}</h1>
  </div>
  <Tabla tipo_doc={$page.params.tipo_doc} folio={$page.params.aux1} {folio2}/>