import React from 'react'
import { ChessType } from '../types/enums'
import "./ChessComp.css"

interface IProps {
    type:ChessType
    onClick?:() => void
}

export function ChessComp(props:IProps) {
    let chess = null;
    if(props.type === ChessType.red) {
        chess = <div className="chess-tiem red"></div>
    }else if(props.type === ChessType.black) {
        chess = <div className="chess-tiem black"></div>
    }
    return (
        <div className="chess" onClick = {() => {
            if(props.type === ChessType.none) {
                if(props.onClick) {
                    props.onClick();
                }
            }
        }}>
            {chess}
        </div>
    )
}
