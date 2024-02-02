"use strict";

/*
    File:   student_example_new.js
    Author: Michael Grzesina (grzesinam)
    Course: CWEB 190
    Date:   Winter 2024
    Purpose: Demonstrate objects with Students
*/


/**
 * Class to represent a student using new ES2015+ notation
 */
class Student {
    // Listing properties is optional - will be created by constructor anyway
    /**
     * Student's first name
     */
    first;

    /**
     * Student's middle name
     */
    middle;

    /**
     * Student's last name
     */
    last;

    /**
     * Student's mark
     */
    mark;


    /**
     * Constructor to create a new student object
     *
     * @param first     Student's first name
     * @param middle    Student's last name
     * @param last      Student's middle name
     * @param mark      Student's mark
     */
    constructor(first, middle, last, mark) {
        this.first = first;
        this.middle = middle;
        this.last = last;
        this.mark = mark;
    }


    /**
     * Returns a string representation of the invoking student.
     *
     * @returns {string}    String showing properties of the invoking student
     */
    toString() {
        return this.first + " " + this.middle + " " + this.last
            + " has a mark of " + this.mark;
    }


    /**
     * Returns a string with the initials of the invoking student.
     *
     * @returns {string}    String showing the initials of the invoking student
     */
    initials() {
        return this.first.charAt(0) + this.middle.charAt(0) + this.last.charAt(0);
    }
}


// Code to create/invoke student objects uses new keyword
// Note that we can have other code inside a file containing a class definition
let student1 = new Student("Michael", "Andrew", "Grzesina", 80);
let student2 = new Student("Coralee", "", "Kaban", 80);

console.log(student1);
console.log(student2);

document.getElementById("output").innerHTML = "<p>" + student1.toString() + "<br />"
    + student1.initials() + "</p>";
document.getElementById("output").innerHTML += "<p>" + student2.toString() + "<br />"
    + student2.initials() + "</p>";
