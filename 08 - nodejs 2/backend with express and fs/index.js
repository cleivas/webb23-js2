const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.get('/users', (req, res)=>{
    const queries = req.query; //Objekt med queries från url:en

    const rawUsers = fs.readFileSync('./data/users.json'); //string i json-format med alla users
    const users = JSON.parse(rawUsers); //alla users i JS-array

    let body = {}; //Det som ska skickas med responset

    //Kolla om requesten innehåller en query för namn
    if(queries.name != undefined){
        // console.log(queries.name);

        //loopa igenom users och kolla om någon user har name = queries.name
        for(const user of users){
            // console.log(user.name);

            if(user.name == queries.name){
                // res.send(user);
                console.log('match');
                body = user;
                break;
            }
            else{
                // res.send({message: 'user not found'});
                console.log('no match')
            }
        }
    }
    else{
        console.log('name did not exist')
        body = users;
    }
    res.send(body);
})

app.post('/users', (req, res)=>{
    const newUser = req.body;
    newUser.id = Math.round( Math.random()*10000 );

    console.log(newUser);

    const rawUsers = fs.readFileSync('./data/users.json'); //string i json-format med alla users
    const users = JSON.parse(rawUsers); //alla users i JS-array
    users.push(newUser);
    fs.writeFileSync('./data/users.json', JSON.stringify(users));

    res.send({message: 'added new user ' + newUser.name})
})

app.listen(3000, ()=>{
    console.log('Listening on port 3000...');
})
