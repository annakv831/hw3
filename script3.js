const number1 = Number(prompt("Enter first number:"));
const number2 = +prompt("Enter second number:");
const whatOperand = prompt("What mathematical action do we do?");
var result;

switch(whatOperand){
    case  "+" :
        result = number1 + number2;
        alert("Result addition "+number1+" + "+number2+" = " + result);
        break;
    case "-":
        result = number1 - number2;
        alert("Result subtraction "+number1+" - "+number2+" = "+ result);
        break;
    case "*":
        result = number1*number2;
        alert("Result multiplication "+number1+" * "+number2+"= "+ result);
        break;
    case "/":
        result = number1/number2;
        alert("Result division "+number1+" : "+number2+"= " + result);
        break;
    default:
        alert("Something went wrong try again");       

}