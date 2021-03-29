import { Fragment } from "react";
import PropTypes from 'prop-types';


const PrimeraApp = ({saludo, subtitulo} )=>{
    return (
        <Fragment >
            <h1> {saludo} </h1>
            <p>{subtitulo}</p>
        </Fragment>
    );
}
PrimeraApp.propTypes = {
    // isRequired es para que sea opcional
    // si no tiene isRequired es por que es opcional 
    saludo:PropTypes.string.isRequired
}
// la siguiente seccion es para asignar valores por default
PrimeraApp.defaultProps = {
    subtitulo:'soy un subtitulo'
}

export default PrimeraApp;