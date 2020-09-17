/*
 * @Author: ItKui<13452903663@163.com>
 * @Date: 2020-09-17 11:42:38
 * @LastEditTime: 2020-09-17 13:43:14
 * @FilePath: \typescript\src\example\generics.ts
 * @FileName: 泛型
 */

// eg1:
 const getArr = <T>(value: T, length = 5): T[] => {
     return Array(length).fill(value);
 }

 getArr<number>(6.2, 3)

// eg2:
const getArr2 =