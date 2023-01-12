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
        }
};

restaurant.orferDelivery({
        time : '22:30',
        address: 'hanoi',
        mainIndex: 2,
        starterIndex: 2,
});

restaurant.orferDelivery({
        address:'via del sole, 21',
        starterIndex: 1, 
});

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0],  arr[1],  arr[2]];
console.log(badNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

console.log(menu);

const str = 'trong';
const letters = [ ...str, ' ', 'S.'];
console.log(letters);

console.log(...str);


// const ingredients = [
//         prompt(" let's make pasta! Ingredient 1?"),
//         prompt('Ingredient 2?'),
//         prompt('Ingredient 3'),


// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0],ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);


//Object
const newRestaurant = {FoundedIn: 1998, ...restaurant, founder: 'guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurant.name);
console.log(restaurantCopy.name);
