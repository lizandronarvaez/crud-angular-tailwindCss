import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styles: ``
})
export class HeroComponent {
  public age: number = 45;
  public name: string = "IronMan";
  public nameIsChange: boolean = false;
  public ageIsChange: boolean = false;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeNameHero(): void {
    this.name = "Lizandro Narváez";
    this.nameIsChange = true;
  }

  changeAgeHero(): void {
    this.age = 30;
    this.ageIsChange = true;
  }

  resetForm(): void {
    this.name = "IronMan";
    this.age = 45;
    this.ageIsChange = false;
    this.nameIsChange = false;
  }
}
