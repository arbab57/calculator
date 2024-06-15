const screen = document.querySelector('#screen');


function numberFunction(inputNum) {
    
screen.value += inputNum;

};

function clearFunction() {
    screen.value = "";
}

function calculate() {
    screen.value = eval(screen.value);
}

const btnMenu = document.querySelector('#btn-menu');
const btnLight = document.querySelector('#btn-light');
const btnDark = document.querySelector('#btn-dark');
const conOpt = document.querySelector('#con-opt');

const body = document.querySelector('#body');
const calc = document.querySelector('#calc');
const conScreen = document.querySelector('#con-screen')

isOn = false;

btnMenu.addEventListener("click", function() {
menuu()


});

function menuu(){
    
    if (isOn) {
        btnLight.style.display = "none";
        btnDark.style.display = "none"; 
        isOn = false;
    }else {
        btnLight.style.display = "block";
    btnDark.style.display = "block"; 
    isOn = true;
    btnMenu.innerText = "Theme"
    }
}

btnLight.addEventListener("click", function() {

body.classList.add('body-light')
calc.classList.add('calculator-light')
screen.classList.add('scr-light')
btnMenu.innerText = "Light"
menuu()
btnLight.style.backgroundColor = "gray";
btnDark.style.backgroundColor = "black";

});

btnDark.addEventListener("click", function() {

    body.classList.remove('body-light')
    calc.classList.remove('calculator-light')
    screen.classList.remove('scr-light')
    btnMenu.innerText = "Dark"
    menuu()
    btnLight.style.backgroundColor = "black";
    btnDark.style.backgroundColor = "gray";
    
    });




