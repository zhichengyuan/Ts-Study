// let name:string;
// name = '21';

function add(a:number,b:number):number {
    return a + b;
}

let sum:number = add(12,12);

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

// let n:string = undefined;