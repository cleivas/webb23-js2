import { getBeer } from "./modules/beerapirequests.js";
import { displayBeer } from "./modules/display.js";

const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();

    const beerSearchTerm = form.querySelector('input').value;

    getBeer(beerSearchTerm)
        .then( displayBeer )

})
