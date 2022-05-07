const ingred1 = [
    {nombre: 'ARROZ', precio: 30},
    {nombre: 'POLLO', precio: 100},
    {nombre: 'LECHUGA', precio: 60},
]
const ingred2 = [
    {nombre: 'TOMATE', precio: 30},
    {nombre: 'BERENJENA', precio: 60},
    {nombre: 'CEBOLLA', precio: 10},
]

let ingrediente1 = prompt("Cual sera tu ingrediente principal? "+(ingred1.map((el) => el.nombre))).toUpperCase() ;
while(ingred1.some((el) => el.nombre == ingrediente1)==false ){
    ingrediente1 = prompt("No tenemos "+ingrediente1+". "+"Cual sera tu ingrediente principal? "+(ingred1.map((el) => el.nombre))).toUpperCase();
}
alert ("Agregamos "+ingrediente1);

let ingrediente2 = prompt("Cual sera tu ingrediente secundario? "+(ingred2.map((el) => el.nombre))).toUpperCase() ;
while(ingred2.some((el) => el.nombre == ingrediente2)==false ){
    ingrediente2 = prompt("No tenemos "+ingrediente2+". "+"Cual sera tu ingrediente secundario? "+(ingred2.map((el) => el.nombre))).toUpperCase();
}
alert ("Agregamos "+ingrediente2);

let valor1 = (ingred1.find((el) => el.nombre === ingrediente1)).precio
console.log(valor1)
let valor2 = (ingred2.find((el) => el.nombre === ingrediente2)).precio
console.log(valor2)

alert ("Ensalada: "+ingrediente1 +" "+"con "+ ingrediente2 + ". "+"Total: $ "+(valor1+valor2));





