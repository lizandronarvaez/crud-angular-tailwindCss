import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

console.log(uuid())
@Injectable({ providedIn: 'root' })
export class DbzService {

  // Lista de personajes que puedo compartir hacia otros componentes
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
  ];

  // Recibir datos de un componente hijo
  addCharacter(character: Character): void {

    const newCharacterWhithUuid: Character = { id: uuid(), ...character };
    this.characters.push(newCharacterWhithUuid)
  }

  // Recibe el indice la posicion del personaje
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter((char) => char.id !== id);
  }
}
