import { getSaludo } from "../../ejemplos-para-pruebas-unitarias/02-template-string"

describe('Pruebas en el archivo 02-template-string.js', ()=>{
    test('prueba de la funcion getSaludo, debe retornar, Hola Fernando', () => {
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);
        // console.log(saludo);
        // expect es una libreria que ya tiene instalada react para hacer pruebas, tobe lo que hacer es comprar y retornar error sino cumple
        expect(saludo).toBe('Hola '+nombre);
    });

    test('prueba de la funcion getSaludo, debe retornar, Hola Pedro sino le enviamos argumento', () => {
        const nombre = 'Pedro';
        const saludo = getSaludo();
        expect(saludo).toBe('Hola '+nombre);
    })
})