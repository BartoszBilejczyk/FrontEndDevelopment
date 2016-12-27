var answer = prompt("Masz przed sobą Piórkowskiego. Walczysz, płacisz czy uciekasz? (Wpisz WALCZ, PŁAĆ lub UCIEKAJ)").toUpperCase();

switch (answer) {

	case 'WALCZ':
		var skills = prompt("Czy masz dobre argumenty, żeby Cię zatrudnił? (TAK lub NIE)").toUpperCase();
		var negotiation = prompt("Czy umiesz dobrze negocjować? (TAK lub NIE").toUpperCase();

		if (skills === "TAK" && negotiation === "TAK") {
			alert("Masz robotę, gratulacje!");
		} else {
			alert("Żeby dostać robotę musisz mieć i argumenty i skille negocjacyjne, sory.");
		}
		break;

	case 'PŁAĆ':
		var money = prompt("Czy masz powyżej 1000zł na koncie, żeby przekupić Piórkowskiego? (TAK lub NIE").toUpperCase(); 	
		var cola = prompt("Czy masz 100 puszek coli cherry, żeby przekupić Piórkowskiego? (TAK lub NIE)").toUpperCase();

		if (money === "TAK" || cola === "TAK") {
			alert("No i udało Ci się przekupić Piórkowskiego, masz robotę.");
		} else {
			alert("Chuj, nie masz co dać, to nic nie dostaniesz.");
		}
		break;

	case 'UCIEKAJ':

		var shoes = prompt("Czy masz buty Nike lub Jordan?").toUpperCase();
		var run = prompt("Czy umiesz w ogóle szybko biegać?").toUpperCase();

		if (shoes === "TAK" || run === "TAK") {
			alert("Jesteś ciota, że wpisałeś UCIEKAJ, ale przynajmniej Cię nie dogonił.");
		} else {
			alert("Dramat, jesteś ciota, że wpisałeś UCIEKAJ i jeszcze Cię złapał bo biegasz jak grubas.")
		}
		break;

	default: 
			alert("Wpisz WALCZ, PŁAĆ lub UCIEKAJ.")
}
