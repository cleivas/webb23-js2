export {getCountries};

async function getCountries(){

    const url = 'https://restcountries.com/v3.1/lang/spanish';

    const response = await fetch(url);
    const countries = await response.json();

    return countries;
}