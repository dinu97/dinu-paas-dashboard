
//card

class card extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

        <link href="components/card/main-card.css" rel="stylesheet">
  
        
    <div class="container mt-4 d-flex justify-content-center main">
    <div class="card" id="cardId">
        
        <div class="px-3 pt-3">
            <label for="card number" class="d-flex justify-content-between">
                <span class="labeltxt">Card number</span>
                <img src="components/card/images/download (4).png" width="20" class="image">
                <img src="components/card/images/americanexpress.png" width="20" class="image2">
                <img src="components/card/images/Visa.png" width="20" class="image3">

            </label>
            <input type="text" name="number" class="form-control inputtxt" placeholder="1234 1234 1234 1234">
        </div>
        <div class="d-flex justify-content-between px-3 pt-4">
             <div>
                 <label for="start" class="exptxt">Expiration</label>
                 <input type="date"  id="start" name="trip-start" class="form-control expiry" placeholder="MM / YY">
             </div>
             <div>
                <label for="cvv" class="cvvtxt">CVC</label>
                <input type="text" name="number" class="form-control cvv" placeholder="123">
                <img src="card/images/card.png" width="25" class="image4">
            </div>
        </div>
        <!-- <div class="px-3 pt-3">
            <label for="card number" class="d-flex justify-content-between">
                <span class="labeltxt">CARD NUMBER</span>
                <img src="components/card/images/card.png" width="25" class="image">
            </label>
            <input type="number" name="number" class="form-control inputtxt" placeholder="8881 2545 2545 2245">
        </div> -->

        <div class="px-3 pt-3">
            <label for="card number" class="d-flex justify-content-between" id="countryId"> Country</label>
            <select id="card number" class="form-control">
              <option selected>Sri Lanka</option>
              <option>...</option>
            </select>
          </div>
        <div class="d-flex align-items-center justify-content-between px-3 py-4">
            <div>
                <button type="button" class="btn cancel">Cancel</button>
            </div>
            <div>
                <button type="button" class="btn payment">Make Payment</button>
            </div>
        </div>
    </div>
</div>
  
  
        `
      
    }
  }
  
  
  customElements.define('main-card', card);
  
  