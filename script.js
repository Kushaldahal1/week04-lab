// question 1

var input = prompt("Enter a number");
if (input % 5 == 0 ){
  text = "Given number is multiple of 5"
}else{
  text = "Given number is not a multiple of 5"
};

console.log(text);

// question 2
let score;
var grade = prompt("Enter your grade");
if ( grade<=100 && grade>=80){
  score = "A";
}else if(grade<=79 && grade>=70){
  score = "B";
}else if( grade<=69 && grade>=60){
  score = "C";
}else if( grade<=59 && grade>=50){
  score = "D";
}else{
  score = "F";
}
console.log("Your score is", score);


// calculator
function calculator(num1, num2, operator){
  switch(operator){
    case "+":
      console.log(num1 + num2);
      break;
    case "-":
      console.log(num1 - num2);
      break;
    case "*":
      console.log(num1 * num2);
      break;
    case "/":
      console.log(num1 / num2);
      break;
    default:
      console.log("Invalid input! Please enter a valid operator");
      break;
  }
}

calculator(5, 2, '+');
calculator(5, 2, '-');
calculator(5, 2, '*');
calculator(5, 2, '/');
calculator(5, 2, '&');

// fizzbuzz
for (let i = 1; i <= 100; i++) {
  
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }else if(i % 3 == 0){
    console.log("Fizz");
  }else if(i % 5 == 0){
    console.log("Buzz");
  }else{
    console.log(i);
  }
  
}