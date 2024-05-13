import {sum, diff, mul}from './lib.cjs'
import fs from 'fs'

const a = 5;
const b = 6;
const t1 = performance.now();
fs.readFile('demo.txt', 'utf-8', (err, txt)=>{
    console.log(txt);
})

console.log(sum(a,b));
const t2 = performance.now();
console.log(t2-t1);
console.log(diff(a,b));
console.log(mul(a,b));



