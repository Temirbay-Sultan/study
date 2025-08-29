
const display = document.getElementById("display");
const numbers = document.querySelectorAll(".btn");
const cleanAll = document.getElementById("clean");
const result = document.getElementById("result");
const minus = document.getElementById("minus");
const dot = document.getElementById("dot");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  document.getElementById(
    "clock"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  document
    .getElementById("clock")
    .setAttribute("datetime", `${hours}:${minutes}:${seconds}`);
}

updateClock();
setInterval(updateClock, 1000);

numbers.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (display.textContent === "0") {
      display.textContent = value;
    } else {
      display.textContent += value;
    }
    readNumber();
  });
});

function readNumber(){
  if (display.textContent.length > 9) {
      display.style.fontSize = "60px"; 
    } else {
      display.style.fontSize = "93px";
    }
}

cleanAll.addEventListener("click", () => {
  display.textContent = 0;
  display.style.fontSize = "93px";
});

result.addEventListener("click", () => {
  let res = display.textContent;
  res = res.replace(/=/g, "");

  res = res.replace(/×/g, "*");

  res = res.replace(/÷/g, "/");
  

  try {
    display.textContent = math.evaluate(res);
  } catch (err) {
    display.textContent = "Error";
    console.error(err);
  }
});

minus.addEventListener("click", () => {
  let expr = display.textContent;

  let match = expr.match(/(\d+)(?!.*\d)/);

  if (match) {
    let number = match[0];

    if (expr.includes(`(-${number})`)) {
      display.textContent = expr.replace(`(-${number})`, number);
    } else {
      let replaced = `(-${number})`;
      display.textContent =
        expr.slice(0, match.index) + replaced;
    }
  }
});

dot.addEventListener("click",() =>{

})



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

// const { log } = require("mathjs")

// const { log } = require("mathjs")

// import { isPositive } from "mathjs";

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

// function getLargest(nums) {
//   let max = nums[0];
//   let index = 0;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//       index = i;
//     }
//   }
//   return index;
// }

// function getSecondLargest(nums) {
//   let big = getLargest(nums);
//   for (let i = 1; i<nums.length; i++){
//     if(nums[i]==nums[big]){
//         delete nums[i];
//     }
//   }
//   return nums[getLargest(nums)];
// }

// function getSecondLargest(nums) {
//   let sorted = nums.slice().sort((a, b) => b - a);

//   for (let i = 1; i < sorted.length; i++) {
//     if (sorted[i] < sorted[0]) {
//       return sorted[i];
//     }
//   }

//   return undefined;
// }

// console.log(getSecondLargest([2, 69, 4, 56, 69]));

// const logMessage = (actionBefore, actionAfter) => {
//   actionBefore();
//   console.log("Hi");
//   actionAfter();
// }

// const f1 = () => console.log('before');
// const f2 = () => console.log('after');

// const validate = (hasAccess) =>
//   hasAccess
//     ? () => console.log("Доступ разрешен")
//     : () => console.log("Доступ запрещен");
// if (hasAccess) {
//   return () => console.log("Доступ разрешен");
// }
// return () => console.log("Доступ запрещен");
// };

// const user = {
//   login : 'iamsuperhero',
//   password: 'qwerty',
//   'registration date': '01.01.0200',
//   "last-auth": '05.03.2025',

//   age: 33,
//   isAdult : true,
//   job: null,
//   kids: undefined,
//   address: {
//     city: 'Алматы',
//     zipCode: '01222'
//   },
//   sayHi : () => console.log("Привет")
// }

// console.log(user.address, user['last-auth'])

// user.sayHi();

// const user = {}

// user.name = 'Sultan'

// user['is Developer'] = true;

// console.log(user)

// console.log('example' in user)

// for(const key in user){
//   console.log(key)
// }

// for(const key in user){
//   console.log(user[key])
// }

// let a = 23;
// let b = a

// b = 21

// console.log(a)

// function isPositive(){
//   try{

//   }
// }

// const obj1 = { name: "Alexander" };
// const obj2 = {...obj1}
// const obj2 = Object.assign({}, obj1)

// const obj2 = {
//   age: 28,
//   address: {
//     city: "Москва",
//   },
// };

// const obj3 = {
//   name: "Максим",
//   isDelivered: true,
//   address: {
//     zipCode: 122432,
//   },
// };

// const user = { ...obj1, ...obj2, ...obj3 };

// console.log(user);

