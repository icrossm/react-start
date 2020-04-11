import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layouts/App';
import * as serviceWorker from './serviceWorker';

const rootElement =  document.getElementById('root');

let render = () =>{
  ReactDOM.render(<React.StrictMode>
    <App />
  </React.StrictMode>,rootElement)
}
// Are we in development mode?
if(module.hot){
  // Whenever a new version of App.js is available
  module.hot.accept('./app/layouts/App',()=>{
    setTimeout(render);
  })
}

render()
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
