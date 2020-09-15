// boolean
let bool: boolean = false;

// number
let num: number = 123;

// string
let str: string;
str = 'string';

// array
let arr1: number[];
let arr2: Array<number>;
// 联合类型
let arr3: (number | string)[];

// 元组(固定长度固定位置)
let tuple: [string, number, string];
tuple = ['string', 1, 'string'];

// 枚举类型
enum Roles {
  ADMIN = 1,
  USER,
  TOURIST,
}

// console.log(Roles.ADMIN)  // 1
// console.log(Roles[1]) // ADMIN

// any
let value: any;

//void 无返回值
function consoleText(test: number): void {
  console.log(test);
}
let v: void;
v = undefined;
// v = null
// consoleText(12345)

let n: null;
let u: undefined;

// never 类型 永远无法执行
function errFunc(params: string): never {
  throw new Error(params);
}
function neverFunc(): never {
  while (true) {}
}

// object

// 类型断言
const getLength = (target: string | number): number => {
    if ((<string>target).length || (target as string).length === 0) {
        return (<string>target).length
    } else {
        return target.toString().length
    }
}



