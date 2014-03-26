console.log("Welcome to node.js!!");
var numbers = [1,2,3,4,5,6,7,8,9];
var evenNumbers = numbers.filter(function(n) { return n % 2 === 0; });
evenNumbers.forEach(function(n){ console.log(n)});