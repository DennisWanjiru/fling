import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/materialize-css/dist/js/materialize.min.js";

import "./icons/icon-font.css";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
