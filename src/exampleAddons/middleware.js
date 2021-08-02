export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

// customize the middleware:
// We'd like to see the contents of each action in the console when it's dispatched, 
// and we'd like to see what the state is after the action has been handled by the reducers.
export const loggerMiddleware = storeAPI => next => action => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('new state', storeAPI.getState());
  return result;
}

export const delayedMessageMiddleware = storeAPI => next => action => {
  if (action.type === 'todos/todoAdded') {
    setTimeout(() => {
      console.log('Added a new todo: ', action.payload)
    }, 1000)
  }

  return next(action)
}

