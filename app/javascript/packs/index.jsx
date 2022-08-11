import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'
import './index.css'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
     <BrowserRouter>
      <App />
     </BrowserRouter>
    ,
    document.body.appendChild(document.createElement('div')),
  )
})

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
