import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  numero1: number;
  numero2: number;
  resultado: number;

  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }
  ngOnInit(): void {}

  adicao(): void {
    this.resultado = Number(this.numero1) + Number(this.numero2);
  }
  subtracao(): void {
    this.resultado = Number(this.numero1) - Number(this.numero2);
  }
  multiplicacao(): void {
    this.resultado = Number(this.numero1) * Number(this.numero2);
  }
  validarDivisao(): void {
    if (this.numero2 == 0) {
      alert('Não é possível dividir por zero.');
    } else {
      this.resultado = this.dividir(this.numero1, this.numero2);
    }
  }
  dividir(x: number, y: number): number {
    return x / y;
  }
}
