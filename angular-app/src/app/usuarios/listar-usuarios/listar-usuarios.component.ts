import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  usuarios=[
    { nome:"Julia",sobrenome:"Silva", idade:10},
    { nome:"Alice",sobrenome:"Silva", idade:25},
    { nome:"Eloá",sobrenome:"Silva", idade:17},
]
  constructor() { }

  ngOnInit(): void {
  }

}
