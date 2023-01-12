// const bill = 275;

const bill = 300;
const tip = bill >=50 && bill <=300 ?  bill * 0.15:bill * 0.2;

console.log( ` Tiền bill là ${bill}, tiền tip là ${tip}, tổng giá trị: ${bill+ tip}`)
