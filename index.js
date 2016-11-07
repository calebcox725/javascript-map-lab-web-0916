const knownDecepticons = ['Megatron', 'Skywarp', 'Laserbeak', 'Barricade'];

const robots = [
  { name: 'Bumblebee', alliance: null },
  { name: 'Laserbeak', alliance: null },
  { name: 'Barricade', alliance: null },
  { name: 'Optimus Prime', alliance: null },
  { name: 'Skywarp', alliance: null },
  { name: 'Megatron', alliance: null },
  { name: 'Ironhide', alliance: null },
  { name: 'Ratchet', alliance: null }
];

const zebraStripes = [
  { width: 9.12, color: null },
  { width: 5.71, color: null },
  { width: 6.01, color: null },
  { width: 1.54, color: null },
  { width: 8.34, color: null },
  { width: 7.77, color: null },
  { width: 0.59, color: null },
  { width: 7.31, color: null },
];

var sortedRobots = robots.map((robot) => {
  let alliance;

  if (knownDecepticons.includes(robot.name)) {
    alliance = 'decepticon';
  } else {
    alliance = 'autobot';
  }

  return Object.assign({}, robot, {
    name: robot.name,
    alliance: alliance
  });
});

var coloredZebraStripes = zebraStripes.map((stripe, index) => {
  let color;

  if (index % 2 === 0) {
    color = 'black';
  } else {
    color = 'white';
  }

  return Object.assign({}, stripe, {
    width: stripe.width,
    color: color
  });
});