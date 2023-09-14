export {getBeer};

async function getBeer(name){
    const url = `https://api.punkapi.com/v2/beers?beer_name=${name}`;

    const response = await fetch(url);
    const beers = await response.json();

    return beers;
}
