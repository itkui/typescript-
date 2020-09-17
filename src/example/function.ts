/*
 * @Author: ItKui<13452903663@163.com>
 * @Date: 2020-09-16 17:52:53
 * @LastEditTime: 2020-09-17 11:42:13
 * @FilePath: \typescript\src\example\function.ts
 * @FileName: 函数类型
 */

let add1: (x: number, y: number) => number;

add1 = (a1: number, a2: number): number => a1 + a2;

/* interface add2 {
    (a1: number, a2: number): number
} */
type add2 = (a1: number, a2: number) => number;

let add2: add2;
add2 = (a1: number, a2: number): number => a1 + a2;

// 函数重载
function handleData(x: string): string[];
function handleData(x: number): number[];
function handleData(x: any): any {
    if (typeof x === 'number') {
        return [x];
    } else if (typeof x === 'string') {
        return x.split('')
    }
}

handleData('string')
handleData(123)