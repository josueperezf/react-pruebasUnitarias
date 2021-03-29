import { getUser, getUsuarioActivo } from "../../ejemplos-para-pruebas-unitarias/05-funciones";

describe('Pruebas en el archivo 05-funciones.js',()=>{

    test('debe retornar un objecto', () => {
        const userTest = {
                uid: 'ABC123',
                username: 'El_Papi1502'
                };
        const user = getUser();
        // console.log(user);
        expect(userTest).toEqual(user) ;
    });
    
    test('getUsuarioActivo debe retornar un objecto, segun un nombre dado', () => {
        const username = 'Josue';
        const userTest = {
            uid: 'ABC567',
            username
        };
        const user = getUsuarioActivo(username);
        // console.log(user);
        expect(userTest).toEqual(user) ;
    });
});