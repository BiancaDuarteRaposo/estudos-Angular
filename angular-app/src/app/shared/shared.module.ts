import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GrifaTextoDirective } from './diretivas/grifa-texto.directive';
import { CpfPipe } from './pipes/cpf.pipe';

@NgModule({
  declarations: [GrifaTextoDirective, CpfPipe],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [
    HttpClientModule,
    FormsModule,
    GrifaTextoDirective,
    CpfPipe,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
