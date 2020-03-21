//布尔值
let boolValue: boolean = false;
//数字 十进制|十六进制|二进制|八进制
let num: number = 123;
let HexadecimalNum: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
//字符串
let stringName: string = `string`;
//数组
let list: number[] = [1, 2, 3]; //元素类型后加上[]
let otherList: Array<number> = [1, 2, 3]; //数组泛型，Array<元素类型>
//元组 Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
let x: [string, number];
x = ["hello", 10]; //正确 //x = [10, 'hello'] 错误
//枚举 使用枚举类型可以为一组数值赋予友好的名字。
enum Color {
  RED = 2,
  GREEN,
  BLUE
}
let c: Color = Color.GREEN; //这里c = Color 的编号3，默认由0开始
let ColorName: string = Color[2]; //由枚举获取它的名字
//Any 任意类型
let notSure: any = 4;
notSure = false;
let notSureList: Array<any> = [1, false, "任意类型的数组"];
//Void 表示没有任何类型，如当一个函数没有返回值的时候，只能赋值为undefined 或者 null
const log = (params: any): void => {
  document.write(params.toString());
};
//Null 和 Undefined
//默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number或其他类型的变量(打开了--strictNullChecks则不行)
//Never never类型表示的是那些永不存在的值的类型
function error(message: string): never {    //抛出异常会返回Never
    throw new Error(message);
}
function fail() {     //错误日志会返回Never
    return error("Something failed");
}
function infiniteLoop(): never {    //死循环会返回Never
    while (true) {
    }
}
//Object object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
//类型断言 类型断言可以让编辑器略过类型检查
function getLength(params:string | number): void {
    //console.log(params.length)    这里会存在类型错误，number 不存在length 属性
    //使用类型断言, 字符串返回长度，数字为undefined
    console.log((<string>params).length);    //尖括号语法
    console.log((params as string).length);  //as 语法
}


