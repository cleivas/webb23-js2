const form = document.querySelector('form');

form.addEventListener('submit', event=>{
    event.preventDefault();

    const elements = form.children;
    console.log(elements);

    const newMovie = {};
    for(const element of elements){
        if(element.name != ''){
            console.log(element.name, element.value);

            newMovie[element.name] = element.value;
        }
    }

    postNewMovie(newMovie)
    // console.log(newMovie);
})

async function postNewMovie(movieObj){
    const url = 'https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main/clara.json';

    const options = {
        method: 'POST',
        body: JSON.stringify(movieObj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}