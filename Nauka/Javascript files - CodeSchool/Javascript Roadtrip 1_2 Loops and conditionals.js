//While Loops //

1. State the variables
2. While (some condition) {}
3. make some action
4. and then give ++ or something so that the loop does not go forever

var trainsOperational = 8
var trainNumber = 1

while (trainNumber <= trainsOperational) {
	console.log("Train # " + trainNumber + " is operational");
	trainNumber++
}

Można dać coś też przed console.log, żeby w środku while zrobić jakiś ruch np trainNumber *= 2 i wtedy co drugi nam będzie robił

// FOR loop // 

for ( define variable; condition; do this after each loop) {
	what to log;
}

for (var trains = 1; trains <= trainsTotal; trains++) {
	console.log("The # " + trains + " is operational"); 
}

It goes like this: initialize with variable, then check if another loop should be created, make the output, then doing the thing after the loop.

for ( var num = 5; num >= 1; num--) {
	console.log(num);
}


// conditionals if else if itd //

// getting and giving information to the user //

alert() - OK
confirm() - Cancel i OK
prompt() - give me entry

When we get the information we can store it in variables

var userName = prompt("What is your name?");
confirm("Are you sure your name is " + userName + " ?");

var gotName = false;
while (gotName == false) {
	var userName = prompt("What is your name");

	if ( confirm("Is your name " + userName + " ?") ) {
		alert("Siemano " + userName +);
		gotName = true;
	}
} 

To działa tak: gotName kontroluje czy już mamy imię
Teraz loop działa tak: Dopóki ziomek nie potwierdzi czyli nie konfirmuje imienia, 
pytaj go o jego imię. Jak potwierdzi to wyswietl siemano i zamień gotName na true, czyli ze juz mamy imię


Aby sprawdzić czy ktoś nam cokolwiek wpisał to używamy

typeOf = null co da nam object w odpowiedzi