module.exports= {
  offers: [
    {
      id: 1,
      category: "A", // similarity
      relevance: 1, // similarity
      cashback: 0.25, // similarity
      brand: "nestle", // similarity
      user: {
        redemptionsCount: 2,
        frecuency: 30,
        lastRedemptionDate: new Date()
      }
    }, {
      id: 2,
      category: "B",
      relevance: 3,
      cashback: 0.50,
      brand: "nestle",
      user: {
        redemptionsCount: 4,
        frecuency: 15,
        lastRedemptionDate: new Date()
      }
    }, {
      id: 3,
      category: "B",
      relevance: 1,
      cashback: 3.00,
      brand: "Nesquik",
      user: {
        redemptionsCount: 3,
        frecuency: 18,
        lastRedemptionDate: new Date()
      }
    }, {
      id: 4,
      category: "A",
      relevance: 3,
      cashback: 0.25,
      brand: "Raid",
      user: {
        redemptionsCount: 2,
        frecuency: 30,
        lastRedemptionDate: new Date()
      }
    }, {
      id: 5,
      category: "B",
      relevance: 1,
      cashback: 0.50,
      brand: "Hostess",
      user: {
        redemptionsCount: 5,
        frecuency: 10,
        lastRedemptionDate: new Date()
      }
    },
  ],
  user: {
    redemptionAvg: 0.75,
    remainingToCashout: 0.25
  },
  weights: {
    OFFERS_DISTANCES: 0.5,
    OFFER_REDEMPTION: 0.15,
    CASHBACK: 0.15,
    REMAINING_CASHBACK: 0.2,
    DISTANCE: {
      SIMILAR_CASHBACK: 0.1,
      SIMILAR_RELEVANCE: 0.1,
      SIMILIAR_CATEGORY: 0.5,
      SIMILAR_BRAND: 0.3,
    }
  }
}
