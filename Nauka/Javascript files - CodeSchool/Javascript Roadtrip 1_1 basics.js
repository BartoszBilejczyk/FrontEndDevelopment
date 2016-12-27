// Numbers, operators and strings //

==, !=, >=, <= itp 

To use strings simply place qoutation marks like "Super Marioo Bros".
To concatenate strings use e.g. "Super " + "Mario " + "Bros". It is also possible to concatenate strings and numbers into strings "Super " + 42 produces "Super 42"

JavaSript is case sensitive

Using backslashes \ 
\t gives a tab space
\n gives a new line
If we want to have qoutation marks inside a string use "\"something\"\tworks" i tyle 
If we want to have backslash inside then use double \\

// początkowe funkcje //

"ile to ma liter".length -> will produce 13 because everything counts

// Variable valley - introduction to variables //

var carPlaces = 5
carPlaces = carPlaces + 5
OUTPUT : 10

To change value just change it
carPlaces = 15

Mathematical things can be done two ways:
carPlaces = carPlaces + 2 albo carPlaces += 2, tak samo z mnożeniem itp

To increment or decrement by 1 use varName++ or varName--

Using variables with strings 
"A car typically has " carPlaces " Places"

variable from variable
var truckPlaces = carPlaces * 2

Variables can store strings as well
var siema = "siema"
var ziomek = "ziomek"
siema + "\n" + ziomek da nam siema enter ziomek

Można porównywać długość stringsów
siema.length < ziomek.length da nam TRUE

Characters are 0-based. It is the distance from the first letter. So the first letter is 0 from itself
To check what letter is in what position use: 
siema.charAt(2) i to da nam "e" - What character is at position 2

To create some flexible data we can use variables that produce some text which is useful to user. Change anything in variable and it will be different thing for the user in output
var bottlesFull = 10
var bottlesAll = 20
var stillFull = " bottles are still full in our store"

bottlesFull + " out of " + bottlesAll + stillFull da nam całe zdanie "10 out 20 bottles are still full in our store"

// Script tags - in HTML 5 //

in files we must use semicolons - ; after every specific action. 

For user to see that something has happened we have to use console.log()

e.g. console.log(bottlesFull + "out of"); bla bla

