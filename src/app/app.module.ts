import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// MODULOS
import { AppRoutingModule } from './app-routing.module';
import { CounterModule } from './counter/components/counter.module';
import { DbzModule } from './dbz/dbz.module';
import { HeroesModule } from './heores/heroes.module';

// COMPONENTES
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],

  // Aqui se implementan los modulos
  imports: [BrowserModule, AppRoutingModule, CounterModule, HeroesModule, DbzModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
