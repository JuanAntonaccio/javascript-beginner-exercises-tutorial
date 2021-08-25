// Your code here:
let text1="bottles of milk on the wall";
let text2="bottles of milk.";
let text3="Take one down and pass it around, " ;

let text5="1 bottle of milk on the wall, 1 bottle of milk.";

let text7=" no more bottles of milk on the wall.";
let text8='No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.';
let texto='';
function botellas(numero){
    if (numero==1){
        texto=text5+' '+text3+text7;
        console.log(texto);
    }else if(numero==0){
        console.log(text8);
    }else {
        texto="";
        texto=numero+' '+text1+', '+numero+' '+text2+' '+text3;
        texto=texto+(numero-1)+' '+text1+'.';
        console.log(texto);
    }
}

for (let i=99;i>=0;i--){
    botellas(i);
}



