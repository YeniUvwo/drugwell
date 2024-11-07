import React from "react";
import '../App.css'

function Contact() {

  return (
    <div className="contact">
      <section className="message-us">
        <p className="contact-header">MESSAGE US</p>
        <div className="input-group">
          <div className="mb-3">
            <label htmlFor='name' className="form-label">Name :</label>
            <input className="form-control" type='text' name='name' id='name' autoComplete="name"></input>
          </div>
          <div className="mb-3">
            <label htmlFor='email' className="form-label">Email :</label>
            <input className="form-control" type='email' name='email' id='email' autoComplete="email"></input>
          </div>
          <div className="mb-3">
            <label htmlFor='textareaBox' className="form-label">Questions / Enquiries :</label>
            <textarea className="form-control" id='textareaBox' rows='3'></textarea>
          </div>
          <div className="btn-container">
            <button className="btn">Submit</button>  
          </div>
        </div>
      </section>

      <section className="locations">
        <p className="locations-header">LOCATIONS</p>
        <div className="store-addresses">
          <div className="address">
            <p>781b Somide Odujinrin Ave, Olowora, Lagos 105102,<br></br> Lagos</p>
            <p>+234 702 641 5849</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=781b+Somide+Odujinrin+Ave,+Olowora,+Lagos+105102,+Lagos" 
              target="_blank" 
              rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
          <div className="address">
            <p>27 Osolo Wy, Ajao Estate, Lagos 100263, <br></br>Lagos</p>
            <p>+234 909 121 6615</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=27+Osolo+Wy,+Ajao+Estate,+Lagos+100263,+Lagos" 
              target="_blank" 
              rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
          <div className="address">
            <p>22 Tijani Ashogbon St, Akoka, Lagos 102216, <br></br>Lagos</p>
            <p>+234 905 389 6311</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=22+Tijani+Ashogbon+St,+Akoka,+Lagos+102216,+Lagos" 
              target="_blank" 
              rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
          <div className="address">
            <p>Terminal 3, Oshodi transport interchange, Oshodi-Isolo, Lagos 102214, <br></br>Lagos</p>
            <p>+234 915 333 3300</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Terminal+3,+Oshodi+transport+interchange,+Oshodi-Isolo,+Lagos+102214,+Lagos" 
              target="_blank" 
              rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
          <div className="address">
            <p>Terminal station bus, Papa Ajao, Ikeja 102215, <br></br>Lagos</p>
            <p>+234 915 333 3300</p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Terminal+station+bus,+Papa+Ajao,+Ikeja+102215,+Lagos" 
              target="_blank" 
              rel="noopener noreferrer">
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
  }

export default Contact;