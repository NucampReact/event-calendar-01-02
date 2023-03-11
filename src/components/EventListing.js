import React, { useState } from 'react';
import { Card, Button, CardHeader, CardBody, Table, ButtonGroup } from 'reactstrap';
import { EVENTS } from '../data/Events';
import { Link } from 'react-router-dom';
import EventCart from './EventCart';
import { useDispatch, useSelector } from 'react-redux';
import { AddToCart, ClearCart } from '../redux/Actions';


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

/*
  Redux hooks:
    1. useReducer(): Use the reducer function
    2. useDispatch(): Use the dispatch layer
    3. useSelector(): Select the data from store
*/

const EventListing = ({ handleDelete, handleEdit, forCustomer }) => {

  // How do I select data from the redux store?
  const eventList = useSelector(function(state) {
    console.log("Redux state", state);
    return state.eventList;
  });

  

  // useState() returns an ARRAY of two values [data, a function to set the data]
  const initialEventData = eventList.map(event => ({ id: event.id, name: event.name, quantity: 0}));
  console.log("initial event data", initialEventData)
  const [events, setEvents] = useState(initialEventData);
  const [addedToCart, setAddedToCart] = useState(false);

  const dispatch = useDispatch();

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
    dispatch(AddToCart(events.filter(e => e.quantity > 0)));
  }

  const removeCart = (event) => {
    // Toggle the state 'addedToCart' to true
    setAddedToCart(false);
    dispatch(ClearCart());
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
    console.log('showing actions', event, events);
    if (forCustomer) {
      return (
        <td>
          <Button color="info" size="sm" onClick={e => decrementQuantity(event.name)} >-</Button><hr />
          <p>{events.find(e => e.id === event.id).quantity}</p>
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