// const logAddress = ({ city, street, houseNumber, apartmentNumber }) => {
//   console.log(`
//     Адрес: 
//     г. ${city}, ул. ${street}
//     д. ${houseNumber} кв. ${apartmentNumber}
//     `);
// };

// logAddress({
//   city: "Moscow",
//   street: "Пушкина",
//   houseNumber: 25,
//   apartmentNumber: 34,
// });



// const user = {
//   name: "Александр",
// };

// const admin = {
//   name: "Boss",
// };

// const {name : UserName} = user
// const {name : AdminName} = admin

// console.log(UserName)
// console.log(AdminName)

// console.log("global", this);


// function newqw(){
//   console.log("asas",this)
// }


// newqw();


// const user = {
//   name: "Александр",
//   age:28,
//   logThis() {
//     console.log('this в теле метода объекта user', this)
//   },
//   address: {
//     city : 'Almaty',
//     zipcode: 1234,
//     logInnerThis(){
//       console.log('this в теле метода объекта address', this)
//     }
//   }
// }

// user.logThis()
// user.address.logInnerThis()



// const user = {
//   name: "Александр",
//   age : 298,
//   logThis () {
//     console.log("this в теле метода объекта ", this)
//   },
// }


// user.logThis()


// const user1 = {name : "Alex"}
// const user2 = {name: "Space"} 


// function logInfo(){
//   console.log("this:" ,this)
//   console.log("this.name" ,this.name)
// }
// user1.logName = logInfo
// user2.logName12 = logInfo


// user1.logName()
// user2.logName12()




// const calculator = {
//   read() {
//     this.a = Number(prompt("Введите первое число", 0))
//     this.b = Number(prompt("Второе первое число", 0))
//   },
//   sum(){
//     return this.a + this.b;
//   },
//   mul(){
//     return this.a * this.b;
//   }
// }

// calculator.read()
// console.log("calculator" , calculator)
// console.log("сумма" , calculator.sum())
// console.log("произведение" , calculator.mul())


// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     console.log("текущая ступенька ", this.step);
//     return this;
//   },
// };


// ladder.up().up().down().showStep().down().showStep(); // показывает 1 затем 0

//let wer = 123.34444

// console.log(wer.toFixed(9))
// console.log((98.9892).toFixed(4))

// console.log(Math.pow(2,4))

// function solution(number){
//   let count = 0;
//   if(number<0){
//     return 0;
//   }
//   for(let i = 0; i<number; i++){
//     if(i%3==0 || i%5==0){
//       count+=i;
//     }
//   }
//   return count;
// }

// console.log(solution(10))

// function pass(string){
//   let test = "hgfddsax"
//   //console.log(string.at(-1));
//   //console.log("a"==string[3])
//   console.log(string.indexOf(test[7]))
// }

// pass("aasdfghj")

// function isPangram(string) {
//   let a = "abcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < a.length; i++) {
//     if (string.indexOf(a[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

//console.log(isPangram("This is not a pangram."));

//дэструктизация
// const data = ["Alex", 34];

// const [name, age] = data;

// //console.log("name", name);
// //console.log("age", age);

// const letters = ['a','b','c','d','f','g']
// letters.forEach((element, index, array) =>{
//   //console.log(element)
//   console.log(array)
// })


// const users = [
//   {
//     name: 'Alex',
//     age : 28
//   },
//   {
//     name: 'mixail',
//     age: 34
//   },
//   {
//     name:'Masha',
//     age : 99
//   },
//   {
//     name:'Masha',
//     age : 1
//   },
//   {
//     name:'Masha',
//     age : 23
//   },
// ]

// let userArray = [34,36,32,76,311,12]

// console.log(
//   users.findIndex ((user) => user.name ==='Masha')
//   //findLastIndex
// )

// console.log(userArray.includes(34))

// console.log(
//   users.some((user) => user.name=== 'Masha')
// )

// console.log(
//   users.every((user)=> user.age >= 18)
// )

// const ageSum = users.reduce((sum,user) =>{
//   return sum + user.age
// },0)


// console.log(ageSum/users.length)


// const user = {
//   name : 'Александр',
//   age: 28,
//   city: 'Москва',
// }

// const data = new Map()

// const userValues = Object.entries(user)

// //console.log('UserValues', userValues)

// data.set(1,'Один как число')
// data.set('1','Один как строка')

// console.log(data.get(1))
// console.log(data.get('1'))


















