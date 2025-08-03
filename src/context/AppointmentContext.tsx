import React, { createContext, useState, type ReactNode } from "react";
import type { Doctor } from "../types/doctor";

export interface Appointment {
  doctor: Doctor;
  patientName: string;
  patientEmail: string;
  slot: string; // ISO
  bookedAt: string;
}

interface ContextValue {
  appointment?: Appointment;
  setAppointment: (a: Appointment) => void;
}

const defaultVal: ContextValue = {
  appointment: undefined,
  setAppointment: () => {}
};

// eslint-disable-next-line react-refresh/only-export-components
export const AppointmentContext = createContext<ContextValue>(defaultVal);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [appointment, setAppointment] = useState<Appointment | undefined>(
    undefined
  );
  return (
    <AppointmentContext.Provider value={{ appointment, setAppointment }}>
      {children}
    </AppointmentContext.Provider>
  );
};
