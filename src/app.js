import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import 'normalize.css/normalize.css';


ReactDOM.render(<AppRouter />, document.querySelector('#react-app'))