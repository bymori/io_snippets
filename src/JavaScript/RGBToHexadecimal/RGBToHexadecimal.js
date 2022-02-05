/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-02-05 20:22:04
 * @LastEditors: by_mori
 * @LastEditTime: 2022-02-05 21:25:54
 */
// 实现颜色转换 rgb --> 十六进制
// 'rgb(255,255,255)' --> '#FFFFFF'
// 'RGB(  255 ,  255 , 255   )'

// 1. rgb格式提取 r, g, b数值
// 2. r, g, b --> 十六进制

// 第一步 rgb格式提取 r, g, b数值
function getValue1(rgb) {
  // 1. 正则
  const reg1 = /^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/;
  const match = rgb.match(reg1);
  return [match[2] * 1, match[3] * 1, match[4] * 1];
}

function getValue2(rgb) {
  // 2. 正则
  const reg2 = /\d+/g;
  const match = rgb.match(reg2);
  return [match[0] * 1, match[1] * 1, match[2] * 1];
}

// 测试数据
const rgb = 'rgb(6  ,99  ,3  )';

console
  .log
  //   'rgb(1,2,3)'.match(
  //     /^(rgb|RGB)\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/
  //   )
  //   getValue1(rgb) // [ 6, 99, 3 ]
  //   getValue2(rgb) // [ 6, 99, 3 ]
  ();

//   测试数据
const r = 255;
// 第二步 r, g, b --> 十六进制
Number(14).toString(16); // e --> 0e
// 如果值小于16, 则只会得到 一位数 的16进制数 需要进行补零

// 方法一, 与16进行比较 如果小于16则进行补零操作
(Number(r) > 16 ? '' : '0') + Number(r).toString(16); // 0f
// console.log((Number(r) > 16 ? '' : '0') + Number(r).toString(16));

// 方法二, 手动拼接0, slice方法截取后两位
('0' + Number(r).toString(16)).slice(-2); // 0f
// console.log(('0' + Number(r).toString(16)).slice(-2));

// 方法三 padStart 如果不足两位则 以 fillString 填充达到给定的长度 填充从当前字符串的开头开始应用。
Number(r).toString(16).padStart(2, '0'); // 15 --> 0f  255 --> ff
// console.log(Number(r).toString(16).padStart(2, '0'));

// 算法1
function rgbToHex(rgb, isToLower = false) {
  const arr = getValue2(rgb);
  return arr.reduce((pre, cur) => {
    let val;

    if (isToLower) {
      val = Number(cur).toString(16).padStart(2, '0');
    } else {
      val = Number(cur).toString(16).toLocaleUpperCase().padStart(2, '0');
    }

    return pre + val;
  }, '#');
}

// 测试数据
const rgb1 = 'rgb(1,  162 ,  5)';
const rgb2 = 'RGB(153,253  ,  99)';
const rgb3 = 'rgb(255,200,255)';
const rgb4 = 'RGB(333,333,333)';

const result1 = rgbToHex(rgb1); // #01A205
const result2 = rgbToHex(rgb2); // #99FD63
const result3 = rgbToHex(rgb3, true); // #ffc8ff
const result4 = rgbToHex(rgb4); // #14D14D14D

console.log(result1, result2, result3, result4);
