import 'reflect-metadata'

// import {IsNotEmpty,Max,MaxLength,Min,MinLength,validate} from 'class-validator'

// class RegUser{
//     @IsNotEmpty({message:'账号不可以为空'})
//     @MinLength(3,{message:'账号必须至少有五个字符'})
//     @MaxLength(12,{message:'账号必须至多有12个字符'})
//     loginId:string

//     loginPwd:string

//     @Min(0,{message:'年龄的最小值为0'})
//     @Max(100,{message:'年龄的最小值为100'})
//     age:number
//     gender:'男' | '女'
// }

// const post = new RegUser();

//  post.loginId= '12'

// validate(post).then(errors => {
//     console.log(errors)
// })
import {plainToClass,Type} from 'class-transformer'
let arr = [
    {
      "id": 1,
      "firstName": "Johny",
      "lastName": "Cage",
      "age": 27
    },
    {
      "id": 2,
      "firstName": "Ismoil",
      "lastName": "Somoni",
      "age":' 50'
    },
    {
      "id": 3,
      "firstName": "Luke",
      "lastName": "Dacascos",
      "age": '12'
    }
  ]

  export class User {
    id: number;
    firstName: string;
    lastName: string;
    @Type(() => Number)
    age: number;
  
    getName() {
      return this.firstName + ' ' + this.lastName;
    }
  
    isAdult() {
      return this.age > 36 && this.age < 60;
    }
  }

  const users = plainToClass(User,arr);
  users.forEach((user) => {
    console.log(typeof user.age,user.age)
  })