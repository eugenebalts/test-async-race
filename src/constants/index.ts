import { CreateCarDto } from '../services/endpoints/garage/types';

export const CARS_BRANDS = [
  'Lada',
  'VAZ',
  'Mercedes',
  'BMW',
  'Audi',
  'Toyota',
  'Honda',
  'Volkswagen',
  'Hyundai',
  'KIA',
  'Ford',
  'Chevrolet',
  'Nissan',
  'Renault',
  'Suzuki',
  'Mazda',
  'Lexus',
  'Infiniti',
  'Cadillac',
  'Tesla',
];

export const CARS_MODELS = [
  'Civic',
  'Accord',
  'Corolla',
  'Camry',
  'Focus',
  'Fusion',
  'Mustang',
  'Explorer',
  'Escape',
  'Cruze',
  'Malibu',
  'Camaro',
  'Altima',
  'Maxima',
  'Sentra',
  'Q50',
  'Q60',
  'ATS',
  'XTS',
  'Model S',
];

export const CAR_WIDTH = 60;
export const START_POS = 130;
export const END_POS = 60;

export const DEFAULT_UPDATE_CAR_DATA: CreateCarDto = { name: '', color: '#ffffff' };
