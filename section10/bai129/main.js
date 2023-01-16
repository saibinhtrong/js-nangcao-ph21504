const flight = 'LH2435';
const jonas = {
        name: 'jonas Schmedtman',
        passport: 244543675,
}


const checkIn = (flightNum, passenger) => {
        flightNum = 'LH3564';
        passenger.name = 'Mr.' + passenger.name;

        if(passenger.passport === 244543675){
                alert('checked in');
        }else{
                alert('Wrong passport');
        }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

