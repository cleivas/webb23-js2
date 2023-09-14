import { getCountries } from "./modules/restcountries.js"; 
import _, { map } from 'underscore'; 

getCountries().then( countries=>{

    console.log(countries);

    // Logga endast namnen på länderna med hjålp av pluck

    const nameObjectArray = _.pluck(countries, 'name');
    console.log(nameObjectArray)

    const nameArray = _.pluck(nameObjectArray, 'common');

    console.log(nameArray)

    //Get random sample of three countries
    const randSample = _.sample(countries, 3);
    console.log(randSample);
})