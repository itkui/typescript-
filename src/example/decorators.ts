/*
 * @Author: ItKui
 * @Date: 2020-09-16 10:53:19
 * @LastEditTime: 2020-09-16 13:49:21
 * @FilePath: \typescript\src\example\decorators.ts
 */
function getPersion<F extends {new (...args: any[]):{}}>(constructor: F) {
   return class extends constructor {
    newName = '张三'
    newAge = 12
    newSex = '女'
   }
}
function getFunc(target: any) {
    console.log(target)
}
function getDecorator(type: string): Function {
    switch (type) {
        case 'class':
            return getPersion
        case 'func': 
            return getFunc
        default:
            return () => {}
            break;
    }
}

interface AFace {
    name: string
    age: number
    sex: string
}

@getDecorator('class')

class A {
    name;
     age;
     sex;
    constructor(data: AFace) {
        let {name, age, sex} = data;
        console.log(data)
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    get() {
        let { name, age, sex } = this;
        return 'get'
    }
}

let zhangsan = new A({
    name: '张三',
    age: 12,
    sex: '男'
})

console.log(zhangsan)