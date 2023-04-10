import {Resizeable} from "./Resizeable";


export class  Rectangle implements Resizeable{
    protected _width:number
    protected _length:number

    constructor(width: number, length: number) {
        this._width = width;
        this._length = length;
    }


    getWidth(): number {
        return this._width;
    }

    setWidth(value: number) {
        this._width = value;
    }

    getLength(): number {
        return this._length;
    }

    setLength(value: number) {
        this._length = value;
    }

    getArea(): number {
        return this._width*this._length
    }

    resize(percent:number):void {
         this._width+= this._width*percent/100
         this._length+=this._length*percent/100
    }

}