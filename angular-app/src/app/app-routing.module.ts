import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

const routes: Routes = [
  { path: 'primeiro-componente', component: MeuPrimeiroComponent },
  {
    path: 'alunos',
    loadChildren: () =>
      import('./alunos/alunos.module').then((m) => m.AlunosModule),
  },
  {
    path: 'meu-form',
    loadChildren: () =>
      import('./formularios/formularios.module').then(
        (m) => m.FormulariosModule
      ),
  },
  {
    path: 'pokemons',
    loadChildren: () =>
      import('./pokemons/pokemons.module').then((m) => m.PokemonsModule),
  },

  {
    path: 'professores',
    loadChildren: () =>
      import('./professores/professores.module').then(
        (m) => m.ProfessoresModule
      ),
  },
  {
    path: 'usuarios',
    loadChildren: () =>
      import('./usuarios/usuarios.module').then((m) => m.UsuariosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
