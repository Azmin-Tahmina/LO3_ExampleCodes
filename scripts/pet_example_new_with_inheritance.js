"use strict";

/*
    File:   pet_example_new_with_inheritance.js
    Author: Michael Grzesina (grzesinam)
    Course: CWEB 190
    Date:   Winter 2024
    Purpose: Practice creating pet objects and using inheritance
*/


// using new ES2015 syntax
/**
 * Class to represent pets
 */
class Pet {
    /**
     * Pet's name
     */
    name;

    /**
     * Type of pet (such as cat, dog, fish)
     */
    animalType;

    /**
     * Boolean indicating whether pet is licensed
     */
    licensed;


    // create constructor function using constructor keyword
    /**
     * Constructor for Pet objects
     *
     * @param name      Name of the pet
     * @param type      Type of pet
     * @param licensed  Boolean indicating whether pet is licensed
     */
    constructor(name, type, licensed) {
        this.name = name;
        this.animalType = type;
        this.licensed = licensed;
    }


    // methods go inside the class definition
    /**
     * Returns a string representation of the invoking Pet.
     *
     * @returns {string}    a string with the properties of the invoking pet
     */
    toString() {
        return this.name + " is a(n) " + this.animalType + " whose licensed status is " + this.licensed;
    }


    /**
     * Gives the sound made by the invoking pet.
     *
     * @returns {string}    sound made by the invoking pet
     */
    makesSound() {
        return this.name + " the " + this.animalType + " makes noise.";
    }
}


/**
 * Class to represent dogs as a child of the Pet class
 */
class Dog extends Pet { // use the extends keyword to create a subclass
    /**
     * Boolean indicating whether dog is dangerous
     */
    dangerous;


    /**
     * Constructor for Dog objects
     *
     * @param name          Name of the dog
     * @param licensed      Boolean indicating whether dog is licensed
     * @param dangerous     Boolean indicating whether dog is dangerous
     */
    constructor(name, licensed, dangerous) {
        super(name, "dog", licensed); // makes a call to the parent's constructor with super
        // Note the pet type is always set to "dog"
        this.dangerous = dangerous;
    }


    /**
     * Gives the sound made by the invoking dog,
     * which depends on whether it is dangerous
     *
     * @returns {string}    sound made by the invoking dog
     */
    makesSound() {
        return this.name + " the dog "
            + (this.dangerous ? "barks angrily." : "says woof and wags its tail.");
    }
}


/**
 * Class to represent fish as a child of the Pet class
 */
class Fish extends Pet { // use the extends keyword to create a subclass
    /**
     * species of the fish
     */
    species;


    /**
     * Constructor for Fish objects
     *
     * @param name          name of the fish
     * @param licensed      Boolean indicating whether fish is licensed
     * @param species       species of the fish
     */
    constructor(name, licensed, species) {
        super(name, "fish", licensed); // makes a call to the parent's constructor with super
        // Note the pet type is always set to "fish"
        this.species = species;
    }


    /**
     * Gives the sound (or lack thereof) made by the invoking fish,
     * indicating its species
     *
     * @returns {string}    sound made by the invoking fish
     */
    makesSound() {
        return this.name + " the " + this.species + " swims silently.";
    }
}


// create a Pet object using the new operator
let pet1 = new Pet("Fluffy", "cat", false);
console.log(pet1);
document.getElementById("output").innerHTML = "<p>" + pet1.toString() + "</p>"
        + "<p>" + pet1.makesSound() + "</p>";

// Creates a Dog object
let dog1 = new Dog("Fido", true, false);
console.log(dog1);
document.getElementById("output").innerHTML += "<p>" + dog1.toString() + "</p>"
    + "<p>" + dog1.makesSound() + "</p>";

// Creates a Fish object
let fish1 = new Fish("Cuddles", false, "goldfish");
console.log(fish1);
document.getElementById("output").innerHTML += "<p>" + fish1.toString() + "</p>"
    + "<p>" + fish1.makesSound() + "</p>";
