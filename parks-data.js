// This file contains data for all 63 US National Parks
const parksData = [
  {
    id: "acad",
    name: "Acadia National Park",
    coordinates: [44.3386, -68.2733],
    state: "Maine",
  },
  {
    id: "arch",
    name: "Arches National Park",
    coordinates: [38.7331, -109.5925],
    state: "Utah",
  },
  {
    id: "badl",
    name: "Badlands National Park",
    coordinates: [43.8554, -102.3397],
    state: "South Dakota",
  },
  {
    id: "bibe",
    name: "Big Bend National Park",
    coordinates: [29.2497, -103.25],
    state: "Texas",
  },
  {
    id: "bisc",
    name: "Biscayne National Park",
    coordinates: [25.4824, -80.2083],
    state: "Florida",
  },
  {
    id: "blca",
    name: "Black Canyon of the Gunnison National Park",
    coordinates: [38.5754, -107.7416],
    state: "Colorado",
  },
  {
    id: "brca",
    name: "Bryce Canyon National Park",
    coordinates: [37.593, -112.1871],
    state: "Utah",
  },
  {
    id: "cany",
    name: "Canyonlands National Park",
    coordinates: [38.3269, -109.8783],
    state: "Utah",
  },
  {
    id: "care",
    name: "Capitol Reef National Park",
    coordinates: [38.367, -111.2615],
    state: "Utah",
  },
  {
    id: "cave",
    name: "Carlsbad Caverns National Park",
    coordinates: [32.1478, -104.5567],
    state: "New Mexico",
  },
  {
    id: "chis",
    name: "Channel Islands National Park",
    coordinates: [34.0069, -119.7785],
    state: "California",
  },
  {
    id: "cong",
    name: "Congaree National Park",
    coordinates: [33.7947, -80.7827],
    state: "South Carolina",
  },
  {
    id: "crla",
    name: "Crater Lake National Park",
    coordinates: [42.9446, -122.109],
    state: "Oregon",
  },
  {
    id: "cuva",
    name: "Cuyahoga Valley National Park",
    coordinates: [41.2808, -81.5678],
    state: "Ohio",
  },
  {
    id: "dena",
    name: "Denali National Park",
    coordinates: [63.1148, -151.1926],
    state: "Alaska",
  },
  {
    id: "deva",
    name: "Death Valley National Park",
    coordinates: [36.5323, -116.9325],
    state: "California",
  },
  {
    id: "drto",
    name: "Dry Tortugas National Park",
    coordinates: [24.6285, -82.8732],
    state: "Florida",
  },
  {
    id: "ever",
    name: "Everglades National Park",
    coordinates: [25.2866, -80.8987],
    state: "Florida",
  },
  {
    id: "gaar",
    name: "Gates of the Arctic National Park",
    coordinates: [67.7805, -153.2917],
    state: "Alaska",
  },
  {
    id: "glac",
    name: "Glacier National Park",
    coordinates: [48.7596, -113.787],
    state: "Montana",
  },
  {
    id: "glba",
    name: "Glacier Bay National Park",
    coordinates: [58.6658, -136.9002],
    state: "Alaska",
  },
  {
    id: "grba",
    name: "Great Basin National Park",
    coordinates: [38.9833, -114.3],
    state: "Nevada",
  },
  {
    id: "grca",
    name: "Grand Canyon National Park",
    coordinates: [36.0544, -112.1401],
    state: "Arizona",
  },
  {
    id: "grsa",
    name: "Great Sand Dunes National Park",
    coordinates: [37.7916, -105.591],
    state: "Colorado",
  },
  {
    id: "grsm",
    name: "Great Smoky Mountains National Park",
    coordinates: [35.6131, -83.5532],
    state: "Tennessee",
  },
  {
    id: "grte",
    name: "Grand Teton National Park",
    coordinates: [43.7904, -110.6818],
    state: "Wyoming",
  },
  {
    id: "gumo",
    name: "Guadalupe Mountains National Park",
    coordinates: [31.9231, -104.8645],
    state: "Texas",
  },
  {
    id: "hale",
    name: "Haleakalā National Park",
    coordinates: [20.7204, -156.1552],
    state: "Hawaii",
  },
  {
    id: "havo",
    name: "Hawaii Volcanoes National Park",
    coordinates: [19.4194, -155.2885],
    state: "Hawaii",
  },
  {
    id: "hosp",
    name: "Hot Springs National Park",
    coordinates: [34.5037, -93.0552],
    state: "Arkansas",
  },
  {
    id: "indu",
    name: "Indiana Dunes National Park",
    coordinates: [41.6533, -87.0524],
    state: "Indiana",
  },
  {
    id: "isro",
    name: "Isle Royale National Park",
    coordinates: [47.8956, -88.9283],
    state: "Michigan",
  },
  {
    id: "jotr",
    name: "Joshua Tree National Park",
    coordinates: [33.8734, -115.901],
    state: "California",
  },
  {
    id: "katm",
    name: "Katmai National Park",
    coordinates: [58.6126, -155.0631],
    state: "Alaska",
  },
  {
    id: "kefj",
    name: "Kenai Fjords National Park",
    coordinates: [59.9249, -149.6499],
    state: "Alaska",
  },
  {
    id: "kova",
    name: "Kobuk Valley National Park",
    coordinates: [67.3556, -159.1289],
    state: "Alaska",
  },
  {
    id: "lacl",
    name: "Lake Clark National Park",
    coordinates: [60.9673, -153.4179],
    state: "Alaska",
  },
  {
    id: "lavo",
    name: "Lassen Volcanic National Park",
    coordinates: [40.4977, -121.4207],
    state: "California",
  },
  {
    id: "maca",
    name: "Mammoth Cave National Park",
    coordinates: [37.1862, -86.1],
    state: "Kentucky",
  },
  {
    id: "meve",
    name: "Mesa Verde National Park",
    coordinates: [37.1836, -108.4868],
    state: "Colorado",
  },
  {
    id: "mora",
    name: "Mount Rainier National Park",
    coordinates: [46.88, -121.7269],
    state: "Washington",
  },
  {
    id: "neri",
    name: "New River Gorge National Park",
    coordinates: [37.8776, -81.0189],
    state: "West Virginia",
  },
  {
    id: "npsa",
    name: "National Park of American Samoa",
    coordinates: [-14.2583, -170.6833],
    state: "American Samoa",
  },
  {
    id: "olym",
    name: "Olympic National Park",
    coordinates: [47.8021, -123.6044],
    state: "Washington",
  },
  {
    id: "pefo",
    name: "Petrified Forest National Park",
    coordinates: [35.0037, -109.7889],
    state: "Arizona",
  },
  {
    id: "pinn",
    name: "Pinnacles National Park",
    coordinates: [36.4906, -121.1825],
    state: "California",
  },
  {
    id: "redw",
    name: "Redwood National Park",
    coordinates: [41.2132, -124.0046],
    state: "California",
  },
  {
    id: "romo",
    name: "Rocky Mountain National Park",
    coordinates: [40.3428, -105.6836],
    state: "Colorado",
  },
  {
    id: "sagu",
    name: "Saguaro National Park",
    coordinates: [32.2967, -111.1666],
    state: "Arizona",
  },
  {
    id: "seki",
    name: "Sequoia and Kings Canyon National Parks",
    coordinates: [36.4864, -118.5658],
    state: "California",
  },
  {
    id: "shen",
    name: "Shenandoah National Park",
    coordinates: [38.4755, -78.4535],
    state: "Virginia",
  },
  {
    id: "thro",
    name: "Theodore Roosevelt National Park",
    coordinates: [46.979, -103.5387],
    state: "North Dakota",
  },
  {
    id: "viis",
    name: "Virgin Islands National Park",
    coordinates: [18.3424, -64.7486],
    state: "U.S. Virgin Islands",
  },
  {
    id: "voya",
    name: "Voyageurs National Park",
    coordinates: [48.4839, -92.8375],
    state: "Minnesota",
  },
  {
    id: "whsa",
    name: "White Sands National Park",
    coordinates: [32.7872, -106.3257],
    state: "New Mexico",
  },
  {
    id: "wind",
    name: "Wind Cave National Park",
    coordinates: [43.5724, -103.4415],
    state: "South Dakota",
  },
  {
    id: "wrst",
    name: "Wrangell-St. Elias National Park",
    coordinates: [61.7104, -142.9857],
    state: "Alaska",
  },
  {
    id: "yell",
    name: "Yellowstone National Park",
    coordinates: [44.428, -110.5885],
    state: "Wyoming",
  },
  {
    id: "yose",
    name: "Yosemite National Park",
    coordinates: [37.8651, -119.5383],
    state: "California",
  },
  {
    id: "zion",
    name: "Zion National Park",
    coordinates: [37.2982, -113.0263],
    state: "Utah",
  },
];

// Add a description field to the first few parks as an example
parksData.forEach((park) => {
  // Add a description field based on the park's ID
  switch (park.id) {
    case "acad":
      park.description =
        "The first national park east of the Mississippi River, featuring the tallest mountain on the Atlantic coast of the United States. Known for its dramatic coastal scenery and abundant wildlife.";
      break;
    case "arch":
      park.description =
        "Home to over 2,000 natural stone arches, this park offers spectacular hiking and photography opportunities. The landscape features contrasting colors, landforms, and textures unlike anywhere else in the world.";
      break;
    case "yose":
      park.description =
        "Known for its granite cliffs, waterfalls, clear streams, giant sequoia groves, and biological diversity. Yosemite Valley is world-famous for its impressive waterfalls, meadows, cliffs, and unusual rock formations.";
      break;
    case "yell":
      park.description =
        "The first national park in the U.S. and widely held to be the first national park in the world. Known for its wildlife and unique geothermal features, including the Old Faithful Geyser.";
      break;
    default:
      park.description = `${park.name} is one of America's national treasures, located in ${park.state}.`;
  }
});
