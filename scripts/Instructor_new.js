"use strict";

/*
 Filename:    Instructor_new.js
 Student:     Michael Grzesina (grzesinam)
 Course:      CWEB 190 (Internet Programming/Web Applications 1)
 Date:        Winter 2024
 Purpose:     Class for Instructor objects
*/


/**
 * Class to represent an instructor
 */
class Instructor {
    /**
     * Instructor's name
     */
    name;

    /**
     * Instructor's office number
     */
    officeNumber;

    /**
     * Instructor's quirks
     */
    quirks;

    /**
     * Instructor's program
     * @type {string}
     */
    program = "CST"; // Note that we can give a default value for a property


    /**
     * Constructor for an instructor
     *
     * @param name      Instructor's name
     * @param office    Instructor's office location
     * @param quirks    Quirks of instructor
     */
    constructor(name, office, quirks) {
        this.name = name;
        this.officeNumber = office;
        this.quirks = quirks;
    }


    /**
     * Gives a greeting from the invoking instructor
     *
     * @returns {string}    Greeting from invoking instructor
     */
    greet() {
        return this.name + " says hi";
    }


    /**
     * Gives a description of the invoking instructor
     *
     * @returns {string}    Description of the invoking instructor
     */
    displayInfo() {
        return this.name + " is in " + this.officeNumber
            + " and is " + this.quirks + " (program: " + this.program + ")";
    }
}
