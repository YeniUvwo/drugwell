import React from "react";
import store from './Images/store.avif';
import prescription from './Images/prescription_services.avif';
import consultation from './Images/health_consultations.avif';
import medication from './Images/medication_management.avif';
import delivery from './Images/home_delivery.avif';
import '../App.css';


function Home() {

  return (
    <div className="container-fluid home">
      <section className="intro">
        <h1>Welcome To Drugwell Pharmacy</h1>
        <p>"Empowering Health in Our Community — Your Well-Being Is Our Priority!"</p>
        <img src={store} className='pharmaceutical_store' alt='pharmacy_image'/>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div>
          <div className="services-li">
						<div className='image-container'>
							<img src={prescription} alt='prescription_services' />
						</div>
            <div className="services-list-description">
              <h3>Prescription Services</h3>
              <p>Reliable and accurate prescription filling with a focus on your health and safety. Our pharmacists ensure proper guidance on medication usage and answer any questions to support your well-being.</p>
            </div>
          </div>
          <div className="services-li services-li-reverse">
						<div className='image-container'>
							<img src={consultation} alt='health_consultation'/>
						</div>
						<div className="services-list-description">
						 <h3>Health Consultations</h3>
             <p>Personalized consultations to address your health concerns. Our pharmacists provide expert advice, answer questions, and offer guidance on managing conditions, medications, and overall wellness.</p>
						</div>
          </div>
          <div className="services-li">
						<div className='image-container'>
							<img src={medication} alt='medication_management' />
						</div>
						<div className="services-list-description">
							<h3>Medication Management</h3>
							<p>Comprehensive support to help you manage your medications effectively. We ensure you’re taking the right medications at the right times, assist with refills, and help minimize any side effects or interactions for better health outcomes.</p>
						</div>
          </div>
          <div className="services-li services-li-reverse">
						<div className='image-container'>
							<img src={delivery} alt='home_delivery' />
						</div>
							<div className="services-list-description">
								<h3>Doorstep Medication Delivery</h3>
								<p>Convenient and secure delivery of medications right to your door, ensuring timely access to the treatments you need without the need to visit the pharmacy.</p>
							</div>
          </div>
        </div>
      </section>
    </div>
  );
  }

export default Home;