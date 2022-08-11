function addTwoNumbers(x, y) {
  return x + y;
}
var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var time = convertHoursToMinutes(1);
console.log(time);

function getGreeting(name) {
  var fullGreeting = 'Hello' + ' ' + name;
  return fullGreeting;
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return 5 * (num1 + num2);
}
var product = addAndMultiplyBy5(2, 3);
console.log('product' + ' ' + 'is' + ' ' + product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var dividend = multiplyAndDivideBy5(10, 6);
console.log('dividend' + ' ' + 'is' + ' ' + dividend);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(7, 3);
console.log('difference' + ' ' + 'is' + ' ' + difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circumference = getCircleCircumference(5);
console.log('circumference' + ' ' + 'is' + ' ' + circumference);

function getFullName(firstname, lastname) {
  var fullName = firstname + ' ' + lastname;
  return fullName;
}
var Brandon = getFullName('Brandon', 'Au');
console.log(Brandon);

function cube(number) {
  return number * number;
}
var solution = cube(5);
console.log('solution' + ' ' + 'is' + ' ' + solution);
