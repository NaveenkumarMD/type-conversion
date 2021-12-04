/**
 * MD
 * @param x 
 *  A method which convert the given argument to a number.
 * If the argument is not a number, it will be converted to a number.
 * If the argument is a number, it will be returned as is.
 * `Example:`
 * ```typescript
 * toint(1) // 1
 * toint(1.1) // 1
 * toint("1") // 1
 * toint("1.1") // 1
 * toint(true) // 1
 * toint(false) // 0
 * toint(null) // 0
 * toint(undefined) // 0
 * toint({}) // 0
 * toint([]) // 0
 * toint([1]) // 1
 * ```
 */


function toint(x?: any): number {
    if (typeof x === "object"){
        return 0;
    }
    if (x === undefined) {
        return 0
    }
    if ( typeof x=== "symbol"){
        return 0;
    }
    if (typeof x === "number") {
        return x;
    }
    if (typeof x === "boolean") {
        return x ? 1 : 0;
    }
    if (typeof x===null){
        return 0;
    }
    if (typeof x==="bigint"){
        return Number(x);
    }
    if (typeof x=="string"){
        let p=parseInt(x);
        if(!isNaN(p)){
            return p;
        }
        const regex = /[0-9]+/g;
        const match = x.match(regex);
        if (match === null) {
            return 0;
        }
        return Number(match[0]);
    }

    return 0;
}
export { toint }

// decimal
// hexadecimal
// binary
// octal
// bigint