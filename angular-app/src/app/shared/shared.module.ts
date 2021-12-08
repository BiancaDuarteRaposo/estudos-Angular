import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GrifaTextoDirective } from './diretivas/grifa-texto.directive';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [GrifaTextoDirective, CpfPipe],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [HttpClientModule, FormsModule, GrifaTextoDirective, CpfPipe],
})
export class SharedModule {}
