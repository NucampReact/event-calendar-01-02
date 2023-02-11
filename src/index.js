import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App></App>);

/*
  Any tag with an uppercase letter, is treated as a function

  <App /> = App();
  <App key={1} /> = App({key: 1})
*/