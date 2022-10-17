
//Footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `

      <link href="components/footer/main-footer.css" rel="stylesheet">

      <footer id="footerID" class="bg-primary text-white text-center text-lg-start">
      <!-- Grid container -->
      <div class="container p-4">
        <!--Grid row-->
        <div class="row">
          <!--Grid column-->
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 id="logoId" class="text-uppercase">LOGO</h5>
    
            <p id="discriptionId">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
              voluptatem veniam, est atque cumque eum delectus sint!
            </p>
  <!-- socialmedia -->
            <ul class="list-inline" id="socialmedia"> 
              <li class="list-inline-item"><a class="text-para" href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li class="list-inline-item"><a class="text-para" href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li class="list-inline-item"><a class="text-para" href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
            </ul>
  <!-- socialmedia -->
  
          </div>
          <!--Grid column-->
    
          <!--Grid column-->
          <div id="linkListId"  class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 id="nameId" class="text-uppercase">Product</h5>
    
            <ul id="listID" class="list-unstyled mb-0">
              <li >
                <a id="list1" href="#!" class="text-white">Data Governance</a>
              </li>
              <li >
                <a id="list2" href="#!" class="text-white">Virtual Events</a>
              </li>
              <li >
                <a id="list3" href="#!" class="text-white">Virtual Users</a>
              </li>
              <li >
                <a id="list4" href="#!" class="text-white">Connect</a>
              </li>
            </ul>
          </div>
          <!--Grid column-->
    
          <!--Grid column-->
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 id="exploreId" class="text-uppercase mb-0">Explore</h5>
    
            <ul id="linkId" class="list-unstyled">
              <li>
                <a id="limlId1" href="#!" class="text-white">Resources</a>
              </li>
              <li>
                <a id="limlId2" href="#!" class="text-white">Blog</a>
              </li>
              <li>
                <a id="limlId3" href="#!" class="text-white">Documents</a>
              </li>
             
            </ul>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </div>
      <!-- Grid container -->
    <!-- socialmedia -->
    
    <!-- <div id="smicons" class="socialme">
            
      <a id="icons1" href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a id="icons2" href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a id="icons3" href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
    </div> -->
  
       <!-- Copyright -->
   <div class="text-black-50 p-3" id="copyright" >
    © 2020 Copyright:
    <a class="text-black-50" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  <!-- Copyright -->
    </footer>
  

      `
    
  }
}


customElements.define('main-footer', Footer);

