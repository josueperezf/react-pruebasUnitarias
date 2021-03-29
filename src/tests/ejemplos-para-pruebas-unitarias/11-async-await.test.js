import { getImagen } from "../../ejemplos-para-pruebas-unitarias/11-async-await";

describe('pruebas para 11-async-await.js',()=>{

    test('getImagen, debe retornar el url de la imagen', async () => {
        const url = await getImagen();
        // console.log(url);
        expect( url.includes('https://') ).toBe(true);
    })
    
});