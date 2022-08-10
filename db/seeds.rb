
Airline.create([
  {
    name: "United Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/United-Airlines.png"
  },
  {
    name: "Southwest",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  {
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png"
  },
  {
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png"
  },
  {
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png"
  },
  {
    name: "American Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png"
  }
])

Review.create ({
  title: "Great Airline",
  description: "I had a great time flying with this company !",
  score: 5,
  airline_id: 1
})
Review.create ({
  title: "Lovely !",
  description: "The seats were comfortable, I recommand Southwest !",
  score: 4,
  airline_id: 2
})
Review.create ({
  title: "Nice!",
  description: "Loved it !!",
  score: 5,
  airline_id: 2
})
Review.create ({
  title: "Bad experience!",
  description: "The seats were really old and we had our flight delayed",
  score: 2,
  airline_id: 3
})
Review.create ({
  title: "Charming",
  description: "This company is the best :-)",
  score: 5,
  airline_id: 3
})
Review.create ({
  title: "Terrible",
  description: "Worst experience ever, run !",
  score: 1,
  airline_id: 4
})
