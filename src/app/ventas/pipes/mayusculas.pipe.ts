import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {

    // Puede retornar cualquier cosa
    // Los argumentos reciben los datos de {{datos}}
    transform(valor: string, enMayusculas: boolean = true): string {

        // if (enMayusculas) {
        //   //  return valor.toUpperCase();
        // }
        //return valor.toLowerCase();

        // CAMBIAR A TERNARIO
        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }

}