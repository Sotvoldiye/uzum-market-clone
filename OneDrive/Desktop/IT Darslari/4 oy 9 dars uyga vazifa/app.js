// const numbers = [4, 5, 6, 7, 8, 9, 10];
// const newNumber = [];

// for(let i =0; i < numbers.length; i++) {
//   newNumber.push(numbers[i] ** 2);
// }

// console.log(newNumber)

// const numbers = [1, 2, 3, 4, 5, 6, 3, 2, 1];
// const resultNumber = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (!resultNumber.includes(numbers[i])) {
//     resultNumber.push(numbers[i]);
//   }
// }

// console.log(resultNumber);

// let ism = "Umidaxon".split("");
// let reverseName = [];

// for (let i = 0; i < ism.length; i++) {
//   reverseName.unshift(ism[i]);
// }

// console.log(reverseName.join(""));

// let text =
// "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque architecto, nam odit sapiente veniam omnis voluptatem vero recusandae, ratione libero itaque deserunt iste aperiam nihil debitis dignissimos reprehenderit non dolore!".split("");

// let reversedText = 0;

// for (let i = 0; i < text.length; i++) {
//   if("a" == text[i]){
//     reversedText++
//   }
// }

// console.log(reversedText);

let numbers = [];

for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}

console.log(numbers);
