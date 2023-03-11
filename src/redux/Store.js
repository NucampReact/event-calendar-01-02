import { createStore, compose, applyMiddleware } from 'redux';
import EventReducer from './Reducer';
import thunk from 'redux-thunk';

/*
  Redux layers:
    Action -> [Dispatcher -> Middleware -> Reducer -> State] -> View
    [] = store

    thunk = allows us to use the redux flow asynchronously
*/

const store = () => {
  return createStore(
    // 1st arg: Reducer
    EventReducer,
    // 2nd arg: Enhancers / Middleware
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  )
};

export default store;