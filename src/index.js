import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'
import store from './store'

import { fetchTodos } from './features/todos/todoReducer'

store.dispatch(fetchTodos)

const result = store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about actions', data: 'testest' });
console.log('dispatch result', result);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
