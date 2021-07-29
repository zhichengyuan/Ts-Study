import { Square } from "../Square";
import $ from 'jquery'
import { IViewer } from "../types";
import Pageconfig from "./Pageconfig";

export class SquarePageViewer implements IViewer{
    private dom?:JQuery<HTMLElement>

    private isRemove:boolean = false;//是否被移除过

    constructor(
        private square:Square,
        private container:JQuery<HTMLElement>
    ){}
    show(): void {
        if(this.isRemove) {
            return
        }
        if(!this.dom) {
            this.dom = $('<div>').css({
                position:'absolute',
                width:Pageconfig.SquareSize.width,
                height:Pageconfig.SquareSize.height,
                border:'1px solid #ccc',
                boxSizing:'border-box'
            }).appendTo(this.container)
            
        }
        this.dom.css({
            left:this.square.point.x * Pageconfig.SquareSize.width,
            top:this.square.point.y * Pageconfig.SquareSize.height,
            background:this.square.color
        })
        
    }
    remove(): void {
        if(this.dom && !this.isRemove) {
            this.dom.remove();
            this.isRemove = true
        }
    }
}