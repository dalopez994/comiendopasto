let ingrediente1 = prompt("Cual sera tu ingrediente principal?" + "Arroz, Pollo, Lechuga");
while(((ingrediente1=="Arroz")||(ingrediente1=="Pollo")||(ingrediente1=="Lechuga") )==false ){
    ingrediente1 = prompt("No tenemos "+ingrediente1+" "+"Cual sera tu ingrediente principal? Arroz, Pollo, Lechuga");
}
alert ("Agregamos "+ingrediente1);


let ingrediente2 = prompt("Cual sera tu ingrediente secundario?" + "Tomate, Berenjena, Cebolla");
while(((ingrediente2=="Tomate")||(ingrediente2=="Berenjena")||(ingrediente2=="Cebolla") )==false ){
    ingrediente2 = prompt("No tenemos "+ingrediente2+" "+"Cual sera tu ingrediente secundario? Tomate, Berenjena, Cebolla");
}
alert ("Agregamos "+ingrediente2);





switch(ingrediente1) {
    case "Arroz":
        valor1=30;
        break;
    case "Pollo":
        valor1=100;
        break;
    case "Lechuga":
        valor1=60;
        break;
};

switch(ingrediente2) {
    case "Tomate":
        valor2=30;
        break;
    case "Berenjena":
        valor2=60;
        break;
    case "Cebolla":
        valor2=10;
        break;
};

alert ("Ensalada: "+ingrediente1 +" "+"con "+ ingrediente2 + " "+"Total: $ "+(valor1+valor2));
