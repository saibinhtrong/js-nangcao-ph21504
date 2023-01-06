const mark ={
        fullName : 'Mark Miller',
        mass: 92,
        height: 1.95,
        calcBMI: function(){
                this.bmi = this.mass / this.height ** 2;
                return this.bmi;
        }
};

const john ={
        fullName: 'John Smith',
        mass:92,
        height:1.95,
        calcBMI : function (){
                this.bmi = this.mass / this.height ** 2;
                return this.bmi;
        }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi){
        console.log(`${mark.fullName} BMI (${mark.bmi}) cao hon ${john.fullName} BMI (${john.bmi})`);
}else if(john.bmi > mark.bmi){
        console.log(`${john.fullName} BMI (${john.bmi}) cao hon ${mark.fullName} BMI (${mark.bmi})`)
}else if(john.bmi === mark.bmi){
        console.log("chi so BMI ca 2 deu bang nhau")
}