
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
              <li><a class="dropdown-item" href="/documentos/ordenes">Ordenes</a></li>
              <li><a class="dropdown-item" href="/documentos/boletas">Boletas</a></li>
              <li><a class="dropdown-item" href="/documentos/facturas">Facturas</a></li>
              <li><a class="dropdown-item" href="/documentos/guias">Guias</a></li>
              <li><a class="dropdown-item" href="/documentos/creditos">Nota Creditos </a></li>
              <li><a class="dropdown-item" href="/#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="/#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/informes" >Estadisticas</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
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
