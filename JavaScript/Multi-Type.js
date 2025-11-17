// Q2: Multi-Type Data Summary
let str = "Hello";
let num = 42;
let bool = true;
let arr = [1, 2, 3];
let obj = { key: "value" };
let nothing = null;
let notDefined;

console.table([
  { label: "String", value: str, type: typeof str },
  { label: "Number", value: num, type: typeof num },
  { label: "Boolean", value: bool, type: typeof bool },
  { label: "Array", value: arr, type: Array.isArray(arr) ? "array" : typeof arr },
  { label: "Object", value: obj, type: typeof obj },
  { label: "Null", value: nothing, type: "null" },
  { label: "Undefined", value: notDefined, type: typeof notDefined }
]);
