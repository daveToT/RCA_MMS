import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/reset.css'
import './mock/login'
import './mock/products'
import './mock/role'
import './mock/user'
import './mock/logs-list'

import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();