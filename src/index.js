import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import { Container } from 'reactstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventListing from './components/EventListing';
import EventDetails from './components/EventDetails';
import EventAdmin from './components/EventAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navigation />
    <Container>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/events" element={<EventListing forCustomer />} />
        <Route exact path="/events/admin" element={<EventAdmin />} />
        <Route path="/events/:event_name" element={<EventDetails />} />
      </Routes>
    </Container>
  </BrowserRouter>
);

/*
  Any tag with an uppercase letter, is treated as a function

  <App /> = App();
  <App key={1} /> = App({key: 1})
*/