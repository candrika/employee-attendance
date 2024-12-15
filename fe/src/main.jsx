import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider } from 'react-redux';

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import App from './App.jsx'
import './global.css'
import store from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App className="bg-gray-500"/>
    </Provider>
   </React.StrictMode>,
)
