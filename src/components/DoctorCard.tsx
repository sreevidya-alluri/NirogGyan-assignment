import React from "react";
import type { Doctor } from "../types/doctor";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

interface Props {
  doctor: Doctor;
}

const DoctorCard: React.FC<Props> = ({ doctor }) => {
  const nextSlot = doctor.availableSlots[0]
    ? dayjs(doctor.availableSlots[0]).format("MMM D, h:mm A")
    : "No slots";

  return (
    <div className="card shadow-sm mb-3">
      <div className="row g-0">
        <div className="col-md-3 d-flex align-items-center justify-content-center p-2">
          <img
            src={doctor.profileImage}
            alt={doctor.name}
            className="rounded-circle img-fluid"
            style={{ width: 80, height: 80, objectFit: "cover" }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body py-2">
            <h5 className="card-title mb-1">{doctor.name}</h5>
            <p className="mb-1 small text-muted">{doctor.specialization}</p>
            <p className="mb-1">
              <strong>Next available:</strong> {nextSlot}
            </p>
            <p className="mb-0">
             {doctor.availableSlots.length > 0 ? (
  <span className="badge bg-success">Available</span>
) : (
  <span className="badge bg-secondary">Fully booked</span>
)}

              <span className="text-warning small">
                ⭐ {doctor.ratings.toFixed(1)}
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <Link to={`/doctor/${doctor.id}`} className="btn btn-primary">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
