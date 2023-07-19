<script>
    import { page } from '$app/stores';
    import Tabla from '../Tabla.svelte';
    
    console.log($page.params)
    let folio;
    let folio2;

</script>
<div class="text-center" style="margin-top: 10px;">
    <h1>Buscador de documentos:{$page.params.tipo_doc} </h1>
  </div>

<div style="display: contents">
<Tabla tipo_doc={$page.params.tipo_doc} {folio} {folio2}/>
</div>
