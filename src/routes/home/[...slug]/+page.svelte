<script>
    import { page } from '$app/stores';
  
    // Obtenemos el valor del parámetro "slug" de la ruta actual
    let slug = $page.params;
    console.log(slug)
    // Si el valor de "slug" es un array, significa que hay subrutas
    let subrutas = Array.isArray(slug) ? slug : [];
  
    // Para obtener la última subruta en caso de que haya varias
    let ultimaSubruta = subrutas[subrutas.length - 1];
  </script>
  
  <div>
    <h1>Ruta actual: {$page.path}</h1>
    {#if subrutas.length > 0}
      <h2>Subrutas:</h2>
      <ul>
        {#each subrutas as subruta}
          <li>{subruta}</li>
        {/each}
      </ul>
      <p>Última subruta: {ultimaSubruta}</p>
    {:else}
      <p>No hay subrutas</p>
    {/if}
  </div>