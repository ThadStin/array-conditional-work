// console.log('inside loops and conditionals')

// for(let step = 0; step < 5; step += 1){
//   console.log('Walking east one step', step)
// }


// modulus...looping...conditionals...
// pseudocode
// INITIALIZE a variable for sum and set to 0
// ITERATE a loop starting from 1 and going to 10
// DETERMINE if the current number is even
// IF it is even
//   INCREMENT sum by the even number
// END IF

// let sum = 0;
// let numOfEvenNumbers = 0
// for(let i = 1; i < 11; i += 1){
//   if(i % 2 === 0) {
//     sum += i
//     numOfEvenNumbers += 1
//   }
// }
// console.log('this is sum', sum, numOfEvenNumbers)


// let carTotal = 16.07
// // Math is the global object
// let roundedUpCart = Math.ceil(carTotal)
// let donation = (roundedUpCart - carTotal).toFixed(2)
// //console.log(donation)
// let rand = Math.random() * 25
// console.log(Math.ceil(rand))


// let animal = 'cow';
// if (animal = 'cow') {
//   console.log('moo');
// };
//
// // let quotes = ['Hi', 'Bye', 'stop']
// // console.log(quotes);
// //
// // const randomThings = [1, 10, "Hello", true]
// // console.log(randomThings [0]);
// // randomThings[2] = 'World';
// // console.log(randomThings [2]);
// //
// // const ourClass = ["Stan Lee", "Zoom", "Github", "Slack"]
// // console.log(ourClass[2]);
// ourClass[2] = 'Octocat'
// // ourClass.push = ('Cloud City');
// // console.log(ourClass);
//
// const myArray = [5 ,10 ,500, 20]
// myArray.push = ('Egon');
// myArray.pop();
// myArray.unshift('Bob Marley');
// myArray.shift()
// myArray.reverse()
// console.log(myArray);
//
// if (i < 100) {
//   console.log('little nnumber');
// } else
// if (i < 5) {
//   console.log('little number');
// } if (i > 10) {
//   console.log('big number');
// } else {
//   console.log('monkey');
// }
//
// const faveFood = ['steak', 'pizza', 'beer'];
// faveFood[0]
//
// const numbers = [21, 18, 5, 3, 2, 1, 1]
// numbers[2] = null;
// numbers[0] = numbers[0] *= 10;
// console.log(numbers);

const drSeuss = ["Cat in the Hat", "Green Eggs and Ham", "Grinch", "Thing One", "Thing Two", "Cindy Loo Who", "JoJo McDodd"];

// for (let i = 0; i < drSeuss.length; i += 1) {
//   console.log(drSeuss[i]);
// }
//
// for (let i = 0; i < drSeuss.length; i += 2) {
//   console.log(drSeuss[i]);
// }

// for (let i = 0; i < drSeuss.length; i += 2) {
//   console.log(drSeuss[i] + []);
//}
for (let i = 0; i < drSeuss.length; i += 1) {
  if (i % 2 !== 0) {
    console.log(i);
    console.log(drSeuss[i]);
  }
}
