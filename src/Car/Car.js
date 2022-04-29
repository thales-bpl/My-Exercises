"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    Car.prototype.honk = function () {
        console.log("Honk honk");
    };
    Car.prototype.openTheDoor = function (door) {
        console.log("Abrindo porta ".concat(door, "."));
    };
    Car.prototype.closeTheDoor = function (door) {
        console.log("Fechando porta ".concat(door, "."));
    };
    Car.prototype.turnOn = function () {
        console.log('Ligando o carro');
    };
    Car.prototype.turnOff = function () {
        console.log('Desligando o carro');
    };
    Car.prototype.speedUp = function () {
        console.log("Acelerando o carro");
    };
    Car.prototype.speedDown = function () {
        console.log("Desacelerando o carro");
    };
    Car.prototype.stop = function () {
        console.log("Parando o carro");
    };
    Car.prototype.turn = function (direction) {
        console.log("Virando o carro para ".concat(direction));
    };
    return Car;
}());
exports["default"] = Car;
