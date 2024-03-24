import React from 'react';
import './index.css';

const HospitalInfo = () => {
  const hospitalData = {
    name: 'Sahasra Heart And Mind Care',
    address: 'Multi-speciality Clinic Nellore Z.P, Nellore 16/782, Nagulamitta Road, Mogathota, Landmark: Near Vijaymahal Gate, Nellore  ',
    phone: '123-456-7890',
    about: "Sahasra Heart And Mind Care is an Interventional Cardiology Clinic in Nellore Z.P, Nellore. The clinic is visited by addiction psychiatrist like Dr. Sujitha Gurram. The timings of Sahasra Heart And Mind Care are: Mon-Fri: 10:00-20:00,Sat: 09:00-20:00, 20:05-22:00 and Sun: 11:00-21:00. Some of the services provided by the Clinic are: Online Counselling, 2D Echo and Color Doppler, Male Infertility Treatment, Premarital Counseling, and ECG etc. Click on map to find directions to reach Sahasra Heart And Mind Care."
  };

  return (
    <div className="hospital-info">
      <h2>{hospitalData.name}</h2>
      <p><strong>Address:</strong> {hospitalData.address}</p>
      <p><strong>Phone:</strong> {hospitalData.phone}</p>
      <p><strong>About:</strong> {hospitalData.about}</p>
    </div>
  );
};



const VideoPlayer = () => {
  const videoUrl = 'https://www.youtube.com/embed/aPy5qZJoDas';

  return (
    <div className="video-player">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};


const Hospital = () => {
  return (
    <div className="hospital-video-layout">
      <HospitalInfo />
      <VideoPlayer />
    </div>
  );
};

export default Hospital;
