import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {

  public heroNames: string[] = ["Spiderman", "Hulk", "Batman", "Capitan América"]
  public heroDelete?: string;

  removeLastHero(): void {
    this.heroDelete= this.heroNames.pop();
  }
}
