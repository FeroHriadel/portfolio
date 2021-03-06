import React from "react";
import { render } from "react-dom";
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import './styles/index.scss';

render(
    <BrowserRouter>
        <App /> 
    </BrowserRouter>,
    document.getElementById('root'));
