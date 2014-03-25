function getSpinner(){
	//fill in the blanks
}

var spinner = getSpinner();
spinner.up() => returns 1
spinner.up() => returns 2
spinner.up() => returns 3
spinner.up() => returns 4

spinner.down() => returns 3
spinner.down() => returns 2
spinner.down() => returns 1
spinner.down() => returns 0
spinner.down() => returns -1


/*write a function that will check whether the given number is a prime number or not.
the algorithm for checking the number should NOT be run more than once for the same number
*/
function isPrime(n){

}

isPrime(93)

isPrime(93)

function getPrimeFinder(){
	var result = {0 : false, 1 : true, 2 : true, 3 : true};
    return function(n){
    	if (typeof result[n] !== "undefined"){
    		console.log("From cache...");
    	} else {
    		var isPrime = true;
    		for(var i=2;i<=Math.sqrt(n);i++)
    			if (n % i == 0) {
    				isPrime = false;
    				break;
    			}
    		result[n] = isPrime;
    		console.log("freshly brewed")
    	}
    	return result[n];
    }
}

function isPrime(n){
	var result = {0 : false, 1 : true, 2 : true, 3 : true};
    isPrime = function(n){
    	if (typeof result[n] !== "undefined"){
    		console.log("From cache...");
    	} else {
    		var isPrime = true;
    		for(var i=2;i<=Math.sqrt(n);i++)
    			if (n % i == 0) {
    				isPrime = false;
    				break;
    			}
    		result[n] = isPrime;
    		console.log("freshly brewed")
    	}
    	return result[n];
    }
    return isPrime(n);
}
