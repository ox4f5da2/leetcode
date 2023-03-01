const code20 = `
void async function () {
  // Write your code here
  const password = [];
  while(line = await readline()){
      password.push(line);
  }
  const reg1 = [/[a-z]+/, /[A-Z]+/, /[0-9]+/, /[^a-zA-Z0-9 \n]+/];
  const reg2 = /(.{3,}).*?(\1)/;
  const reg3 = /\s+/;
  for(const pwd of password) {
      const flag1 = pwd.length > 8;
      const flag2 = reg1.reduce((pre, curr) => (pre += +curr.test(pwd), pre), 0) >= 3;
      const flag3 = !reg2.test(pwd);
      const flag4 = !reg3.test(pwd);
      console.log(flag1 && flag2 && flag3 && flag4 ? 'OK' : 'NG');
  }
}()
`;

module.exports = {
  code20
}
