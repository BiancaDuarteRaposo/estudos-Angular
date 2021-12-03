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
    { nome: "João", sobrenome: "Silva", idade: 10 },
    { nome: "Arnaldo", sobrenome: "Lima", idade: 30 },
    { nome: "José", sobrenome: "Pereira", idade: 50 }
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