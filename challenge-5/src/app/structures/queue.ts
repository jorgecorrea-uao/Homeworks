export interface Person {
  name: string;
  withdrawalAmount: number;
  arrivalDate: Date;
}

export class Queue extends Array<Person> {
  // Inserta ordenado por fecha de llegada
  enqueue(person: Person): void {
    const i = this.findIndex(p => p.arrivalDate > person.arrivalDate);
    i === -1 ? this.push(person) : this.splice(i, 0, person);
  }

  dequeue(): Person | undefined {
    return this.shift();
  }

  peek(): Person | undefined {
    return this[0];
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }

  print(): void {
    console.table(this);
  }
}

// Fecha aleatoria de hoy entre 8:00 y 17:00
export function randomArrivalDate(): Date {
  const d = new Date();
  d.setHours(8, 0, 0, 0);
  return new Date(d.getTime() + Math.random() * 9 * 60 * 60 * 1000);
}
