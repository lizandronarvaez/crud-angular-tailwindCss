import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  // Decorador para recibir datos de otros componentes
  // Por defecto el nombre es characterList
  @Input()
  public characterList: Character[] = [{
    name: "Trunk",
    power: 10
  }];

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();
  // Emite el indice del personaje
  emitDeleteCharacter(id?: string): void {
    if (!id) return;
    console.log({ id })
    this.onDeleteCharacter.emit(id);
  }
}
