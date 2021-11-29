// convert set into a string

let x=new Set([1,2,3,4,2])

const tostr=()=>{
    let s=""
    for(let i of x){
        console.log(i)
        s+=i
    }
    return s
}
console.log(tostr())