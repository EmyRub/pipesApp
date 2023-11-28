import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'vuela'
})
export class vuelaPipe implements PipeTransform {

    transform(valor: boolean): string {
        return (valor) ? 'Vuela' : 'No vuela';
    }
}