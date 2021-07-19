import React from 'react'
import { ChessType, GameStatus } from '../types/enums'
import './GameStatusComp.css'
interface IProps{
    gameStatus:GameStatus
    next:ChessType.red | ChessType.black
}

export function GameStatusComp(props:IProps) {
    let content:JSX.Element;
    if(props.gameStatus === GameStatus.gaming) {
        if(props.next === ChessType.red) {
            content = <div className="next red">红方落子</div>
        }else {
            content = <div className="next black">黑方落子</div>
        }
    }else {
        if(props.gameStatus === GameStatus.redWin) {
            content = <div className="win red">红方胜利</div>
        }else if(props.gameStatus === GameStatus.blackWin){
            content = <div className="win black">黑方胜利</div>
        }else {
            content = <div className="win equal">平局</div>
        }
    }
    return (
        <div className="status">
            {content}
        </div>
    )
}
