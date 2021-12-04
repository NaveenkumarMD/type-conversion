# Data types in javascript


| Data type | Example | 
| -------- | ------- |   
| string | `"Hello World"` |
| number | `42` |
| null | `null` |
| undefined | `undefined` |
| boolean | `true` |
| symbol | `Symbol(42)` |
| object | `{a: 1, b: 2}` | 
| array | `[1, 2, 3]` |
| BigInt | `BigInt(42)` |
| map | `new Map([[1, 2], [2, 3]]`) |
| date | `new Date()` | 
| RegExp | `/^\d+$/` |
| set | `new Set([1, 2, 3])` | 
| Weakmap | `new WeakMap()` |
| Weakset | `new WeakSet([1, 2, 3])` |



# Methods

## tostr()
  Converts the given input to a string datatype.

  ```javascript
  tostr(42); // "42"
  tostr(true); // "true"
  tostr(null); // ""
  tostr() //""
  tostr(undefined); // ""
  tostr("Hello World"); // "Hello World"
  tostr(new Date()); // "2020-01-01T00:00:00.000Z"
  tostr(/^\d+$/); // "^\\d+$"
  tostr([1,2,3]); // "123"
  tostr({a: 1, b: 2}); // "{a: 1, b: 2}"
  tostr(new Map([[1, 2], [2, 3]])); //"1234"
  tostr(new Set([1, 2, 3])); // "123"
  tostr(new WeakMap()); // "Error"
  ```
## toint()
  Converts the given input to an integer datatype.

  ```javascript
  toint(42); // 42
  toint(true); // 1
  toint(null); // 0
  toint("hello world352")// 352
  toint("464632423236") // 464632423236
  toint("464632423236.5") // 464632423236
  toint() // 0
  toint(undefined); // 0
  toint("Hello World"); // 0
  toint(new Date()); // 0
  toint(/^\d+$/); // 0
  toint([1,2,3]); // 0
  toint({a: 1, b: 2}); // 0
  toint(new Map([[1, 2], [2, 3]])); // 0

  ```
### toBool()
  Converts the given input to a boolean datatype.

  ```javascript
  toBool(42); // true
  toBool(true); // true
  toBool(null); // false
  toBool() // false
  toBool(undefined); // false
  toBool("Hello World"); // true
  toBool(new Date()); // true
  toBool(/^\d+$/); // true
  toBool([1,2,3]); // true
  toBool({a: 1, b: 2}); // true
  toBool(new Map([[1, 2], [2, 3]])); // true
  toBool(new Set([1, 2, 3])); // true
  toBool(new WeakMap()); // false
  toBool(new Set()) //false
  toBool([]) //false
  toBool({}) //false
  toBool(-352)//false

  ```
### toFloat()
  Converts the given input to a float datatype.

  ```javascript
  toFloat(42); // 42
  toFloat(true); // 1
  toFloat(null); // 0
  toFloat("hello world352")// 352
  toFloat("464632423236") // 464632423236
  toFloat("464632423236.5") // 464632423236.5
  toFloat() // 0
  toFloat(undefined); // 0
  toFloat("Hello World"); // 0
  ```






