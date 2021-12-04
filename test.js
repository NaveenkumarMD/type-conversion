function toint(x){
    if (typeof x === "object"){
        throw new Error("Invalid argument");
    }
    if (x === undefined) {
        return 0
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
console.log(toint())