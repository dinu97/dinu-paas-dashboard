class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `


<!--<link href="/components/header/main-header.css" rel="stylesheet">-->

<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- Container wrapper -->
    <div class="container">
        <!-- Navbar brand -->
        <a class="navbar-brand me-2" href="https://mdbgo.com/">
            <i class="fas fa-dice-d6 fa-2x"></i>
        </a>

        <!-- Toggle button -->
        <button
                class="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#navbarButtonsExample"
                aria-controls="navbarButtonsExample"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
            <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarButtonsExample">
            <!-- Left links -->
            <!-- Left links -->
            <ul class="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a
                            class="nav-link active dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                    >
                        Templates &nbsp; <i class="fas fa-angle-down"></i>
                    </a>
                    <!-- Dropdown menu -->
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider"/>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Blog</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="#">Pricing</a>
                </li>
                <!-- Navbar dropdown -->

            </ul>
            <!-- Left links -->

        <!-- Left links -->

        <div class="d-flex align-items-center">
            <button id="btn-1" type="button" class="btn btn-outline-primary btn-rounded">
                Sign Up
            </button>
            <button id="btn-2" type="button" class="btn btn-primary btn-rounded me-3 ms-3">
                Sign In
            </button>
        </div>
    </div>
    <!-- Collapsible wrapper -->
    </div>
    <!-- Container wrapper -->
</nav>
<!-- Navbar -->
        `
  }
}


customElements.define('main-header', Header);

