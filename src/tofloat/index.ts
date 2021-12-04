/**
 * MD
    *   
    * @param x
    * @returns {number}
    * A function that converts a value to a float.
    * Example:
    * ```javascript
    * toFloat(1) // 1
    * toFloat(1.1) // 1.1
    * toFloat('1') // 1
    * toFloat('1.1') // 1.1
    * toFloat('1.1e2') // 1.1e2
    * ```
    * 
 * */


function toFloat(x?:any):number{
    if (x===undefined) return 0;
    if (x===null) return 0;
    if (typeof x==='number') return parseFloat(x.toString());
    if (typeof x==='string'){
        let regex = /[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/g;
        let matches = x.match(regex);
        if (matches===null) return 0;
        let result = parseFloat(matches[0]);
        if (isNaN(result)) return 0;
        return result;
    }
    if (typeof x==='object'|| typeof x==='function'|| typeof x=="symbol"){
        return 0;
    }
    if (typeof x==='boolean'){
        return x?1:0;
    }

    return 0



}
export {toFloat}