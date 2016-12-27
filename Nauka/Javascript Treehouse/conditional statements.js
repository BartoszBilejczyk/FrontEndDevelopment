if (points == 5) {
	document.write("<h1>Gratulacje, masz 5 punktów i otrzymujesz złoty medal.</h1>")
} else if (points == 4) {
	document.write("<h1>Gratulacje, masz 4 punkty i otrzymujesz srebrny medal</h1>")
} else if (points == 3) {
	document.write("<h1>Gratulacje, masz 3 punkty i otrzymujesz brązowy medal</h1>")
} else {
	document.write("Niestety, liczba Twoich punktów to " + points + " i nie otrzymujesz żadnego medalu.")
}