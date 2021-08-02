interface User {
    age:number
    name:string
}

// let u:Partial<User>;

// u = {
//     age:12,
// }


let u:Required<User>;

u = {
    age:12,
    name:'dsdsf'
}