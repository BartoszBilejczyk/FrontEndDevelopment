// Arrays//

var list = [1,2,3,4]

list[2] = 8 -> [1,2,8,4]

usuwanie ostatniego list.pop, dodawanie na koniec, list.push

można też wsadzać array w środek array innego np. 

var array1 = ["haha", "hehe"];
var array2 = ["xd", "XD"];

var arrays = [array1, array2];

array[1][0] -> "haha" - najpierw bierze array2 a potem jego zerowy element; - to się nazywa 2D arrays (2dimensional)

Building a passengers list :


function addPassenger (name, list) {
	if (list.length == 0) {
		list.push(name);
	} else {
		for (var i =0; i < list.length, i++) {
			if (list[i] == undefined) {
				list[i] = name;
				return list;
			} else if (i == list.length - 1) {
				list.push(name);
				return list;
			}
		}
	}
}

function deletePassenger (name, list) {
	if (list.length == 0) {
		console.log("The list is empty. There is nobody to delete.")
	} else {
		for (var i; i < list.length; i++) {
			if (list[i] == name) {
					list[i] == undefined;
					return list;
			} else if (i == list.length - 1) {
					console.log("This person was not on the list");
			}
		}
	return list;	
	}
}