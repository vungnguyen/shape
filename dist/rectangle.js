"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const shape_1 = require("./shape");
class Rectangle extends shape_1.Shape {
    constructor(width, length, color, filled) {
        super(color, filled);
        this._width = 1.0;
        this._length = 1.0;
        this._width = width;
        this._length = length;
    }
    getWidth() {
        return this._width;
    }
    setWidth(width) {
        this._width = width;
    }
    getLength() {
        return this._length;
    }
    setLength(length) {
        this._length = length;
    }
    getArea() {
        return this._width * this._length;
    }
    getPerimeter() {
        return (this._length + this._width) * 2;
    }
    toString() {
        return `A Rectangle with width = ${this._width} and length= ${this._length}, which is subclass of ${super.toString()}`;
    }
}
exports.Rectangle = Rectangle;
