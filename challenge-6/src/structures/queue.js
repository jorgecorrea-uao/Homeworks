// Fecha aleatoria de hoy entre 8:00 y 17:00
export function randomArrivalDate() {
  const d = new Date();
  d.setHours(8, 0, 0, 0);
  return new Date(d.getTime() + Math.random() * 9 * 60 * 60 * 1000);
}

export class Queue {
  constructor(items = []) {
    this.items = [...items];
  }

  // Inserta ordenado por fecha de llegada
  enqueue(person) {
    const i = this.items.findIndex((p) => p.arrivalDate > person.arrivalDate);
    i === -1 ? this.items.push(person) : this.items.splice(i, 0, person);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}