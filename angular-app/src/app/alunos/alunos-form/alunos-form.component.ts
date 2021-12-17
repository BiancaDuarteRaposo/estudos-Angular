import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CepService } from 'src/app/shared/services/cep.service';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.css'],
})
export class AlunosFormComponent implements OnInit {
  //para guardar o ID que estou editando
  id: number = 0;

  meuForm: FormGroup = new FormGroup({
    email: new FormControl(),
    nome: new FormControl(),
    senha: new FormControl(),
    tipo_usuario: new FormControl(),
    cep: new FormControl(),
    logradouro: new FormControl(),
    numero: new FormControl(),
    complemento: new FormControl(),
    cidade: new FormControl(),
    bairro: new FormControl(),
    estado: new FormControl(),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private alunoService: AlunosService,
    private router: Router,
    private cepService: CepService
  ) {}

  ngOnInit(): void {
    //console.log(this.activatedRoute)

    this.meuForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      nome: ['', [Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(5)]],
      tipo_usuario: ['', [Validators.required]],
      cep: ['', [Validators.required]],
      logradouro: ['', [Validators.required]],
      numero: ['', [Validators.required]],
      complemento: ['', []],
      cidade: ['', [Validators.required]],
      bairro: ['', [Validators.required]],
      estado: ['', [Validators.required]],
    });

    this.activatedRoute.params.subscribe((parametros: any) => {
      console.log(parametros);

      // Edição
      if (parametros.id) {
        //atualizar o id a ser editado
        this.id = parametros.id;
        this.alunoService.getOne(parametros.id).subscribe((resposta) => {
          console.log(resposta);
          this.meuForm.patchValue(resposta);
        });
      }
    });
  }

  getControl(control: string) {
    return this.meuForm.get(control);
  }

  buscarCep() {
    return this.cepService.consultar(this.meuForm.value.cep).subscribe({
      next: (result: any) => {
        this.meuForm.patchValue({
          logradouro: result.logradouro,
          cidade: result.localidade,
          bairro: result.bairro,
          estado: result.uf,
        });
      },
      error: (error) => {
        alert('Cep inválido!');
        this.meuForm.patchValue({
          logradouro: null,
          cidade: null,
          bairro: null,
          estado: null,
        });
      },
    });
  }

  isValid(control: string) {
    return (
      this.getControl(control)?.valid == false &&
      this.getControl(control)?.touched
    );
  }

  onSubmit() {
    //atualizar /patch
    if (this.id > 0) {
      this.alunoService
        .update(this.id, this.meuForm.value)
        .subscribe((dados) => {
          console.log(dados);
          this.router.navigate(['/alunos']);
        });

      //criação/salvar
    } else {
      this.alunoService.salvar(this.meuForm.value).subscribe({
        next: (respota) => {
          this.router.navigate(['/alunos']);
        },
        error: (e) => {
          alert('Erro ao Salvar');
        },
        complete: () => {
          console.log('acabou');
        },
      });
    }
  }
}
