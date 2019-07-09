// const add = require('../main');
//
// it ('should add two numbers', () => {
// 	    expect(add(2, 3)).toBe(5);
// });

//测试startNumber是否小于endNumber
// const isStartNumberSmallerThanEndNumber = require('../main');
// it ('should return true when startNumber is smaller than endNumber ', () => {
// 	expect(isStartNumberSmallerThanEndNumber(1, 3)).toBe(true);
// });
//
// it ('should return true when startNumber is smaller than endNumber ', () => {
// 	expect(isStartNumberSmallerThanEndNumber(1, 1)).toBe(true);
// });
//
// it ('should return true when startNumber is smaller than endNumber ', () => {
// 	expect(isStartNumberSmallerThanEndNumber(6, 3)).toBe(false);
// });

//测试number是否在1-1000内
// const isInRangeOf1to1000 = require('../main');
// it ('should return true when startNumber and endNumber in 1 to 1000', () => {
// 	expect(isInRangeOf1to1000(1, 3)).toBe(true);
// });
//
// it ('should return true when startNumber and endNumber not in 1 to 1000', () => {
// 	expect(isInRangeOf1to1000(1, 1000)).toBe(true);
// });
//
// it ('should return true when startNumber and endNumber not in 1 to 1000', () => {
// 	expect(isInRangeOf1to1000(0, 1000)).toBe(false);
// });

//测试根据两个数打印乘法表
// const printMultiplicationTable = require('../main');
// it ('should return print when input startNumber and endNumber in 2 and 3', () => {
// 	expect(printMultiplicationTable(2, 4)).toBe("2*2=4\n"+"2*3=6 3*3=9\n"+"2*4=8 3*4=12 4*4=16\n");
//
// });
//
// it ('should return print when input startNumber and endNumber in 1 and 2', () => {
// 	expect(printMultiplicationTable(1, 2)).toBe("1*1=1\n"+"1*2=2 2*2=4\n");
// });
//
// it ('should return print when input startNumber and endNumber in 1 and 2', () => {
// 	expect(printMultiplicationTable(1, 3)).toBe("1*1=1\n"+"1*2=2 2*2=4\n"+"1*3=3 2*3=6 3*3=9\n");
// });