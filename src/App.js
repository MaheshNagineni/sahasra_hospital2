import React from 'react';
import Navbar from "./component/Navbar";
import Carousel from "./component/Carousel";
import HospitalAndDoctors from "./component/HospitalAndDoctors";
import Gallery from './component/Gallery';
import BookAppointment from './component/BookAppointment';
import AboutUsContact from './component/AboutandContact';



const App = () => {
  return (
    <div className='size'>
      <Navbar />
      <Carousel />
      <HospitalAndDoctors />
      <BookAppointment />
      <Gallery />
      <AboutUsContact />
    </div>
  );
};

export default App;
