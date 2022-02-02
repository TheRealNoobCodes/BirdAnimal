var Bird = /** @class */ (function () {
    function Bird(name, population, age, location) {
        this.Name = name;
        this.Population = population;
        this.Age = age;
        this.Location = location;
    }
    Bird.prototype.getBird = function () {
        return "This Bird is a ____";
    };
    Bird.prototype.getHabitat = function () {
        return "This bird lives in North America";
    };
    return Bird;
}());
