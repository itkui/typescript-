/*
 * @Author: ItKui<13452903663@163.com>
 * @Date: 2020-09-16 16:47:54
 * @LastEditTime: 2020-09-16 17:44:30
 * @FilePath: \typescript\src\example\interface.ts
 * @FileName: 接口
 */

interface FullName {
  readonly firstName: string; // 只读
  readonly lastName: string;
  readonly sex?: string;
  readonly age?: number;
  love?: string[];
  // [prop: string]: any // 多余属性方式一
}

const getFullName = ({ firstName, lastName, sex, age }: FullName): string => {
  return `${firstName}${lastName} ${sex} ${age ? `${age}岁` : ''}`;
};

let person1 = getFullName({
  firstName: '张',
  lastName: '三',
  sex: '男',
});

// 绕过多余属性检测
// 方式二
let person2 = getFullName({
  firstName: '张',
  lastName: '三',
  sex: '男',
  love: ['打篮球'],
} as FullName);

// 方式三 对象字面量
let person3Data = {
  firstName: '张',
  lastName: '三',
  sex: '男',
  love: ['打篮球'],
};

let person3 = getFullName(person3Data);

// 数组接口
interface ArrFace {
  0: number;
  1: string;
}

let arrF: ArrFace = [1, 'a'];

// 函数接口
type FuncFace = (arg1: number, arg2: string) => number;
const add: FuncFace = () => {
  return 1;
};
add(2, 'a');

// 索引类型

interface RoleDic {
  [id: number]: string;
}

let a: string = 'admin'; // 字面量形式
const role1: RoleDic = {
  1: 'string',
  [a]: 'string',
};

// 接口的继承
// interface Vegetables {
//     color: string
// }

// interface Tomato {
//     radius: number,
//     color: string
// }

// interface Carrot {
//     color: string,
//     length: number
// }
interface Vegetables {
    color: string
}

interface Tomato extends Vegetables {
    radius: number
}

interface Carrot {
    length: number
}

let tomato: Tomato = {
    radius: 1,
    color: 'red'
}