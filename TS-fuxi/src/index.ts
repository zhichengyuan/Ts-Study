import { Animal, Dog, Lion, Monkey, Tiger } from "./animals";
import { hasFireShow, hasWisdm } from "./interfaces";

const animals:Animal[] = [
    new Lion('张狮子',12),
    new Tiger('李老虎',14),
    new Monkey('王猴子',18),
    new Dog('金小狗',20)
]

//1. 所有的动物打招呼

animals.forEach(a => a.sayHello())

//2. 所有会进行火圈表演的动物，完成火圈表演


animals.forEach(a => {
    if(hasFireShow(a)) {
        a.singleFire();
        a.doubleFire();
    }
    if(hasWisdm(a)){
        a.dance();
        a.suanshuti()
    }
})