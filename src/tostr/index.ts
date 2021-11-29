/**
 * MD
 * @param x 
 *  A method which convert the given argument to a string.
 */

function tostr(x: any): string {
    let datatype: any = typeof x;
    if (datatype === "string") {
        return x;
    }
    else if (datatype == "number") {
        return x.toString();
    }
    else if (datatype == "boolean") {
        return x.toString();
    }
    else if (datatype == "null") {
        return ""
    }
    else if (datatype == "object") {
        if (x instanceof Array) {
            let s: string = "";
            for (let i of x) {
                s += tostr(i);
            }
            return s;
        }
        else if (x instanceof Set) {
            let s: string = ""
            for (let i of x) {
                s += tostr(i);
            }
            return s;
        }
        else if (x instanceof Date){
            return x.toString();
        }
        else if (x instanceof Map){
            let obj:Object=Object.fromEntries(x);
            return JSON.stringify(obj);
        }
        else if(x instanceof WeakSet){
            throw new Error("WeakSet is not supported");
        }
        else if (x instanceof WeakMap){
            throw new Error("WeakMap is not supported");
        }
        else if (x instanceof RegExp){
            return x.toString();
        }
        else {
            return JSON.stringify(x);
        }
    }
    else if (datatype == "symbol") {
        return x.toString();
    }
    else if (datatype == "bigint") {
        return x.toString();
    }

    return x;
}
export { tostr }