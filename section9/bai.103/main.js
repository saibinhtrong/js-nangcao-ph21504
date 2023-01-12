const restaurant = {
        name: 'Classico Italiano',
        location: 'Via Angelo Tavanti 23, Firenze, Italy',
        categories: ['Italian', 'Pizzerria', 'Vegettarrian', 'Organic'],
        starterMenu: ['Focaccia','Bruschetta','GarlicBread', 'Caprese Salad' ],
        mainMenu: ['Pizza', 'Pasta', 'Risotto'],
        order: function(starterIndex, mainIndex) {
                return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
        },
};


const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [ x, y,z] = arr;
console.log(x,y,z);
console.log(arr);
console.log(a, b, c);

// const [first, second, third, fourth ] = restaurant.categories;
// console.log(first, second, third, fourth);
let [main, ,secondary ] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);
const [starter, mainCourse]=(restaurant.order(2, 0));
console.log(starter, mainCourse)


const nested = [2, 4, [5, 6]];
// const [i, ,j]= nested;
const [i, ,[j, k]] =nested;
console.log(i, j, k);

// default values
// const [n ,m, l]= [8,9];
const [n = 1 ,m =1 , l= 1]= [8,9];
console.log(n, m, l)