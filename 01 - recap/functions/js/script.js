function add(x, y){
    return x + y;
}
// add(100, 1);
const sum = add(100, 1);
console.log( sum );


function myFunction(){
    console.log('A callback function');
}
function higherOrder( callback ){
    callback();
}


higherOrder( myFunction ); //Loggar "A callback function"