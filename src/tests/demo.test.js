// describe es opcional, pero sirve para que en la consola nos muestre el nombre del archivo js que arroja el error, y la prueba que presento error
describe('Pruebas en el archivo demo.test.js',()=>{
    test('deben de ser iguales lo string', () => {
        // 1. inicializacion
        const mensaje = 'Hola Mundo';
    
        // 2. estimulo 
        const mensaje2 = `Hola Mundo`;
    
        // 3 observar el comportamiento
        // la siguiente linea compara los dos string si son iguales, si no son da error
        expect(mensaje).toBe(mensaje2);
    })
});


