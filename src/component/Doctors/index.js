import React from 'react';
import './index.css';

const Doctors = () => {

  const doctors = [
    {
      id: 1,
      name: 'Dr. Nagabhushan. D',
      qualifications: 'MD (General Medicine), DM (Cardiology)',
      specialization: 'Interventional Cardiologist',
      experience: 'Consultant in Apollo Hospital',
      regNo: 'Reg.No. 67034',
      image: "https://th.bing.com/th/id/OIP.bpBgHf-4b3bWsG96-AE5CgHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: 'Dr. Sujitha. Gurram',
      qualifications: 'MBBS, MD (Psychiatry)',
      specialization: 'Neuro Psychiatrist',
      experience: 'Ex. Resident in Narayana Medical College',
      regNo: 'Reg.No. 79562',
      image: "https://th.bing.com/th/id/OIP.zk6ljBq0PJHHSl6kgbrKVAHaHa?rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="doctors-container">
      <h2>Our Doctors</h2>
      <div className="doctor-list">
        {doctors.map((doctor) => (
          <div className="doctor" key={doctor.id}>
            <img src={doctor.image} alt={doctor.name} className="doctor-img" />
            <div className="doctor-details">
              <h3>{doctor.name}</h3>
              <p>{doctor.qualifications}</p>
              <p>{doctor.specialization}</p>
              <p>{doctor.experience}</p>
              <p>{doctor.regNo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
