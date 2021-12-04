/**
 * MD
 * @param x 
 * A function which converts the given value to an equivalent boolean value.
 * @returns boolean
 * 
 * ``` typescript
 * toBool(1) // true
 * toBool(0) // false
 * toBool(true) // true
 * toBool(false) // false
 * toBool("") // false
 * toBool("0") // true
 * toBool("1") // true
 * toBool([]) // false
 * toBool([1]) // true
 * toBool({}) // false
 * toBool({a:1}) // true
 * toBool(new Date()) // true
 * toBool(()=>{}) // true
 * toBool(undefined) // false
 * ```
 * */


function toBool(x?: any): boolean {
    if (x === undefined || x === null || x==false ||x==0 || x=="0" || x=="" || x=="false" ) {
        return false;
    }
    if (typeof x === "number") {
        return x > 0;
    }
    if (typeof x === "string") {
        return x.length > 0;
    }
    if (typeof x === "boolean") {
        return x;
    }
    if(typeof x === "object"){
        if (x instanceof Set){
            return x.size > 0;
        }
        if( x instanceof Array){
            return x.length > 0;
        }
        if( x instanceof Object){
            return Object.keys(x).length > 0;
        }
        if( x instanceof Date){
            return true;
        }
        if (x instanceof Function){
            return true;
        }    
        if(x instanceof RegExp){
            return true;
        }    
        return true
    }

    return true;
}
export { toBool };