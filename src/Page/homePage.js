function homePage() {
  return (
    <header
      class="site-navbar light js-sticky-header site-navbar-target"
      role="banner"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-xl-2">
            <div class="mb-0 site-logo">
              <a href="#" class="mb-0">
                Elderly<span>.</span>{" "}
              </a>
            </div>
          </div>

          <div class="col-12">
            <nav class="site-navigation position-relative text-right">
              <ul class="">
                <li>
                  <a href="#" class="active nav-link">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link">
                    Testimonials
                  </a>
                </li>

                <li>
                  <a href="#" class="nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default homePage;
