export type WeightDatum = { date: string; kg: number };
export type Vaccine = { name: string; due: string; status: string; date: string | null };
export type Appointment = { date: string; slot: string } | null;
export type Baby = {
  id: number;
  name: string;
  dob: string;
  gender: string;
  bloodGroup: string;
  parentName: string;
  avatar: string;
  weight: WeightDatum[];
  vaccines: Vaccine[];
  appointment: Appointment;
};
