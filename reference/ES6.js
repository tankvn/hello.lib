'use strict';

/**
* City class.
* 
* @constructor
* @param {String} name - The name.
* @param {Number} x - X-coordinate.
* @param {Number} y  - Y-coordinate.
*/
class City {
  constructor(name, x, y) { // constructor syntactic sugar
    this.name = name;
    this.setLocation(x, y);
  }

/**
* Set coordinates for City
* 
* @param {Number} - X-coordinate.
* @param {Number} - Y-coordinate.
*/
  setLocation(x, y) { // prototype function
    this.x = x;
    this.y = y;
  }

/**
* Get coordinates of City
* 
* @return {Object}
*/
  getLocation() {
    return {
      x: this.x,
      y: this.y
    };
  }

/**
* Get the name of City
* 
* @return {String}
*/
  getName() {
    return `City is name ("${this.name}")`;
  }
}

const _city = new City('Hanoi', 100, 200)

console.log(_city.getName(), _city.getLocation())