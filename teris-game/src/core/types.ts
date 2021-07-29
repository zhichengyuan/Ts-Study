import { Game } from "./Game";
import { SquareGroup } from "./SquareGroup";

export interface Point {
    readonly x:number
    readonly y:number
}

export interface IViewer {
    /**
     * 显示
     */
    show():void;
    /**
     * 移除，不在显示
     */
    remove():void   
}

/**
 * 形状
 */
export type Shape = Point[]

export enum MoveDirection {
    left,
    right,
    down
}

export enum GameStatus{
    init,//未开始
    playing,//进行中
    pause,//暂停
    over//游戏结束
}

export interface GameViewer{
    /**
     * 下一个方块
     * @param teris 
     */
    showNext(teris:SquareGroup):void;
    /**
     * 切换方块对象
     * @param teris 
     */
    swtich(teris:SquareGroup):void;

    /**
     * 完成界面的初始化
     */
    init(game:Game):void;

    showScore(score:number):void;

    onGamePause():void;
    onGameStart():void;
    onGameOver():void
}