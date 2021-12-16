import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-listar-alunos',
  templateUrl: './listar-alunos.component.html',
  styleUrls: ['./listar-alunos.component.css'],
})
export class ListarAlunosComponent implements OnInit {
  alunos: any;

  constructor(private alunoService: AlunosService) {}

  ngOnInit(): void {
    this.retornarTodos();
  }

  onApagarClick(alunos: any) {
    console.log(alunos);
    this.alunoService.deletar(alunos.id).subscribe(() => {
      //this.retornarTodos();
      let index = this.alunos.findIndex((obj: any) => alunos.id == obj.id);
      this.alunos.splice(index, 1);
      alert(`Aluno ${alunos.id} deletado com sucesso`);
    });
  }

  retornarTodos() {
    this.alunoService.getAll().subscribe((dados) => {
      this.alunos = dados;
    });
  }
}
