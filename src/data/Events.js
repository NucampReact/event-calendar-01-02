import boys2men from './images/boys2men.jpeg';
import easter from './images/easter.jpeg';
import gamenight from './images/familygamenight.png';
import summer from './images/summer.jpeg';

export const EVENTS = [
  {
    id: 1,
    name: 'Boys II Men Concert',
    date: new Date('2023-05-01').toLocaleDateString(),
    ticketMin: 100,
    ticketMax: 2000,
    seatsAvailable: 300,
    poster: boys2men
  },
  {
    id: 2,
    name: 'Easter Egg Hunt',
    date: new Date('2023-04-23').toLocaleDateString(),
    ticketMin: 5,
    ticketMax: 20,
    seatsAvailable: 30,
    poster: easter
  },
  {
    id: 3,
    name: 'Summer Festival',
    date: new Date('2023-06-10').toLocaleDateString(),
    ticketMin: 40,
    ticketMax: 200,
    seatsAvailable: 50,
    poster: summer
  },
  {
    id: 4,
    name: 'Family Game Night',
    date: new Date('2023-08-03').toLocaleDateString(),
    ticketMin: 100,
    ticketMax: 2000,
    seatsAvailable: 300,
    poster: gamenight
  }
];