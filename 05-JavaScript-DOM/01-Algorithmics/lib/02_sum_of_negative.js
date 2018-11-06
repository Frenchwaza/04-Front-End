function sumOfNegative(numbers) {
  // TODO: You are getting an array `numbers`. Return the sum of **negative** numbers only.

//   let sum = 0;
//   for(let i = 0; i <= numbers.length; i++){
//     if(numbers[i] < 0)
//     {
//       sum += numbers[i];
//     }
//   }
//   return sum;
// }

let sum = 0;
numbers.forEach((number) => {
  if (number < 0) sum += number;
});
return sum;
}



module.exports = sumOfNegative; // Do not remove.
