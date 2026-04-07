import { Baby } from './types';

export const colors = {
    mint: "#4ECDC4", sky: "#74B9FF", coral: "#FF7675", lavender: "#A29BFE",
    peach: "#FDCB6E", cream: "#FFF9F0", navy: "#2D3561", softGray: "#F8F9FF",
    white: "#FFFFFF", textDark: "#1A1A2E", textMid: "#4A4A6A", textLight: "#9E9EB8",
    border: "#E8E8F5",
};

export const mockBabies: Baby[] = [
    {
        id: 1, name: "Amara", dob: "2024-01-15", gender: "Female", bloodGroup: "A+",
        parentName: "Sarah & James Wilson", avatar: "👧",
        weight: [{ date: "Jan", kg: 3.2 }, { date: "Mar", kg: 5.1 }, { date: "Jun", kg: 7.3 }, { date: "Sep", kg: 8.8 }],
        vaccines: [
            { name: "Hepatitis B (Birth)", due: "2024-01-15", status: "done", date: "2024-01-15" },
            { name: "BCG", due: "2024-01-15", status: "done", date: "2024-01-15" },
            { name: "OPV (Birth Dose)", due: "2024-01-15", status: "done", date: "2024-01-16" },
            { name: "DTwP-HepB-Hib 1", due: "2024-03-15", status: "done", date: "2024-03-18" },
            { name: "IPV 1", due: "2024-03-15", status: "done", date: "2024-03-18" },
            { name: "DTwP-HepB-Hib 2", due: "2024-04-15", status: "done", date: "2024-04-17" },
            { name: "DTwP-HepB-Hib 3", due: "2024-06-15", status: "due", date: null },
            { name: "IPV 2", due: "2024-06-15", status: "due", date: null },
            { name: "MMR", due: "2025-01-15", status: "upcoming", date: null },
            { name: "Varicella", due: "2025-01-15", status: "upcoming", date: null },
        ],
        appointment: { date: "2026-04-10", slot: "10:00 AM" },
    },
    {
        id: 2, name: "Liam", dob: "2023-08-20", gender: "Male", bloodGroup: "O+",
        parentName: "Sarah & James Wilson", avatar: "👦",
        weight: [{ date: "Aug", kg: 3.5 }, { date: "Oct", kg: 5.5 }, { date: "Feb", kg: 8.1 }, { date: "Aug", kg: 10.2 }],
        vaccines: [
            { name: "Hepatitis B (Birth)", due: "2023-08-20", status: "done", date: "2023-08-20" },
            { name: "BCG", due: "2023-08-20", status: "done", date: "2023-08-20" },
            { name: "DTwP-HepB-Hib 1", due: "2023-10-20", status: "done", date: "2023-10-22" },
            { name: "MMR", due: "2024-08-20", status: "done", date: "2024-08-21" },
            { name: "Varicella", due: "2024-08-20", status: "done", date: "2024-08-21" },
            { name: "Typhoid", due: "2024-08-20", status: "upcoming", date: null },
            { name: "Booster DTwP", due: "2025-08-20", status: "upcoming", date: null },
        ],
        appointment: null,
    },
];

export const mockSlots: string[] = [
    "09:00 AM", "09:15 AM", "09:30 AM", "09:45 AM",
    "10:00 AM", "10:15 AM", "10:30 AM", "10:45 AM",
    "11:00 AM", "11:15 AM", "11:30 AM", "11:45 AM",
    "02:00 PM", "02:15 PM", "02:30 PM", "02:45 PM",
    "03:00 PM", "03:15 PM", "03:30 PM", "03:45 PM",
];
export const bookedSlots: string[] = ["09:00 AM", "09:15 AM", "10:00 AM", "10:15 AM", "02:00 PM"];

export const adminAppointments: { id: number; baby: string; parent: string; time: string; vaccine: string; status: string }[] = [
    { id: 1, baby: "Amara Wilson", parent: "Sarah Wilson", time: "10:00 AM", vaccine: "DTwP-HepB-Hib 3", status: "confirmed" },
    { id: 2, baby: "Noah Chen", parent: "Min Chen", time: "09:30 AM", vaccine: "IPV 1", status: "confirmed" },
    { id: 3, baby: "Isla Murphy", parent: "James Murphy", time: "11:00 AM", vaccine: "BCG", status: "pending" },
    { id: 4, baby: "Ethan Park", parent: "Lisa Park", time: "02:15 PM", vaccine: "MMR", status: "confirmed" },
    { id: 5, baby: "Zoe Kim", parent: "Paul Kim", time: "03:00 PM", vaccine: "Hepatitis B", status: "cancelled" },
];
