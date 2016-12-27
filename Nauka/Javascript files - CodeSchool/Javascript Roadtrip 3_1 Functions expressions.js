it is possible to assign a function to variable

Anonymous function expression!!!

var body = function (legs, arms) { --- Nie trzeba tu dawać nazwy funkcji jesli assignujemy to zmiennej
	return legs * arms;
};

body(5, 10); - musi byc wszystko - parentheses, semicolon

zamiast console.log() daje się document.write(żeby było widać co jest napisane w przegladaarce)


// Passing functions expressions as parameters with Arrays and map[] //

var numbers = [12, 4, 4, 5, 6]

var doubles = numbers.map(function (arrayCell) { return 2 * arrayCell; });

document.write(doubles);
console.log(doubles);

To działa tak że bierze wszystkie celle z numbers i mnoży razy 2. Działa jak: 

var doubles = []

for (i=0; i < numbers.length; 1++) {
	doubles[i] = function(numbers[i]);
}

.map - chodzi tutaj o wzięcie każdego elementu i wrzucenie go do funkcji


// Returning Functions and Immediate Invocation //


