let ingrediente1 = prompt("Cual sera tu ingrediente principal? Arroz, Pollo, Lechuga").toUpperCase() ;
while(((ingrediente1=="ARROZ")||(ingrediente1=="POLLO")||(ingrediente1=="LECHUGA") )==false ){
    ingrediente1 = prompt("No tenemos "+ingrediente1+". "+"Cual sera tu ingrediente principal? Arroz, Pollo, Lechuga");
}
alert ("Agregamos "+ingrediente1);


let ingrediente2 = prompt("Cual sera tu ingrediente secundario? Tomate, Berenjena, Cebolla").toUpperCase() ;
while(((ingrediente2=="TOMATE")||(ingrediente2=="BERENJENA")||(ingrediente2=="CEBOLLA") )==false ){
    ingrediente2 = prompt("No tenemos "+ingrediente2+". "+"Cual sera tu ingrediente secundario? Tomate, Berenjena, Cebolla");
}
alert ("Agregamos "+ingrediente2);





switch(ingrediente1) {
    case "ARROZ":
        valor1=30;
        break;
    case "POLLO":
        valor1=100;
        break;
    case "LECHUGA":
        valor1=60;
        break;
};

switch(ingrediente2) {
    case "TOMATE":
        valor2=30;
        break;
    case "BERENJENA":
        valor2=60;
        break;
    case "CEBOLLA":
        valor2=10;
        break;
};

alert ("Ensalada: "+ingrediente1 +" "+"con "+ ingrediente2 + ". "+"Total: $ "+(valor1+valor2));
