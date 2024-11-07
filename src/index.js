import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
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


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
