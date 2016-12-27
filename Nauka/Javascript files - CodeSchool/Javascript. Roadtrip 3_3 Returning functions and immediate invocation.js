var parkRides = [ ["kolejka1, 50"],
					["kolejka2, 50"],
					["kolejka3, 50"],
					["kolejka4, 50"], ];

var fastPassQueue = ["kolejka1", "kolejka2", "kolejka1", "kolejka4"]

Jeśli chcemy coś dodać na koniec fastPassQueue to dajemy XXXXX.push()
Jeśli chcemy usunąć pierwszą wartość i returnować ją to dajemy fastPassQueue.shift() - to returnuje nam "kolejka1"

Możemy również store'ować' pierwszą wartość. 

var firstFastPass = fastPassQueue.shift()

BUDUJEMY FUNKCJĘ, KTÓRA MA ZA ZADANIE DAWAĆ FAST PASSY LUDZIOM

function giveTicket (allRides, allPasses, pick) {
	if allPasses[0] = pick {
		var pass = allPasses.shift();		
		return function () {
			alert("Zajebiście. Łap FastPass na " + pick);
		};
	} else {
		for (i = 0, i < allPasses.length, i++) {
			if allRides[i][0] = pick { 
				return function () {
					alert("Dostaniesz wejściówkę na " + pick + ". Czas oczekiwania to " + allRides[i][1]);
				};

			}
		}
	}

}



Jeśli pierwszy w kolejce pass jest taki jak ktoś chce usuń go z listy i pokaż ludkowi - łap fastpassa.

W innym wypadku sprawdź dla każdej kolejki w parku - jeśli ktoś chce daną kolejkę zwróć mu info, że dostaje wejsciowke na z czasem oczekiwania podanym w arrayu.




Są dwie opcje na wywołanie funkcji 

var ticket = giveTicket(parametr1, parametr2, parametr3);
ticket();

ALBO

giveTicket(parametr1, parametr2, parametr3)();   - te () na końcu wywołują nam funkcję - IMMEDIATE INVOCATION.


function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";   
    } 
    
    else if (choice1 === "rock") {
        if (choice2 === "paper") {
            return "paper wins";    
        } else if (choice2 === "scissors") {
            return "rock wins";   
          }
        
      } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                return "paper wins";    
        }   else if (choice2 === "scissors") {
                return "scissors wins";   
        }
    

}