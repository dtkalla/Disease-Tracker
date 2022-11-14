import Map from "./scripts/map";
// const fetch = require('node-fetch');



document.addEventListener("DOMContentLoaded", () => {
    const data = document.getElementById("main");
    new Map(data);
});


