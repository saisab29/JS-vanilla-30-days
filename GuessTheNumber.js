// //Constructor function
// function Alien(name, tech){
//     this.name = name;
//     this.tech = tech;

//     this.work = function(){
//         console.log("Solving bugs from 12 hours")
//     }
// }
// let alien1 = new Alien('Navin', 'JS');
// let alien2 = new Alien('Kiran', 'Java');

// alien1.tech = 'Blockchain';

// console.log(alien1);

// alien1. work();

// //Array Methods
// // let num = [1,2,3,4,34];
// // let b =  num.toString() //b is now a string
// // console.log(b)
// // let c = num.join("and");
// // console.log(c, typeof c);
// // // let r = num.pop() // returns the popped element
// // // console.log(num)//
// // // console.log(r)

// // // let r = num.push(56) //push returns the new array length
// // // console.log(num,r);

// // let r = num.shift()
// // console.log(r, num) //removes an element from the start of the array

// // let num1 = [1,2,3,4,5,6,7,8,9];
// // // delete num[0]
// // // console.log(num1.length);

// // let num2 = [11,12,13,14,15,16,17,18,19];

// // let newArray = num1.concat(num2)
// // console.log(newArray)
// // console.log(num1, num2);

// //sort method
// // let compare = (a,b)=>{
// // return a-b;
// // }
// // let num = [113,512,13,134,15,136,17,138,619];
// // num.sort(compare)
// // num.reverse()
// // console.log(num)

// //Splice and Slice
// // let num = [113,512,13,134,15,136,17,138,619];
// // let deletedValue = num.splice(2,0,1024,1025,1026,1024,1025);
// // console.log(typeof deletedValues)

// let num = [113,512,13,134,15,136,17,138,619];

// let newNum= num.slice(3,5)
// console.log(newNum)

//Loops With arrays
// let num = [3,54,1,2,4]
// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

//for each loop
// let num = [3,54,1,2,4]

// num.forEach((element) => {
//     console.log(element*element)
// });

// //Array.from
// let name = "Harry"
// let arr = Array.from(name)
// console.log(arr);

// //for .. of
// for ( let item of num){
//     console.log(item)
// }

// //for .. in
// for (let i in num){
//     console.log(i)
// }

// //Array Map Method
// let arr = [45,23,21]
// let a =arr.map((value, index, array)=>{
//     console.log(value, index, array)
//     return value + index

// })
// console.log(a);

// //Array Filter Method
// let arr2 = [45,23,21,0,3,5]
// let a2 = arr2.filter((a)=>{
//     return a<10

// })
// console.log(a2, arr2);

//Array reduce Method

// let arr3 = [1,2,3,5,2,1]
// let newarr3 = arr3.reduce((h1,h2)=>{
//     return h1 + h2
// })
// console.log(newarr3);

//Array Practice Sets

//Practice Problem 1

// let arr = [1,2,3,4,5,6,7,83]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// //Practice Problem 2
//  let arr = [1,2,3,4,5,6,7,83]
//  let a;
//  do{
//   a = prompt("Enter a number")
//  a = Number.parseInt(a)
//  arr.push(a)
//  console.log(arr)
//  }while(a!=0);

//  //Practice Problem 3
//  let arr1 = [1,2,30,40,5,60,7,830];
//  let n = arr1.filter((x)=>{
//     return x%10 == 0
//  })
//  console.log(n);

//   //Practice Problem 4
//   let arr1 = [1,2,30,40,5,60,7,830];
//   let n = arr1.map((x)=>{
//      return x*x
//   })
//   console.log(n);

//Practice Problem 5
//  let arr1 = [1,2,3,4,5];
//  let n = arr1.reduce((x1, x2)=>{
//     return x1*x2
//  })
//  console.log(n);

// Guess a random number

let x = Math.floor(Math.random() * 100 + 1);
let chances = 0;
let guess;
++chances;
guess = prompt("Enter a number between 1 and 100");
do {
  guess = Number.parseInt(guess);
  if (guess > x && guess < 100) {
    console.log("Your number is greater than the original number");
    guess = prompt("Enter again");
    guess = Number.parseInt(guess);
    ++chances;
  } else if (guess < x && guess > 0) {
    console.log("Your number is less than the original number");
    guess = prompt("Enter again");
    guess = Number.parseInt(guess);
    ++chances;
  }
} while (guess !== x);

let score = 100 - chances;

console.log(
  `"Congratulations you guessed the correct number and your score is ${score}
  }"`
);
