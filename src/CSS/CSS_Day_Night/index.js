/*
 * @Descripttion: io小栈 —— ioinn.cn
 * @version: 0.0.1
 * @Author: by_mori
 * @Date: 2022-02-03 22:35:22
 * @LastEditors: by_mori
 * @LastEditTime: 2022-02-03 23:14:03
 */
window.addEventListener('mousemove', (e) => {
  let percentage = 100 - (e.clientX / window.innerWidth) * 100;
  document.querySelector('.sun').style.clipPath = `inset(0 ${percentage}% 0 0)`;
});

window.onload = () => {
  let myDate = new Date();
  let hh = myDate.getHours(); //时

  let percentage = 100 - (hh / 24) * 100;
  document.querySelector('.sun').style.clipPath = `inset(0 ${percentage}% 0 0)`;
};
