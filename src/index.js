import {forEach, tellType }from "./es6_functional";
forEach([1, 2, 3], (data)=>console.log(data));
console.log("\n");
console.log(typeof forEach);
tellType(1);
tellType(forEach);