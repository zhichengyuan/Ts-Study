export class ArrayHelper<T>{

    constructor(private _arr:T[]) {

    }

    take(n:number):T[] {
        if(n>=this._arr.length) {
            return this._arr;
        }
        const newArr:T[] = [];
        for(let i=0;i<n;i++) {
            newArr.push(this._arr[i]);
        } 
        return newArr;
    }


    shuffle() {
        for(let i = 0;i < this._arr.length;i++) {
            const targetIndex = this.getRandom(0,this._arr.length);
            const temp = this._arr[i];
            this._arr[i] = this._arr[targetIndex];
            this._arr[targetIndex] = temp;
            
        }
        console.log(this._arr)
    }
    
    private getRandom(min:number,max:number) {
        const dec = max -min;
        return Math.floor(Math.random() * dec + min);
    }
}