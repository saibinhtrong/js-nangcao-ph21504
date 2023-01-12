// const dolphins = (96 +108 +89) /3;
// const koalas = (88+91+110) /3;

// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 123) / 3;

const dolphins = (97 +112 +101) /3;
const koalas = (109+ 95 + 106) /3;

if (dolphins > koalas && dolphins >= 100) {
        console.log("dolphins đã dành chiến thắng");
} else if (dolphins < koalas && koalas >= 100) {
        console.log("koalas đã dành chiến thắng")
} else if (dolphins === koalas && dolphins >= 100 && koalas >= 100) {
        console.log("hòa nhau");
}else{
        console.log("không một ai dành chiến thắng");
}
