 const calcAverage = (a, b, c) => (a + b + c) /3;


//  //test 1 
//   let dolphins = calcAverage(43, 23, 71);
//   let koalas = calcAverage(65, 54 ,49);
//test 2
        let dolphins = calcAverage(85, 54 , 41);
        let koalas = calcAverage(23, 34, 27 );


   const checkWinner = function (avgDolphins, avgKoalas){
        if(avgDolphins >= 2 * avgKoalas){
                console.log(`Dolphins dành cup (${avgDolphins} vs ${avgKoalas})`);
        }else if(avgKoalas >= 2 * avgDolphins){
                console.log(`Koalas dành cup(  ${avgKoalas} vs ${avgDolphins})`)
        }else {
                console.log('không có đội nào dành cup');
        }
   }

   checkWinner(dolphins, koalas);
//    checkWinner(500, 111);