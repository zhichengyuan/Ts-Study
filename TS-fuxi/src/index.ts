import { descriptor, printObj,  } from "./Descriptor";

@descriptor('用户')
class User {
    @descriptor('账号')
    loginId:string
    @descriptor('密码')
    loginPwd:string
}
const u = new User();
u.loginId = 'adc'
u.loginPwd = '12232'

printObj(u);

@descriptor('文章')
class Article{
    @descriptor('标题')
    title:string

    @descriptor('内容')
    content:string

    @descriptor('日期')
    date:Date

}

const ar = new Article();
ar.title = 'xxxx';
ar.content = 'adadsafsdfsa';
ar.date = new Date();

printObj(ar);

// import 'reflect-metadata'

// @Reflect.metadata('a1','sfdsaf')
// @Reflect.metadata('a2','111sfdsaf')
// @Reflect.metadata('a','一个类')
// class A {
//     @Reflect.metadata('prop','一个属性')
//     prop1:string
// }

// const obj = new A();

// const res = Reflect.getMetadata('a',A);
// const res1 = Reflect.getMetadata('prop',obj,'prop1');
// console.log(res,res1);