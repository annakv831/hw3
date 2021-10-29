const num1 = Number(prompt('Enter first number'));
const num2 = Number(prompt('Enter second number'));
if (num1 > num2){
  alert(`Number ${num1} more  ${num2}`);
}
  else  
      if (num2 > num1){
        alert(`Number ${num2} more  ${num1}`);
  }
  else 
       if(num1===num2){
       alert('These numbers are equal ' );
  }    
    
  else {
       alert("Неизвестно какое число больше, так как вы ввели не число!") ; 
  }
        