<script>
    import { PUBLIC_API_PROXY } from "$env/static/public";
    import { onMount } from "svelte";

    async function buscarReleases() {
        try {
        const response = await fetch(PUBLIC_API_PROXY + "/releases", { method: 'POST'});
        const releases = await response.json();
        console.log("releases: " , releases)
        return releases;
    } catch (error) {
        console.error("Error al obtener releases  del servidor.");
        throw error;
    }
  }
  let promise = buscarReleases()

  //onMount(buscarReleases)

</script>
<h1>RELEASES</h1>
<div class="container mt-5">
        
    <h2>Instaladores:</h2>
    <hr>
    {#await promise}
	<p>...waiting</p>
    {:then releases}
        <ul class="list-group">
            {#each releases  as nombre}
            <li class="list-group-item"><a href="{PUBLIC_API_PROXY}/releases/{nombre}">{nombre}</a>
            </li>
            {/each}
        </ul>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
    
</div>
<style>
    a{
        text-decoration: none;
    }
</style>