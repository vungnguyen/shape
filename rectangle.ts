import {Shape} from "./shape";
export class Rectangle extends Shape {
    private _width: number = 1.0;
    private _length: number = 1.0;

    constructor(width: number, length: number,color: string,filled: boolean, ) {
        super(color,filled)
        this._width = width;
        this._length = length;
    }

    getWidth(): number {
        return this._width;
    }

    setWidth(width: number) {
        this._width = width;
    }

    getLength(): number {
        return this._length;
    }

    setLength(length: number) {
        this._length = length;
    }
    getArea() : number {
        return this._width*this._length;
    }
    getPerimeter() : number {
        return (this._length + this._width)*2;
    }
    toString(): string {
        return `A Rectangle with width = ${this._width} and length= ${this._length}, which is subclass of ${super.toString()}`
    }
}
