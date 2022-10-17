console.log('country list loaded');

let countries = [{
    "name": "Sri Lanka", "code": "LK"
}, {
    "name": "India", "code": "IN"
}, {
    "name": "Singapore", "code": "SG"
}, {
    "name": "Afghanistan", "code": "AF"
}, {
    "name": "Albania", "code": "AL"
}, {
    "name": "Algeria", "code": "DZ"
}, {
    "name": "AndorrA", "code": "AD"
}, {
    "name": "Angola", "code": "AO"
}, {
    "name": "Anguilla", "code": "AI"
}, {
    "name": "Antarctica", "code": "AQ"
}, {
    "name": "Argentina", "code": "AR"
}, {
    "name": "Armenia", "code": "AM"
}];

const CountryL = document.querySelector('.c-item-2');
selectBtn = document.querySelector('.cselect-btn');
options = document.querySelector('.c-content');


function addCountryList() {
    for (let i = 0; i < countries.length; i++) {
        let country = countries[i].name;
        console.log(country);
        let li = document.createElement('li');
        li.innerHTML = `
<div class="list-items" >
<img  src="https://flagpedia.net/data/flags/normal/${countries[i].code.toLowerCase()}.png" alt="LOGO">
<p onclick="updateCountry(this);">${countries[i].name} - ${countries[i].code}</p>
</div>
`;
        options.appendChild(li);
    }
}

addCountryList();

selectBtn.addEventListener('click', () => {
    CountryL.classList.toggle('active');

});

var selctedCountry = document.getElementById('selectedOne');
var selectedCountryCode = document.getElementById('c-code');
var selectedCountryFlag = document.getElementById('c-img');

function updateCountry() {
    let country = event.target.innerHTML;
    selctedCountry.innerText = country;
    CountryL.classList.remove('active');
    selectedCountryCode.innerText = country.slice(-2);
    selectedCountryFlag.src = `https://flagpedia.net/data/flags/normal/${country.slice(-2).toLowerCase()}.png`;
}

//
// let div = document.createElement('div');
// div.className = 'list-items';
// div.innerHTML = `
//         <img  src="https://flagpedia.net/data/flags/normal/${countries[i].toLowerCase()}.png" alt="">
//         <p>${countries[i]}</p>
//         `;
// CountryL.appendChild(div);

// fetching the country list from the api

// document.addEventListener('DOMContentLoaded', () => {
//     const selectDrop = document.getElementById('countries');
//     const  flagImg = document.getElementById('c-flag');
//     const cCode = document.getElementById('c-code');
//     let url = `https://restcountries.com/v3.1/all`;
//     fetch(url).then(response => {
//         return response.json();
//     }).then(data => {
//         let output = "";
//         data.forEach(country => {
//             output += `
//       <option value=" ${country.name.common}" data-imagesrc="${country.flags.svg}">
//       ${country.name.common}
//       </option>
// `;
//         });
//         selectDrop.innerHTML = output;
//         flagImg.style.backgroundImage = `url(${data[144].flags.svg})`;
//         flagImg.style.backgroundRepeat = "no-repeat";
//         flagImg.style.backgroundSize = "cover";
//         flagImg.style.alignItems = "center";
//         flagImg.style.justifyContent = "center";
//         cCode.innerHTML = data[144].cca2;
//     }).catch(err => {
//         console.log(err);
//     })
// });

