const url = `https://api.punkapi.com/v2/beers`;

// const fetchPromise = fetch(url);
// console.log(fetchPromise);

fetch(url).then(
        function(response){
            console.log(response);
            return response.json();
        }
    ).then(
        function(data){
            console.log(data);
        }
    ).catch(
        function(error){
            console.log(error)
        }
    )

console.log('Sist i koden');