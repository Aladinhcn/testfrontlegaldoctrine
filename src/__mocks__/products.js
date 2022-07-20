import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    rating: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_1.png',
    title: 'Butter',
    price: '594'
  },
  {
    id: uuid(),
    rating: '31/03/2019',
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/product_2.png',
    title: 'Milk',
    price: '625'
  },
  {
    id: uuid(),
    rating: '03/04/2019',
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/product_3.png',
    title: 'Bread',
    price: '857'
  }
];
