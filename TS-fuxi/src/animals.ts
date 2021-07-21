import { IBalanceShow, IFireShow, IWisdmShow } from "./interfaces"

export abstract class Animal {
    abstract type:string
    constructor(
        public name:string,
        public age:number
    ) {}

    sayHello() {
        console.log(`各位观众大家好,我是${this.type},我叫${this.name},我今年${this.age}岁了`)
    }
}

export class Lion extends Animal implements IFireShow {
    type: string = '狮子'
    singleFire() {
        console.log(`${this.name}穿越了单火圈`)
    }
    doubleFire() {
        console.log(`${this.name}穿越了双火圈`)
    }
}
export class Tiger extends Animal implements IFireShow {
    type: string = '老虎'
    singleFire() {
        console.log(`${this.name}穿越了单火圈`)
    }
    doubleFire() {
        console.log(`${this.name}穿越了双火圈`)
    }
    
}
export class Monkey extends Animal implements IBalanceShow {
    type: string = '猴子'
    dumuqiao(){
        console.log(`${this.name}表演了走独木桥`)
    }
    zougangsi(){
        console.log(`${this.name}表演了走钢丝`)
    }
}
export class Dog extends Animal implements IWisdmShow {
    type: string = '狗'
    suanshuti(){
        console.log(`${this.name}表演了算术题`)
    }
    dance() {
        console.log(`${this.name}表演了跳舞`)
    }
}

