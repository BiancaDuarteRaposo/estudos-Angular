import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component';
import { SharedModule } from '../shared/shared.module';
import { ProfessoresRoutingModule } from './professores-routing.module';

@NgModule({
  declarations: [ListarProfessoresComponent],
  imports: [CommonModule, SharedModule, ProfessoresRoutingModule],
  exports: [ListarProfessoresComponent],
})
export class ProfessoresModule {}
