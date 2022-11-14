import Disease from "./scripts/map";


document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("tuberculosis");
    new Disease(data);
});


