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
    case 'CLEAR_CART':
      return { ...state, myCart: [] };
    case 'ADD_TO_CART':
      return { ...state, myCart: action.cart };
    case 'ADD_EVENT':
      // return the next accumulator (aka state)
      console.log("Adding event in reducer", action.event);
      return { ...state, eventList: [...state.eventList, action.event] };
    case 'DELETE_EVENT':
      const updatedList = state.eventList.filter(event => event.id !== action.deletedEventId);
      return { ...state, eventList: updatedList };
    case 'UPDATE_EVENT':
      const eventListCopy = state.eventList;
      const theEventIndex = eventListCopy.findIndex(event => event.id === action.updatedEvent.id);
      eventListCopy[theEventIndex] = action.updatedEvent;
      return { ...state, eventList: [ ...eventListCopy ] };
    default:
      return initialState;
  }
};

export default EventReducer;