const util = require('./util');
const input = require('./input');

/**
 * Change random element inside de phenotype using XOR operation
 * 
 * @param  {} phenotype
 */
const mutationFunction = (phenotype) => {
	const index = Math.floor(Math.random() * phenotype.length);
	phenotype[index] ^= 1;
	return phenotype;
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

	const size = phenotype.filter(p => p).length;

	if (!size) {
		return 0;
	}

	const {
		OFFERS_DISTANCES,
		OFFER_REDEMPTION,
		CASHBACK,
		REMAINING_CASHBACK } = input.weights;
	const globalUser = input.user;
	const { offers } = input;

	let redemptionSum = 0;
	let cashbackSum = 0;
	let remainingToCashbackSum = 0;
	for (let i = 0; i < phenotype.length; i++) {
		if (phenotype[i]) {
			const offer = offers[i];
			const { user } = offer;
			redemptionSum += user.redemptionsCount * OFFER_REDEMPTION;

			cashbackSum += Math.abs(globalUser.redemptionAvg - offer.cashback);
			remainingToCashbackSum += Math.abs(globalUser.remainingToCashout - offer.cashback);
		}
	}

	const score =
		1 - (remainingToCashbackSum / size) * REMAINING_CASHBACK +
		1 - (cashbackSum / size) * CASHBACK +
		(redemptionSum / size) + // Redemption AVG
		util.distance(phenotype) * OFFERS_DISTANCES;


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

console.log("Starting with:");
util.displayInput();
for (var i = 0; i < 30; i++) ga.evolve({ populationSize: 64 })
var best = ga.best()
delete best.score
console.log("Finished with:")
console.table(util.formatPhenotype(best));
