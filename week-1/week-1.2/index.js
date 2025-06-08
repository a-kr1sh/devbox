console.log("Hello world")

// Var, Let, Const
var var1 = "Helo from var"
console.log( var1)

let let1 = "hello from let"
console.log(let1)

const const1 = "hello from const"
console.log(const1)

// 
let firstName = "krish"
let age = 19
let isMarried = true;

console.log("this persont name is " + firstName + "their age is " + age);

//////
if (isMarried == true){
    console.log(firstName + " is Married!")
}else{
    console.log(firstName + " is not Married!")
}

// Arrays 
const ages = [21, 22, 23, 24, 25];
const numberOfPeople = ages.length;

for (let i = 0; i < numberOfPeople; i++){
    if (ages[i] % 2 == 0){
        console.log(ages[i])
    }
}

// objects 
const allUser = [
    {
        nameOfUser : "Krish",
        age: 19,
        gender: "male"
    },
    {
        nameOfUser : "Raj",
        age: 21,
        gender: "male"
    },
    {
        nameOfUser : "Priya",
        age: 20,
        gender: "female"
    }
]

for (let i = 0; i<allUser.length; i++){
    if (allUser[i]['gender'] == "male"){
        console.log("the name is " + allUser[i].nameOfUser)
    }
}

// Function
function sum(a, b){
    const sumValue = a + b;
    return sumValue; 
}

const value = sum(1, 2);
console.log(value) 

// callbacks 
function sumOfCallBacks(num1, num2, fnTocall){
    let result = num1 + num2;
    fnTocall(result)
}
function displayResult(data){
    console.log("Result of the sum is " + data);
}
function displayResultPassive(data){
    console.log("Result of the sum is " + data);
}

const ans = sumOfCallBacks(1, 2, displayResult)

// another example
function calculateArithmatic(a, b, arithmaticFinalFunction){
    const ans = arithmaticFinalFunction(a, b);
    return ans;
}

function sum(a, b){
    return a + b;
}

const value1 = calculateArithmatic(1, 2, sum);
console.log(value1);

// setTimeOut, setInterval