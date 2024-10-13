import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { FormsModule } from '@angular/forms';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})

export class AddCharacterComponent {


  // Emitir datos de un componente hijo a un padre
  @Output()
  public onAddNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: uuid(),
    name: "",
    power: 0
  };


  emitCharacter(): void {

    // aplicar un depurado o debbuger
    // debugger;
    // extramos los datos del objeto
    let { name, power } = this.character;
    // lIMPIAMOS LOS CAMPOS
    name = name.toLowerCase().trim();

    // sino no existen valores en los input no hace nada
    if (!name.length || power === 0) return;

    // Accedemos a la instacia y emitimos el objecto
    this.character.name = name;
    this.onAddNewCharacter.emit(this.character);

    console.log(this.character)
    // Reestablecer el formulario
    this.character.name = ""
    this.character.power = 0

  }
}
