import PropTypes from 'prop-types'
import {useState} from 'react'
//rafcp -> crea un functional component con proptypes
const CounterApp = ({value = 10}) => {

    const [counter,setCounter] = useState(value);
    // console.log(counter);



    const handlAdd = () => {
        // setCounter(counter +1);
        setCounter((c)=> c+1);
        // counter++;
    };

    // const handlSust = () => {
    //     setCounter((c)=> c-1);
    // };
    // const handlValue = () => {
    //     setCounter(value);
    // };
    

    return (
        <>
            <h1>Counter</h1>
            <h2>{'Uid:'+counter}</h2>
            {/* con handlAdd() es para ejecutar a penas iniciar el component */}
            <button onClick={handlAdd }>+1</button>
            <button onClick={()=> setCounter(value)}>Reset</button>
            <button onClick={()=> setCounter(counter-1)}>-1</button>
        </>
    );

}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value : 10
}
export default CounterApp;