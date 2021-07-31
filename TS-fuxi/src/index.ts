type constructer = new (...args:any[]) => object;
function test(target:constructer) {
    // console.log(target);
}
function test1(str:string) {
    return function (target:constructer) {

    }
}
function d1() {
    console.log('d1')
    return function (target:constructer) {
        console.log('d1 decorator')
    }
}
function d2() {
    console.log('d2')
    return function (target:constructer) {
        console.log('d2 decorator')
    }
}

@test1('这是一个字符串')
@test
class A {

}

@d1()
@d2()
class B {

}