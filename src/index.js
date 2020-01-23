import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';


import rootStore from "./store";
import './index.css';
import App from './App';


const store = rootStore


ReactDOM.render(<Provider store = { store }><App /></Provider>, document.getElementById('customRoot'))
