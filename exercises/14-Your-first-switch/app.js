function getColor(selection)
{
	switch(selection){
		// Add more options here
		case 'red':
			return true;
		case 'blue':
			return true;
		case "green":
			return true;		
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
