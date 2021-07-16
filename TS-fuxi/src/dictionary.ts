export type CallBack<T,U> = (key:T,val:U) => void

export class Dictionary<K,V>{
    private keys:K[] = [];
    private vals:V[] =[];

    get size() {
        return this.keys.length
    }

    set(key:K,val:V) {
        const i = this.keys.indexOf(key);
        if(i !== -1) {
            this.vals[i] = val;
        }else {
            this.keys.push(key);
            this.vals.push(val);
        }
    }

    forEach(callback:CallBack<K,V>) {
        this.keys.forEach((k,i) => {
            const v = this.vals[i];
            callback(k,v)
        })
    }

    has(key:K):boolean {
        return this.keys.indexOf(key) < 0 ? false:true
    }

    delete(key:K) {
        const i = this.keys.indexOf(key);
        if(i !== -1){
            this.keys.splice(i,1);
            this.vals.splice(i,1);
        }
        
    }
    
}