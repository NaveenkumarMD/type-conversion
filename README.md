# Data types in javascript


| Data type | Example | Data type | Example |
| -------- | ------- |    -------- | ------- |
| string | `"Hello World"` | number | `42` |
| null | `null` |undefined | `undefined` |
| boolean | `true` | symbol | `Symbol(42)` |
| object | `{a: 1, b: 2}` | array | `[1, 2, 3]` |
| BigInt | `BigInt(42)` | map | `new Map([[1, 2], [2, 3]]`) | date | `new Date()` | RegExp | `/^\d+$/` |
| set | `new Set([1, 2, 3])` | Weakmap | `new WeakMap()` |
| Weakset | `new WeakSet([1, 2, 3])` |



# Methods

## tostr()
  Converts the given input to a string datatype.
  | Supported types | Not supported types |
  | ---------------- | -------------------- |
  | string |  undefined|
  | number |  WeakMap |
  | boolean | WeakSet |
  | null |
  |symbol|
  | object|
  | array|
  | BigInt|
  | map|
  | set|
  |regex|





