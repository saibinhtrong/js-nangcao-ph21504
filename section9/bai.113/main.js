
const weekdays = ['mon','tue','wed','thu','fri', 'sat', 'sun'];

const  openingHours = {
        [weekdays[3]]: {
                open: 12,
                close: 22,
        },
        [weekdays[4]]: {
                open: 11,
                close: 23,
        },
        [weekdays[5]]: {
                open: 0,
                close: 12 +13,
        },
};

const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzerria', 'Vegettarrian', 'Organic'],
        starterMenu: ['Focaccia','Bruschetta','GarlicBread', 'Caprese Salad' ],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        openingHours,
       
        order: function(starterIndex, mainIndex) {
                return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },
        orferDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
                console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
        },
        orderPasta: (ing1, ing2, ing3) => {
                console.log(` here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
        },

        orderPizza: (mainIngredient, ...otherIngreddients) => {
                console.log(mainIngredient);
                console.log(otherIngreddients);
        }
};
 

 if (restaurant.openingHours && restaurant.openingHours.mon)
 console.log(restaurant.openingHours.mon.open);

 console.log(restaurant.openingHours.mon?.open);
 console.log(restaurant.openingHours?.mon?.open);


 const days = ['mon','tue','wed','thu','fri', 'sat', 'sun'];

 for(let day of days){
        console.log(day);
        const open = restaurant.openingHours[day]?.open??'closed';
        console.log(`On${day}, we open at ${open}`)
 }


 console.log(restaurant.open?.(0, 1) ?? 'Method does not exist');
 console.log(restaurant.orderRisotto?.(0,1) ?? 'method does not exist');

 const user = [{name: 'jonas', email: 'meo@jonas.io'}];

 console.log(user[0]?.name ?? 'User array empty');

 if(user.leng >0 ) console.log(user[0].name);
 else console.log('user array empty');