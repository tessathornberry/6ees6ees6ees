/*Work within the src/es6/ folder
Capitalize your function name to indicate to others that it is intended to be run with the keyword new
Use the keyword new when instantiating your class
Use the keyword this in your constructor
Explicitly declare a class method named constructor
Declare all other class methods within the class declaration

class Giraffe {
  constructor(name, height) {
    this.name = name;
    this.height = height;
    this.hunger = 10;
  }

  isTallEnough(treeHeight) {
    return this.height > treeHeight;
  }

  isHungry() {
    return this.hunger > 0;
  }

  say(option) {
    var sentences = {
      'greet': 'Hello, my name is ' + this.name + ', it is nice to meet you.',
      'notHungry': this.name + ' is not hungry.',
      'notTallEnough': this.name + ' is too short to reach the trees.',
      'ate': 'That was delicious!'
    };

    return console.log(sentences[option]);
     Create a Grub class, in ES6 style, with:
 an age property that is set to 0
 a color property that is set to pink
 a food property that is set to jelly
 an eat method that returns 'Mmmmmmmmm jelly'
  }*/

class Grub {
  constructor() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }

  eat() {
    return 'Mmmmmmmmm jelly';
  }
}


// Grub.prototype.eat = function() {
//   return this.food;
// };

// var Bee = function() {
//   Grub.call(this);
//   this.age = 5;
//   this.color = 'yellow';
//   this.job = 'keep on growing';
// };

// Bee.prototype = Object.create(Grub.prototype);
// Bee.prototype.constructor = Bee;