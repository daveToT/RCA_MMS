import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './api';
import './mock/login'
import './mock/products'
import './mock/role'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();