import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navigation />
    <Container>
      <App />
    </Container>
  </>
);

/*
  Any tag with an uppercase letter, is treated as a function

  <App /> = App();
  <App key={1} /> = App({key: 1})
*/