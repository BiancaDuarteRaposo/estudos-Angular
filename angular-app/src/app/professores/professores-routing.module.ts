import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component';
import { ProfessorFormComponent } from './professor-form/professor-form.component';

const routes: Routes = [
  { path: 'professores', component: ListarProfessoresComponent },
  { path: 'professores/new', component: ProfessorFormComponent },
  { path: 'professores/:id', component: ProfessorFormComponent },
];

// query params:
// são parâmetros que podem ser passadospela e não são obrigatórios ex: url...."?"

//path params : variável "na" rota são obrigatórios
//https://grandeporte.com.br/curso/"mysql"

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessoresRoutingModule {}
