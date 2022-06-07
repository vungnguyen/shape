"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(color, filled) {
        this._color = "red";
        this._filled = true;
        this._color = color;
        this._filled = filled;
    }
    get getColor() {
        return this._color;
    }
    set setColor(value) {
        this._color = value;
    }
    isFilled() {
        return this._filled;
    }
    set filled(value) {
        this._filled = value;
    }
    toString() {
        return 'A shape with color is' + this.getColor
            + 'and'
            + (this.isFilled() ? 'filled' : 'not filled');
    }
}
exports.Shape = Shape;
