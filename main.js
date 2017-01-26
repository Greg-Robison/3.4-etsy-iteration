//this function maps the items list and pulls out the prices of each item and then
//puts it into an array
var prices = items.map(function(a){

  return a.price;
});

console.log(prices);

//the next function adds up all the prices in the array and returns the total

var sum = prices.reduce(function(subtotal, price){
  return subtotal + price;
});

console.log(sum);

//the next function takes the sum and divides it by the number of prices

var average = function(x, y){
  return x / y
};

console.log(average(sum, prices.length));
