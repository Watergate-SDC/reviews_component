const model = require('./index');
var faker = require('faker');
const fs = require('fs');
const csvWriter = require('csv-write-stream');
var productWriter = fs.createWriteStream('./products.csv');
var reviewWriter =fs.createWriteStream('./reviews.csv');
require('events').EventEmitter.defaultMaxListeners = 5000;
var counter = 0;

//function to create 10 reviews within one product
let createProducts = (i) => {
//writer.pipe(fs.createWriteStream('reviews.csv'));
  let product = (`image: https://hrla36fec.s3.us-east-2.amazonaws.com/images/image${i}.png, `);
  product +=(`productId: ${i}, `);
  product += `productName: ${faker.commerce.productName()}\n`;
  return product;
};

let createReviews = (product) => {
  let reviewHolder = "";
  for (let j = 0; j < 5; j++) {
    //console.log(j, ': is j value');
    let rating = [5, 4, 3, 2, 1];
    let adjective = ['Stretchy', 'Soft', 'High-Rise', 'ABC', 'Warpstreme'];
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

    let reviewTitle = [
      'Wicked',
      'Awesome',
      'Terrible',
      'Mehh',
      'Fits',
      'Thank you!',
      'Perfect',
      'Are a must!',
      'Overpriced',
      'Super Comfy',
      'Quality that can be felt',
      'A little dissapointed'
    ];

    let pronouns = ['I', 'She', 'he', 'it'];
    let connectingWords = [
      "didn't",
      "can't",
      "wouldn't",
      "isn't",
      'especially',
      'loved',
      'hated',
      'enjoyed',
      'damaged',
      'begin',
      'appear',
      'climb',
      'danced',
      'eat',
      'find',
      'hesitated',
      'lay',
      'might',
      'neglect',
      'received'
    ];
    let moreWords = [
      'are',
      'super',
      'have',
      'been',
      'everyday',
      'color',
      'different',
      'office',
      'gym',
      'rock climbing',
      'horrible',
      'second pair',
      'doing well',
      'well done',
      'will buy more',
      'other',
      'picture',
      'traveling',
      'awesome',
      'freedom',
      'sleeping'
    ];
    let evenMoreWords = [
      'saggy',
      'comfy',
      'never washed',
      'had a problem',
      'gift',
      'regularly experience',
      'no room down there',
      'brother',
      'great gift'
    ];

    let recommendation = [true, false];

    let age = [
      'noAge',
      'under18',
      'between1824',
      'between2534',
      'between3544',
      'between4554',
      'between5565',
      'over65'
    ];

    let createAge = () => {
      let createAge = {};
      for (let i = 0; i < age.length; i++) {
        createAge[age[i]] = false;
      }
      return createAge;
    };

    //random age input for database
    let randomAge = () => {
      let newAgeGroup = createAge();
      let randomAgeGroup = Math.floor(Math.random() * age.length);
      newAgeGroup[age[randomAgeGroup]] = true;
      return newAgeGroup;
    };

    let bodyTypes = [
      'athletic',
      'curvy',
      'lean',
      'muscular',
      'petite',
      'slim',
      'solid'
    ];

    let createBodyType = () => {
      let createbodyType = {};
      for (let i = 0; i < bodyTypes.length; i++) {
        createbodyType[bodyTypes[i]] = false;
      }
      return createbodyType;
    };

    //random bodytype input for database
    let randomBodyType = () => {
      let newBodyType = createBodyType();
      let randomBodyType = Math.floor(Math.random() * bodyTypes.length);
      newBodyType[bodyTypes[randomBodyType]] = true;
      return newBodyType;
    };

    let location = [
      'Los Angeles',
      'London',
      'Texas',
      'Hawaii',
      'Japan',
      'Seattle',
      'Kyoto',
      'Portland',
      'Italy',
      'France',
      'Denver',
      'New York',
      'SGV',
      'Irvine',
      'Hong Kong',
      'Rome',
      'Spain',
      'Berlin'
    ];

    let wearTo = ['practiceYoga', 'dance', 'cycle', 'run', 'wearCasually'];

    const createWearGear = () => {
      let createWearTo = {};
      for (let i = 0; i < wearTo.length; i++) {
        createWearTo[wearTo[i]] = false;
      }
      return createWearTo;
    };
    //random wear to input for database
    let randomWearTo = () => {
      let newWearTo = createWearGear();
      let randomWear = Math.floor(Math.random() * wearTo.length);
      newWearTo[wearTo[randomWear]] = true;
      return newWearTo;
    };

    //randomize each part of each review for the product.
    let randomAgeGen = age[Math.floor(Math.random() * age.length)];
    let randomBodyTypeGen = bodyTypes[Math.floor(Math.random() * bodyTypes.length)];
    let randomWearToGen = wearTo[Math.floor(Math.random() * wearTo.length)];
    let randomRecommendation = Math.floor(Math.random() * recommendation.length);
    let randomTitle = (reviewTitle[Math.floor(Math.random() * reviewTitle.length)]) + " " + (adjective[Math.floor(Math.random() * adjective.length)]) + " " + (noun[Math.floor(Math.random() * noun.length)]);
    let randomRating = rating[Math.floor(Math.random() * rating.length)];
    let randomLocation = location[Math.floor(Math.random() * location.length)];
    let randomLikes = (adjective[Math.floor(Math.random() * adjective.length)]) + " " + (connectingWords[Math.floor(Math.random() * connectingWords.length)]) + " " + (moreWords[Math.floor(Math.random() * moreWords.length)]);
    let randomDislikes = (adjective[Math.floor(Math.random() * adjective.length)]) + " " +(connectingWords[Math.floor(Math.random() * connectingWords.length)]) +" "+ (moreWords[Math.floor(Math.random() * moreWords.length)]);


    //changed the review to a concatenated string for storage
    review = `${product}, ` +
      `${randomRating}, ` +
      `${randomTitle}, ` +
      `${faker.lorem.words(5)}, ` +
      `${randomRecommendation}, ` +
      `${faker.internet.userName()}, ` +
      `${faker.internet.email()}, ` +
      `${randomAgeGen}, ` +
      `${randomBodyTypeGen}, ` +
      `${randomLocation}, `+
      `${randomWearToGen}, ` +
      `${randomLikes}, ` +
      `${randomDislikes}\n`;

      // reviews are stored in an array that maps 1 array of reviews for 1 product
      reviewHolder+=(review);
    }
  //return JSON.stringify(reviewArr);
  return reviewHolder;
}


let seedReviews2 = () => {
  for (let i = 1000000; i < 2000000; i++) {
      reviewWriter.write(createReviews(i), 'utf8');
  }
  //console.log(reviewArr, 'before writing')
  reviewWriter.end();
  console.log('done writing reviews 2');
};
/** SEEDING IS UNCOMMENTED HERE */
seedReviews2();

/**END SEEDING COMMENT */

// let data = createProduct();

//seed database function
// let seedData = () => {
//   data.forEach((item) => {
//     model
//       .create(item)
//       .then((result) => {
//         console.log('seeded', result);
//       })
//       .catch((err) => console.log(err));
//   });
// };

//seedData(1000, 10000);
