import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarProfessoresComponent } from './listar-professores/listar-professores.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ListarProfessoresComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ListarProfessoresComponent],
})
export class ProfessoresModule {}
