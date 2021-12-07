import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { DetalheUsuarioComponent } from './detalhe-usuario/detalhe-usuario.component';
import { CpfPipe } from './cpf.pipe';
import { GrifaTextoDirective } from './grifa-texto.directive';

@NgModule({
  declarations: [
    ListarUsuariosComponent,
    DetalheUsuarioComponent,
    CpfPipe,
    GrifaTextoDirective,
  ],
  imports: [CommonModule],
  exports: [ListarUsuariosComponent, CpfPipe, GrifaTextoDirective],
})
export class UsuariosModule {}
