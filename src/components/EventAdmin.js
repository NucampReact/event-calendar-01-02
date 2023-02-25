import React, { useState, useRef, useEffect } from 'react';
import { EVENTS } from '../data/Events';
import { Table, Card, CardHeader, CardBody, Form, FormGroup, Input, Button, Label, Alert } from 'reactstrap';

/**
 * LifeCycle events of a components
 *  1. Mounting = First time a component is rendered on our screen ( <App /> )
 *  2. Re-render = every time component state changes for example
 *  3. Unmounting = Component is removed from the UI
 * 
 * UseEffect hook = Allows us to run "side effects" during any life cycle event occurrence
 */

const EventAdmin = () => {
  // Set up a state for each input field
  const [eventData, setEventData] = useState({});
  const [eventName, setEventName] = useState();
  const [seats, setSeats] = useState();
  const [price, setPrice] = useState();
  const [poster, setPoster] = useState();
  const [date, setDate] = useState();

  const [allEvents, setAllEvents] = useState(EVENTS);
  const [disableButton, setDisableButton] = useState(false);
  const [alert, setAlert] = useState();

  /*
    useEffect takes two arguments:
      1. Callback function = the side effect itself
      2. Dependencies = what will trigger this side effect to run (which life cycle event)
        a) null = every single render
        b) [] = only on the first render (mounting)
        c) [list of dependencies] = only when any of the listed dependencies change
  */
  useEffect(() => {
    setAlert("You are on an admin screen, be careful!");
  }, []);

  useEffect(() => {
    // auto-save feature would go great here
    console.log('null effect')
    setAlert('Your form has changed');
  })

  useEffect(() => {
    console.log('dependency effect')
    // only run validation when eventName or price changes
    let regex = /^[A-Za-z]+$/;
    console.log('eventName', eventName);
    if (!regex.test(eventName)) {
      setAlert('You failed validation');
    }
  }, [eventName, price]); // only runs when eventName state changes

  const eventNameInputRef = useRef(); // create a pointer and attach to underlying HTML element

  const addEvent = () => {
  //   console.log("EVENT INPUT REF", eventNameInputRef.current.value);
  //   console.log("EventName: ", eventName);
  //   console.log("Seats: ", seats);
  //   console.log("Price: ", price);
  //   console.log("Poster: ", poster);

  //   let newEvent = {
  //     name: eventName,
  //     seatsAvailable: seats,
  //     ticketMin: price,
  //     poster: poster,
  //     date: date
  //   };

    // Add the newEvent obj into the EVENTS array
    // TODO: Investigate callbacks with state hooks -> Immutability
    setAllEvents(prevAllEvents => [ ...prevAllEvents, eventData ]);
  };

  const handleInput = (event) => {
    setEventData(prevEventData => ({ ...prevEventData, [event.target.name]: event.target.value }));
  }

  const handleEventName = (event) => {
    setEventName(event.target.value);
    // Validate the user's input
    // let regex = /^[A-Za-z]+$/;
    // if (regex.test(event.target.value)) {
    //   setEventName(event.target.value);
    //   setDisableButton(false);
    // } else {
    //   setDisableButton(true);
    // }
  }
  const handleSeats = (event) => {
    setSeats(event.target.value);
  }
  const handlePrice = (event) => {
    setPrice(event.target.value);
  }
  const handlePoster = (event) => {
    setPoster(event.target.value);
  }
  const handleDate = (event) => {
    setDate(event.target.value);
  }
  return (
    <Card>
      <CardHeader>Event Management</CardHeader>
      <CardBody>
        {alert && <Alert color='danger'>{alert}</Alert>}
        <Form>
          <FormGroup>
            <Label>Event Name</Label>
            <Input innerRef={eventNameInputRef} name="name" onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label>Number of seats</Label>
            <Input name="seatsAvailable" type="number" onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label>Ticket Price</Label>
            <Input name="ticketMin" type="number" onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label>Event Poster</Label>
            <Input name="poster" onChange={handleInput} />
          </FormGroup>
          <FormGroup>
            <Label>Event Date</Label>
            <Input type="date" name="date" onChange={handleInput} />
          </FormGroup>
          <Button disabled={disableButton} color="success" onClick={addEvent}>Add Event</Button>
        </Form>
        <Table>
          <thead>
            <th></th>
            <th>Name</th>
            <th>Ticket Average</th>
            <th>Seats Remaining</th>
            <th>Start Date</th>
          </thead>
          <tbody>
            {allEvents.map(event => {
              return (
                <tr key={event.name}>
                  <td><img alt={event.name} src={event.poster} width="40" /></td>
                  <td>{event.name}</td>
                  <td>{event.ticketMin}</td>
                  <td>{event.seatsAvailable}</td>
                  <td>{event.date}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default EventAdmin;