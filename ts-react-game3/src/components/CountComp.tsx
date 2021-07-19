// import React from 'react'
import React, { Component } from 'react';
interface IProps{
    num:number
    onChange?:(n:number) => void
}

interface IState{
    msg:string
    des:string
}

// //第二种约束方式
// export const CountComp:React.FC<IProps> = (props) => {
// //第一种约束方式
// // export function CountComp(props:IProps) {
//     return (
//         <div>
//             <button onClick={() =>{
//                 if(props.onChange) {
//                     props.onChange(props.num -1)
//                 }
//             }}>-</button>
//             <span>{props.num}</span>
//             <button onClick={() =>{
//                 if(props.onChange) {
//                     props.onChange(props.num +1)
//                 }
//             }}>+</button>
//         </div>
//     )
// }



export class CountComp extends Component<IProps,IState> {
    state:IState = {
        msg:'',
        des:'',
        
    }
    render() {
        return (
            <div>
                 <button onClick={() =>{
                    if(this.props.onChange) {
                        this.props.onChange(this.props.num -1)
                    }
                }}>-</button>
                <span>{this.props.num}</span>
                <button onClick={() =>{
                    if(this.props.onChange) {
                        this.props.onChange(this.props.num +1)
                    }
                }}>+</button>
            </div>
        );
    }
}

