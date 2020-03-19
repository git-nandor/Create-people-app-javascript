'use strict';
/*
Build the following structure (not by hand):

var people = [
    {name: 'Joe', age: 22, city: 'New York City', gender: 'male'},
    {name: 'Jane', age: 85, city: 'Las Vegas', gender: 'female'},
    {name: 'Jack', age: 55, city: 'London', gender: 'male'},
];
*/

var attrs = 'name age city gender';
var values = [
    ['Joe', 22, 'New York City', 'male'],
    ['Jane', 85, 'Las Vegas', 'female'],
    ['Jack', 55, 'London', 'male']
];
var people = [];

// Create new inheritable function for setting the attribute fields and values
Person.prototype.selfInitializer = function (attributeNames, attributeValues) {
    
    // Create array from given string
    var attributeNameCollection = attributeNames.split(' ');
    
    // Create and set the attributes fields
    for (var i = 0; i < attributeNameCollection.length; i++) {
        this[attributeNameCollection[i]] = attributeValues[i];
    }
}

// Person object constructor 
function Person(attributeNames, attributeValues) {
    
    // Initialize Person attributes with own prototype function
    this.selfInitializer(attributeNames, attributeValues);
}

// Create Person instances with given values into people array
function createPeople(attributeNames, attributeValues) {
  for (var i = 0; i < attributeValues.length; i++) {
    people.push(new Person(attributeNames, attributeValues[i]));
  }
}

// Start application
createPeople(attrs, values);
console.log('Final result: ', people);

