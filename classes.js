class Calculator {

    constructor(){
        this.firstNumber = document.getElementById("firstNumber");
        this.secondNumber = document.getElementById("secondNumber");
        this.result = document.getElementById("result");
    }


    calcSum() {
         this.result.innerHTML = parseInt(this.firstNumber.value) + parseInt(this.secondNumber.value);
    }
    calcMinus(){
        this.result.innerHTML = parseInt(this.firstNumber.value) - parseInt(this.secondNumber.value);
    }
    calcDivideBy(){
        this.result.innerHTML = parseInt(this.firstNumber.value) / parseInt(this.secondNumber.value);
    }
    calcMultiplyBy(){
        this.result.innerHTML = parseInt(this.firstNumber.value) * parseInt(this.secondNumber.value);
    }
}

const calc = new Calculator();
console.log(calc.calcMultiplyBy());