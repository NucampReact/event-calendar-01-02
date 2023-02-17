import React from 'react';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';
import { EVENTS } from '../data/Events';

const EventListing = () => {
  return (
    <Card>
      <CardHeader>Upcoming Events</CardHeader>
      <CardBody>
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
                <tr>
                  <td><img src={event.poster} width="40" /></td>
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

export default EventListing;