export class Tank {
    x:number = 0
    y:number = 0
    zidanSpeed:number =12
    protected name:string = '坦克'

    shoot() {
        console.log('发射子弹')
    }

    sayHello() {
        console.log(this.name)
    }
}

export class PlayerTank extends Tank {
    x:number = 20
    y:number = 3
    name:string ='玩家坦克'
    life:number =5
    shoot(){
        console.log('玩家坦克发射子弹')
    }
    test(){
        super.sayHello()
    }
}

export class EnemyTank extends Tank {

}

const p = new PlayerTank()
console.log(p.x)
p.shoot()
p.test()

if(p instanceof PlayerTank) {
    console.log(p.life)
}