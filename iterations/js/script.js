const treeArray = ['Oak', 'Bristlecone', 'Birch', 'Redwood'];

for(let i = 0; i<treeArray.length; i++){
    console.log(treeArray[i]);
}

for(const treeElement of treeArray ){
    console.log(treeElement);
}

let randomNumber = Math.round( Math.random()*10 );


while(randomNumber != 3){
    console.log(randomNumber);
    randomNumber = Math.round( Math.random()*10 );
}


console.log('Three!');