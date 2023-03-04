import React, { useState } from 'react';
import { Card, Button, CardHeader, CardBody, Table, ButtonGroup } from 'reactstrap';
import { EVENTS } from '../data/Events';
import { Link } from 'react-router-dom';
import EventCart from './EventCart';


// <EventListing /> = EventListing();
/*
  How do we tell React to re-render our component when data changes?
  The state of our component has changed

  State = Data that changes in our component and used in the UI

  useState() Hook = Communicate to React Framework to tell React about our state data so that 
    React can update our component when the data changes

  Every time state changes, the component is re-rendered:
  Example:
    EventListing() => quantity = 0
    EventListing() => quantity = 1 // click +
    EventListing() => quantity = 2 // click +
    EventListing() => quantity = 3
*/
const initialEventData = EVENTS.map(e => ({ name: e.name, quantity: 0 }));
const EventListing = ({ handleDelete, handleEdit, eventList = EVENTS, forCustomer }) => {
  // useState() returns an ARRAY of two values [data, a function to set the data]
  const [events, setEvents] = useState(initialEventData);
  const [addedToCart, setAddedToCart] = useState(false);

  // Challenge: Make quantity updates only affect the event you're looking at
  // { event: 'Boys2men', quantity: 0 }

  const decrementQuantity = (eventName) => {
    const nextEvents = events.map(e => {
      if (e.name === eventName) {
        e.quantity = e.quantity - 1;
        console.log(e.quantity);
        return e;
      } else {
        return e;
      }
    })
    setEvents(nextEvents);
  };

  const incrementQuantity = (eventName) => {
    const nextEvents = events.map(e => {
      if (e.name === eventName) {
        e.quantity = e.quantity + 1;
        console.log(e.quantity);
        return e;
      } else {
        return e;
      }
    })
    setEvents(nextEvents);
  }

  const addToCart = (event) => {
    // Toggle the state 'addedToCart' to true
    setAddedToCart(true);
  }

  const removeCart = (event) => {
    // Toggle the state 'addedToCart' to true
    setAddedToCart(false);
    const initialEventData = EVENTS.map(e => ({ name: e.name, quantity: 0 }));
    setEvents(initialEventData);
  }

  const showCart = () => {
    if (addedToCart) {
      return (<EventCart show cart={events} />)
    } else {
      return <EventCart cart={initialEventData} />;
    }
  }

  const showActions = (event) => {
    if (forCustomer) {
      return (
        <td>
          <Button color="info" size="sm" onClick={e => decrementQuantity(event.name)} >-</Button><hr />
          <p>{events.find(e => e.name === event.name).quantity}</p>
          <Button color="info" size="sm" onClick={e => incrementQuantity(event.name)}>+</Button>
        </td>
      )
    } else {
      return (
        <td>
          <ButtonGroup>
            <Button color="primary" onClick={() => handleEdit(event)}>Edit</Button>
            <Button color="danger" onClick={() => handleDelete(event)}>Delete</Button>
          </ButtonGroup>
        </td>
      )
    }
  }

  return (
    <Card>
      <CardHeader>Upcoming Events</CardHeader>
      <CardBody>
        {forCustomer && <ButtonGroup>
          <Button color="success" size="lg" onClick={addToCart}>Add to Cart</Button>
          <Button color="danger" size="lg" onClick={removeCart}>Clear Cart</Button>
        </ButtonGroup>}
        {showCart()}
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Ticket Average</th>
              <th>Seats Remaining</th>
              <th>Start Date</th>
            </tr>
          </thead>
          <tbody>
            {eventList.map(event => {
              return (
                <tr key={event.name}>
                  <td><img alt={event.name} src={event.poster} width="40" /></td>
                  <td>{event.name}</td>
                  <td>{event.ticketMin}</td>
                  <td>{event.seatsAvailable}</td>
                  <td>{event.date}</td>
                  {showActions(event)}
                  <td>
                    <Link to={`/events/${event.name}`}>View Details</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default EventListing;