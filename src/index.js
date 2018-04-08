import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router,Route,BrowserRouter,} from 'react-router-dom';
import {hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<BrowserRouter><App/></BrowserRouter>
    ,document.getElementById('root'));
registerServiceWorker();
