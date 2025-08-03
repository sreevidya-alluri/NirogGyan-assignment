import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../data/doctor";
import dayjs from "dayjs";
import BookingForm from "./BookingForm"; 

import { AppointmentContext } from "../context/AppointmentContext";

const DoctorProfile: React.FC = () => {
  const { id } = useParams();
  const doctor = doctors.find((d) => d.id === id);

  const { appointment } = useContext(AppointmentContext);

  if (!doctor) return <div className="container py-4">Doctor not found.</div>;

  return (
    <div className="container py-4 page-wrapper">
      <div className="row mb-4">
        <div className="col-md-3 text-center">
          <img
            src={doctor.profileImage}
            alt={doctor.name}
            className="rounded-circle img-fluid mb-2"
            style={{ width: 140, height: 140, objectFit: "cover" }}
          />
          <h5>{doctor.name}</h5>
          <p className="text-muted">{doctor.specialization}</p>
          <p>
            <span className="badge bg-info">⭐ {doctor.ratings.toFixed(1)}</span>
          </p>
        </div>
        <div className="col-md-9">
          <h4>About</h4>
          <p>{doctor.bio}</p>
          <h5>Available Slots</h5>
          <div className="d-flex flex-wrap gap-2">
            {doctor.availableSlots.map((slot) => (
              <div key={slot} className="border rounded px-3 py-2">
                {dayjs(slot).format("ddd, MMM D h:mm A")}
              </div>
            ))}
            {doctor.availableSlots.length === 0 && <p>No availability.</p>}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-7">
          <BookingForm doctor={doctor} />
        </div>
        <div className="col-md-5">
          {appointment && appointment.doctor.id === doctor.id && (
            <div className="alert alert-success">
              <h6>Last booked:</h6>
              <p>
                {appointment.patientName} on{" "}
                {dayjs(appointment.slot).format("MMMM D, h:mm A")}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
