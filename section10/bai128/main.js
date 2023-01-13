const bookings = [];

const createBoongking = (flightNum, numPassengers = 1, price =199 * numPassengers ) => {
        const booking ={
                flightNum,
                numPassengers,
                price  ,
        };
        console.log(booking);
        bookings.push(booking);
};

createBoongking('ph21504');
createBoongking('ph21504', 3, 400);
createBoongking('ph21504',2);
createBoongking('ph21504', 6);
createBoongking('ph21504', undefined, 800);