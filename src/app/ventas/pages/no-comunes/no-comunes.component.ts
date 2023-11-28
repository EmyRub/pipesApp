import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  // other, es como (else), (#) Inyecta el número del arreglo
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Fernanda'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'Tenemos un cliente esperando',
    'other': 'Tenemos # clientes esperando'
  }

  cambiarCliente() {
    switch (this.genero) {
      case 'femenino':
        this.genero = 'masculino';
        this.nombre = 'Francisco';
        break;

      case 'masculino':
        this.genero = 'femenino';
        this.nombre = 'Susana';
        break;

      default:
        this.genero = '';
    }
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'fernando',
    edad: 89,
    direccion: 'cánada mexicana'
  }

  // JsonPipe
  heroes = [
    {
      nombre: 'Superpan',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Starfire',
      vuela: true
    }
  ];

  // Async Pipe
  miObservable = interval(5000); // 0,1,2,3,4,5,6

  // Las promesas ya vienen en ECMAScript6
  valorPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500);
  });
}
