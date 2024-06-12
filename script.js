const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const btn6 = document.querySelector('#btn6');
const btn7 = document.querySelector('#btn7');
const btn8 = document.querySelector('#btn8');
const btn9 = document.querySelector('#btn9');
const btn0 = document.querySelector('#btn0');
const btnC = document.querySelector('#btnC');
const btnD = document.querySelector('#btnD');
const btnM = document.querySelector('#btnM');
const btnE = document.querySelector('#btnE');
const btnMI = document.querySelector('#btnMI');
const btnP = document.querySelector('#btnP');
const btnEQ = document.querySelector('#btnEQ');
const screen = document.querySelector('#screen');


let num1 = "";
let numbers = [];




function numberFunction(inputNum) {

numbers.push(inputNum);
num1 = num1 + numbers.shift();


screen.innerText = num1;

};

let op;
let realNum1;
let realNum2;
let answer = 0;


function opFunction(sign) {


if (sign === 25) {
    screen.innerText = 0;
    num1 = "";
    screen.innerText = num1; 
    numbers = [];
    console.log("hii")
}
else if (sign === 21) {
    realNum1 = Number(num1);;
    op = 21;
    num1 = "";
    screen.innerText = num1;
}

else if (sign === 22) {
    realNum1 = Number(num1);;
    op = 22;
    numbers = [];
    num1 = 0;
    screen.innerText = num1;
}

else if (sign === 23) {
    realNum1 = Number(num1);;
    op = 23;
    numbers = [];
    num1 = 0;
    screen.innerText = num1;
}

else if (sign === 24) {
    
    realNum1 = Number(num1);
    op = 24;
    numbers = [];
    num1 = 0;
    screen.innerText = num1;
}


else if (sign === 27) {
    realNum2 = Number(num1);

    if (op === 21) {
        answer = realNum1 / realNum2;
    } 

    if (op === 22) {
        answer = realNum1 * realNum2;
    } 

    if (op === 23) {
        answer = realNum1 - realNum2;
    } 

    if (op === 24) {
        answer = realNum1 + realNum2;
    } 

numbers = [];
num1 = "";
    
console.log(realNum1, typeof realNum1)
console.log(realNum2, typeof realNum2)
    screen.innerText = answer;
    
}



   
}
