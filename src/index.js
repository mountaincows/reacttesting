import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {store} from './components/App'
import FormikComp from './components/FormikComp';
import TestComp  from './components/TestComp';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
    <Router><FormikComp store={store} /></Router>, document.getElementById('root'));
registerServiceWorker();
