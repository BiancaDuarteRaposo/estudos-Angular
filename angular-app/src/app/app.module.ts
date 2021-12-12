import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { IMaskModule } from 'angular-imask';
import { ProfessoresModule } from './professores/professores.module';
import { FormulariosModule } from './formularios/formularios.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormulariosModule,
    UsuariosModule,
    PokemonsModule,
    TooltipModule.forRoot(),
    IMaskModule,
    ProfessoresModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
