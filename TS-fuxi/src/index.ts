type constructer = new () => Object

function d(target:any,key:string) {
    console.log(target,key);
}

function enumerable(target:any,key:string,descriptor:any) {
        descriptor.enumerable = true;
}

function useless(target:any,key:string,descriptor:any) {
    descriptor.value = function () {
        console.warn(key + '方法已过期')
    }
}

class A {
    @d
    prop1:string = ''

    @d
    static prop2:string = ''
    
    @enumerable
    @useless
    method1(){
        console.log('haha')
    }
}

const a = new A()
a.method1();
