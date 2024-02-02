"use strict";

/*
    File:   student_example_old.js
    Author: Michael Grzesina (grzesinam)
    Course: CWEB 190
    Date:   Winter 2024
    Purpose: Demonstrate objects with Students
*/

/**
 * Constructor for Student object
 *
 * @param first     Student's first name
 * @param middle    Student's middle name
 * @param last      Student's last name
 * @param mark      Student's mark
 * @constructor
 */
function Student(first, middle, last, mark) {
    this.first = first;
    this.middle = middle;
    this.last = last;
    this.mark = mark;
}


/**
 * Returns a string representation of the invoking student
 *
 * @returns {string}    String showing properties of the invoking student
 */
Student.prototype.toString = function() {
    return this.first + " " + this.middle + " " + this.last + " has a mark of " + this.mark;
};


/**
 * Returns a string with the initials of the invoking student
 *
 * @returns {string}    String showing the initials of the invoking student
 */
Student.prototype.initials = function() {
    return this.first.charAt(0) + this.middle.charAt(0) + this.last.charAt(0);
};


// Note that this part of the code doesn't change at all
let student1 = new Student("Michael", "Andrew", "Grzesina", 80);
let student2 = new Student("Coralee", "", "Kaban", 80);

document.getElementById("output").innerHTML = "<p>" + student1.toString() + "<br />"
    + student1.initials() + "</p>";
document.getElementById("output").innerHTML += "<p>" + student2.toString() + "<br />"
    + student2.initials() + "</p>";