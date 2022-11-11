import Example from "./scripts/example";
const fetch = require('node-fetch');


document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main");
    new Example(main);
});
