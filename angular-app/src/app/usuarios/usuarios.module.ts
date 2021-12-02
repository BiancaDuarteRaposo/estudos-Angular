import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';



@NgModule({
  declarations: [
    ListarUsuariosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListarUsuariosComponent
    
  ]
})
export class UsuariosModule { }
