# hola mundo y pruebas

En esta practica se crea un proyecto basico, donde borramos todo lo que contiene la carpeta src por default,
creamos en dicha carpeta un archivo llamado index.js el cual nos sirve para renderizar nuestro hola mundo con
    
    reactDom.render(<mi-contenedor mi-parametro={10}  /> , div-donde-se-dibujara);


## Componentes
 
luego se creo el primer componente, el cual termina un archivo js, el cual su nombre debe ser capitalizado, 'camelcase' pero la primera letra tambien es mayuscula. este archivo es una simple funcion, con la diferencia de que requiere importar

    { Fragment } from "react";
    import PropTypes from 'prop-types';

1. Fragment: es para envolver el html que retornaremos, ya que al igual q vuejs debe devolver una etiqueta que encapsule todo

2. PropTypes: permite mejorar los componentes, asignando validaciones a los parametros que debe recibir, ejemplo si son obligatorios, si deben ser numericos, entre otras opciones

3. defaultProps: sirve para asignar valores por default a los componentes que crearemos

4. la funcion que creamos recibe como parametro la variable llamada *props*, esta es un objeto que contiene los campos que le enviemos cuando llamemos el componente, es por ello que al recibir los parametros en la funcion, debemos hacer las desestructuracion ({mi-variable-enviada}) para sacar del props solo lo que enviamos

5. esta funcion debe ser exportada *export default PrimeraApp;*


## Pruebas

existen dos tipos de pruebas, las unitarias y las de integracion, todo tipo de prueba aplica lo llamado AAA que significa

    Arrange - Arreglar  => se refiere como a la inicializacion y declaracion de las variables
    Act - Actuar        => se trata de llamar a las funciones y demas
    Assert - Afirmar    => se trata de examinar el resultado emitido por cada funcion anteriormente llamada

1. React interpreta como archivo de test todo archivo que tenga como nombre loquesea.test.js
2. cada uno de esos archivos debe tener una funcion llamada test, donde el primer parametro es el nombre o descripcion de lo que hara esa prueba, seguido de una funcion anonima que hara la tarea
3. para realizar pruebas mas avanzadas se recomienda buscar en la documentacion de <https://jestjs.io/es-ES/docs/expect>
4. para ejecutar todas las pruebas, se debe tener en una terminal corriendo el proyecto como npm start, y en otra terminal, escribir *npm run test*

### ejecutar pruebas solo en un archivo

pasos
1. debemos *npm run test* para levantar la consola de pruebas
2. presionar la letra *w*, para que nos muestre las opciones de pruebas
3. presionar la letra *p* para inidicar que queremos que se ejecuten las pruebas solamente en una archivo .test.js 
4. nos pedira que coloquemos el nombre del archivo js que queremos ejecuta, para ello, comenzamos a escribirlo y dara sugerencias, podemos con la tecla flecha arriba y abajo, escoger el archivo que queramos

### bases para realizar pruebas con jestjs esto ya lo trae react instalado

para ello se debe tener claro algunos conceptos

1. React con el comando *npm run test* ejecuta todos los archivo que tenga al final de su nombre *.test.js*
2. para las prueba react incluye <https://jestjs.io/es-ES/docs/expect>

3. jest tiene ciertas funciones que ayudan a las pruebas, ejemplo

    - *describe* sirve para englobar todo el archivo .test.js, se le coloca una descripcion para si arroja error verlo mas facil en la terminal, un describe puede tener muchas pruebas
    - *test* es una funcion que sirve para realizar una prueba, esta recibe dos parametros, el primero es la descripcion de lo que hara la prueba, el segundo una funcion sin parametros, cuando si se le coloca parametros, se llamaria *(done)*, este done() puede detener la prueba en el momento que sea llamada. test ayudan a realizar pruebas y si fallan arrojan un throw new Error('')
    - *beforeEach()* es parte del ciclo de vida, tipo ngOninit de angular, si el archivo tengo 5 test(), entonces, beforeEach se llamara antes de llamar a cada una de esas pruebas, esto sirve para limpiar variables, inicializar y cosas asi.

        *.toBe()* compara string y arroja error si no son iguales
        *.toEqual()* compara objetos. comparar de forma recursiva todas las propiedades de las instancias de objetos (también conocida como igualdad "profunda"). Llama Object.isa comparar valores primitivos, que es incluso mejor para las pruebas que el ===operador de igualdad estricta.
        *.toMatchSnapshot()* almacena en un archivo como el html creado luego de ejecutar la prueba en el componente

### bases para realizar pruebas con ENZYME mantenido por facebook

Enzyme es una utilidad de prueba de JavaScript para React que facilita la prueba de la salida de sus componentes de React. También puede manipular, atravesar y, de alguna manera, simular el tiempo de ejecución dado el resultado.
La API de Enzyme está destinada a ser intuitiva y flexible al imitar la API de jQuery para la manipulación y el recorrido de DOM.

esta libreria es mejor cuando tenemos que probar componentes de react, con cosas como eventos click y demas, esta libreria facilita esas acciones <https://enzymejs.github.io/enzyme/> como para el momento de hacer esta practica la libreria no soporta react 17, entonces se debe usar <https://github.com/wojtekmaj/enzyme-adapter-react-17> que fue elaborada por las mismas personas, pero esta en fase alfa 
    
    npm i --save-dev enzyme 
    npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
    npm install --save-dev enzyme-to-json

las Pruebas se ejecutan de la misma manera, con npm run test, con la diferencia, es que este tipo de prueba genera una carpeta llamada _snapshots_ en nuestro proyecto, la cual almacena el html resultante luego de ejecutar nuestra prueba. si nota que hay algun cambio en el html que tiene alli en comparacion con el que acabamos de generar al correr la prueba, nos pedira que presionemos 'u' para actualizar el html que tiene guardado en esa carpeta PrimeraApp.test.js.snap cada vez que realicemos cambio en nuestros componentes, el enzyme nos va a pedir que presionemos 'u' para que refresquemos las fotografias que hace de nuestro html

1. shallow es como el render de  jestjs, pero mejorado
