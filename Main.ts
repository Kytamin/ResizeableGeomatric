import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";
import {Square} from "./Square";
import {Circle} from "./Circle";
let circle1 = new Circle(10)
let rectangle1 =new Rectangle(5,10)
let square1 = new Square(5)
let Arr=[circle1,rectangle1,square1]

Arr.forEach(e=>{
    console.log(e.resize())
})





