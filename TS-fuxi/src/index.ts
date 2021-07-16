import { Dictionary } from "./dictionary";

const dic = new Dictionary<string,number>();

dic.set('a',2);
dic.set('v',3);
dic.set('b',4);
dic.set('a',5);

console.log('当前键值对数量',dic.size)
console.log(dic.has('v'))

dic.delete('a');
dic.forEach((k,v) => {
    console.log(`${k}:${v}`)
})
console.log('当前键值对数量',dic.size)


