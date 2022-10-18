
//Footer

class footer2 extends HTMLElement {
    connectedCallback() {
      this.innerHTML =  `
  
<link href="components/footers/footerTwo/main-footer2.css" rel="stylesheet">
  
    
<footer id="footer2" class="text-center text-lg-start">
<!-- Grid container -->
<div class="container p-4 pb-0">
     <!-- Section: Social media -->
<section class="mx-auto" style="width: 350px">
    <!-- Facebook -->
    <a
      class="btn btn-link btn-floating btn-lg  m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-facebook-f"></i
    ></a>

    <!-- Twitter -->
    <a
      class="btn btn-link btn-floating btn-lg  m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-twitter"></i
    ></a>

    <!-- Google -->
    <a
      class="btn btn-link btn-floating btn-lg  m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-google"></i
    >
    <!-- Instagram -->
    <a
      class="btn btn-link btn-floating btn-lg  m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-instagram"></i
    ></a>

    <!-- Linkedin -->
    <a
      class="btn btn-link btn-floating btn-lg  m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-linkedin"></i
    ></a>
    <!-- Github -->
    <a
      class="btn btn-link btn-floating btn-lg  m-1"
      href="#!"
      role="button"
      data-mdb-ripple-color="dark"
      ><i class="fab fa-github"></i
    ></a>
  </section>
  <!-- Section: Social media -->
   <!-- Section: Form -->
<section class="">
  <form action="">
    <!--Grid row-->
    <div class="row d-flex justify-content-center">
      <!--Grid column-->
      <div class="col-auto">
        <p id="textsubscribe" class="pt-2">
          <strong>Subscribe Newsletters</strong>
        </p>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-md-5 col-12">
        <!-- Email input -->
        <div class="form-outline mb-4">
          <input type="email" id="form5Example27" class="form-control" />
          <label class="form-label" for="form5Example27">Enter your Email address</label>
        </div>
      </div>
      <!--Grid column-->

      <!--Grid column-->
      <div class="col-auto">
        <!-- Submit button -->
        <button type="submit" id="btnSubscribe" class="btn btn-primary mb-4">
          Subscribe Now
        </button>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->
  </form>
</section>
<!-- Section: Form -->
</div>
<!-- Grid container -->
<hr width="100%">
<!-- Copyright -->
<div id="copyright" class="text-center p-3" >
© 2020 Copyright:
<a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
</div>
<!-- Copyright -->
</footer>
  
        `
      
    }
  }
  
  
  customElements.define('main-footer2',footer2);
  
  