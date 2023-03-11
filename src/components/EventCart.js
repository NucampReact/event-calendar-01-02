import React from 'react';
import { Card, CardBody, CardHeader, Table } from 'reactstrap';

const EventCart = ({ cart, show }) => {
  if (!show) return null;
  return (
    <Card className="mt-3">
      <CardHeader>My Cart</CardHeader>
      <CardBody>
        <Table>
          <thead>
            <th>Name</th>
            <th>Purchased Tickets</th>
          </thead>
          <tbody>
            {cart.map(event => {
              return (
                <tr key={event.name}>
                  <td>{event.name}</td>
                  <td>{event.quantity}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
}

export default EventCart;