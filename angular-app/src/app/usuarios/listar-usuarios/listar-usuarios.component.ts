import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarioSelecionadoPai = null;
  seEhMaiorQue18: boolean = false;

  usuarios = [
    { nome: "João", sobrenome: "Silva", idade: 33, nascimento : '1988-05-02' },
    { nome: "Arnaldo", sobrenome: "Lima", idade: 26, nascimento : '1996-09-04' },
    { nome: "José", sobrenome: "Pereira", idade: 24, nascimento : '1998-10-01' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onUsuarioClick(dados : any){
    console.log(dados);
    this.usuarioSelecionadoPai = dados;
  }

  metodoDoPai(evento : any){
    console.log('método do pai....', evento);
    this.seEhMaiorQue18 = evento;
  }

}