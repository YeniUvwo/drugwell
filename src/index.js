import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Importing CSS for components
import './components/Navbar.css';
import './components/Home.css';
import './components/Footer.css';
import './components/About.css';
import './components/Contact.css';
import './components/Shop.css';
import './components/Cart.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create the root element and render the App
const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// To measure app performance, pass a function to log the results
reportWebVitals();
