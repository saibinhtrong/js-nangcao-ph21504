const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);


if(BMIMark > BMIJohn){
        console.log(`chỉ số BMI của Mark(${BMIMark}) cao hơn John(${BMIJohn})`);
}else{
        console.log(`chỉ số BMI của John(${BMIJohn}) cao hơn Mark(${BMIMark})`);
}
