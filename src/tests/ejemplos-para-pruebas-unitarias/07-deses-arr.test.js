import { retornaArreglo } from "../../ejemplos-para-pruebas-unitarias/07-deses-arr";

describe('pruebas en el archivo 07-deses-arr',()=>{

    test('retornaArreglo, debe retornar un string y un numero', () => {
        // const arr = retornaArreglo(); //return ['ABC', 123];
        // expect(arr).toEqual(['ABC', 123]);
        // otra forma
        const [letras, numeros] = retornaArreglo(); //return ['ABC', 123];

        //valido que este el texto y ademas valido el tipo de dato, typeof letras retorna el tipo de dato de la variable
        expect(letras ).toBe('ABC');
        expect(typeof letras ).toBe('string');

        expect(numeros ).toBe(123);
        expect(typeof numeros ).toBe('number');
    })
    
});