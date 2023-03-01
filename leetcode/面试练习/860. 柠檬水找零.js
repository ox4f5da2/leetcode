const code860 = `
/**
 * @param {number[]} bills
 * @return {boolean}
 */

function lemonadeChange(bills) {
  let fiveDollarnums = 0, tenDollarnums = 0;
  for (i = 0, len = bills.length; i < len; i++) {
    const bill = bills[i];
    if (bill === 5) fiveDollarnums++;
    else if (bill === 10) {
      if (fiveDollarnums >= 1) {
        fiveDollarnums--;
        tenDollarnums++;
      }
      else {
        return false;
      }
    }
    else {
      if (fiveDollarnums >= 1 && tenDollarnums >= 1) {
        fiveDollarnums--;
        tenDollarnums--;
      } else if (fiveDollarnums >= 3) {
        fiveDollarnums -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

console.log(lemonadeChange([5, 5, 10, 10, 20]));
`

module.exports = {
  code860
}