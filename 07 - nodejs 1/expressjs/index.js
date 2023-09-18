const express = require("express"); //Importera biblioteket
const app = express(); //Initiera servern

app.use( express.json() ); //ange att app ska använda json så att vi kan tolka bodyn i response och requests på rätt sätt 

//Vid en GET request till endpoint ‘/’ 
app.get('/', (request, response)=>{
    response.send('TEST'); //Ett response med text skickas tillbaka
})

app.post('/names', (req, res)=>{
    console.log(req.body);
    res.send('New name posted ' + JSON.stringify(req.body) ); 
})


//Hantera en put-request vid endpoint /calc
// Skicka med ett nummer från postman
//I koden: skicka tillbaka ett response som innehåller numret * 10
app.put('/calc', (req, res)=>{
    console.log( req.body.nummer );
    const num = req.body.nummer;
    res.send(num + ' times 10 equals to ' + (num*10));
})


app.listen(3000, () => { //Lyssna på port 3000
    console.log("Listening on port 3000 ...");
  });