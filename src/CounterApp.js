import PropTypes from 'prop-types';

import { Fragment, useState }  from 'react';


const CounterApp = ({ value = 10 })=>{
    // counter va a tener el valor que tenga la variable value
    const [counter, setCounter ]  = useState(value);

    const handleAdd = (e)=>{
        // en la siguiente linea a counter se le suma 1, pero no se puede hacer con un counter++, ya que eso seria como un counter = counter + 1; y con ello se estaria mutando la variable
        // luego de llamar al evento del estado, se hace una renderizacion solo de la seccion del html donde esta la variable modificada
        setCounter(counter + 1 );
        // setCounter((c) => c + 1 );
    }
    const reset     = ()=>setCounter(value );
    const subtract  = ()=>setCounter(counter - 1 );
    return (
        <Fragment>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button type="button" onClick={ handleAdd } > +1 </button>
            <button type="button" onClick={ reset } > Reset </button> 
            <button type="button" onClick={ subtract } > -1 </button>
        </Fragment>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

/*
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}*/

export default CounterApp;
