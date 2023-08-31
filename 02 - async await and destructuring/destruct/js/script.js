const user = {
    name: 'metmask',
    id: 38727362374,
    age: 95
}
const {name, age} = user;
console.log(name, age);


const array = [32, 235, 1, 4];
const [a, b] = array;
console.log(a, b);

async function getAllBeers(){
    const url = 'https://api.punkapi.com/v2/beers';

    const response = await fetch(url);
    const beerArray = await response.json();

    console.log(beerArray);

    // const [firstBeer] = beerArray;
    // console.log(firstBeer);

    for(const beer of beerArray){
        console.log(beer);
        const {name, tagline} = beer;
        console.log(name, tagline);
    }

}

getAllBeers();