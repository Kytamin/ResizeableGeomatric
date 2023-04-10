import {Rectangle} from "./Rectangle";
import {Resizeable} from "./Resizeable";
export class Square extends Rectangle implements Resizeable{
    constructor(size:number) {
        super(size, size);
    }
    getArena(): number {
        return this.getWidth()

    }

    resize(): number {
        return Math.random()*this.getArena()
    }

}