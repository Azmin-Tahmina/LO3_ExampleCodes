"use strict";

/*
    File:   showprops.js
    Author: Michael Grzesina (grzesinam)
    Course: CWEB 190
    Date:   Winter 2024
    Purpose: Function to show all the properties of an object
*/


/**
 * Return a string that shows all the properties of an object.
 *
 * @param title         title to display in the returned string
 * @param object        object whose properties are to be displayed
 * @returns {string}    the title followed by each property name and value,
 *                      each on a separate line
 */
function showProps(title, object) {
    let objectString = title + "<br />";

    // LOOP for all properties in the object
    for (const prop in object) {
        // Add the property name and value to the return string

        // if we don't want to see properties from along the prototype chain
        if (object.hasOwnProperty(prop)) {
            objectString += prop + " = " + object[prop] + "<br />";
        }
    }

    return objectString;
}
