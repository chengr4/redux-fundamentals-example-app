import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers'
import { delayedMessageMiddleware, loggerMiddleware } from './exampleAddons/middleware'

let preloadedState = {

}

// compose function is used to merge multiple enhancers together.
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

// Redux middleware are actually implemented on top of a very special store enhancer that comes built in with Redux, called applyMiddleware.
const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware, loggerMiddleware)

/* 
Beside rootReducer and preloadedState
createStore can also take one more argument, 
which is used to customize the store's abilities and give it new powers.
*/
const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

export default store;