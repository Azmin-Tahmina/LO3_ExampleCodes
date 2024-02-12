"use strict"

// You have to use students.json/shapes.json from here
// function Shape(shape,color,size)
// {
//     this.shape = shape
//     this.color = color
//     this.size = size
// }

// let shape1 = new Shape("A","B","C")
// let shape2 = new Shape("D","E","F")
// let shape3 = new Shape("G","H","I")
// let shape4 = new Shape("J","K","L")


// let spArray = [shape1,shape2,shape3,shape4]

// console.log(spArray)

// // I will add, how to read external json file
//let shapeJsonArray = JSON.stringify(spArray)
// we will learn about fetch function in AJAX/LO8
fetch("data/shapes.json").then(function(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error("Network response was not OK: " + response.status);
}).then(function(jsonArray) {
    console.log(jsonArray)
}).catch(function(error) {
    console.log("Problem with the fetch operation: " + error.message);
});



// let shapeJsonArray = jsonArray
// console.log(shapeJsonArray)

// let recreateShapeArrayofObjects = JSON.parse(shapeJsonArray)

// console.log(recreateShapeArrayofObjects)
