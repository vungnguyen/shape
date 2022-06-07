import {Shape} from "./shape";

let shape: Shape = new Shape('red',false);
console.log(shape)
console.log(shape.toString());

import {Circle} from "./circle";
let circle: Circle = new Circle('pink',false,3.5);
console.log(circle);
console.log(circle.getPerimeter());
console.log(circle.getArea());
console.log(circle.toString());

import {Rectangle} from "./rectangle";
let rectangle: Rectangle = new Rectangle(2.5,3.0,'green',true);
console.log(rectangle);
console.log(rectangle.getPerimeter());
console.log(rectangle.getArea());
console.log(rectangle.toString())

import {Square} from "./square";
let square: Square = new Square(3,'yellow',true)
console.log(square);
console.log(square.toString())