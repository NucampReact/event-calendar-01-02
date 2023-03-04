export const AddToCart = () => {

};

export const AddEvent = (addedEvent) => {
  console.log("Adding event from dispatcher")
  return {
    type: 'ADD_EVENT', // at very least, I need a unique ID for each event
    event: addedEvent,
    payload: ''
  }
};

export const DeleteEvent = () => {

};

export const EditEvent = () => {

};
