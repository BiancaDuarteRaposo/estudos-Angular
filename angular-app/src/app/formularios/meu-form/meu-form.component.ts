import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css'],
})
export class MeuFormComponent implements OnInit {
  meuForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    checkme: new FormControl(),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.meuForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      checkme: ['', []],
    });
    console.log(this.meuForm);
  }

  getControl(control: string) {
    return this.meuForm.get(control);
  }

  isValid(control: string) {
    return (
      this.getControl(control)?.valid == false &&
      this.getControl(control)?.touched
    );
  }
}
