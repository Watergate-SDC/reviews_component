import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App.jsx';

const request = require('supertest');
const app = require('../server/index');

const { MongoClient } = require('mongodb');

const sampleData = [
  {
    _id: { $oid: '5eb499b448d1b352b4a7ffad' },
    image: 'https://hrla36fec.s3.us-east-2.amazonaws.com/images/image1.png',
    productID: { $numberInt: '1' },
    productTitle: 'Unbranded Rubber Computer',
    reviews: [
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffae' },
        rating: { $numberInt: '3' },
        title: 'Terrible Stretchy Coat',
        review:
          'Sed dolor recusandae qui magnam et aut voluptas sunt. Quia recusandae ut. Itaque molestiae sed accusantium. Architecto iure voluptatem similique nihil assumenda fuga sed soluta blanditiis. Dicta eligendi similique dolor aut autem sed molestiae. Dolor non laboriosam sapiente repudiandae autem.',
        recommendation: false,
        nickname: 'Frida.Friesen',
        email: 'Kaelyn36@yahoo.com',
        age: {
          noAge: false,
          under18: false,
          between1824: false,
          between2534: false,
          between3544: false,
          between4554: true,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: true,
          curvy: false,
          lean: false,
          muscular: false,
          petite: false,
          slim: false,
          solid: false
        },
        location: 'Japan',
        wearTo: {
          practiceYoga: false,
          dance: false,
          cycle: false,
          run: true,
          wearCasually: false
        },
        likes: "Stretchy can't well done",
        dislikes: "High-Rise can't well done"
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffaf' },
        rating: { $numberInt: '5' },
        title: 'Mehh ABC Hoodie',
        review:
          'Nulla veritatis dolor qui esse autem et ipsam sint. Fuga voluptas architecto id quia voluptatem adipisci. Est earum sequi voluptatem neque eum sit.',
        recommendation: false,
        nickname: 'Adonis_Torphy',
        email: 'Therese46@hotmail.com',
        age: {
          noAge: false,
          under18: false,
          between1824: false,
          between2534: false,
          between3544: false,
          between4554: true,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: false,
          lean: false,
          muscular: true,
          petite: false,
          slim: false,
          solid: false
        },
        location: 'Hong Kong',
        wearTo: {
          practiceYoga: true,
          dance: false,
          cycle: false,
          run: false,
          wearCasually: false
        },
        likes: "ABC isn't have",
        dislikes: 'Soft enjoyed super'
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb0' },
        rating: { $numberInt: '2' },
        title: 'Fits High-Rise Coat',
        review:
          'Perspiciatis illum doloremque perspiciatis natus in aspernatur omnis ipsam quia. Rem autem natus molestiae dolorem ut natus sapiente nulla. Eligendi doloribus consequatur ad maiores sint dolorem mollitia temporibus ea. Minima est cumque et fuga nostrum non autem earum. Temporibus dolorem mollitia rerum voluptas numquam modi voluptatem officia ratione.',
        recommendation: false,
        nickname: 'Berenice_Hudson',
        email: 'Sheldon_Langworth98@hotmail.com',
        age: {
          noAge: false,
          under18: true,
          between1824: false,
          between2534: false,
          between3544: false,
          between4554: false,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: false,
          lean: false,
          muscular: false,
          petite: false,
          slim: false,
          solid: true
        },
        location: 'Japan',
        wearTo: {
          practiceYoga: true,
          dance: false,
          cycle: false,
          run: false,
          wearCasually: false
        },
        likes: 'Soft eat picture',
        dislikes: 'ABC damaged different'
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb1' },
        rating: { $numberInt: '2' },
        title: 'Fits High-Rise Sweats',
        review:
          'Ut iusto aut ut. Voluptatem necessitatibus nam recusandae est impedit at vitae praesentium atque. Enim cum voluptates qui pariatur asperiores minus itaque et quisquam. Corrupti nesciunt nam qui. Voluptatem est rerum sit exercitationem similique inventore. Ex rerum enim in nobis et.',
        recommendation: false,
        nickname: 'Liana22',
        email: 'Rowland.Schmeler@hotmail.com',
        age: {
          noAge: false,
          under18: false,
          between1824: false,
          between2534: false,
          between3544: false,
          between4554: false,
          between5565: true,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: true,
          lean: false,
          muscular: false,
          petite: false,
          slim: false,
          solid: false
        },
        location: 'Italy',
        wearTo: {
          practiceYoga: true,
          dance: false,
          cycle: false,
          run: false,
          wearCasually: false
        },
        likes: 'High-Rise hesitated sleeping',
        dislikes: 'Stretchy especially second pair'
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb2' },
        rating: { $numberInt: '5' },
        title: 'Quality that can be felt Warpstreme Bra',
        review:
          'Molestiae enim expedita beatae nam. Autem mollitia tempora vel qui et. Natus nihil nisi aliquam labore hic aspernatur nisi. Repudiandae culpa omnis ipsam commodi repellendus beatae.',
        recommendation: true,
        nickname: 'Ashtyn48',
        email: 'Earnest_Gutmann@yahoo.com',
        age: {
          noAge: false,
          under18: false,
          between1824: true,
          between2534: false,
          between3544: false,
          between4554: false,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: true,
          lean: false,
          muscular: false,
          petite: false,
          slim: false,
          solid: false
        },
        location: 'Los Angeles',
        wearTo: {
          practiceYoga: false,
          dance: false,
          cycle: false,
          run: false,
          wearCasually: true
        },
        likes: "High-Rise wouldn't well done",
        dislikes: "ABC didn't horrible"
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb3' },
        rating: { $numberInt: '3' },
        title: 'Fits High-Rise Hoodie',
        review:
          'Necessitatibus deleniti ut necessitatibus. Occaecati et aut. Est atque enim enim ea non. Ad vero omnis et. Autem accusantium aspernatur. Voluptas rerum neque blanditiis molestiae consequatur eos dolor.',
        recommendation: true,
        nickname: 'Alfonzo7',
        email: 'Akeem.Spinka19@yahoo.com',
        age: {
          noAge: false,
          under18: false,
          between1824: false,
          between2534: false,
          between3544: true,
          between4554: false,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: false,
          lean: false,
          muscular: true,
          petite: false,
          slim: false,
          solid: false
        },
        location: 'Portland',
        wearTo: {
          practiceYoga: false,
          dance: false,
          cycle: true,
          run: false,
          wearCasually: false
        },
        likes: 'Warpstreme danced color',
        dislikes: 'Warpstreme hated been'
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb4' },
        rating: { $numberInt: '1' },
        title: 'Terrible High-Rise Jacket',
        review:
          'Voluptas adipisci facere quam voluptatibus. Quis velit sint molestias quae asperiores. Modi neque sed dolor alias et error vitae similique.',
        recommendation: true,
        nickname: 'Rahul41',
        email: 'Freeman_Schultz@gmail.com',
        age: {
          noAge: false,
          under18: false,
          between1824: false,
          between2534: true,
          between3544: false,
          between4554: false,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: false,
          lean: false,
          muscular: false,
          petite: false,
          slim: true,
          solid: false
        },
        location: 'Irvine',
        wearTo: {
          practiceYoga: false,
          dance: false,
          cycle: true,
          run: false,
          wearCasually: false
        },
        likes: 'High-Rise lay well done',
        dislikes: 'High-Rise begin will buy more'
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb5' },
        rating: { $numberInt: '2' },
        title: 'Wicked ABC Hoodie',
        review:
          'Iste distinctio est ut quis. Recusandae animi repudiandae saepe. Perferendis tempora eum natus hic placeat est error.',
        recommendation: true,
        nickname: 'Raquel74',
        email: 'Jaunita.Raynor@hotmail.com',
        age: {
          noAge: true,
          under18: false,
          between1824: false,
          between2534: false,
          between3544: false,
          between4554: false,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: false,
          lean: false,
          muscular: false,
          petite: false,
          slim: false,
          solid: true
        },
        location: 'New York',
        wearTo: {
          practiceYoga: false,
          dance: false,
          cycle: false,
          run: true,
          wearCasually: false
        },
        likes: 'Stretchy might doing well',
        dislikes: "Warpstreme wouldn't super"
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb6' },
        rating: { $numberInt: '4' },
        title: 'Mehh High-Rise Hoodie',
        review:
          'Minima magni quia ut. Aspernatur velit aut. Quam qui labore numquam odit voluptatibus. Eligendi quisquam eaque voluptatem adipisci a accusantium numquam sint dolores.',
        recommendation: false,
        nickname: 'Mariano.Spinka',
        email: 'General.Wyman12@yahoo.com',
        age: {
          noAge: false,
          under18: false,
          between1824: false,
          between2534: true,
          between3544: false,
          between4554: false,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: false,
          lean: false,
          muscular: true,
          petite: false,
          slim: false,
          solid: false
        },
        location: 'Denver',
        wearTo: {
          practiceYoga: false,
          dance: false,
          cycle: false,
          run: false,
          wearCasually: true
        },
        likes: 'Stretchy find second pair',
        dislikes: 'Warpstreme lay have'
      },
      {
        created_at: { $date: { $numberLong: '1588894132173' } },
        _id: { $oid: '5eb499b448d1b352b4a7ffb7' },
        rating: { $numberInt: '3' },
        title: 'Are a must! Soft Sweats',
        review:
          'Sit quo exercitationem quia. Laudantium iusto iusto quo omnis quisquam officia. Perferendis atque alias. Fuga corporis et tempora molestiae. Aut voluptatem repellat non vitae omnis non deserunt.',
        recommendation: false,
        nickname: 'Emily_Schimmel',
        email: 'Elvis.Moore@yahoo.com',
        age: {
          noAge: false,
          under18: false,
          between1824: false,
          between2534: false,
          between3544: false,
          between4554: true,
          between5565: false,
          over65: false
        },
        bodyType: {
          athletic: false,
          curvy: false,
          lean: false,
          muscular: false,
          petite: false,
          slim: false,
          solid: true
        },
        location: 'New York',
        wearTo: {
          practiceYoga: false,
          dance: false,
          cycle: true,
          run: false,
          wearCasually: false
        },
        likes: "High-Rise can't well done",
        dislikes: "Warpstreme wouldn't color"
      }
    ],
    __v: { $numberInt: '0' }
  }
];

describe('retrieve', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect('mongodb://localhost/JJACDReviews', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    db = await connection.db();
  });

  describe('GET /reviews/1 ', () => {
    test('It should respond with an array of reviews', async () => {
      const response = await request(app).get('/reviews/1');
      expect(response.body.length).toEqual(1);
      expect(response.statusCode).toBe(200);
    });
  });
  describe('App component', () => {
    it('starts with data length of 0', async () => {
      const wrapper = await shallow(<App />);
      const reviewDataState =  await wrapper.state().reviewData;
      expect(reviewDataState.length).toEqual(0);
    });
  });


  afterAll(async () => {
    await connection.close();
  });
});

