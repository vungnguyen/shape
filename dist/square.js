"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
const rectangle_1 = require("./rectangle");
class Square extends rectangle_1.Rectangle {
    constructor(side, color, filled) {
        super(side, side, color, filled);
    }
    getSide() {
        return this.getWidth();
    }
    setSide(side) {
        this.setWidth(side);
        this.setLength(side);
    }
    setWidth(width) {
        this.setSide(width);
    }
    setLength(length) {
        this.setLength(length);
    }
    toString() {
        return `A Square with side = ${this.getSide()} which is subclass of ${super.toString()}`;
    }
}
exports.Square = Square;
