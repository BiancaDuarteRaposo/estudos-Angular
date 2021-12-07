import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-professores',
  templateUrl: './listar-professores.component.html',
  styleUrls: ['./listar-professores.component.css'],
})
export class ListarProfessoresComponent implements OnInit {
  professores: any = null;
  constructor(private varHttpClient: HttpClient) {}

  ngOnInit(): void {
    this.varHttpClient
      .get('http://cursos.grandeporte.com.br:8080/professores')
      .subscribe((dados) => {
        this.professores = dados;
      });
  }
}
