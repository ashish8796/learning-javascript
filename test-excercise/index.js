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
