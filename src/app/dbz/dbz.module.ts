import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';


@NgModule({

  // Declarar aqui los pequeños modulos o componentes si estan incluidos dentro de otro
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports: [MainPageComponent]
})
export class DbzModule { }
