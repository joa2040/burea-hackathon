var input = require('./input');
module.exports = {

  distance: function (phenotype) {

    const size = phenotype.filter(p => p).length;
    let sum = 0;

    for (let i = 0; i < phenotype.length - 1; i++) {
      for (let j = i; j < phenotype.length - 1; j++) {
        if (phenotype[i] && phenotype[j + 1]) {
          sum += compareOffers(input.offers[i], input.offers[j + 1]);
        }
      }
    }
    return sum / size;
  },

  formatPhenotype: function (phenotype) {

    return input.offers.filter((e, i) => { return phenotype[i] }).map((e) => { delete e.user; return e });
  },

  displayInput: function () {

    for (let property in input) {
      console.log(property);
      console.table(input[property]);
    }
  }

}

const compareOffers = function (offer1, offer2) {
  //console.log(offer1, offer2);
  const {
    SIMILAR_CASHBACK,
    SIMILAR_RELEVANCE,
    SIMILIAR_CATEGORY,
    SIMILAR_BRAND } = input.weights.DISTANCE;

  const MAX_CASHBACK_DIFF = 0.15;
  const MAX_RELEVANCE_DIFF = 1;

  const result = (Math.abs(offer1.cashback - offer2.cashback) < MAX_CASHBACK_DIFF ? SIMILAR_CASHBACK : 0) +
    (Math.abs(offer1.relevance - offer2.relevance) <= MAX_RELEVANCE_DIFF ? SIMILAR_RELEVANCE : 0) +
    (offer1.category === offer2.category ? SIMILIAR_CATEGORY : 0) +
    (offer1.brand === offer2.brand ? SIMILAR_BRAND : 0);

  //console.log("IND" + offer1.relevance + "-" + offer2.relevance, result);
  return result;
}