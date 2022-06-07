"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const shape_1 = require("./shape");
class Circle extends shape_1.Shape {
    constructor(color, filled, radius) {
        super(color, filled);
        this._radius = 1.0;
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getArea() {
        return Math.PI * this._radius * this._radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this._radius;
    }
    toString() {
        return `A Circle with radius = ${this._radius}, which is a subclass of ${super.toString()}`;
    }
}
exports.Circle = Circle;
