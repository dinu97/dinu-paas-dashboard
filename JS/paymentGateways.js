
var PgatewayImg = document.querySelector(".c-pmtgateway");


function selectPgateway() {
    document.addEventListener("click", function (e) {
        let elementId = e.target.src || e.target.id;
        console.log(elementId);
    });


    PgatewayImg.style.backgroundImage = `url('assets/icons/stripe.png')`;
    PgatewayImg.style.backgroundRepeat = "no-repeat";
    PgatewayImg.style.objectFit = "cover";


}