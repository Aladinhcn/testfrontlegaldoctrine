import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    rating: 5,
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/butter.jpg',
    title: 'Butter',
    price: 0.80
  },
  {
    id: uuid(),
    rating: 4,
    description: 'Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.',
    media: '/static/images/products/milk.jpg',
    title: 'Milk',
    price: 1.15
  },
  {
    id: uuid(),
    rating: 1,
    description: 'Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.',
    media: '/static/images/products/bread.jpg',
    title: 'Bread',
    price: 1
  }
];
