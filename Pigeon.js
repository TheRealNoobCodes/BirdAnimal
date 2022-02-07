"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Bird_1 = require("./Bird");
//let Pigeon = new Bird("Pigeon", 11200, 12, "North America") 
var Pigeon = /** @class */ (function (_super) {
    __extends(Pigeon, _super);
    function Pigeon(lifespan, color, beak, amountoffeet, coos, name, population, age, location) {
        var _this = _super.call(this, name, population, age, location) || this;
        _this.lifeSpan = lifespan;
        _this.color = color;
        _this.beak = beak;
        _this.amountOfFeet = amountoffeet;
        _this.coos = coos;
        return _this;
    }
    Pigeon.prototype.MakesANoise = function (Coos) {
        return "Coo Coo";
    };
    Pigeon.prototype.IsItAnIcePigeon = function (LifeSpan, Color) {
        var x = LifeSpan;
        var y = Color;
        if (x = 10, y = "white")
            return "That seems to be an Ice Pigeon, those are pretty rare";
    };
    Pigeon.prototype.IsItAnEgyptionSwiftPigeon = function (Beak, Color, Coos) {
        var BeakLength = Beak;
        var WhatColorIsIt = Color;
        var DoesItCoo = Coos;
        return "";
    };
    return Pigeon;
}(Bird_1.Bird));
