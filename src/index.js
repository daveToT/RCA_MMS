import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './mock/login'
import './mock/products'
import './mock/role'
import './mock/user'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();