var bulletPosition = 4;

const spinChamber = () => {
	var chamberPosition = Math.floor((Math.random() * 6) + 1);
	return chamberPosition;
};

// Remove the // below and complete the commented lines
const fireGun = (spinnerPosition) => {
    
    let retorno;
    if(spinnerPosition==bulletPosition){
        retorno="You're dead!";
    }else {
        retorno="Keep playing!";
    } 
    return retorno;
};

//console.log(fireGun(...));
console.log(fireGun(spinChamber()));