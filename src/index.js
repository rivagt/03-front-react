//ya no se impora react desde version 17
// import React from 'react';
import ReactDOM from 'react-dom'
import CounterApp from './CounterApp'
// import FirstApp from './FirstApp';
import './index.css'

const divRoot = document.querySelector('#root');
// ReactDOM.render(<CounterApp value={99}/>, divRoot);
ReactDOM.render(<CounterApp value={10} />, divRoot);
// console.log(divRoot);