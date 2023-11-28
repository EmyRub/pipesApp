import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent {

  nombreLower: string = 'Fernando';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'FerNAS Hi';

  fecha: Date = new Date(); // El día de hoy
  

  nombre : string = 'Julia';
  obj = {
    nombre: 'Fernando'
  }

 
}
