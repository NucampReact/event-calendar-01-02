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

export const AddEvent = (addedEvent) => {
  return {
    type: 'ADD_EVENT', // at very least, I need a unique ID for each event
    event: addedEvent,
    payload: ''
  }
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