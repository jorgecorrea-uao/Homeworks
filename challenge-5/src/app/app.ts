import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Queue, randomArrivalDate } from './structures/queue';
import { mockPeople } from './data/mock-people';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  queue = signal(this.buildInitialQueue());
  name = '';
  amount: number | null = null;

  private buildInitialQueue(): Queue {
    const q = new Queue();
    mockPeople.forEach(p => q.enqueue(p));
    return q;
  }

  addPerson(): void {
    if (!this.name.trim() || !this.amount || this.amount <= 0) return;
    const next = Queue.from(this.queue()) as Queue;
    next.enqueue({
      name: this.name.trim(),
      withdrawalAmount: this.amount,
      arrivalDate: randomArrivalDate(),
    });
    this.queue.set(next);
    this.name = '';
    this.amount = null;
  }

  attend(): void {
    const next = Queue.from(this.queue()) as Queue;
    next.dequeue();
    this.queue.set(next);
  }
}