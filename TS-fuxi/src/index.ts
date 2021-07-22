const methodName = "sayHello";

class User {
    [prop:string]:any
    constructor(
        public name:string,
        public age:number
    ){}
    [methodName]() {
        console.log('a')
    }
}

const u = new User('sdsd',12)

u[methodName]()

class MyArray {
    [index:number]:string
    0="1"
    1 = 'wew'
    2= 'sd'
}

const my = new MyArray()

my[0]