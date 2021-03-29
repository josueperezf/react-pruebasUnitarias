import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../ejemplos-para-pruebas-unitarias/08-imp-exp";

describe('Probar el archivo 08-imp-exp.js busca en el heroes.js',()=>{
    test('getHeroeById, debe retornar un heroe por id', () => {
        const id = 2;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find(h=>h.id === id);
        // toEqual es para comparar objetos 
        expect(heroeData).toEqual(heroe);
    });

    test('getHeroeById, debe retornar undefined si el id no esta en el array de heroes', () => {
        const id = 200;
        const heroe = getHeroeById(id);
        // toEqual es para comparar objetos 
        expect(heroe).toEqual(undefined);
    });

    test('getHeroesByOwner, debe retornar un arreglo con los heroes de DC', () => {
        const owner = 'DC';
        const heroesDCData  = heroes.filter(h=>h.owner === owner);
        const heroesDC      = getHeroesByOwner(owner);
        expect(heroesDCData).toEqual(heroesDC);
    })
    
    test('getHeroesByOwner, debe retornar un arreglo con los heroes de MARVEL', () => {
        const owner = 'Marvel';
        const heroesDCData  = heroes.filter(h=>h.owner === owner).length;
        const heroesDC      = getHeroesByOwner(owner).length;
        expect(heroesDCData).toBe(heroesDC);
    })
});