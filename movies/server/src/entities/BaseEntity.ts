import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";

export abstract class BaseEntity {
    /**
     * 验证当前电影对象
     */
    public async validateThis(skipMissing = false):Promise<string[]>{
        const errors = await validate(this,{
            skipUndefinedProperties:skipMissing
        });
        const temp = errors.map(e => {
            if(e.constraints) {
                return Object.values(e.constraints)
            }else {
                return []
            }
        })
        const result:string[] = [];
        temp.forEach(t => {
            result.push(...t)
        })
        return result
    }

    /**
     * 将一个平面对象转换为Movie类的对象
     * @param plainObject 平面对象
     * @returns 类对象
     */
     protected static baseTransform<T>(cls:ClassConstructor<T>,plainObject:object):T{
        if(plainObject instanceof cls) {
            return plainObject
        }
        return plainToClass(cls,plainObject)
    }
}