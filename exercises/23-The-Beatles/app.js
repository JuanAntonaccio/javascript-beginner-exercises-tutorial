const rep="let it be, ";
const rep2="let it be";
let resu="";
function sing(){
  for (let i=1;i<5;i++){
      resu=resu+rep;
  }
  resu=resu+" whisper words of wisdom, ";
  for (let i=1;i<6;i++){
      resu=resu+rep;
  }
  resu=resu+" there will be an answer, ";
  resu=resu+rep2;
  console.log(resu);
}

sing();
//Your code above ^^^

