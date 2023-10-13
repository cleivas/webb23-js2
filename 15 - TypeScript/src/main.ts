
// Variables
let title:string;
//  = 'Clara';

// title = 23;
title = 'Clara';

console.log(title);

let isHungry:boolean;

// isHungry = 'hej hej';
isHungry = true;

let numArr: number[];
// numArr = ['lalala', 23, 54];
numArr = [2,3, 4, 5];

let arr: [string, number];
arr = ['test', 4];
// arr = ['test', 4, 78];
arr.push(8);
console.log(arr);

let num1:number;
let num2:number;
num1 = 40;
num2 = 30;

const sum:number = num1+num2;
console.log(sum);

// Functions

function sumFunction(x:number, y:number):number{
    return x+y;
}

console.log( sumFunction(num1, num2));
// console.log( sumFunction(num1, num2, 7));
// console.log( sumFunction(num1, '5',));

function logArg(z:string):void{
    console.log(z);
    // return 6;
}
logArg('554');

function highFunc( func:Function, message:string):void{
    func(message);
}

highFunc(logArg, 'test');

// Type Aliases

type NumberArray = [number, number, number];

const numberArr:NumberArray = [1, 2, 3];
// numberArr.push(5);
// const numberArr2: NumberArray = [3, 4, 5, 2];


type Movie = {
    title: string,
    year: number,
    description: string
}


const movies:Movie[] = [{title: 'the matrix', year: 1999, description: 'lorem ipsum'}, {title: 'Barbie', year: 2023, description: 'lorem ipsum'}];

function logMovieTitle(moviesPar:Movie[]):void{
    moviesPar.forEach( movie=>{
        console.log( movie.title);
    })
}

logMovieTitle(movies);