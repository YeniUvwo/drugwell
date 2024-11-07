import React from "react";
import { Link } from 'react-router-dom'
import '../App.css';
import logo from './Images/images.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
			<footer>
				<div className="footer-top">
					<div className='footer-logo-container'>
					 <img src={logo} className='logo' alt='Drugwell Pharmacy Logo' />
					 {/* <p>"Empowering Health in Our Community — Your Well-Being Is Our Priority!"</p> */}
				  </div>

					<div className="get-in-touch-container">
						<p className="get-in-touch-header">GET IN TOUCH</p>
						<div className='get-in-touch'>
							<div className="phone">
								<FontAwesomeIcon icon={faPhone} />
								<p>+234 807 446 9799</p>
							</div>
							<div className='email'>
								<FontAwesomeIcon icon={faEnvelope} />
								<p>drugwellpharmacy@gmail.com</p>
							</div>
						</div>
					</div>

					<div className='quick-links-container'>
						<p className='quick-link-header'>QUICK LINKS</p>
						<div className="footer-links">
							<Link to="/" className="footer-link">Home</Link>
							<Link to="/about" className="footer-link">About</Link>
							<Link to="/contact" className="footer-link">Contact</Link>
							<Link to="/shop" className="footer-link">Shop</Link>
						</div>
					</div>
				</div>
				
				<div className="copyright-container">
					<p>© 2023 Drugwell Pharmacy. All rights reserved.</p>
				</div>
			</footer>
    )
}

export default Footer;