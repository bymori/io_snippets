/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-02-08 21:23:42
 * @LastEditors: by_mori
 * @LastEditTime: 2022-02-08 21:40:55
 */
// setTimeout 的 第三个参数
// mdn文档  https://developer.mozilla.org/zh-CN/docs/Web/API/setTimeout

// 1. 场景 for setTimeout i
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 一秒后输出
// 5 5 5 5 5

// 使用闭包进行优化 因为函数执行时不会被销毁
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  })(i);
}

// 0 1 2 3 4 5

// 使用 setTimeout 的第三个参数
for (var i = 0; i < 5; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    i * 1000,
    i
  );
}
// 0 1 2 3 4 5

// 2. 将函数作为第三个参数
var a = 0;
setTimeout(
  () => {
    console.log(`第二次a = ${a}`);
  },
  5000,
  setTimeout(() => {
    console.log(`第一次a = ${a}`);
    a++;
  }, 1000)
);

// 第一次a = 0
// 第二次a = 1
