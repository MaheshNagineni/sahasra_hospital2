import React from 'react';
import './index.css'

function AboutUs() {
  return (
    <div className="section about-us">
      <h2>About Us</h2>
      <p>Sahasra Heart And Mind Care is a renowned Interventional Cardiology Clinic located in Nellore Z.P, Nellore. Our clinic is committed to providing comprehensive and compassionate care to patients suffering from heart and mental health issues. Led by Dr. Sujitha Gurram, an experienced addiction psychiatrist, our team strives to offer personalized treatment plans tailored to each patient's needs. With a focus on excellence and innovation, we aim to deliver top-quality healthcare services in a supportive and caring environment.</p>
    </div>
  );
}

function ContactUs() {
  return (
    <div className="section contact-us">
      <h2 className='head'>Contact Us</h2>
      <div className="contact-details">
        <p><strong>Address:</strong><br />
        Multi-speciality Clinic Nellore Z.P,<br />
        Nellore 16/782, Nagulamitta Road,<br />
        Mogathota, Landmark: Near Vijaymahal Gate,<br />
        Nellore</p>
        
        <p><strong>Phone:</strong><br />
        123-456-7890</p>
        
        <p><strong>Operating Hours:</strong><br />
        Monday to Friday: 10:00 AM - 8:00 PM<br />
        Saturday: 9:00 AM - 8:00 PM<br />
        Saturday Evening: 8:05 PM - 10:00 PM<br />
        Sunday: 11:00 AM - 9:00 PM</p>
      </div>
    </div>
  );
}

function AboutUsContact() {
  return (
    <div className="app">
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default AboutUsContact;
