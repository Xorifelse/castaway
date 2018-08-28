/*
  Credits to random hobby generator:
  http://orteil.dashnet.org/randomgen/
*/

const hobbys = [
  'macrame',
  'jogging',
  'backpacking',
  'singing',
  'drawing',
  'fishkeeping',
  'cycling',
  'parkour',
  'table football',
  'judo',
  'computer programming',
  'debate',
  'ice hockey',
  'rowing',
  'candle making',
  'metalworking',
  'amateur radio',
  'stand-up comedy',
  'archery',
  'vehicle restoration',
  'tennis',
  'pottery',
  'metal detecting',
  'knitting',
  'collecting',
  'travelling',
  'roller derby',
  'microscopy',
  'taekwondo',
  'bowling',
  'polo',
  'lacemaking',
  'slacklining',
  'footbag',
  'lockpicking',
  'calligraphy',
  'herping',
  'music',
  'swimming',
  'air sports',
  'juggling',
  'graffiti',
  'basketball',
  'yo-yoing',
  'tour skating',
  'blacksmithing',
  'acting',
  'color guard',
  'model building',
  'foraging',
  'knife making',
  'kitesurfing',
  'disc golf',
  'taxidermy',
  'urban exploration',
  'marbles',
  'photography',
  'climbing',
  'weightlifting',
  'reading',
  'flying disc',
  'snowboarding',
  'bodybuilding',
  'racquetball',
  'triathlon',
  'hooping',
  'homebrewing',
  'sports',
  'brazilian jiu-jitsu',
  'web surfing',
  'flag football',
  'vacation',
  'flower arranging',
  'astronomy',
  'skateboarding',
  'skimboarding',
  'golfing',
  'go (game)',
  'yoga',
  'couponing',
  'soapmaking',
  'laser tag',
  'foreign language learning',
  'dance',
  'video gaming',
  'larping',
  'letterboxing',
  'chess',
  'poker',
  'digital arts',
  'bridge',
  'poi',
  'dowsing',
  'glassblowing',
  'magic',
  'people watching',
  'rappin',
  'sculpting',
  'badminton',
  'breakdancing',
  'rugby',
  'cricket',
  'drama',
  'fashion',
  'tai chi',
  'listening to music',
  'board games',
  'ice skating',
  'rafting',
  'exhibition drill',
  'cheerleading',
  'sudoku',
  'figure skating',
  'kart racing',
  'cooking',
  'geocaching',
  'board sports',
  'roller skating',
  'shooting',
  'worldbuilding',
  'bird watching',
  'horseback riding',
  'gymnastics',
  'lego building',
  'coffee roasting',
  'machining',
  'billiards',
  'sketching',
  'stone skipping',
  'netball',
  'surfing',
  'fenching',
  'volleyball',
  'mountaineering',
  '3d printing',
  'wood carving',
  'curling',
  'lacrosse',
  'jukskei',
  'scuba diving',
  'inline skating',
  'hunting',
  'gaming',
  'collecting postcards',
  'do it yourself',
  'gongoozling',
  'skiing',
  'driving',
  'kayaking',
  'base jumping',
  'mushroom hunting',
  'orienteering',
  'ghost hunting',
  'sailing',
  'gardening',
  'scouting',
  'scrapbooking',
  'coloring',
  'paintball',
  'meteorology',
  'aqua-lung'
]


const getHobbysMatchingString = (input) => {
  /* Great to interact and enlist when user is typing a hobby, showing suggestions
  /*
  /* @input = string
  /* @output = array of hobbys matching input
  */
  return hobbys.filter((elm) => elm.includes(input))
}

const getRandomHobbys = (max = 10) => {
  /* Returns an array of @max random hobbys
  /*
  /* @input = integer
  /* @output = array of n random hobbys
  /*
  /* https://stackoverflow.com/a/49479872/4982088
  */ 

  return hobbys
    .map(x => ({ x, r: Math.random() }))
    .sort((a, b) => a.r - b.r)
    .map(a => a.x)
    .slice(0, max);
}


/* DEBUG 
  I used these functions to filter out duplicates in the array.
  Might come to pass later.

  const uniqueArray = (original) => Array.from(new Set(original))


  This piece of code overwrites the maximum output of console log.
  So if you want to console log a list of 100 or more and get the full output instead of "... ## more items"

  const util = require('util')
  console.log(util.inspect(uniqueArray(hobbys), { maxArrayLength: null }))
*/
