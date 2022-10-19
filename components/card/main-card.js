
//card

class card extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `

        <link href="components/card/main-card.css" rel="stylesheet">
  
        
    <div class="container mt-4 d-flex justify-content-center main">
    <div class="cardPayments" id="cardId">
        
        <div class="px-3 pt-3">
            <label for="card number" class="d-flex justify-content-between">
                <span class="cardnumber
                ">Card number</span>
                <img src="components/card/images/download (4).png" width="20" class="marstercard">
                <img src="components/card/images/americanexpress.png" width="20" class="amaricanE">
                <img src="components/card/images/Visa.png" width="20" class="visacard">

            </label>
            <input type="text" name="number" class="form-control accountnumber" placeholder="1234 1234 1234 1234">
        </div>
        <div class="d-flex justify-content-between px-3 pt-4" id="datepicker">
             <div>
                 <label for="start" class="exptxt">Expiration</label>
                 <input type="date"  id="start" name="trip-start" class="form-control expiry" placeholder="MM / YY">
             </div>
             <div>
                <label for="cvv" class="cvvtxt">CVC</label>
                <input type="text" name="number" class="form-control cvv" placeholder="123">
                <img src="components/card/images/card.png" width="20" class="cvc-ard">
            </div>
        </div>
        <!-- <div class="px-3 pt-3">
            <label for="card number" class="d-flex justify-content-between">
                <span class="labeltxt">CARD NUMBER</span>
               
                <img src="components/card/images/card.png" width="25" class="cvc-ard">
            </label>
            <input type="number" name="number" class="form-control inputtxt" placeholder="8881 2545 2545 2245">
        </div> -->

        <div class="px-3 pt-3">
            <label for="card-number" class="d-flex justify-content-between" id="countryId"> Country</label>
            <select id="card-number" class="form-control selectcountry">
            <option>select country</option>
            <option value="SL">Sri Lanka</option>
            <option value="AX">Aland Islands</option>
            <option value="AL">Albania</option>
            <option value="DZ">Algeria</option>
            <option value="AS">American Samoa</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antarctica</option>
            <option value="AG">Antigua and Barbuda</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaijan</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrain</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BY">Belarus</option>
            <option value="BE">Belgium</option>
            <option value="BZ">Belize</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermuda</option>
            <option value="BT">Bhutan</option>
            <option value="BO">Bolivia</option>
            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
            <option value="BA">Bosnia and Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BV">Bouvet Island</option>
            <option value="BR">Brazil</option>
            <option value="IO">British Indian Ocean Territory</option>
            <option value="BN">Brunei Darussalam</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="KH">Cambodia</option>
            <option value="CM">Cameroon</option>
            <option value="CA">Canada</option>
            <option value="CV">Cape Verde</option>
            <option value="KY">Cayman Islands</option>
            <option value="CF">Central African Republic</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CX">Christmas Island</option>
            <option value="CC">Cocos (Keeling) Islands</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comoros</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, Democratic Republic of the Congo</option>
            <option value="CK">Cook Islands</option>
            <option value="CR">Costa Rica</option>
            <option value="CI">Cote D'Ivoire</option>
            <option value="HR">Croatia</option>
            <option value="CU">Cuba</option>
            <option value="CW">Curacao</option>
            <option value="CY">Cyprus</option>
            <option value="CZ">Czech Republic</option>
            <option value="DK">Denmark</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="DO">Dominican Republic</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egypt</option>
            <option value="SV">El Salvador</option>
            <option value="GQ">Equatorial Guinea</option>
            <option value="ER">Eritrea</option>
            <option value="EE">Estonia</option>
            <option value="ET">Ethiopia</option>
            <option value="FK">Falkland Islands (Malvinas)</option>
            <option value="FO">Faroe Islands</option>
            <option value="FJ">Fiji</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="GF">French Guiana</option>
            <option value="PF">French Polynesia</option>
            <option value="TF">French Southern Territories</option>
            <option value="GA">Gabon</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="DE">Germany</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GR">Greece</option>
            <option value="GL">Greenland</option>
            <option value="GD">Grenada</option>
            <option value="GP">Guadeloupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GG">Guernsey</option>
            <option value="GN">Guinea</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="GY">Guyana</option>
            <option value="HT">Haiti</option>
            <option value="HM">Heard Island and Mcdonald Islands</option>
            <option value="VA">Holy See (Vatican City State)</option>
            <option value="HN">Honduras</option>
            <option value="HK">Hong Kong</option>
            <option value="HU">Hungary</option>
            <option value="IS">Iceland</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IR">Iran, Islamic Republic of</option>
            <option value="IQ">Iraq</option>
            <option value="IE">Ireland</option>
            <option value="IM">Isle of Man</option>
            <option value="IL">Israel</option>
            <option value="IT">Italy</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japan</option>
            <option value="JE">Jersey</option>
            <option value="JO">Jordan</option>
            <option value="KZ">Kazakhstan</option>
            <option value="KE">Kenya</option>
            <option value="KI">Kiribati</option>
            <option value="KP">Korea, Democratic People's Republic of</option>
            <option value="KR">Korea, Republic of</option>
            <option value="XK">Kosovo</option>
            <option value="KW">Kuwait</option>
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
  
  