//INPUT OBJECT
var input = {
	offers: [
		{
			id: 1,
			category: "A",
			relevance: 1,
			isExclusive: true,
			cashback: 0.25,
			brand: "nestle",
			user: {
				redemptionsCount: 2,
				frecuency: 30,
				lastRedemptionDate: new Date()
			}
		}, {

		}, {

		}, {

		}
	],
	user: {
		redemptionAvg: 0.75,
		lastRedemptionDate: new Date(),
		lastReceivedPushDate: new Date(),
		totalRedemptionsCount: 1,
		remainingToCashout: 0.25
	}
}

function getOffer(index) {
	const filtered = input.offers.filter((e) => { return e.id == id });
	return filtered.length ? filtered[0] : null;
}

function mutationFunction(phenotype) {
	// make a random change to phenotype
	return phenotype
}

function crossoverFunction(phenotypeA, phenotypeB) {
	// move, copy, or append some values from a to b and from b to a
	return [phenotypeA, phenotypeB]
}

function fitnessFunction(phenotype) {
	var score = 0
	// use your phenotype data to figure out a fitness score



	return score
}

var firstPhenotype = [0, 1, 1, 0, 0];

var config = {
	weights: {
		OFFERS_DISTANCES: 0.3,
		SIMILAR_CASHBACK: 0.1,
		SIMILAR_REDEMPTIONS: 0.1,
		SIMILAR_RELEVANCE: 0.1,
		SIMILAR_BRAND: 0.2,
		
	}
}

var geneticAlgorithmConstructor = require('geneticalgorithm')
var ga = geneticAlgorithmConstructor({
	mutationFunction: mutationFunction,
	crossoverFunction: crossoverFunction,
	fitnessFunction: fitnessFunction,
	population: [firstPhenotype]
});

console.log("Starting with:")
console.log(firstPhenotype)
//for (var i = 0; i < 15; i++) ga.evolve({ populationSize: 64 })
var best = ga.best()
delete best.score
console.log("Finished with:")
console.log(best)


var permArr = [],
	usedChars = [];
distance()



function distance() {

	console.log(permute([1, 2, 3]))

}


function permute(input) {
	var i, ch;
	for (i = 0; i < input.length; i++) {
		ch = input.splice(i, 1)[0];
		console.log("CH", ch);

		usedChars.push(ch);
		if (input.length == 0) {
			permArr.push(usedChars.slice());
		}
		permute(input);
		input.splice(i, 0, ch);
		usedChars.pop();
	}
	return permArr
};