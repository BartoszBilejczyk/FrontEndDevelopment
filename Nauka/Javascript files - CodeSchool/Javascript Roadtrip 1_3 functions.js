// Budowa funkcji //

function function_name(argument (what it uses to produce something)) {
	// body...
}

var x = 3
function sumOfSquares (a, b) {
	return a*a * b*b;
}

sumOfSquares(2*x, 3*x)

PSEUDO CODE 
function countA () {
	*ask user for string
	if the entry is invalid {
		inform user about it using return
		exit the functionn because it failed with a report

	} else {
		make a counter for A
		for every character in the word {
			check if the character is "a" or "A" {
				increment the counter by one
			}
		}
		alert the user about the number of A in the word
	}



}

ACtUAL CODE 

function countA () {
	var wordWithA = prompt("Give me a word with A");

	if (typeOf(wordWithA) != string) {
		alert("You did not type a word");
		return false;
	} else {
		var counterA = 0;
		for (var index=0; index < wordWithA.length; index++) {

			if wordWithA.charAt(index) == "a" || wordWithA.charAt(index) "A" {
				var counterA = counterA + 1;
			}
		}
		alert("There are " + counterA + " letter A in the word you've typed");
		return true;	
	}

}

//local and global scope //

variables outside of functions are accesible everywhere, wherease variables inside functions only there.


var x = 6;

function add (a,b) {
	var x = a+b;
	return x;
}

add(2,10) -> 12
console.log(x) -> 6

................................

var x = 6;

function add (a,b) {
	x = a+b;
	return x;
}

add(2,10) -> 12
console.log(x) -> 12 (bo nie deklarowaliśmy var)






































