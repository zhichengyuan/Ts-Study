interface IUser {
    name:string,
    age:number,
    sayHello(this:IUser):void
}

const u:IUser = {
    name:'sssf',
    age:33,
    sayHello() {
        console.log(this.name,this.age)
    }
}

const say = u.sayHello();
