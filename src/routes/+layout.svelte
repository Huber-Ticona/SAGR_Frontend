<script>
  import { User } from '../stores/user'
  import { onDestroy, onMount } from 'svelte';
  import {Usuario} from '../stores/storable'
  
  export let data;

 
    

</script>
<div class="app">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Enco Retiros</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 ">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/panel_clasico">Panel Clasico</a>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle"  id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Documentos
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/ordenes">Ordenes</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/boletas">Boletas</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/facturas">Facturas</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/guias">Guias</a></li>
              <li><a class="dropdown-item" data-sveltekit-reload href="/documentos/creditos">Nota Creditos </a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/informes">Estadisticas</a></li>
              <li><a class="dropdown-item" href="/releases">releases</a></li>

            </ul>
          </li>

          <!-- <li class="nav-item">
            <a class="nav-link" href="/informes" >Estadisticas</a>
          </li> -->
        <!-- login/logout -->
        {#if data.datos_usuario }
        <li class="nav-item">
          <form method="POST" action="/logout">
            <button class="nav-link bg-none border-none">Cerrar session</button>
          </form>
          <!-- <button class="nav-link" on:click={() => Usuario.set(null)} >Logout :{data.datos_usuario.nombre}</button> -->
        </li>
        {:else}
        <li class="nav-item">
          <a class="nav-link" href="/login">Iniciar session</a>
        </li>
        {/if}
        </ul>
      
      </div>
    </div>
  </nav>
  <main>
    <slot />
  </main>


  <footer class="footer footer-center w-full p-4 bg-gray-300 text-gray-800">
    <div class="text-center">
      <p>
        Copyright © 2023 -
        <a class="font-semibold" href="/#">Huber Proyects</a>
      </p>
    </div>
  </footer>
</div>
