import { Square } from "./Square";
import { Point, Shape } from "./types";

/**
 * 组合方块
 */
export class SquareGroup {
    private _squares:readonly Square[];

    public get squares(){
        return this._squares
    }

    public get shape () {
        return this._shape
    }

    public get centerPoint():Point {
        return this._centerPoint
    }

    public set centerPoint(v:Point){
        this._centerPoint = v;
        this.setSquarePoints()
    }
    
    /**
     * 根据中心点坐标，以及形状，设置每个小方块的坐标
     */
    private setSquarePoints(){
        this._shape.forEach((p,i)=> {
            this._squares[i].point = {
                x:this._centerPoint.x + p.x,
                y:this._centerPoint.y + p.y,
            }
        }) 
    }

    constructor(
        private _shape:Shape,
        private _centerPoint:Point,
        private _color:string
    ){
        //设置小方块数组
        const arr:Square[] = []
        this._shape.forEach(p => {
            const sq = new Square();
            sq.color = this._color;
            arr.push(sq)
        }) 
        this._squares = arr;
        this.setSquarePoints()
    }

    /**
     * 旋转方向是否为顺时针
     */
    protected isClock = true;

    afterRotateShape():Shape {
        if(this.isClock) {
            return this._shape.map(p => {
                const newPont:Point = {
                    x:-p.y,
                    y:p.x
                }
                return newPont
            })
        }else {
            return this._shape.map(p => {
                const newPoint:Point ={
                    x:p.y,
                    y:-p.x
                }

                return newPoint
            })
        }
    }

    rotate() {
        const newShape = this.afterRotateShape();
        this._shape = newShape;
        this.setSquarePoints();
    }
}