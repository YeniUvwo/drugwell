import React from "react";
import '../App.css';

function About() {

  return (
    <div className="about-page">
      <section className="about">
        <h1>About Us</h1>
        <p>Our mission is to empower our community by making high-quality healthcare accessible, affordable, and convenient. We’re passionate about improving health outcomes and fostering a healthier society through both prescription and over-the-counter medications, as well as expert health guidance.</p>
      </section>

      <hr></hr>

      <section className="offerings">
        <h1>Our Offerings</h1>
        <div>
          <p><span>Comprehensive Pharmacy Services:</span> From prescription management and medication counseling to health consultations, we ensure you have the support and information you need for optimal health.</p>
          <p><span>Personalized Care:</span> We take the time to get to know each customer, offering personalized guidance and answering any questions you may have about your health or medications.</p>
          <p><span>Community-Focused Approach:</span> We believe that health is more than just medicine. As an integral part of the community, we’re committed to supporting local initiatives, educational programs, and events that promote a healthier, happier community.</p>
          <p><span>Doorstep Medication Delivery:</span> Enjoy the convenience of having your medications delivered directly to your door. Our secure, timely delivery service helps you stay on track with your treatments without the need to visit the pharmacy.</p>
        </div>
      </section>
      
      <div className="hr">
        <hr></hr>
      </div>

      <section className="choose">
        <h1>Why Choose Us</h1>
        <p>At Drugwell Pharmacy, we’re not just a pharmacy; we’re a partner in your journey toward better health. With a friendly, knowledgeable staff and a strong commitment to quality and care, we’re here to ensure your experience is both convenient and comfortable. Whether you’re managing a chronic condition, picking up a prescription, or looking for over-the-counter solutions, you can count on us for compassionate and professional care.</p>
      </section>
    </div>
  );
}

export default About;