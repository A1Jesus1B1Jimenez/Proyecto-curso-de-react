// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';

import App from './Components/App';

// const jxs = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement('a', { href: 'https://platzi.com' }, 'ir a platzi');

// const name ='amanda';
// const suma = () => 3 + 3

// const jxs = <h1>hola soy, {--expresiones--}</h1>

// const element = (
//     <div>
//         <h1>hola soy Andony</h1>
//         <p>Soy aprendiz react</p>
//     </div>
// );

const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<
App
/>, container);
