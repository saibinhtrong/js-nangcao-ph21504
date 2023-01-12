const  calcAge = (birthYeah) => {
        return 2037 - birthYeah;
}
const yearsUntirement = (birthYeah, firstName) => {
        const age = calcAge(birthYeah);
        const retirement = 65 - age;
       if(retirement > 0){
        console.log(`${firstName} retires in ${retirement} year `);
        return retirement;
       }else{
        console.log(`${firstName} has already retired`);
        return -1;
       }
}

console.log(yearsUntirement(1991, 'jonas'));
console.log(yearsUntirement(1970,  'will'));



