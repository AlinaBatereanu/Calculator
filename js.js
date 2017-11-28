 function multiplyBy()
   {
       num1 = parseInt(document.getElementById("firstNumber").value);
       num2 = parseInt(document.getElementById("secondNumber").value);
       document.getElementById("result").innerHTML = num1 * num2;
   }

   function divideBy()
   {
       num1 = parseInt(document.getElementById("firstNumber").value);
       num2 = parseInt(document.getElementById("secondNumber").value);
       document.getElementById("result").innerHTML = num1 / num2;
   }
   function add()
   {
       num1 = parseInt(document.getElementById("firstNumber").value);
       num2 = parseInt(document.getElementById("secondNumber").value);
       document.getElementById("result").innerHTML = num1 + num2;
   }
   function minus()
   {
       num1 = parseInt(document.getElementById("firstNumber").value);
       num2 = parseInt(document.getElementById("secondNumber").value);
       document.getElementById("result").innerHTML = num1 - num2;
   }