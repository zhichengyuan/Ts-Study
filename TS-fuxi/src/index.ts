interface User {
    loginId:string
    loginpwd:string
    age:number
}

interface Art {
    title:string
}

function printUserProperty(obj:User,prop: keyof User) {
    console.log(obj[prop]);
}

const u :User ={
    loginId:'ssss',
    loginpwd:'qqwq',
    age:34
}

printUserProperty(u,'age')

//将user的所有属性值类型变成字符串，得到一个新的类型
type String1<T> = {
    [p in keyof T]:string
}
const u1:String1<User> = {
    loginpwd:'dds',
    loginId:'sdsd',
    age:'12'
}



type Obj = {
    [p in keyof User] : User[p]
}
const u2:Obj ={
    loginId:'12',
    loginpwd:'sdfsd',
    age:12
}



type Readonly1<T> = {
    readonly [p in keyof T] : T[p]
}
const u3:Readonly1<User>  = {
    loginpwd:'dsds',
    loginId:'232sd',
    age:43
}


type Partial1<T> = {
    [p in keyof T]? : T[p]
}

const u4:Partial1<User> ={
    loginId:'232'
}

