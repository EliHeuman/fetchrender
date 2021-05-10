import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from '../src/App.jsx';
import reportWebVitals from '../src/reportWebVitals';

import axios from 'axios';
axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });