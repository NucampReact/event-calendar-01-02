import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardHeader, CardBody, Form, FormGroup, Input, Button, Label, Alert, ButtonGroup } from 'reactstrap';
import EventListing from './EventListing';
import moment from 'moment';
import { AddEvent, DeleteEvent, UpdateEvent } from '../redux/Actions';

/**
 * LifeCycle events of a components
 *  1. Mounting = First time a component is rendered on our screen ( <App /> )
 *  2. Re-render = every time component state changes for example
 *  3. Unmounting = Component is removed from the UI
 * 
 * UseEffect hook = Allows us to run "side effects" during any life cycle event occurrence
 */

const eventFields = {
  name: '',
  ticketMin: 0,
  seatsAvailable: 0,
  poster: '',
  date: moment().format('YYYY-MM-DD')
}

const EventAdmin = () => {

  const dispatch = useDispatch();

  // Set up a state for each input field
  const [eventData, setEventData] = useState({  });
  const [errors, setErrors] = useState({});
  
  const [selectedEvent, setSelectedEvent] = useState(eventFields);

  const [disableButton, setDisableButton] = useState(false);
  const [alert, setAlert] = useState({type: 'success', message: ''});

  /*
    useEffect takes two arguments:
      1. Callback function = the side effect itself
      2. Dependencies = what will trigger this side effect to run (which life cycle event)
        a) null = every single render
        b) [] = only on the first render (mounting)
        c) [list of dependencies] = only when any of the listed dependencies change
  */
  useEffect(() => {
    // setAlert(alert => ({...alert, type: 'warning', message: "You are on an admin screen, be careful!"}));
  }, []);

  useEffect(() => {
    // auto-save feature would go great here
  })

  useEffect(() => {
    if (Object.keys(errors).length) {
      setAlert(alert => ({...alert, type: 'danger', message: 'The form has errors'}));
      setDisableButton(true) 
    } else {
      setDisableButton(false);
      setAlert(alert => ({...alert, type: 'danger', message: ''}));
    }
  }, [errors])

  useEffect(() => {
    // only run validation when event name
    let regex = /^[^0-9]+$/;
    let name = selectedEvent.name || eventData.name;
    if (!regex.test(name)) {
      setErrors(errors => ({...errors, name: 'must contain alpha characters only'}));
    } else {
      setErrors(err => {
        const {name, ...rest} = err;
        return rest;
      });
    }
  }, [eventData.name, selectedEvent.name]); // only runs when eventData.name state changes


  useEffect(() => {
    // only run validation when price changes
    if (eventData.ticketMin < 0) {
      setErrors(errors => ({...errors, ticketMin: 'must be greater than 0'}));
    } else {
      setErrors(err => {
        const {ticketMin, ...rest} = err;
        return rest;
      });
    }
  }, [eventData.ticketMin]); // only runs when eventData.ticketMin state changes

  const eventNameInputRef = useRef(); // create a pointer and attach to underlying HTML element

  const addEvent = () => {

    // Handling edit vs new
    if (selectedEvent.name) {
      dispatch(UpdateEvent({ ...selectedEvent, ...eventData}));
    } else {
      // Send/Dispatch the action to the reducer
      // The dispatch function needs to accept an action object
      console.log("Adding new event");
      const actionObject = AddEvent(eventData);
      dispatch(actionObject);
    }
  };

  const handleInput = (event) => {
    setEventData(prevEventData => ({ ...prevEventData, [event.target.name]: event.target.value }));
  }

  const editEvent = (event) => {
    setSelectedEvent(event);
  }

  const deleteEvent = (event) => {
    dispatch(DeleteEvent(event.id));
  }

  const clearEvent = () => {
    setEventData(eventFields);
    setSelectedEvent(eventFields);
  }

  return (
    <Card>
      <CardHeader>Event Management</CardHeader>
      <CardBody>
        {alert.message && <Alert color={alert.type}>{alert.message}</Alert>}
        <Form>
          <FormGroup>
            <Label>Event Name</Label>
            <Input key={selectedEvent.name || eventData.name} innerRef={eventNameInputRef} name="name" defaultValue={selectedEvent.name || eventData.name} onChange={handleInput} />
            {errors.name && <p className="text-danger">{errors.name}</p>}
          </FormGroup>
          <FormGroup>
            <Label>Number of seats</Label>
            <Input key={selectedEvent.seatsAvailable || eventData.seatsAvailable} name="seatsAvailable" type="number" defaultValue={selectedEvent.seatsAvailable || eventData.seatsAvailable} onChange={handleInput} />
            {errors.seatsAvailable && <p className="text-danger">{errors.seatsAvailable}</p>}
          </FormGroup>
          <FormGroup>
            <Label>Ticket Price</Label>
            <Input key={selectedEvent.ticketMin || eventData.ticketMin} name="ticketMin" type="number" defaultValue={selectedEvent.ticketMin || eventData.ticketMin} onChange={handleInput} />
            {errors.ticketMin && <p className="text-danger">{errors.ticketMin}</p>}
          </FormGroup>
          <FormGroup>
            <Label>Event Poster</Label>
            <Input key={selectedEvent.poster || eventData.poster} name="poster" defaultValue={selectedEvent.poster || eventData.poster} onChange={handleInput} />
            {errors.poster && <p className="text-danger">{errors.poster}</p>}
          </FormGroup>
          <FormGroup>
            <Label>Event Date</Label>
            <Input key={selectedEvent.date || eventData.date} type="date" name="date" defaultValue={moment(selectedEvent.date).format('YYYY-MM-DD') || moment(eventData.date).format('YYYY-MM-DD')} onChange={handleInput} />
            {errors.date && <p className="text-danger">{errors.date}</p>}
          </FormGroup>
          <ButtonGroup>
            <Button disabled={disableButton} color="success" onClick={addEvent}>Add/Update Event</Button>
            <Button color="secondary" onClick={clearEvent}>Clear</Button>
          </ButtonGroup>
        </Form>
        <hr />
        <EventListing handleEdit={editEvent} handleDelete={deleteEvent} />
      </CardBody>
    </Card>
  )
};

export default EventAdmin;