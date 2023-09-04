const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();

    const div = document.querySelector('#container');
    div.innerHTML = '';

    const input = document.querySelector('input');
    const beerName = input.value;

    getBeerByName(beerName).then( displayBeers );

    console.log(beerName);
    form.reset();
})


async function getBeerByName(name){
    const url =  `https://api.punkapi.com/v2/beers?beer_name=${name}`;

    const response = await fetch(url);
    const beerInfo = await response.json();

    console.log(beerInfo);
    return beerInfo;
}

function displayBeers(beers){

    beers.forEach(element => {
        // console.log(element);

        const {name, description, image_url} = element;

        console.log(name, description, image_url);

        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const img = document.createElement('img');

        h2.innerText = name;
        p.innerText = description;
        img.src = image_url;

        const div = document.querySelector('#container');
        div.append(h2, p, img);
    });

}