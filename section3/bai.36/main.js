const cutPieces = (fruit) =>  {
        return  fruit   * 8;
}


const fruitProcessor  = (apples, oranges) => {
        const applePieces  = cutPieces(apples);
        const orangePieces = cutPieces(oranges);

        const juice = `juice with   ${applePieces} pieces of apple an ${orangePieces} pieces of orange.`
        return juice;
};


console.log(fruitProcessor(3, 4));