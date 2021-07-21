export interface IFireShow{
    singleFire():void;
    doubleFire():void
}

export interface IWisdmShow{
    suanshuti():void;
    dance():void
}

export interface IBalanceShow{
    dumuqiao():void
    zougangsi():void
}

export function hasFireShow(ani:object):ani is IFireShow {
    if((ani as unknown as IFireShow).singleFire && (ani as unknown as IFireShow).doubleFire){
        return true
    }
    return false
}



export function hasWisdm(ani:Object):ani is IWisdmShow {
    if((ani as unknown as IWisdmShow).dance && (ani as unknown as IWisdmShow).suanshuti) {
        return true
    }
    return false
    
}