export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  profileImage: string;
  bio: string;
  ratings: number;
  availableSlots: string[]; // ISO strings
}
