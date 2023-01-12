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

const {name, openingHours, categories} = restaurant;

console.log(name, openingHours, categories);

const {menu = [], starterMenu: starter = []} = restaurant;
console.log(menu, starter);


let a =111;
let b = 999;

const obj = {a: 25, b:6, c:45};
({a, b} = obj);
console.log(a, b);

const {
        thu: {open: o, close: c} ,
}= openingHours;
console.log(o, c);