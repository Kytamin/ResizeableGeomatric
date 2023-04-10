import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";
export class Square extends Rectangle implements Resizeable{
    constructor(size:number) {
        super(size, size);
    }
    getArena(): number {
        return this.getWidth()*this.getWidth()

    }

    resize(percent:number) {
          this._width+=this.getWidth()*percent/100
          this._length+=this.getLength()*percent/100
    }
}