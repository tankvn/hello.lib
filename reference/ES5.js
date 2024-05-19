'use strict';

/**
* City class.
* 
* @constructor
* @param {String} name - The name.
* @param {Number} x - X-coordinate.
* @param {Number} y  - Y-coordinate.
*/
function City(name, x, y) {
    this.name = name;
    this.setLocation(x, y);
}

/**
* Set coordinates for City
* 
* @param {Number} - X-coordinate.
* @param {Number} - Y-coordinate.
*/
City.prototype.setLocation = function(x, y) {
    this.x = x;
    this.y = y;
};

/**
* Get coordinates of City
* 
* @return {Object}
*/
City.prototype.getLocation = function() {
    return {
        x: this.x,
        y: this.y
    };
};

/**
* Get the name of City
* 
* @return {String}
*/
City.prototype.getName = function() {
    return 'City("' + this.name + '")';
};


const _city = new City('Hanoi', 100, 200)

console.log(_city.getName(), _city.getLocation())