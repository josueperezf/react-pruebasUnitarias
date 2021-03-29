import { render } from "@testing-library/react";
// la siguiente importacion es cuando se usa jest pero esa prueba la deje comentada
import '@testing-library/jest-dom/extend-expect';
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Probando mi primer componente de react, PrimeraApp', ()=>{
    // la siguiente prueba es usando test
    /*
    test('debe mostrar el mensaje "Hola, Soy Goku"', () => {
        const saludo = 'Hola, Soy Goku';
        // recordemos que mi componente termina siendo html por ello hay que renderizarlo
        const miComponenteRenderizado = render(<PrimeraApp saludo={saludo} />);

        // render retornaria algo llamado wrapper
        // getByText sirve para decir que busque en ese componente y obtenga algo por texto
        // la siguiente linea va a buscar si existe saludo en el componente, sino existe retorna error
        // digamos que busca en el html ese string que le pasamos en la variable saludo
        expect(miComponenteRenderizado.getByText(saludo )).toBeInTheDocument() ;
    });
    */


    test('debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, Soy Goku';
        // shallow es parecido al render pero da mas opciones  como simular click, y cosas como si estuvieramos en jquery
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        //toMatchSnapshot es como para hacer una fotografia de mi componente ya renderizado
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de mostrar el subtitulo enviado por props', () => {
        const saludo    = 'Hola, Soy Goku';
        const subtitulo = 'soy sustitulo desde las pruebas';
        // wrapper tiene propiedades como javascript, ejemplo el find
        // este find como querySelector();
        // .text(); obtengo el texto, pero puedo obtener el html, las clases css entre otras cosas
        const wrapper   = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        // con la siguiente linea digo que luego de dibujar el html de este componente, me busque en el, una etiqueta '<p>' 
        // al encontrarla traigame el texto que tenga
        const textoParrafo = wrapper.find('p').text();

        // compare ese texto con el parametro que le enviamos como subtitulo, si coincide esta bien, sino se debe arrojar un fallo de la prueba
        // console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo );
    })
    
});