import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import "../node_modules/materialize-css/dist/js/materialize.min.js";

import "./icons/icon-font.css";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
