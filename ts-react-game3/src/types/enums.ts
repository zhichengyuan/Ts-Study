export enum ChessType {
    none,
    red,
    black
}

export enum NextChess {
    red=ChessType.red,
    black = ChessType.black
}

export enum GameStatus{
    /**
     * 正在游戏中
     */
    gaming,
    /**
     * 红方胜利
     */
    redWin,
    /**
     * 黑方胜利
     */
    blackWin,
    /**
     * 平局
     */
    equal
}

interface User {
    name:string
    age:number
    sayName:() => void
}
let obj = {
    name:'tom',
    name1:'tom1',
    age:12,
    sayName(){
        console.log(this.name)
    }
    
}
let u:User = obj