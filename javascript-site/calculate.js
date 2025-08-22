// function getGrade(score) {
//     let grade;
//     if(25<score && score <=30){
//         grade = "A";
//     }
//     else if (score>20 && score <=25){
//         grade = "B";
//     }
//     else if (score > 15 && score <= 20){
//         grade = "C";
//     }
//     else if (score > 10 && score <= 15){
//         grade = "D";
//     }
//     else if (score > 5 && score <= 10){
//         grade = "E";
//     }
//     else if (score > 0 && score <= 5){
//         grade = "F";
//     }

//     return grade;
// }

// function getLetter(s) {
//   let letter;
//   const first = s[0].toLowerCase();
//   // Write your code here
//   switch (s) {
//     case s:
//       let A = ["a","e","i","o","u"];
//       for (let x of A){
//         if(x ===first){
//             letter = "A";
//         }
//       }
//   }

//   return letter;
// }

// console.log(getLetter("bdfgt"));

// let n = Number(prompt("Введите количество чисел:"));
//   let arr = prompt("Введите числа через пробел:").split(" ").map(Number);

//   console.log("n =", n);
//   console.log("arr =", arr);

function getLargest(nums) {
  let max = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }
  return index;
}

// function getSecondLargest(nums) {
//   let big = getLargest(nums);
//   for (let i = 1; i<nums.length; i++){
//     if(nums[i]==nums[big]){
//         delete nums[i];
//     }
//   }
//   return nums[getLargest(nums)];
// }

function getSecondLargest(nums) {
  let sorted = nums.slice().sort((a, b) => b - a);

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] < sorted[0]) {
      return sorted[i];
    }
  }

  return undefined;
}

console.log(getSecondLargest([2, 69, 4, 56, 69]));
