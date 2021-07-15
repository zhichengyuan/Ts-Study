// function take<T>(arr:T[],n:number):T[] {
//     if(n >= arr.length) {
//         return arr;
//     }
//     const newArr:T[] = [];
//     for(let i =0;i<n;i++) {
//         newArr.push(arr[i]);
//     }
//     return newArr
// }

import { ArrayHelper } from "./ArrayHelper";

// const newArr = take<number>([3,4,12,3,34,2],2)
// console.log(newArr)

// type callback<T> = (n:T,i:number) => boolean;


// interface callback<T>{
//      (n:T,i:number):boolean
// }

// function filter<T>(arr:T[],callback:callback<T>):T[] {
//     const newArr:T[] = [];
//     arr.forEach((n,i) => {
//         if(callback(n,i)) {
//             newArr.push(n)
//         }
//     })
//     return newArr
// }

// const arr = [2,4,2,4,3,45,33];
// console.log((filter(arr,n=>n%2 !==0)))

const helper = new ArrayHelper<number>([2,34,5,3,23])
helper.take(3);
helper.shuffle()
