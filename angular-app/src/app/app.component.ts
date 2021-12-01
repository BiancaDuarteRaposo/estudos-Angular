import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  nome ='Bianca';
  cor= 'azul';
  valorDigitado = null;
  numeroCpf= '';
  resultado!: boolean;


  botaoClick(){
    alert('uma mensagem')
    this.cor = (this.cor == 'azul' ? 'vermelho': 'azul') ;
  }
  // modo didítico
  // inputKeyUp(input:any){
  //   console.log(input.target.value);
  //   this.valorDigitado = input.target.value;
  // }
  validaCPF(){
    console.log(this.testaCPF(this.numeroCpf))
    this.resultado = this.testaCPF(this.numeroCpf)
  }

  testaCPF(strCPF: string) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true ;
  
  }
  
}
