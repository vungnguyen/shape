export class Shape {
    private _color: string = "red";
    private _filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

      get getColor(): string {
        return this._color;
    }

    set setColor(value: string){
        this._color = value;
    }

    isFilled(): boolean {
        return this._filled;
    }

    set filled(value: boolean){
        this._filled = value;
    }
    toString() : string {
        return  'A shape with color is ' + this.getColor
        + 'and'
        + (this.isFilled() ? 'filled' : 'not filled')

    }
}