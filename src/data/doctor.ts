import type { Doctor } from "../types/doctor"
import dayjs from "dayjs";

const makeSlot = (offsetHours: number) =>
  dayjs().add(offsetHours, "hour").startOf("hour").toISOString();

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. Ananya Singh",
    specialization: "Cardiologist",
    profileImage: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "10+ years experience in heart health and preventive cardiology.",
    ratings: 4.7,
    availableSlots: [makeSlot(2), makeSlot(4), makeSlot(6)]
  },
  {
    id: "d2",
    name: "Dr. Rohit Sharma",
    specialization: "Dermatologist",
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Skin specialist with focus on eczema and acne treatment.",
    ratings: 4.5,
    availableSlots: []
  },
  {
    id: "d3",
    name: "Dr. Meera Patel",
    specialization: "Pediatrician",
    profileImage: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Child health expert with gentle approach to care.",
    ratings: 4.9,
    availableSlots: [makeSlot(2), makeSlot(7), makeSlot(10)]
  }
];
