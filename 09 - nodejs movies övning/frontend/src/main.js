async function getMovies(){
    const url = 'http://localhost:3000/movies';

    const response = await fetch(url);
    const movies = await response.json();

    // console.log(movies);
    return movies;
}

function displayMovies(movieArray){
    // console.log(movieArray);

    for(const movie of movieArray){
        const {name, year, director, genre} = movie;

        const h1 = document.createElement('h1');
        h1.innerText = name;
        document.body.append(h1);
    }
}

getMovies().then( displayMovies );