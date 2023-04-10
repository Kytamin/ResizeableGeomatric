import {Resizeable} from "./Resizeable";


export class  Rectangle implements Resizeable{
    private _width:number
    private _length:number

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
        return this._width&this._length
    }

    resize(): number {
        return  Math.random()*this.getArea()
    }

}