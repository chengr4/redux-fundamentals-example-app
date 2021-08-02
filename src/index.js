import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'
import store from './store'

const result = store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions' });
console.log('dispatch result', result);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
