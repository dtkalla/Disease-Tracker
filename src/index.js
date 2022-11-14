import Button from "./scripts/button.js";
import Map from "./scripts/map.js";


document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("my_dataviz");
    const map = new Map(data);
    const data1 = document.getElementById("tuberculosis");
    new Button(data1,map,"tuberculosis");
    const data2 = document.getElementById("malaria");
    new Button(data2,map,"malaria");
    const data3 = document.getElementById("HIV");
    new Button(data3,map,"HIV");
    const data4 = document.getElementById("guineaWorm");
    new Button(data4,map,"guinea_worm");
    const data5 = document.getElementById("polio");
    new Button(data5,map,"polio");
    const data6 = document.getElementById("leprosy");
    new Button(data6,map,"leprosy");
});


// document.addEventListener("DOMContentLoaded", () => {

// });

