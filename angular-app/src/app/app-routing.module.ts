import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

const routes: Routes = [
  { path: 'primeiro-componente', component: MeuPrimeiroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
