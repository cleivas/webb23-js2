const express = require("express"); //Importerar express från mode_modules
const fs = require("fs");

const app = express();
app.use(express.json()); //tala om att vi ska hantera data i json-format
app.use(function (req, res, next) {
  //Tillåt requests från alla origins
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get('/movies', (req, res)=>{
    console.log('Get request received at /movies');

    const rawMovies = fs.readFileSync("./data/movies.json");
    const movieArray = JSON.parse(rawMovies);
    console.log(movieArray);

    res.send(movieArray);
})

app.listen(3000, () => {
  console.log("Listening on port 3000 ...");
});
