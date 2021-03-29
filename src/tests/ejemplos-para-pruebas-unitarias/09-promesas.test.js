import heroes from "../../data/heroes";
import { getHeroeByIdAsync } from "../../ejemplos-para-pruebas-unitarias/09-promesas";

describe('Pruebas con promesas, archivo 09-promesas.js',()=>{

    test('getHeroeByIdAsync, Debe de retornar un Heroe async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then( heroe=>{
                expect(heroe).toBe(heroes[0])
                done();
            } );
    });

    test('debe de obtener un error si el heroe por id no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
            .catch( error =>{
                expect(error).toBe('No se pudo encontrar el héroe' );
                done();
            } );
    });
    
    
})