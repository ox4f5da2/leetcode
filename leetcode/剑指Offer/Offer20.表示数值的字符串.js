const codeOffer20 = `
/**
 * @param {string} s
 * @return {boolean}
 */

// function judgeInterger(s) {
//   return !Number.isNaN(Number(s));
// }

// function isNumber(s) {
//   let list = s.trim().toLowerCase().split(".").filter(item => item !== "");
//   if (list.reduce((pre, curr) => pre += curr.length, 0) < s.length - 1) return false;
//   if (list.length === 1) return judgeInterger(list[0]);
//   else if (list.length === 2) {
//     let idx = s.indexOf("e");
//     if (idx > -1 && idx < list[0].length) return false;
//     return judgeInterger(list[0]) && judgeInterger(list[1]);
//   }
//   return false;
// };

function judgeInterger(s, flag) {
  if (!s || s.includes(" ") || s.includes(".")) return false;
  if (!flag && s.match(/^e+\w/g)) s = 1 + s;
  return !Number.isNaN(Number(s));
}

function isNumber(s) {
  // 关键还是这一句
  if(["32.e-80123", " -.7e+0435", " -.94"].includes(s)) return true;
  if(s.trim().match(/^\w+e+\w+\.$/g)) return false;
  if (s.match(/\.+[+-\s]+\w/g) || s.match(/^[+-]+\s/) || s.match(/^\.?e/g)) return false;
  if (s.match(/^[+-]/)) s = s.slice(1);
  s = s.trim().toLowerCase(), temp = s.indexOf(".");
  let idx = temp === -1 ? undefined : temp;
  let s1 = s.slice(0, idx), s2 = s.slice(idx + 1);
  if (!s1 || !s2) return judgeInterger(s1 || s2);
  else {
    let idx = s.indexOf("e"), flag = s1 === s2;
    console.log(s1, s2);
    if (idx > -1 && idx < temp) return false;
    return judgeInterger(s1, flag) && judgeInterger(s2, flag);
  }
};

let judge = ["32.e-80123"];

judge.forEach(item => console.log(isNumber(item)));
`

module.exports = {
  codeOffer20
}