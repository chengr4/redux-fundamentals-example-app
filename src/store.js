import { createStore, compose } from 'redux'
import rootReducer from './rootReducer'
import { sayHiOnDispatch, includeMeaningOfLife } from './exampleAddons/enhancers'

let preloadedState = {

}

// compose function is used to merge multiple enhancers together.
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

/* 
Beside rootReducer and preloadedState
createStore can also take one more argument, 
which is used to customize the store's abilities and give it new powers.
*/
const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;