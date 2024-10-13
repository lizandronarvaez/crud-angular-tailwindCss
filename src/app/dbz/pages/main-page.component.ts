import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})

export class MainPageComponent {

  // En el constructor se implementan los servicio o depedencias que queremos usar
  // El servicio siempre debe ser un private
  constructor(
    private dbzService: DbzService
  ) { }

  // Obetener datos del servicio a traves del componente
  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  onAddNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
