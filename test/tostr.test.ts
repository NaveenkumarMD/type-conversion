import {tostr} from '../dist/index'

// let bigint=BigInt(1234567890123456789012345678901234567890n);
let sym=Symbol("test");
let bool=true;
let string="test"
let num=123;
let nul:null=null
let list=[1,2,3,4,5,6,7,8,9,10];
let set=new Set(list);
let map=new Map();
for(let i of list){
    map.set(i,i);
}
let obj={
  name:"naveenkumar"
}
let reg=new RegExp("test");
let weakmap=new WeakMap([]);
let weakset=new WeakSet([]);
describe("tostr success conditions",()=>{  
  it('should be string',()=>{
    //expect the result to be string datatype
    expect(typeof tostr(num)).toBe('string');
    expect(typeof tostr(string)).toBe('string');
    expect(typeof tostr(bool)).toBe('string');  
    expect(typeof tostr(nul)).toBe('string');
    expect(typeof tostr(sym)).toBe('string');
    expect(typeof tostr(list)).toBe('string');
    expect(typeof tostr(set)).toBe('string');
    expect(typeof tostr(map)).toBe('string');
    expect(typeof tostr(obj)).toBe('string');
    expect(typeof tostr(reg)).toBe('string');
    // expect(typeof tostr(bigint)).toBe('string');
  })
  //Checking error conditions
  it('Should throw error',()=>{
    expect(()=>tostr(weakmap)).toThrow();
    expect(()=>tostr(weakset)).toThrow();
  })
})




