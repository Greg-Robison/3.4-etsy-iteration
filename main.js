
//--------------QUESTION NUMBER ONE-------------
//Show me how to calculate the average price of all items.
//---------Please console.log the average.-------------

//this function maps the items list and pulls out the prices of each item and then
//puts it into an array
var prices = items.map(function(a){

  return a.price;
});

// --------console.log(prices);------------

//the next function adds up all the prices in the array and returns the total

var sum = prices.reduce(function(subtotal, price){
  return subtotal + price;
});

//---------- console.log(sum);-----------

//the next function takes the sum and divides it by the number of prices

var average = function(x, y){
  return Math.round(x / y * 100) /100;
};

console.log("Answer #1   " + "The average price is $" + average(sum, prices.length));

//--------------QUESTION NUMBER 2-------------------
//-------Show me how to get an array of items that---
//--------cost between $14.00 and $18.00 USD------

var filteredItems = items.filter(function(item) {
  return item.price > 14.00 && item.price < 18.00;
});
console.log(filteredItems);

//---------------QUESTION NUMBER 3----------------
//Show me how find the item with a "GBP" currency code and print its
//---name and price. Please console.log the one you find.-------

var currency = items.filter(function(curr){
  return curr.currency_code == "GBP";

});
// console.log(currency);

var conversion = currency.map(function(con){
  return con.title + " costs " + "\u20ac" + con.price;
});
console.log("Answer #3   " + conversion.join());



//----------------QUESTION NUMBER 4-----------------------
//---Show me how to find which items are made of wood.----
//---------Please console.log the ones you find.--------

var madeOf = items.filter(function(mat){
  if (mat.materials.includes("wood")){
  return mat.materials;
}
});
// console.log(madeOf);


var madeOfWood = madeOf.map(function(wood){
  return wood.title + " is made of wood";
});

// console.log('here', madeOfWood.join());

madeOfWood.forEach(function(item) {
  console.log("Answer #4   " +item)
})


//----------------QUESTION NUMBER 5-----------------------
//Show me how to find which items are made of eight or more materials.
//--------Please console.log the ones you find.-------------

var numOfMat = items.filter(function(matNum){
  return matNum.materials.length > 7;

});
// console.log('numOfMat', numOfMat);

var listNumOfMat =numOfMat.map(function(item){
  return item.title + item.materials;

})
// console.log(listNumOfMat);

listNumOfMat.forEach(function(item) {
  console.log("Answer #5   " +item);
})
//----------------QUESTION NUMBER 6-----------------------
//------Show me how to calculate how many items were------
//--------------made by their sellers---------------------

var madeBy =items.filter(function(item){
  return item.who_made == "i_did";
});
console.log("Answer #6   " +madeBy.length + " were made by their sellers");
