import React, { useState } from 'react';
import { Card, Button, CardHeader, CardBody, Table } from 'reactstrap';
import { EVENTS } from '../data/Events';
import { Link } from 'react-router-dom';


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
const EventListing = () => {
  // useState() returns an ARRAY of two values [data, a function to set the data]
  const [quantity, setQuantity] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  // Challenge: Make quantity updates only affect the event you're looking at
  // { event: 'Boys2men', quantity: 0 }

  const decrementQuantity = (event) => {
    setQuantity(quantity - 1); // use the state function to update the state data
  };

  const incrementQuantity = (event) => {
    console.log(event);
    // increase my quantity by 1
    // quantity = quantity + 1; // Never re-runs our function (aka Updates/Re-render our component)
    let newQuantity = quantity + 1;
    setQuantity(quantity + 1); // use the state function to update the state data
    console.log("My quantity is", newQuantity);
  }

  const addToCart = (event) => {
    // Toggle the state 'addedToCart' to true
    setAddedToCart(true);
  }

  const removeCart = (event) => {
    // Toggle the state 'addedToCart' to true
    setAddedToCart(false);
    setQuantity(0);
  }

  const showCart = () => {
    if (addedToCart) {
      return (<section>
        <p>You now have {quantity} tickets in your cart</p>
      </section>)
    } else {
      return null;
    }
  }
  return (
    <Card>
      <CardHeader>Upcoming Events</CardHeader>
      <CardBody>
        <Button color="success" size="lg" onClick={addToCart}>Add to Cart</Button>
        <Button color="danger" size="lg" onClick={removeCart}>Clear Cart</Button>
        {showCart()}
        <Table>
          <thead>
            <th></th>
            <th>Name</th>
            <th>Ticket Average</th>
            <th>Seats Remaining</th>
            <th>Start Date</th>
          </thead>
          <tbody>
            {EVENTS.map(event => {
              return (
                <tr key={event.name}>
                  <td><img src={event.poster} width="40" /></td>
                  <td>{event.name}</td>
                  <td>{event.ticketMin}</td>
                  <td>{event.seatsAvailable}</td>
                  <td>{event.date}</td>
                  <td>
                    <Button color="info" size="sm" onClick={decrementQuantity} >-</Button><hr />
                    <p>{quantity}</p>
                    <Button color="info" size="sm" onClick={incrementQuantity}>+</Button>
                  </td>
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