import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App/>, // First argument signifies what is to be rendered
    document.getElementById('root'), // where it is to be rendered to
);

// check if autoreload is enabled
if (module.hot) {
    module.hot.accept();
}

registerServiceWorker();