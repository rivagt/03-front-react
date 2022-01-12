import PropTypes from 'prop-types';

//functional components
const FirstApp = ( {saludo, subtitulo} ) => {
    return (
        //div es para darle css
        <>
            <h1> {saludo} </h1>
        {/* no se pueden usar booleans, concatena arrays pero los separa individualmente, no imprime objetos */}
            {/* <pre>{ JSON.stringify(saludo, null, 3) }</pre> */}
            <p> {subtitulo} </p>
        </>
    );
}

FirstApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
FirstApp.defaultProps = {
    subtitulo: 'No soy un subtitulo'
}

export default FirstApp; 