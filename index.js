//1. Write a function called returnIsNumber that will return if the number parameter is a positive. negative or zero.

const returnIsNumber = () => {
  let num = prompt("Please enter any number");

  if (isNaN(num)) {
    console.log("Invalid input: not a number");
  } else if (num < 0) {
    console.log("The entered number is negative");
  } else if (num > 0) {
    console.log("The entered number is positive");
  } else {
    console.log("The entered number is zero");
  }
};
returnIsNumber();

//2. write a function that changes the Celsius to Fahrenheit:

const returnCelsiusToFahrenheit = () => {
  
  let celsius = prompt("Please enter the temperature in Celsius.");
  
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`The temperature in Fahrenheit is ${fahrenheit} .`);
};

returnCelsiusToFahrenheit();


//3. A function that calculates area of a circle.


const calculateCircleArea = () => {
  radius = prompt ("Please enter the radius of the circle");
  const area = Math.PI * radius * radius;
  console.log (`The area of the Circle is ${area} .`)
  };
calculateCircleArea ();


//4.write a function that calculates simple interest rate.


const calculateSimpleInterest = () => {
  let principal = parseFloat(prompt("Please enter the principal amount"));
  let rate = parseFloat(prompt("Please enter the market interest rate")) / 100;
  let time = parseFloat(prompt("Please enter the duration of time the money will be deposited"));

  const interest = principal * rate * time;
  const totalAmount = principal + interest;

  console.log(`The interest is $${interest.toFixed(2)} and the total amount is $${totalAmount.toFixed(2)}`);
};

calculateSimpleInterest();

//5. Write a function that calculates amount of discount and selling price after discount.

const calculateDiscount = () => {
  let price = parseFloat(prompt("Please enter the price before discount"));
  let discountRate = parseFloat(prompt("Please enter the discount rate as a percentage"));

 // calculate the discount amount and the sales price after discount
  const discountAmount = price * (discountRate / 100);
  const salesPrice = price - discountAmount;

  console.log(`The discount amount is $${discountAmount.toFixed(2)} and the sales price is $${salesPrice.toFixed(2)}.`);
};

calculateDiscount();