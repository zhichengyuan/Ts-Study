
// import { ArrayHelper } from "./ArrayHelper";
// const helper = new ArrayHelper<number>([2,34,5,3,23])
// helper.take(3);
// helper.shuffle()

/**
 * 将某个对象的name属性的每个单词的首字母大写，然后将该对象返回
 */
// interface hasNameProperty{
//     name:string
// }

// function nameToUpperCase<T extends hasNameProperty >(obj:T):T {
//     obj.name = obj.name
//         .split(" ")
//         .map(s => s[0].toUpperCase() + s.substr(1))
//         .join(" ")
//     return obj
// }

// const o = {
//     name:'kevin yuan',
//     age:12,
//     gender:'男'
// }

// const newO = nameToUpperCase(o);

// console.log(newO.name);//Kevin Yuan 

//将两个数组进行组合
//[1,2,3] + ['a','b','c'] = [1,'a',2,'b',3,'c']

function mixinArray<T,K>(arr1:T[],arr2:K[]):(T|K)[] {
    if(arr1.length != arr2.length) {
        throw new Error('两个数组长度不等')
    }
    let result:(T|K)[] = [];
    for(let i = 0;i<arr1.length;i++) {
        result.push(arr1[i]);
        result.push(arr2[i])
    }
    return result
}

let newArr = mixinArray([1,2,3],['a','b','c']);
console.log(newArr)