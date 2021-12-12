import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.css'],
})
export class FieldErrorComponent implements OnInit {
  @Input()
  deveMostrar: boolean | undefined = false;

  constructor() {}

  ngOnInit(): void {}
}
