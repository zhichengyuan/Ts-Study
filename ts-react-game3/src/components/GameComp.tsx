import React, { Component } from 'react';
import { ChessType, GameStatus } from '../types/enums';
import { BoardComp } from './BoardComp';
import { GameStatusComp } from './GameStatusComp';
interface IState {
    chesses:ChessType[]
    gameStatus:GameStatus
    nextChess:ChessType.black | ChessType.red
}

export class GameComp extends Component<{},IState> {
    state:IState = {
        chesses:[],
        gameStatus:GameStatus.gaming,
        nextChess:ChessType.black
    }
    componentDidMount(){
        this.init()
    }
    /**
     * 初始化函数
     * @returns 
     */
    init =() => {
        const arr:ChessType[] = [];
        for(let i =0;i<9;i++) {
            arr.push(ChessType.none);
        }
        this.setState({
            chesses:arr,
            gameStatus:GameStatus.gaming,
            nextChess:ChessType.black
        })
    }
    /**
     * 处理棋子的点击事件
     * 如果函数运行，说明
     * 1. 游戏没有结束
     * 2. 点击的位置没有棋子
     * @param index 
     */
    handleChessChlick = (index:number) => {
        console.log(index);
        console.log(this.state);
        let chesses = [...this.state.chesses];
        chesses[index] = this.state.nextChess ;
        this.setState(prevState => ({
            chesses,
            nextChess:prevState.nextChess === ChessType.red? ChessType.black:ChessType.red,
            gameStatus:this.getStatus(chesses,index)
        }))
    }
    getStatus = (chesses:ChessType[],index:number):GameStatus =>  {
        //1.判断是否一方获得胜利
        const horMin = Math.floor(index / 3) * 3;
        const verMin = index %3;
        if(chesses[horMin] === chesses[horMin + 1] && chesses[horMin] === chesses[horMin + 2]
            ||
            (chesses[verMin] === chesses[verMin + 3] && chesses[verMin] === chesses[verMin + 6])
            ||
            (chesses[0] === chesses[4] && chesses[0] === chesses[8] && chesses[0] !== ChessType.none)
            ||
            (chesses[2] === chesses[4] && chesses[2] === chesses[6] && chesses[2] !== ChessType.none)
            ){
            if(chesses[index] === ChessType.red){
                return GameStatus.redWin
            } else {
                return GameStatus.blackWin
            }
        }
        if(!chesses.includes(ChessType.none)) {
            return GameStatus.equal
        }
        //2. 判断是否平局
        return GameStatus.gaming
    }
    render() {
        return (
            <div style={{
                textAlign:"center"
            }}>
                <h1>井字棋游戏</h1>
                <GameStatusComp gameStatus={this.state.gameStatus} next={this.state.nextChess}></GameStatusComp>
                <BoardComp chesses={this.state.chesses}
                isGameOver={this.state.gameStatus !== GameStatus.gaming}
                onClick={this.handleChessChlick}
                ></BoardComp>
                <button onClick={this.init}>重新开始</button>
            </div>
        );
    }
}
