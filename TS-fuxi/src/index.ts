// let name:string;
// name = '21';

function add(a:number,b:number):number {
    return a + b;
}

// let sum:number = add(12,12);

let name = 'kevin';


let nums:number[] = [3,4,2];
let arr:Array<number>=[3,32,32]


function printValues(obj:object) {
    const vals = Object.values(obj);
    vals.forEach( v => console.log(v))
}

printValues({
    name:'dss',
    age:12
})

type Gender = '男' | "女"

type User = {
    name:string
    age:number
    gender:'男'|'女'
}

let u:User 

u = {
    name:'dsds',
    age:12,
    gender:'男'
}


function getUsers(g:Gender):User[] {
    return []
}
// let n:string = undefined;


function combine(a:number,b:number):number;
/**
 * 得到a*b的结果
 * @param a 
 * @param b 
 */
function combine(a:string,b:string):string;
/**
 * 得到a和b的拼接的结果
 * @param a 
 * @param b 
 */
function combine(a:number | string,b:number|string):number | string {
    if(typeof a === 'number' && typeof b === 'number') {
        return a * b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('a和b必须是相同的类型');
}

const result = combine(2,2)

function sum(a:number,b:number,c?:number) {
    if(c) {
        return a + b + c
    }else {
        return a + b;
    }
}
sum(3,4)

