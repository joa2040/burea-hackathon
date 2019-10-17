const geneticAlgorithmConstructor = require('geneticalgorithm');

const mutationFunction = (phenotype) => {
	// make a random change to phenotype
    return phenotype
};

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
    
	return [ child1 , child2 ];
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