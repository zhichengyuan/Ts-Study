// import { createDeck, printDeck } from "./funcs";
// const deck = createDeck();
// printDeck(deck);

// interface User {
//     name:string,
//     age:number,
//     sayHello():void
// }

// let u:User ={
//     name:'tom',
//     age:33,
//     sayHello(){
//         console.log(this.name);
//     }
// }
// u.sayHello();

// type Condition = (n:number) => boolean

// interface Condition { //定界符
//     (n:number):boolean
// }

// function sum(numbers:number[],callBack:Condition) {
//     let s = 0;
//     numbers.forEach(n => {
//         if(callBack(n)) {
//             s +=n;
//         }
//     });
//     return s
// }

// let res = sum([1,12],n=>n%2 !==0);
// console.log(res)

// interface A {
//     T1:string
// }

// interface B extends A {
//     T2:number
// }

// interface C extends A,B {
//     T3:boolean
// }

// let u:B = {
//     T2:12,
//     T1:'wqw'
// }

// interface A {
//     T1:string,
// }
// type B ={
//     T2:number
// }

// type C = {
//     T3:boolean
// } & A & B

// let u1:C = {
//     T2:21,
//     T1:'sdsd',
//     T3:true
// }


// interface User {
//     readonly id:string,
//     name:string,
//     age:number
// }

// type User = {
//     readonly id:string
//     name:string
//     age:number
//     readonly arr:readonly string[]  //只读的数组
// }

// let u:User ={
//     id:'12',
//     name:'adsd',
//     age:333
// }

// const arr:readonly number[] = [2,3,4];

// const arr1:ReadonlyArray<number> = [4,3,4];

// interface Duck {
//     sound:'嘎嘎嘎'
//     swin():void
// }

// let person = {
//     name:'伪装成鸭子的人',
//     age:11,
//     sound:"嘎嘎嘎" as "嘎嘎嘎",
//     swin() {
//         console.log(this.name + '正在游泳，并发出了' + this.sound + '的声音')
//     }
// }

// let duck:Duck = person



interface Condition { //定界符
    (n:number,i:number):boolean
}

function sum(numbers:number[],callBack:Condition) {
    let s = 0;
    numbers.forEach((n,i) => {
        if(callBack(n,i)) {
            s +=n;
        }
    });
    return s
}

let res = sum([1,12,1,2,3,12],n=>n%2 !==0);
console.log(res)
