//literal object
var my_car = {
	brand: "Prius",
	wheels: 4
}
my_car.brand
//"Prius"//

//creating an object through a function
function Car(brand, wheels){
	this.brand = brand;
	this.wheels = wheels;
	this.friendly_brand = function(){
		return "Your car's brand is " + this.brand;
	}
}

//creating a new instance of Car known as my_car
var my_car = new Car("toyota", 4)

//my_car.brand
//"toyota"
//my_car.wheels
//4

var some_other_car = new Car("maserati",4);

Car.prototype.unfriendly_brand = function() {
	return "This car's dumb brand is " + this.brand;
}
var keys = Object.keys(my_car);

var getKeys = function(Car){
	var keys = [];
	for(var key in Car){
		keys.push(key);

}
console.log(keys);
}
function Multiplier(array){
	this.array = array; 
	

	this.multiply = function() {
		var sum = 0;
		var sumNew = 1;
		console.log(sum)
		var mult = _.map(this.array, function(num){return num * 2;});
		console.log(mult);
		while (sum < 10000){
			sum = _.reduce(mult, function(memo, num){return memo + num;},0);
			console.log(sum);
			var multe = _.map(mult, function(num){return num * sum;});
			console.log(multe);
			this.array = multe;
			sum = _.reduce(multe, function(memo, num){return sum + num;},0);
			console.log(sum);
			}
	}

	this.getCurrentValue = function() {
		return this.multiply();
	}
}

fun = new Multiplier([1,2,3,4]);
$(document).ready(function(){
fun.multiply();
fun.getCurrentValue();

})



