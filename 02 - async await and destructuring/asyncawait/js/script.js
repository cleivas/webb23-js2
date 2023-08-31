// async function myFunction(){
//     console.log('en funktion');
//     return 10;
// }

// const returnedValue = myFunction();

// console.log(returnedValue);


const dogURL = `https://dog.ceo/api/breeds/image/random`;

async function getDogImage(url){

    const response = await fetch(url);
    // console.log(response);

    const dogObject = await response.json();
    // console.log(dogObject);

    return dogObject.message;
}

const dogPromise = getDogImage(dogURL);
console.log(dogPromise);

getDogImage(dogURL)
    .then( data=>console.log(data) )

console.log('end of code');