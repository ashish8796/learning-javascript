function Animals(name, legs) {
  this.name = name;
  this.legs = legs;  
}

let animal1 = new Animals("rabbit", 4)
animal1.run = "fast";
animal1.name = "dog";

let animal2 = new Animals ("cow", 4);
animal2.givesMilk = true;

console.log(animal1)
console.log(animal2)