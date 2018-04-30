// Rodion Khoruzhenko Week03-EcmaScript

const mathResult = (operatorA, operatorB) => {
	return ((operatorA + operatorB) * 12)
};

console.log(mathResult(4, 6));

var arrayResult = (numbers) => {
	numbers.forEach((number) => {
		console.log(number);
	})
};

var numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
arrayResult(numbers);

var primeNumbers = (numbers) => {
	for (let number of numbers) {
		console.log(number);
	}
};

primeNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);

const address = {firstName: 'Rodion', lastName: 'Khoruzhenko', address: '14309 NE 77th St', city: 'Redmond', state: 'Washington', zip: '98052'}
const addressBuilder = (address) => {
	for (let property in address) {
		if (address.hasOwnProperty(property)) {
			console.log(property + " is " + address[property]);
		}
	}
};

addressBuilder(address);

// Calculator class
class calculator {
	// Add function
	add(operanda, operandb) {
		return operanda + operandb;
	}
	// Subtract function
	subtract(operanda, operandb) {
		return operanda - operandb;
	}
	// Multiply function
	multiply(operanda, operandb) {
		return operanda * operandb;
	}
	// Divide function
	divide(operanda, operandb) {
		return operanda / operandb;
	}
}

var calc = new calculator();

console.log(calc.add(2,3));
console.log(calc.subtract(5,2));
console.log(calc.multiply(3,5));
console.log(calc.divide(15,3));
