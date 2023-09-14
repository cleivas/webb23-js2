export function displayBeer(beerArray){
    console.log('in display beer', beerArray);

    const container = document.querySelector('#beer-container');
    container.innerHTML = "";

    for(const beer of beerArray){
        const h1 = document.createElement('h1');
        h1.innerText = beer.name;
        container.append(h1);
    }
}