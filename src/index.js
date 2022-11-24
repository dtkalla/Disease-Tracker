import Button from "./scripts/button.js";
import Map from "./scripts/map.js";

document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("my_dataviz");
    new Map(data);
    const dataCopy = document.getElementById("copy");
    const map = new Map(dataCopy);

    const data1 = document.getElementById("tuberculosis");
    new Button(data1,map,"tuberculosis");
    const data2 = document.getElementById("malaria");
    new Button(data2,map,"malaria");
    const data3 = document.getElementById("HIV");
    new Button(data3,map,"HIV");
    const data4 = document.getElementById("covid19");
    new Button(data4,map,"covid19");
    const data5 = document.getElementById("guineaWorm");
    new Button(data5,map,"guineaworm");
    const data6 = document.getElementById("polio");
    new Button(data6,map,"polio");
    const data7 = document.getElementById("leprosy");
    new Button(data7,map,"leprosy");

    const modal = document.getElementById("myModal");

    const modalButton = document.getElementById("modalButton");

    const span = document.getElementsByClassName("close")[0];

    // modal.style.display = "none";

    modalButton.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target != modal && event.target != modalButton) {
            modal.style.display = "none";
        }
    }

});

