const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzerria', 'Vegettarrian', 'Organic'],
        starterMenu: ['Focaccia','Bruschetta','GarlicBread', 'Caprese Salad' ],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],

        openingHours: {
                thu: {
                        open: 12,
                        close: 22,
                },
                fri: {
                        open: 11,
                        close: 23,
                },
                sat: {
                        open: 0,
                        close: 24,
                },
        },
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
 const rest1 = {
        name: 'capri',
        numGuests:20,

 };
 const rest2 = {
        name: 'la piazza',
        owner: 'Giovanni rossi',

 };

//  rest1.numGuests = rest1.numGuests || 10;
//  rest2.numGuests = rest2.numGuests || 10;
 

 console.log(rest1);
 console.log(rest2);
