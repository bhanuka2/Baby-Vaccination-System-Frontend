import React, { useState } from 'react';
import { mockBabies, colors } from '../data';
import { calcAge, progressPct } from '../utils';

export function ProfilePage(): JSX.Element {
    const [notifs, setNotifs] = useState<{ [k: string]: boolean }>({ vaccine: true, appt: true, growth: false });
    return (
        <div style={{ paddingBottom: 80 }}>
            <div style={{ background: `linear-gradient(135deg,${colors.lavender},${colors.sky})`, borderRadius: 20, padding: 24, marginBottom: 20, textAlign: "center", color: "#fff" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,.25)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, margin: "0 auto 12px" }}>👩</div>
                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 20 }}>Sarah Wilson</div>
                <div style={{ opacity: .8, fontSize: 13, marginTop: 4 }}>sarah.wilson@email.com</div>
                <div style={{ opacity: .65, fontSize: 12, marginTop: 2 }}>+94 71 234 5678</div>
            </div>

            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: colors.navy, marginBottom: 12, fontSize: 16 }}>My Babies</div>
            {mockBabies.map(b => (
                <div key={b.id} style={{ background: colors.white, borderRadius: 16, padding: 16, marginBottom: 12, border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ fontSize: 36 }}>{b.avatar}</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: colors.navy, fontFamily: "'Nunito',sans-serif" }}>{b.name}</div>
                        <div style={{ fontSize: 12, color: colors.textMid }}>{b.gender} · DOB: {b.dob}</div>
                        <div style={{ fontSize: 12, color: colors.textLight }}>Blood: {b.bloodGroup} · Age: {calcAge(b.dob)}</div>
                    </div>
                    <div style={{ background: colors.mint + "22", color: colors.mint, fontWeight: 700, padding: "4px 12px", borderRadius: 99, fontSize: 12 }}>{progressPct(b.vaccines)}%</div>
                </div>
            ))}

            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: colors.navy, marginBottom: 12, marginTop: 8, fontSize: 16 }}>Notifications</div>
            {[
                { key: "vaccine", label: "Vaccine Due Reminders", icon: "💉" },
                { key: "appt", label: "Appointment Alerts", icon: "📅" },
                { key: "growth", label: "AI Growth Updates", icon: "📈" },
            ].map(item => (
                <div key={item.key} style={{ background: colors.white, borderRadius: 14, padding: "14px 16px", marginBottom: 10, border: `1px solid ${colors.border}`, display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ fontSize: 20 }}>{item.icon}</span>
                    <span style={{ flex: 1, fontFamily: "'Nunito',sans-serif", fontSize: 14, color: colors.textDark, fontWeight: 600 }}>{item.label}</span>
                    <div onClick={() => setNotifs(p => ({ ...p, [item.key]: !p[item.key] }))} style={{ width: 44, height: 24, borderRadius: 99, background: notifs[item.key] ? colors.mint : colors.border, position: "relative", cursor: "pointer", transition: "background .2s" }}>
                        <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", position: "absolute", top: 3, left: notifs[item.key] ? 23 : 3, transition: "left .2s", boxShadow: "0 1px 4px rgba(0,0,0,.2)" }} />
                    </div>
                </div>
            ))}
        </div>
    );
}
