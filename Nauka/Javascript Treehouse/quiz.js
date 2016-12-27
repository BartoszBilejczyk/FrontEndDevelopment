
var points = 0

var WW1 = parseInt(prompt('Rok wybuchu I wojny światowej'))
if (WW1 == 1914) {
  points++
} 


var WW2 = parseInt(prompt('Rok wybuchu II wojny światowej'))
if (WW2 == 1939) {
  points++
} 


var kryzys = parseInt(prompt('Rok wybuchu ostatniego wielkiego kryzysu finansowego'))
if (kryzys == 2008) {
  points++
}


var gagarin = parseInt(prompt('Kiedy Gagarin poleciał w kosmos?'))
if (gagarin == 1961) {
  points++
}


var grunwald = parseInt(prompt('Bitwa pod grunwaldem'))
if (grunwald == 1410) {
  points++
}

if (points == 5) {
	document.write("<h1>Gratulacje, masz 5 punktów i otrzymujesz złoty medal.</h1>")
} else if (points == 4) {
	document.write("<h1>Gratulacje, masz 4 punkty i otrzymujesz srebrny medal</h1>")
} else if (points == 3) {
	document.write("<h1>Gratulacje, masz 3 punkty i otrzymujesz brązowy medal</h1>")
} else {
	document.write("Niestety, liczba Twoich punktów to " + points + " i nie otrzymujesz żadnego medalu.")
}