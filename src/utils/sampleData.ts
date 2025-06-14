import { Product, User } from '../types';

export const sampleUsers: User[] = [
  {
    id: '1',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin',
    name: 'Admin User'
  },
  {
    id: '2',
    email: 'user@example.com',
    password: 'user123',
    role: 'user',
    name: 'Regular User'
  }
];

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'High-quality wireless headphones with noise cancellation and superior sound quality.',
    category: 'Electronics',
    stock: 25
  },
  {
    id: '2',
    name: 'Smart Watch Pro',
    price: 399.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Advanced smartwatch with health monitoring, GPS, and long battery life.',
    category: 'Electronics',
    stock: 15
  },
  {
    id: '3',
    name: 'Luxury Leather Bag',
    price: 189.99,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Handcrafted genuine leather bag perfect for professionals and travelers.',
    category: 'Fashion',
    stock: 30
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 899.99,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'High-resolution digital camera for professional photography.',
    category: 'Electronics',
    stock: 8
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 149.99,
    image: 'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Stylish designer sunglasses with UV protection and premium materials.',
    category: 'Fashion',
    stock: 40
  },
  {
    id: '6',
    name: 'Fitness Tracker',
    price: 79.99,
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Advanced fitness tracker with heart rate monitor and sleep tracking.',
    category: 'Electronics',
    stock: 50
  },
  {
    id: '7',
    name: 'Premium Coffee Maker',
    price: 249.99,
    image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Professional-grade coffee maker for the perfect brew every time.',
    category: 'Home',
    stock: 20
  },
  {
    id: '8',
    name: 'Wireless Speaker',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Portable wireless speaker with excellent sound quality and long battery life.',
    category: 'Electronics',
    stock: 35
  }
];