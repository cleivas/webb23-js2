const fs = require('fs'); //File system ; 
const express = require('express');
const app = express();
app.use( express.json() ); 

// Allow cross origin requests (cors)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/movies', (req, res)=>{
  let body = [];

  try{
    const rawMovies = fs.readFileSync('./movies.json');
    const movies = JSON.parse(rawMovies);

    if(req.query.title != undefined){
      //loopa igenom alla objekt i movies
      // kolla om movie-objektet.name innehåller req.query.title
      const queryTitle = req.query.title.toLowerCase();
      
      movies.forEach(movie => {
        const movieName = movie.name.toLowerCase();
        if(movieName.includes(queryTitle)){
          body.push(movie);
        }

      });

    }
    else{
      body = movies;
    }
    
  }
  catch(e){
    body = {error: 'something went wrong'};
  }

  res.send(body);
})


app.listen(3000, () => { 
    console.log("Listening on port 3000 ...");
  });