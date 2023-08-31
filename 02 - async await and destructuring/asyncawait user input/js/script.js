// https://dog.ceo/api/breed/hound/images/random 

const form = document.querySelector('form');
form.addEventListener('submit', event =>{
    event.preventDefault();

    const breed = document.querySelector('input').value;

    // console.log(breed);

    getDogImageUrl(breed).then( displayDogImage );

    // getDogImageUrl(breed).then( dogImageUrl=>{
    //     const imgEl = document.querySelector('img');
    //     imgEl.src = dogImageUrl;
    // } );

    // console.log( getDogImageUrl(breed) );

    form.reset();
})

async function getDogImageUrl(breed){
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;

    try{
        const response = await fetch(url);
        // console.log(response.status);

        if(response.status >= 200 && response.status < 300){
            const dogObject = await response.json();
            console.log(dogObject);
    
            return dogObject.message;
        }
        else {
            throw 'Breed not found';
        }
        
    }
    catch(error){
        // console.log(error);
        displayError(error);
    }
    
}


function displayDogImage(dogImageUrl){
    const imgEl = document.querySelector('img');
    imgEl.src = dogImageUrl;
}

// displayDogImage('https://images.dog.ceo/breeds/pomeranian/n02112018_3133.jpg')

function displayError(message){
    const h2 = document.querySelector('#error');
    h2.innerText = message;
    console.log(message)
}