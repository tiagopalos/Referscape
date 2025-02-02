// utils/transformPin.ts
import { Pin as PinType } from '../types/PinTypes';

export const transformPin = (pin: PinType) => ({
  id: pin.id.toString(),
  imageUrl: pin.src?.medium || 'https://dummyimage.com/300.png/09f/fff',
  title: pin.alt || 'No Title',
  description: pin.alt || 'No description',
});