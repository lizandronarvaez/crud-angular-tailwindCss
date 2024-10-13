import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: '../../counter.component.html',
  styles: ``,
})
export class CounterComponent {

  public counter: number = 0;

  constructor() { }

  incrementCounter(value?: number): void {
    if (value) {
      this.counter += value;
      return;
    }
    this.counter += 1;
  }

  decrementCounter(value?: number): void {
    if (this.counter === 0) return;
    if (value) {
      this.counter += value;
      return;
    }
    this.counter -= 1;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
