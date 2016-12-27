Objects are just collections of information (keys and values) between curly braces, like this:

var myObject = {
    key: value,
    key: value,
    key: value
};

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

Literal notation is just creating an object with curly braces, like this:

var myObj = {
    type: 'fancy',
    disposition: 'sunny'
};

var emptyObj = {};



When you use the constructor, the syntax looks like this:  "I want you to make me a new thing, and I want that thing to be an Object."

var myObj = new Object()
	myObj["name"] = "Charlie";  - first way
	myObj.name = "Charlie"; - second way of creating properties




THIRD way


function Person(job, married) {
    this.job = job;
    this.married = married;
}

var gabby = new Person ("student", true)

To nam tworzy 

var gabby = {
	job: "student"
	married: true;

}


METHODS with constructor notation


function Person(job, married) {
    this.job = job;
    this.married = married;
    // add a "speak" method to Person!
    this.speak = function () {
        console.log("Hello!");    -------> To jest turbo istotne - tak się robi metody.
        									Żeby użyć potem speak w user.speak() to musi być to funkcja - to nam pokazuje choćby otwarcie i zamknięcie nawiasu ()
    }
}

var user = new Person("Codecademy Student",false);
user.speak();

Pokaże nam się Hello.




METHODS with literal notation


var james = {
    job: "programmer",
    married: false,
    speak: function(feeling) {
        console.log("Hello, I am feeling " + feeling); ---> dokładnie to samo tylko jest bez = i bez this.
    }
};

james.speak("great");
james.speak("just okay");

Pokaże nam się cała wiadomość. "great" jest tutaj argumentem feeling i zostaje dodany do początku wiadomości.




ZMIENIANIE WARTOŚCI W OBIEKCIE

var james = {
    job: "programmer",
    married: false,
    sayJob: function() {
        console.log("Hi, I work as a " + this.job);      ---> tutaj musi być this bo jakbyśmy dali samo job to on by szukał w parametrach funkcji, a to jest w THIS objectu.
    }
};

// james' first job
james.sayJob();

// change james' job to "super programmer" here

james.job = "super programmer"

// james' second job
james.sayJob(this.job);




DOT NOTATION i BRACKET NOTATION

object1.name  to jest to samo co
object1["name"] ---> tutaj możemy używać zarówno stringów jak i variables

var object1 = {
		name: value
}

var property = "name";

object1[property] -----> to samo co object1["name"]




TYPEOF

typeof something ---> daje nam info o czymś czym jest - stringiem, obiektem itp





hasOwnProperty method - mówi nam o tym czy obiekt ma określone property - czyli czy ma określony name, job itp. obiekt { property: value }

var myObj = {
    name: "obiekt",
    surname: "jakiś"
    // finish myObj
    
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false



var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.hasOwnProperty("shorts")) {
    console.log(suitcase.shorts);   
} else {
    suitcase.shorts = "Hawaiian shorts"; ---> Dodałem property do obiektu 
}

console.log(suitcase.shorts);


ABY WYŚWIETLIĆ WSZYSTKIE PROPERTY NAMES OBIEKTU  - FOR IN LOOP

var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var property in nyc) {
    
 console.log(property)   
}



ABY WYŚWIETLIĆ WSZYSTKIE VALUES of properties OBIEKTU  - FOR IN LOOP


Pamiętać, że -----> nyc.fullName = nyc["fullName"] = "New York City";

var x = "NYC"

dog[x] = "NYC" ------> Widać więc, że var musi być stringiem bo jest []



var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

// write a for-in loop to print the value of nyc's properties


for(var x in nyc) {
    
    console.log(nyc[x])   
}




OBJECT ORIENTED PROGRAMMING - OOP  - defining classes. Klasy są jak typy lub kategorie obiektów


function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);  -----> Bob i Susan są różnymi obiektami ale oba należą do klasy (kategorii) Person.

// make your own class here


function Circle(radius) {  ----> stworzenie klasy - funkcja, która będzie nam robiła nowy obiekt o tej klasie
    this.radius = radius;   
}

var bigCircle = new Circle (50); ------> Stwórz mi bigCircle, który będzie nowym obiektem klasy Circle o radiusie 50.





