import Button from "./scripts/button.js";
import Map from "./scripts/map.js";
// import Animate from "./scripts/animate.js"


document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("my_dataviz");
    const map = new Map(data);
    const dataCopy = document.getElementById("copy");
    new Map(dataCopy);

    const data1 = document.getElementById("tuberculosis");
    new Button(data1,map,"tuberculosis");
    const data2 = document.getElementById("malaria");
    new Button(data2,map,"malaria");
    const data3 = document.getElementById("HIV");
    new Button(data3,map,"HIV");
    const data2019 = document.getElementById("covid19");
    new Button(data2019,map,"covid19");
    const data4 = document.getElementById("guineaWorm");
    new Button(data4,map,"guineaworm");
    const data5 = document.getElementById("polio");
    new Button(data5,map,"polio");
    const data6 = document.getElementById("leprosy");
    new Button(data6,map,"leprosy");

    // const animate = document.getElementById("animate");
    // new Animate(animate,map);
    

});


// document.addEventListener("DOMContentLoaded", () => {

// });

