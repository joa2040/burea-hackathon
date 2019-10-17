//INPUT OBJECT
var input = {
	offers: [
		{
			id: 1,
			category: "A",//similarity
			relevance: 1,//similarity
			isExclusive: true,//similarity
			cashback: 0.25,//similarity
			brand: "nestle",//similarity
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
		remainingToCashout: 0.25
	}
}

var weights = {
	OFFERS_DISTANCES: 0.3,
	OFFER_REDEMPTION: 0.1,
	CASHBACK: 0.1,
	REMAINING_CASHBACK: 0.1,
	DISTANCE: {
		SIMILAR_CASHBACK: 0.1,
		SIMILAR_REDEMPTIONS: 0.1,
		SIMILAR_RELEVANCE: 0.1,
		SIMILAR_BRAND: 0.2
	}
}

function getOffer(index) {
	const filtered = input.offers.filter((e) => { return e.id == id });
	return filtered.length ? filtered[0] : null;
}

/**
 * Change random element inside de phenotype using XOR operation
 * 
 * @param  {} phenotype
 */
const mutationFunction = (phenotype) => {
	const index = Math.round(Math.random());
	phenotype[index] ^= 1;
	return phenotype
};

/**
* Crossover step of two phenotypes, making two new children
* 
* @param  {} phenotypeA
* @param  {} phenotypeB
*/
const crossoverFunction = (phenotypeA, phenotypeB) => {
	const parents = [phenotypeA, phenotypeB];
	const phenotypeLength = phenotypeA.length;
	let child1 = [];
	let child2 = [];
	child1.length = phenotypeLength;
	child2.length = phenotypeLength;

	for (var i = 0; i < phenotypeLength; i++) {
		child1[i] = parents[Math.round(Math.random())][i];
		child2[i] = parents[Math.round(Math.random())][i];
	}

	return [child1, child2];
};

function fitnessFunction(phenotype) {

	const size = phenotype.size;
	const { OFFERS_DISTANCES, OFFER_REDEMPTION } = weights;
	const { globalUser: user } = input;

	let redemptionSum = 0;
	let cashbackSum = 0;
	let remainingToCashbackSum = 0;
	for (let i = 0; i < phenotype.length; i++) {
		const offer = inputs[i];
		const { user } = offer;
		redemptionSum += user.redemptionsCount * OFFER_REDEMPTION;

		cashbackSum += Math.abs(globalUser.redemptionAvg - offerCashback);
		remainingToCashbackSum += Math.abs(globalUser.remainingToCashout - offerCashback);
	}

	var score =
		1 - (remainingToCashbackSum / size) * REMAINING_CASHBACK +
		1 - (cashbackSum / size) * CASHBACK +
		(redemptionSum / size) + // Redemption AVG
		distance(phenotype) * OFFERS_DISTANCES;


	// use your phenotype data to figure out a fitness score


	return score;
}

var firstPhenotype = [0, 1, 1, 0, 0];



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



function distance(offers) {

	//console.log(permute([1, 2, 3]))

	const distances = [];
	let distance = 0;
	for (let i = 0; i < offers.length; i++) {
		if (offers[i] == 1) {
			const offer = inputs[offerIndexes[i]];
		}


	}

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