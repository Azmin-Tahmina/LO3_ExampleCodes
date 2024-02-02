"use strict";

/*
    File:   pet_example_new.js
    Author: Michael Grzesina (grzesinam)
    Course: CWEB 190
    Date:   Winter 2024
    Purpose: Practice use of the class notation in ES2015+ using pets
*/


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


/* Create Pet objects using the new operator */
let pet1 = new Pet("Fluffy", "cat", false);
let pet2 = new Pet("Fido", "dog", true);
console.log(pet1);
console.log(pet2);
document.getElementById("output").innerHTML = "<p>" + pet1.toString() + "</p>"
    + "<p>" + pet1.makesSound() + "</p>";
document.getElementById("output").innerHTML += "<p>" + pet2.toString() + "</p>"
    + "<p>" + pet2.makesSound() + "</p>";
