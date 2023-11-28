import { Component } from '@angular/core';
import { flush } from '@angular/core/testing';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.less']
})
export class OrdenarComponent {

  // enMayusculas
  enMayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [{
    nombre: 'Superman',
    vuela: true,
    color: Color.azul
  },
  {
    nombre: 'Batman',
    vuela: false,
    color: Color.negro
  },
  {
    nombre: 'Robin',
    vuela: false,
    color: Color.verde
  },
  {
    nombre: 'Daredevil',
    vuela: false,
    color: Color.rojo
  },
  {
    nombre: 'Lintena Verde',
    vuela: true,
    color: Color.verde
  }

  ];

  Toggle() {
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
    //console.log(valor);
  }

}
