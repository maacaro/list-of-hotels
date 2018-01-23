import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import getHotels from './Api-Services/hotelsApi';

const data = [{
  id: "249942",
  name: "Hotel Stefanos",
  stars: 3,
  price: 994.18,
  image: "4900059_30_b.jpg",
  amenities: [
    "safety-box",
    "nightclub",
    "deep-soaking-bathtub",
    "beach",
    "business-center"
  ]
},
{
  id: "161901",
  name: "Hotel Santa Cruz",
  stars: 3,
  price: 1267.57,
  image: "6623490_6_b.jpg",
  amenities: [
    "nightclub",
    "business-center",
    "bathtub",
    "newspaper",
    "restaurant"
  ]
}];

global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, status:200, json: () => data }));

it('should render the search area',()=>{
  const app = shallow(<App />);
  expect(app.find('Search')).toHaveLength(1);
})

it('should render all the hotels returned in the fetch call',()=>{
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ok: true, status:200, json: () => data }));
  
   const app = shallow(<App />);

  expect(app.find('HotelList')).toHaveLength(1);
});


