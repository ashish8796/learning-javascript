// Suggested exercises:
// 1) Create a TV class with properties like brand, channel and volume.
//     Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// 2) Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 3) Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set channel 60 the TV will stay at the current channel.
// 4) Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it from the constructor).
// 5) It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8, volume 75".

//Making a object tv and adding the methods in the prototype of the constructor of the object.
//A constructor function 
function TvCreator(brand) {
  this.brand = brand;
  this.channel = 1;
  this.volume = 50;
}

TvCreator.prototype.increaseVolume = function () {
  return this.volume < 100 ? ++this.volume : this.volume;
}
TvCreator.prototype.decreaseVolume = function () {
  return this.volume > 0 ? --this.volume : this.volume;
}
TvCreator.prototype.changeChannel = function (channel) {
  this.channel = channel <= 50 ? channel : this.channel;
  return this.channel;
}
TvCreator.prototype.resetTv = function () {
  this.channel = 50;
  this.volume = 1;
}
TvCreator.prototype.tvStatus = function () {
  return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
}
 
//A new tv object with initial values
let tv = new TvCreator("sony");

//Making a class tv
class Tv {
  constructor (brand){
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }

  increaseVolume(){
    return this.volume < 100 ? ++this.volume : this.volume;
  }
  decreaseVolume() {
    return this.volume > 0 ? --this.volume : this.volume;
  }
  changeChannel(channel) {
    this.channel = channel <= 50 ? channel : this.channel;
    return this.channel;
  }
  resetTv() {
    this.channel = 50;
    this.volume = 1;
  }
  tvStatus() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

let tv = new Tv('Sony');

//ShoppingCart Excercise
//1) In shoppingCart, define a method totalPrice() that returns the total amount of the products it contains.

// 2) Now let's say that, if you buy 5 products or more, you have a 10% of discount. Change totalPrice to reflect this calculation.

// 3) Besides the previous discount, if you buy 3 items of the same type (e.g. 3 pencils) you may get one more for free. So, if you buy 4 pencils you only pay 3, if you buy 8 pencils you only pay 6, etc. Change totalPrice so it considers the free items you get. Notice that if you buy 3 pencils you just pay the 3 of them.

// 4) Sometimes a product is sold out and has to be replaced by a new one. Add a method replace(productName, replacementProduct) that looks for products with productName and replaces them by new instances of the product like replacementProduct. Notice that productName is a string, and replacementProduct is a Product. Also, bear in mind that you don't have to add the replacementProduct itself to the cart, but create new products like that one (whenever necessary).

function ShoppingCartCreator () {
  
}