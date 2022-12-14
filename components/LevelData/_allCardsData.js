export const allCardsData = [
  {
    name: "Discover jungle",
    id: 0,
    description: "Reveals a tile of the jungle",
    cost: {dailyWorkers: 1},
    gain: {},
  },
  {
    name: "Gather wood",
    id: 1,
    description: "Gathers wood depending on terrain",
    cost: {dailyWorkers: 1},
    gain: {
      wood: {
        forest: 10,
        grass: 5,
        else: 1,
        multiplicator: "lumberhut",
      },
    },
  },
  {
    name: "Gather stone",
    id: 2,
    description: "Gathers stone depending on terrain",
    cost: {dailyWorkers: 1},
    gain: {stone: {stone: 10, grass: 5, else: 1}},
  },
  {
    name: "Gather coconuts",
    id: 3,
    description: "Gathers food depending on terrain",
    cost: {dailyWorkers: 1},
    gain: {food: {forest: 10, grass: 2, else: 1}},
  },
  {
    name: "Lumberhut",
    id: 4,
    description: "Build a lumberhut on forest",
    cost: {dailyWorkers: 1, wood: 10, workers: 1},
    gain: {},
    building: {style: "lumberhut", terrain: "forest"},
  },
  {
    name: "Tent",
    id: 5,
    description: "Adds 1 worker",
    cost: {dailyWorkers: 1, wood: 40},
    gain: {workers: 1},
    building: {style: "tent", terrain: "grass"},
  },
  {
    name: "Watch tower",
    id: 6,
    description: "Reveals all tiles around it.",
    cost: {dailyWorkers: 2, stone: 4},
    gain: {},
    building: {style: "tower", terrain: "grass"},
  },
  {
    name: "Well",
    id: 7,
    description: "Build a well on a fresh water source for farming",
    cost: {dailyWorkers: 1, stone: 10},
    gain: {},
    building: {style: "well", terrain: "water"},
  },
  {
    name: "House",
    id: 8,
    description: "Upgrades a tent. Adds 2 workers",
    cost: {dailyWorkers: 2, wood: 100, stone: 50},
    gain: {workers: 2},
    building: {style: "house", terrain: "tent"},
  },
];
