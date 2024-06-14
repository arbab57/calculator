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



