const fs = require("fs");

const rawUsers = fs.readFileSync('./data/users.json', 'utf8');

console.log(typeof rawUsers); //String

const users = JSON.parse(rawUsers);
// console.log(users[1].name);

const newUser = {
    name: "Clara",
    admin: false,
    id: Math.round( Math.random()*10000 )
}

users.push(newUser);

fs.writeFileSync("./data/users.json", JSON.stringify(users));