// import { createDeck, printDeck } from "./funcs";
// const deck = createDeck();
// printDeck(deck);



class User {
    readonly id:number //不能改变
    gender:'男' | '女' = '男'
    pid?:string
    private publishNumber:number = 3//每天一共可以发布多少篇文章
    private curNumber:number = 0//当天可以发布的文章数量

    constructor(public name:string = 'tom',public age:number = 10) {
        this.id = Math.random()
    }
    publish(title:string) {
        if(this.curNumber < this.publishNumber) {
            console.log('发布了一篇文章:' + title);
            this.curNumber ++;
        }else {
            console.log('今天发布的文章数量已达上限！')
        }
    }
}

const u = new User('aa',12)
console.log(u);
u.publish('文章1');
u.publish('文章2');
u.publish('文章3');
u.publish('文章4');