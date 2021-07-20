abstract class Chess {
    x:number =0;
    y:number = 0;
    abstract readonly name:string;

    move(targetX:number,targetY:number):boolean{
        console.log('1.边界判断');
        console.log('2.目标位置是否有己方棋子');
        //3. 规则判断
        if(this.rule(targetX,targetY)) {
            this.x = targetX;
            this.y = targetY;

            console.log(`${this.name}移动成功了`)
            return true;
        }
        return false
    }

    protected isOutSide() : boolean {
        console.log('1.边界判断')
        return false
    }

    protected targetHesMengyou() {
        console.log('2.目标位置是否有己方棋子')
        return false;
    }

    protected finishMove(targetX:number,targetY:number){
        this.x = targetX;
        this.y = targetY;
        console.log('移动成功')
    }

    protected abstract rule(targetX:number,targetY:number) :boolean ;
}

class Horse extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return false
    }
  
    name: string= '马'

}

class Pao extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
   
    name:string;
    constructor () {
        
        super();
        this.name = '炮'
    }

}

class Soldier extends Chess {
    protected rule(targetX: number, targetY: number): boolean {
        return true
    }
   
    get name() {
        return '兵'
    }

}

// const a = new Chess()
const a = new Horse()
const b = new Pao()
const c = new Soldier()
a.move(5,7)
b.move(4,6)
c.move(2,3)
console.log(c.x);
console.log(a.name,b.name,c.name)

// class King extends Chess{
//     name: string;
//     protected rule(targetX: number, targetY: number): boolean {
//         throw new Error("Method not implemented.");
//     }
    
// }



