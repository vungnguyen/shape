import {Rectangle} from "./rectangle";
export class Square extends Rectangle {
    constructor(side: number,color: string,filled: boolean) {
        super(side,side,color,filled);
    }
    getSide() : number{
        return this.getWidth();
    }
    setSide(side:number) : void {
        this.setWidth(side);
        this.setLength(side);
    }
    setWidth(width: number) : void{
        this.setSide(width);
    }
    setLength(length: number) : void{
        this.setLength(length);
    }
    toString(): string {
        return `A Square with side = ${this.getSide()} which is subclass of ${super.toString()}`
    }
}