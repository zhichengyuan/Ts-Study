class User{
    static users:User[] = []
    constructor(
        public loginId:string,
        public loginPwd:string,
        public name:string,
        public age:number,
    ){
        //需要将新建的用户加入到数组中
        User.users.push(this)
    }
    sayHello() {
        console.log(`大家好我是${this.name},今年${this.age}岁了，我的账号是${this.loginId}`)
    }
    static login(loginId:string,loginPwd:string):User | undefined {
        return this.users.find(u => u.loginId === loginId && u.loginPwd === loginPwd)
    }
}

//登录

// const result = User.login('xxx','ssss')
new User('u1','123','王富贵',12)
new User('u2','123','狗剩',13)
new User('u3','123','狗剩1',14)

const res = User.login('u1','123');
if(res) {
    res.sayHello()
}else{
    console.log('登录失败')
}




class Board {
    width:number = 500;
    height:number = 700;
    init() {
        console.log('初始化棋盘')
    }
    private constructor () {

    }

    // static readonly singleBoad = new Board()

    private static _board:Board
    static createBoard():Board {
        if(this._board ) {
            return this._board
        }
        this._board = new Board()
        return this._board
    }
}

// const b = Board.singleBoad;

const b = Board.createBoard()