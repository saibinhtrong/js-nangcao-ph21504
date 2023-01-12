
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
 
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);
// Property VALUES
const values = Object.values(openingHours);
console.log(values);
// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);
// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}