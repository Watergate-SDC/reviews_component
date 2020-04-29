const adjective = ['Stretchy', 'Soft', 'High-Rise', 'ABC', 'Warpstreme'];
const noun = [
  'Jogger',
  'Sweats',
  'Hoodie',
  'Bra',
  'Tight',
  'Shirt',
  'T-Shirt',
  'Coat',
  'Jacket'
];

const rating = [5, 4, 3, 2, 1];

const title = [
  'Wicked',
  'Awesome',
  'Terrible',
  'Mehh',
  'Fits',
  'Thank you!',
  'Perfect pants',
  'Are a must!',
  'Overpriced',
  'Super Comfy',
  'Quality that can be felt',
  'A little dissapointed'
];

const recommendation = [true, false];

const username = [
  'Joshua0612',
  'Freedom Ha',
  'Kyo',
  'Kim2Smooth',
  'Siddharth117',
  'OMGurl',
  'TopStud441',
  'RonaVis19',
  'Running4Days',
  'ABC-NotMe',
  'Basic442',
  'Christoferr',
  'Jerrrmy',
  'Annna332',
  'Danny494',
  'Jennifer444',
  'TapDat44',
  'Stupd',
  'jurr',
  'Dopemac',
  'NookieMonster',
  'KMan2674984',
  'Jayjayjayjay',
  'MrComfy',
  'Trishm'
];

const emails = [
  'Joshua0612@gmail.com',
  'Freedom@gmail.com',
  'Kyo@gmail.com',
  'Kim2Smooth@gmail.com',
  'OMGurl@gmail.com',
  'MrComfy@gmail.com',
  'Siddharth117@gmail.com',
  'ABC-NotMe@gmail.com',
  'Christoferr@gmail.com',
  'Jayjayjayjay@gmail.com',
  'Dopemac@gmail.com',
  'TapDat44@gmail.com',
  'KMan2674984@gmail.com',
  'Stupd@gmail.com'
];

const location = ['Los Angeles', 'London', 'Texas', 'Hawaii', 'Japan', 'Seattle', 'Kyoto', 'Portland', 'Italy', 'France', 'Denver', 'New York', 'SGV', 'Irvine', 'Hong Kong', 'Rome', 'Spain', 'Berlin']

// const ageGroup = [true, false];

const age = [
  'noAge',
  'under18',
  '18-24',
  '25-34',
  '35-44',
  '45-54',
  '55-65',
  'over-65'
];

const createAge = () => {
  let createAge = {};
  for (let i = 0; i < age.length; i++) {
    createAge[age[i]] = false;
  }
  return createAge;
};

//random age input for database
const randomAge = () => {
  let newAgeGroup = createAge();
  let randomAgeGroup = Math.floor(Math.random() * age.length);
  newAgeGroup[age[randomAgeGroup]] = true;
  return newAgeGroup;
};

const bodyTypes = ['Athletic', 'Curvy', 'Lean', 'Muscular', 'Petite', 'Slim', 'Solid']

const createBodyType = () => {
  let createbodyType = {}
  for(let i = 0; i < bodyTypes.length; i++){
    createbodyType[bodyTypes[i]] = false;
  }
  return createbodyType
}

//random bodytype input for database
const randomBodyType = () => {
  let newBodyType = createBodyType()
  let randomBodyType = Math.floor(Math.random() * bodyTypes.length)
  newBodyType[bodyTypes[randomBodyType]] = true;
  return newBodyType;
}

const wearTo = ['Practice Yoga', 'Dance', 'Cycle', 'Run', 'Wear Casually']

const createWearGear = () => {
  let createWearTo = {}
  for(let i = 0; i < wearTo.length; i++){
    createWearTo[wearTo[i]] = false;
  }
  return createWearTo
}
//random wear to input for database
const randomWearTo = () => {
  let newWearTo = createWearGear()
  let randomWear = Math.floor(Math.random() * wearTo.length)
  newWearTo[wearTo[randomWear]] = true;
  return newWearTo
}

