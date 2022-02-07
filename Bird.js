"use strict";
exports.__esModule = true;
exports.Bird = void 0;
var Bird = /** @class */ (function () {
    function Bird(name, population, age, location) {
        this.name = name;
        this.population = population;
        this.age = age;
        this.location = location;
    }
    Bird.prototype.getLocation = function () {
        return "Something random";
    };
    Bird.prototype.getBird = function () {
        return "This Bird is a ____";
    };
    Bird.prototype.getHabitat = function () {
        return "This bird lives in North America";
    };
    return Bird;
}());
exports.Bird = Bird;
