//complete this code
class Animal {
  constructor(species) {
    this._species = species;
  }

  // Getter for species
  get species() {
    return this._species;
  }

  // Method to make a sound
  makeSound() {
    console.log("Animal sound");
  }
}

// Subclass: Cat
class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

// Subclass: Dog
class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
