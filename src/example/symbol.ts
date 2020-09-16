/*
 * @Author: ItKui<13452903663@163.com>
 * @Date: 2020-09-15 15:00:15
 * @LastEditTime: 2020-09-16 16:54:11
 * @FilePath: \typescript\src\example\symbol.ts
 * @FileName: symbol
 */

// symbol 基本数据类型，独一无二的值
const s1 = Symbol();

//console.log(s1.toString()) //Symbol()
//console.log(Boolean(s1)) //true

const s2 = Symbol('name');
const info = {
  [s2]: '张三',
  age: 16,
  sex: '男',
};
info[s2] = '李四';
//console.log(info)

for (const i in info) {
  // console.log(i)
} // age sex

// console.log(Object.keys(info)) //["age", "sex"]

// console.log(Object.getOwnPropertyNames(info)) //["age", "sex"]

// console.log(JSON.stringify(info)) //{"age":16,"sex":"男"}
// console.log(Object.getOwnPropertySymbols(info)) //[Symbol(name)]

const s3 = Symbol.for('for');
const s4 = Symbol.for('for');

console.log(Symbol.keyFor(s3));
// console.log(s3 === s4) // true

// hasInstance
const obj1 = {
  [Symbol.hasInstance](otherObj: object) {
    console.log(otherObj); // 调用instanceof 的时候对象会作为参数传递给otherObj
    // => { a: 'aa' }
  },
};

console.log({ a: 'aa' } instanceof (obj1 as any));

// 
let arr: number[] = [1, 2]
// console.log([].concat(arr, [3, 4]));
