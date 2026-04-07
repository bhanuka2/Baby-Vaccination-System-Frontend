import React from 'react';
import { adminAppointments, colors } from '../data';

export function AdminDashboard(): JSX.Element {
    const stats = [
        { label: "Today's Appts", value: adminAppointments.length, icon: "📅", color: colors.sky },
        { label: "Confirmed", value: adminAppointments.filter(a => a.status === "confirmed").length, icon: "✅", color: colors.mint },
        { label: "Pending", value: adminAppointments.filter(a => a.status === "pending").length, icon: "⏳", color: colors.peach },
        { label: "Total Babies", value: 42, icon: "👶", color: colors.lavender },
    ];
    return (
        <div style={{ paddingBottom: 80 }}>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, color: colors.navy, fontSize: 20, marginBottom: 4 }}>Admin Dashboard</div>
            <div style={{ fontSize: 13, color: colors.textLight, marginBottom: 20 }}>April 3, 2026 · VaxBaby Clinic</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                {stats.map(s => (
                    <div key={s.label} style={{ background: colors.white, borderRadius: 16, padding: 16, border: `1px solid ${colors.border}` }}>
                        <div style={{ fontSize: 26, marginBottom: 8 }}>{s.icon}</div>
                        <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 26, color: s.color }}>{s.value}</div>
                        <div style={{ fontSize: 12, color: colors.textMid, marginTop: 2 }}>{s.label}</div>
                    </div>
                ))}
            </div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: colors.navy, marginBottom: 14, fontSize: 16 }}>Today's Schedule</div>
            {adminAppointments.map(apt => {
                const col = apt.status === "confirmed" ? colors.mint : apt.status === "pending" ? colors.peach : colors.coral;
                return (
                    <div key={apt.id} style={{ background: colors.white, borderRadius: 14, padding: "14px 16px", marginBottom: 10, border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 48, height: 48, borderRadius: 12, background: col + "22", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: col, fontFamily: "'Nunito',sans-serif", flexShrink: 0, textAlign: "center", lineHeight: 1.2 }}>
                            {apt.time}
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontWeight: 700, color: colors.navy, fontSize: 13, fontFamily: "'Nunito',sans-serif" }}>{apt.baby}</div>
                            <div style={{ fontSize: 11, color: colors.textMid }}>{apt.parent} · {apt.vaccine}</div>
                        </div>
                        <div style={{ background: col + "22", color: col, fontWeight: 700, padding: "4px 10px", borderRadius: 99, fontSize: 11, textTransform: "capitalize", flexShrink: 0 }}>{apt.status}</div>
                    </div>
                );
            })}
        </div>
    );
}
