import { ProfessoresService } from '../professores.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-professores',
  templateUrl: './listar-professores.component.html',
  styleUrls: ['./listar-professores.component.css'],
})
export class ListarProfessoresComponent implements OnInit {
  professores: any = null;
  constructor(private professoresService: ProfessoresService) {}

  ngOnInit(): void {
    this.professoresService.getAll().subscribe((dados) => {
      this.professores = dados;
    });
  }
}
