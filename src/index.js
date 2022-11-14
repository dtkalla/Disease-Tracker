import Disease from "./scripts/map";


document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("my_dataviz");
    new Disease(data);
});


