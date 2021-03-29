import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe('pruebas para el componente counterApp.js',()=>{
    let wrapper   = shallow(<CounterApp />);
    // beforeEach es parte del ciclo de vida de las pruebas, y se ejecuta antes de llamar a cada test(), con esto logro limpiar la variable wrapper para cada prueba
    beforeEach(()=>{
        wrapper   = shallow(<CounterApp />);
    });

    test('debe mostrar <CounterApp/> correctamente y hacer el snapshot', () => {
        // debe crear en la carpeta _snapshot_ un archivo con el html resultante
        //toMatchSnapshot es como para hacer una fotografia de mi componente ya renderizado, el mismo lo guarda en un archivo con la extension .snap
        expect(wrapper).toMatchSnapshot();

    });

    test('debe mostrar <CounterApp/> correctamente con valores por default', () => {
        const valorDefaultEsperado = 10;
        const valorDelH2 = Number(wrapper.find('h2').text().trim());
        expect(valorDefaultEsperado).toBe(valorDelH2);
    });
    
    test('debe mostrar <CounterApp/> correctamente con valores enviado por parametros', () => {
        const valor         = 100;
        const wrapper       = shallow(<CounterApp value={valor} />);
        const valorDelH2    = Number(wrapper.find('h2').text().trim());
        expect(valor).toBe(valorDelH2);
    });
    
    test('debe incrementar con el boton llamado +1', () => {
        // en la siguiente prueba obtenemos la referencia del boton +1, luego simulamos un click en ese boton, seguido, verificamos si realmente sumo en la variable llamada value que se renderiza en el h2
        // con el .at(0); obtenemos de todos los botones que esten en el html del componente CounterApp, el que este en la posicion 0,
        // esto nos retornaria un ShallowWrapper, debemos especificar que queremos de ese boton, ejemplo, el html, o alguna otra propiedad
        const botonMasUnoDelHtmlDelComponente = wrapper.find('button').at(0);
        botonMasUnoDelHtmlDelComponente.simulate('click');
        const valorDelH2 = Number(wrapper.find('h2').text().trim());
        // como por defecto el  componente si no le pasan parametro inicializa la variable em 10, si simulo el evento click en mas uno, la misma deberia de tener un 11 de valor

        expect(valorDelH2).toBe(11);
    })

    test('debe restar con el boton llamado -1', () => {
        // el valor 10 el valor que tiene por default el componente, si se esta probando que es una resta, entonces evaluaremos si el resultado es 9
        // la siguiente linea inicializamos la variable wrapper, para limpiarle el valor, ya la tengo en la parte superior, luego del describe, pero que pasa, como en una prueba anterior le suma uno, tendria un 11, y si ahora le restp tendria un diez, entonces jamas daria el 9 esperado
        // const wrapper   = shallow(<CounterApp />); lo estoy comentando debido a que se esta implementando en la prueba algo llamado ciclos de vida, tipo ngOninit de angular, con la diferencia, que esta funcion se llamara por cada test() que tenga en este archivo .test.js
        // const wrapper   = shallow(<CounterApp />);
        const botonMenosUnoDelHtmlDelComponente = wrapper.find('button').at(2);
        botonMenosUnoDelHtmlDelComponente.simulate('click');
        const valorDelH2 = Number(wrapper.find('h2').text().trim());
        expect(valorDelH2).toBe(9);
    });

    test('Debe de colocar el valor por default con el boton reset', () => {
        const valorInicial  = 105;
        const wrapper       = shallow(<CounterApp value={valorInicial} />);
        const botonMasUnoDelHtmlDelComponente = wrapper.find('button').at(0);
        // estoy llamando al boton +1 dos veces para que incremente el valor y tenga 107, luego debo llamar al reset y ver si el valor deja de ser 107 y vuelve a 105
        botonMasUnoDelHtmlDelComponente.simulate('click');
        botonMasUnoDelHtmlDelComponente.simulate('click');
        // const valorDelH2LuegoDeSumar = Number(wrapper.find('h2').text().trim());
        const botonResetDelHtmlDelComponente = wrapper.find('button').at(1);
        botonResetDelHtmlDelComponente.simulate('click');
        const valorDelH2LuegoDeClickEnReset = Number(wrapper.find('h2').text().trim());
        expect(valorInicial).toBe(valorDelH2LuegoDeClickEnReset);
    })
    
    
});