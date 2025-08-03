import React, { useState, useContext } from "react";
import dayjs from "dayjs";
import type { Doctor } from "../types/doctor";
import { AppointmentContext } from "../context/AppointmentContext";

interface Props {
  doctor: Doctor;
}

const formatSlot = (iso: string) => {
  return dayjs(iso).format("dddd, MMM D h:mm A");
};

const BookingForm: React.FC<Props> = ({ doctor }) => {
  const { setAppointment } = useContext(AppointmentContext);
  const [patientName, setPatientName] = useState("");
  const [patientEmail, setPatientEmail] = useState("");
  const [slot, setSlot] = useState(doctor.availableSlots[0] || "");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const validate = () => {
    const errs: string[] = [];

    if (!patientName.trim()) errs.push("Patient name is required.");
    if (
      !patientEmail.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(patientEmail.trim())
    )
      errs.push("Valid email is required.");

    if (doctor.availableSlots.length === 0) {
      errs.push("Doctor is fully booked. Cannot make an appointment.");
    } else if (!slot) {
      errs.push("Please select a slot.");
    }

    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (v.length) {
      setErrors(v);
      return;
    }
    setErrors([]);
    setAppointment({
      doctor,
      patientName: patientName.trim(),
      patientEmail: patientEmail.trim(),
      slot,
      bookedAt: new Date().toISOString()
    });
    setSubmitted(true);
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Book Appointment</h5>

        {doctor.availableSlots.length === 0 && (
          <div className="alert alert-warning">
            This doctor is currently <strong>fully booked</strong>. Please
            choose another provider or try later.
          </div>
        )}

        {submitted ? (
          <div className="alert alert-success">
            <h6 className="mb-1">Confirmed!</h6>
            <p className="mb-1">
              Appointment with <strong>{doctor.name}</strong> on{" "}
              <strong>{formatSlot(slot)}</strong>
            </p>
            <p className="mb-0">
              Confirmation will be sent to <strong>{patientEmail}</strong>
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {errors.length > 0 && (
              <div className="alert alert-danger py-2">
                <ul className="mb-0">
                  {errors.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-3">
              <label className="form-label">Patient Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Jane Doe"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                disabled={doctor.availableSlots.length === 0}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Patient Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="jane@example.com"
                value={patientEmail}
                onChange={(e) => setPatientEmail(e.target.value)}
                disabled={doctor.availableSlots.length === 0}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Select Slot</label>
              <select
                className="form-select"
                value={slot}
                onChange={(e) => setSlot(e.target.value)}
                disabled={doctor.availableSlots.length === 0}
              >
                {doctor.availableSlots.map((s) => (
                  <option key={s} value={s}>
                    {formatSlot(s)}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={doctor.availableSlots.length === 0}
            >
              Confirm
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingForm;
