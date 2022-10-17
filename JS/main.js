//Custom JavaScript//
//Changing the visibility of publishablekey
function publishableKeyFunction() {
    const p = document.getElementById("PKInput");
    const z = document.getElementById("eye-one");
    if (p.type === "password") {
        p.type = "text";
        z.className = "fa fa-eye";
    } else {
        p.type = "password";
        z.className = "fa fa-eye-slash";
    }

}

//Changing the visibility of secretKey
function secretKeyFunction() {
    const a = document.getElementById("SKInput");
    const b = document.getElementById("eye-two");


    if (a.type === 'password') {
        a.type = "text";
        b.className = "fa fa-eye";

    } else {
        a.type = "password";
        b.className = "fa fa-eye-slash";


    }
}

// https://flagpedia.net/data/flags/normal/lk.png

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
});


// Adding the headers to the canvas

const navOne = document.getElementById('navOne')
fetch('Headers/Components/headerOne.html')
    .then(res => res.text())
    .then(data => {
        navOne.innerHTML = data
        const parser = new DOMParser()
        const doc = parser.parseFromString(data, 'text/html')
        eval(doc.querySelector('script').textContent)
    });



