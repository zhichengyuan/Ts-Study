import 'reflect-metadata'
class User {
    @Reflect.metadata('a','b')
    loginId:string
    @Reflect.metadata('a','b')
    age:number
}