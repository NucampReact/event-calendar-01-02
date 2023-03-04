// callback function Array.reduce
// Reducer is responsible for managing the data in our application
import { EVENTS } from '../data/Events';

const initialState = {
  eventList: EVENTS,
  myCart: []
};

const EventReducer = (state = initialState, action) => {
  console.log("Action is", action);
  switch(action.type) {
    case 'ADD_EVENT':
      // return the next accumulator (aka state)
      console.log("Adding event in reducer", action.event);
      return { ...state, eventList: [...state.eventList, action.event] };
    default:
      return initialState;
  }
};

export default EventReducer;