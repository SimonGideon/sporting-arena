import {search, account,shopping, shoe_3, hero_3, hero_4,
product_1, product_2, product_3, product_4, product_5, product_6,
shoes_1, shoe_2, shoe_4, hero_1, hero_2, people_shoe1, people_shoe2,
 people_shoe3, adidas, nike, nb, puma, converse, reebok, vans, jordan } from './index.js';

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];

export const links = [
  { name: 'New Arrival', to: '#' },
  { name: 'Men', to: '#men' },
  { name: 'Women', to: '#women' },
  { name: 'Kids', to: '#kids'},
  {
    menu_icons: [
      { i_name: search, icon: 'search', to: '#' },
      { i_name: account, icon: 'account', to: '#' },
      { i_name: shopping, icon: 'shopping', to: '#' },
    ]
  }
];


export const products = [
  {name: "Nike Cosmic Unity 2" ,description: "",size: "",price: "",image: shoe_3},
  {name: "Air Jordan 1 Retro High OG" ,description: "",size: 41,price: 275,image: hero_1},
  {name: "Nike SB Dunk High" ,description: "",size: "",price: "",image: hero_3},
  {name: "Nike Dynamo Go SE" ,description: "",size: "",price: "",image: hero_4},
  {name: "Nike Air Max Plus 3" ,description: "",size: "",price: "",image: product_1},
  {name: "Air Jordan 4 Retro Lighting (Premium Batch)" ,description: "",size: "",price: "",image: product_2},
  {name: "Air Jordan 13 Retro Court Purple (Reflective)" ,description: "",size: "",price: "",image: product_3},
  {name: "Air Jordan 1 AJKO Blue Red" ,description: "",size: "",price: "",image: product_4},
  {name: "Yeezy Boost 350 V@ MX ROck (Real Boost)" ,description: "",size: "",price: "",image: product_5},
  {name: "Vans Old School Suede Honey Gold" ,description: "",size: "",price: "",image: product_6},
  {name: "Nike Mercury Superfly" ,description: "",size: "",price: "271",image: shoes_1 },
  {name: "Nike Air Zoom Alpafly" ,description: "",size: "",price: "216",image: shoe_2},
  {name: "Nike Dunk High" ,description: "",size: "",price: "187",image: shoe_4},
];

export const shoe_for_people = [
  {name:"", description:"", image:people_shoe1},
  {name:"", description:"", image:people_shoe2},
  {name:"", description:"", image:people_shoe3}
]

export const patners = [
  {name: "Adidas", image: adidas},
  {name: "Nike", image: nike},
  {name: "Puma", image: puma},
  {name: "Converse", image: converse},
  {name: "Reebok", image: reebok},
  {name: "Vans", image: vans},
  {name: "Jordan", image: jordan},
  {name: "New Balance", image: nb}
]

