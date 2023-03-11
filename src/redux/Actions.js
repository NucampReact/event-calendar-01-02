export const AddToCart = (cart) => {
  return {
    type: 'ADD_TO_CART',
    cart
  }
};

export const ClearCart = () => {
  return {
    type: 'CLEAR_CART'
  }
}

export const ShowLoading = () => {
  return {
    type: 'SHOW_LOADING'
  }
}

export const AddEvent = (addedEvent) => dispatch => {
  dispatch(ShowLoading());
  // make a call to the json server to save the event in the array there

  // make async call to the server using thunk
  return fetch('http://localhost:3001/events', {
    method: 'POST', // save new event
    body: JSON.stringify(addedEvent),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(function(response) {
    if (response.ok) {
      // if response has 200 code
      // go make another fetch call to GET the newly updated events list
      // OR just save the new event into Redux store
      dispatch({type: 'ADD_EVENT', event: addedEvent});
    } else {
      throw new Error();
    }
  }).catch(function() {

  })
};

export const DeleteEvent = (eventId) => {
  return {
    type: 'DELETE_EVENT',
    deletedEventId: eventId
  }
};

export const UpdateEvent = (event) => {
  return {
    type: 'UPDATE_EVENT',
    updatedEvent: event
  }
};

export const SaveEvents = (eventsList) => {
  return {
    type: 'SAVE_EVENTS',
    eventsList
  }
}