function Dog (breed) {
  this.breed = breed;   ----> To jest pewien PROTOTYP psa 
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {  ------ tutaj on dostaje swoje szczekanie
  console.log("Woof");
}
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here

snoopy.bark = function (snoopBark) {  --- a tutaj snoopy dostaje swoje szczekanie, ale ono się może zmieniać, zależnie co damy potem na samym końcu.
    
 console.log("SnoopBark")   
}

// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark("Awhooo");



Obiekt jest pewną instancją klasy . Klasy > obiekty.
Zawsze mamy tutaj osobę, która ma imię i wiek, ale nie musi mieć innych opcji. To działa trochę jak dodawanie extend w saasie.


function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name

var me = new Person ("Bartek", 22); 



In general, if you want to add a method ( method to zawsze funkcja )to a  classs such that all members of the classs can use it, we use the following syntax to extend the prototype:

className.prototype.newMethod =

function() {
statements;
};


PRZYKŁAD


function Dog (breed) {
    this.breed = breed;
}   

var buddy = new Dog ("golden Retriever");
var snoopy = new Dog ("Beagle");

Dog.prototype.bark = function (barking) {
    console.log(barking)
}

buddy.bark("Woof");
snoopy.bark("auuu");




W OOP jedna klasa może brać od innej property i methods. Tak jak dziecko może brać pieniadze od rodzicow (INHERITANCE)



Remember, inheritance lets us see and use properties and methods from another classs. To say that Penguin inherits from Animal, we need to set Penguins prototype to be Animal.




// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin (name, numLegs) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal

Penguin.prototype = new Animal();   -------> TUTAJ ustalamy, że pingwin jest prototypem Animal.

var penguin = new Penguin ("Penguin")

penguin.sayName()





MAMY PINGWINA, CHCEMY STWORZYĆ EMPERORA1, który będzie klasy EMPEROR, ale też PINGWIN. EMPEROR MA ZAWSZE 2 NOGI JAK PENGUIN, WIĘC JEST JEGO PROTOTYPEM.

function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// create your Emperor class here and make it inherit from Penguin

function Emperor(name) {
    this.name = name;   
}
Emperor.prototype = new Penguin;

// create an "emperor" object and print the number of legs it has

var emperor = new Emperor ("emperor");

console.log(emperor.numLegs)









PROTOTYPE CHAINS - 

Emperor jest pingwinem, pingwin jest animalem, emperor jest animalem. 

Jeśli dajemy czy emperor żyje, a to nie jest u niego sprecyzowane, to skrypt szuka tego u pingwina. Tam też nie ma, ale już na poziomie Animala to sprecyzowaliśmy. Więc skrypt weźmie to stamtad, jeśli damy że jest jego dzieckiem.

Ogólnie ten ostatni, najwyższy to jest Object.prototype



// original classes
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin.prototype = new Animal();
Emperor.prototype = new Penguin();

var myEmperor = new Emperor("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true



In JavaScript all properties of an object are automatically public. Public means that they can be accessed outside the classs. Think of these properties as the information a classs is willing to share.


JAK UTWORZYĆ PRIVATE VARIABLES. Można też tworzyć private methods


function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;  ---------> Tworzenie var w środku funkcji
}

// create your Person 

var john = new Person ("John", "Starovski", "23");

// try to print his bankBalance

console.log(john.bankBalance)




JAK DOSTAĆ SIĘ DO PRYWATNEJ VARIABLE

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
       // your code should return the bankBalance
      return bankBalance;
      
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance);

// create a new variable myBalance that calls getBalance()


var myBalance = john.getBalance();

console.log(myBalance)





PRYWATNE METODY
The way to access a private method is similar to accessing a private variable. You must create a public method for the classs that returns the private method.






FOR IN LOOP REVIEW

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages

for (var x in languages) {  ---> x to jest property
    
    if (typeof languages[x] == "string") {
        console.log(languages[x]);   
    }
    
}







function Dog (breed) {
    this.breed = breed;
};

// add the sayHello method to the Dog class 
// so all dogs now can say hello

Dog.prototype.sayHello = function () {   -------> Do każdego doga dodaj nową metodę sayhello, która jeśli użyta wrzuci w konsolę tekst. 
    
    console.log("Hello this is a " + this.breed + " dog")   -------> this.breed tu jest użyty, ponieważ nie może być samo breed bo breed nie jest parametrem (funkcja nie ma parametru) 
}

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();


One of the most important advantages of prototypal inheritance is
that you can add new properties to prototypes after they are created.
This allows you to add new methods to a prototype
which will be automatically made available
to all the objects which delegate to that prototype.




NOBODY WILL LAUGH, BUT GPA IS VISIBLE

function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);  -----> thanks to var, nobody will laugh muhahahah
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA()); --- GPA is still .this, so it is visible.



CASH REGISTER


var cashRegister = {
    total:0,
    //Dont forget to add your property
    add: function(itemCost) {
        this.total +=  itemCost;   ----> dodaje koszt docalosci
        lastTransactionAmount = itemCost;   ------> Zachowuje w pamięci ostatnią transakcję
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98 * quantity); break;   ----> Jeśli zeskanuje jajka, to dodaj (this.add) cenę razy ilość (czyli ze scanu przechodzimy do add, a add dodaje dototala.)
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Add the voidLastTransaction Method here
    voidLastTransaction: function() {
        this.total -= lastTransactionAmount;  ------> Odejmuje ostatnią transakcję od totala  
    }
    
};

cashRegister.scan('eggs',1);  ---> skanuje jedne jajka
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

//Void the last transaction and then add 3 instead
cashRegister.voidLastTransaction();  -----> odejmuje ostatnią transakcję
cashRegister.scan('chocolate',3);  -----> dodaje poprawioną



//Show the total bill
console.log('Your bill is '+cashRegister.total);






SEARCH BOOK - 

var friends = new Object ();

friends.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: 6675678787,
    address: ['rosoft Way','Redmond','WA','98052']
};

friends.bill = {
    firstName: "Bill",
    lastName: "Gates",
    number: 3432412,
    address: ['rosoft Way','Redmond','WA','98052']

}

for (var property in friends) {
    
    console.log(friends[property]);
}

function search (name) {
    for (var property in friends) { ----------------------> szukam dla każdego ziomka
        if (friends[property].firstName === name)  {  -------> jeśli imię ziomka = imię podane
            console.log(friends[property]);  ---> podaj mi wszystkie jego informacje
            return friends[property];
        }
    }
}

search("Steve")