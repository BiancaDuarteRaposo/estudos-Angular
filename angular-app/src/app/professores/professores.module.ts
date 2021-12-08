import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListarProfessoresComponent],
  imports: [CommonModule, SharedModule],
  exports: [ListarProfessoresComponent],
})
export class ProfessoresModule {}
