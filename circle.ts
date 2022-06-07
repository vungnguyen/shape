import {Shape} from "./shape";
export class Circle extends Shape {
    private _radius: number = 1.0;

    constructor(color: string, filled: boolean, radius: number) {
        super(color, filled);
        this._radius = radius;
    }
    get radius(): number {
        return this._radius;
    }
    set radius(value: number) {
        this._radius = value;
    }
    getArea(): number {
        return Math.PI*this._radius*this._radius;
    }
    getPerimeter(): number {
        return 2*Math.PI*this._radius;
    }
    toString(): string {
        return `A Circle with radius = ${this._radius}, which is a subclass of ${super.toString()}`
    }
}