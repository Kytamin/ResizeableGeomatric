import {Resizeable} from "./Resizeable";
export class Circle implements Resizeable{
   private _radius:number
    constructor(radius:number) {
        this._radius=radius
    }


    getRadius(): number {
        return this._radius;
    }

    setRadius(value: number) {
        this._radius = value;
    }
    getArea():number{
       return this._radius*this._radius*Math.PI
    }

    resize(): number {
        return  Math.random()*this.getArea()
    }

}

