// const numbers = [43, 63, 236, 547, 23, 65, 3];

// const highest = Math.max(...numbers);
// console.log(highest);

// console.log(numbers);
// console.log(...numbers);
// console.log(43, 63, 236)

// // console.log( Math.max(2000000, 3, 600));


// const moreNumbers = [10, 20, 30, ...numbers , 40];
// console.log(moreNumbers);


// const obj1 = {
//     p1: 'från objekt 1'
//   }
  
//   const obj2 = {
//     p2: 'från objekt 2',
//     p3: 'också från objekt 2'
//   }
  
  
//   const obj3 = {...obj1, ...obj2};

//   console.log(obj3) //Innehåller egenskaperna p1, p2, p3

let a = 10;
const b = a;
a=0;
console.log(a, b);

const arr1 = [1, 1, 1, 1, 1];
const arr2 = [...arr1];
arr1[0] = 0;

console.log(arr1, arr2);