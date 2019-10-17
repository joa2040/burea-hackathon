const geneticAlgorithmConstructor = require('geneticalgorithm');

const mutationFunction = (phenotype) => {
	// make a random change to phenotype
    return phenotype
};

const crossoverFunction = (phenotypeA, phenotypeB) => {
	// move, copy, or append some values from a to b and from b to a
	return [ phenotypeA , phenotypeB ]
};

const fitnessFunction = (phenotype) => {
	var score = 0
	// use your phenotype data to figure out a fitness score
	return score
};

let firstPhenotype = {
	dummyKey : "dummyValue"
	// enter phenotype data here
};

let geneticAlgorithm = geneticAlgorithmConstructor({
    mutationFunction: mutationFunction,
    crossoverFunction: crossoverFunction,
    fitnessFunction: fitnessFunction,
    population: [ firstPhenotype ]
});

console.log("Starting with:");
console.log( firstPhenotype );

for( var i = 0 ; i < 100 ; i++ ) geneticAlgorithm.evolve();

const best = geneticAlgorithm.best();
delete best.score;
console.log("Finished with:");
console.log(best);