import { createStore } from 'redux';
import EventReducer from './Reducer';

const store = () => {
  return createStore(
    // 1st arg: Reducer
    EventReducer,
    // 2nd arg: Enhancers / Middleware
    {}
  )
};

export default store;