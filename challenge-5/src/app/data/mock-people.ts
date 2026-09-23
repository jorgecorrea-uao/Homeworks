import { Person, randomArrivalDate } from '../structures/queue';

export const mockPeople: Person[] = [
  { name: 'Ana Gómez', withdrawalAmount: 200000, arrivalDate: randomArrivalDate() },
  { name: 'Carlos Ruiz', withdrawalAmount: 50000, arrivalDate: randomArrivalDate() },
  { name: 'Laura Díaz', withdrawalAmount: 1000000, arrivalDate: randomArrivalDate() },
  { name: 'Pedro Muñoz', withdrawalAmount: 300000, arrivalDate: randomArrivalDate() },
];
