import React, { useState } from 'react';
import { mockBabies, colors } from '../data';
import { calcAge, progressPct } from '../utils';
import { AlertBanner } from './AlertBanner';
import { GrowthChart } from './GrowthChart';
import { VaccineTimeline } from './VaccineTimeline';

export function UserDashboard({ onNav }: { onNav: (p: string) => void }): JSX.Element {
    const [activeBaby, setActiveBaby] = useState(0);
    const baby = mockBabies[activeBaby];
    const pct = progressPct(baby.vaccines);
    return (
        <div>
            <div className="baby-selector">
                {mockBabies.map((b, i) => (
                    <button key={b.id} onClick={() => setActiveBaby(i)} style={{
                        flex: 1, padding: "12px 14px", borderRadius: 16, border: "2px solid",
                        borderColor: activeBaby === i ? colors.mint : colors.border,
                        background: activeBaby === i ? colors.mint + "18" : colors.white,
                        cursor: "pointer", transition: "all .2s", textAlign: "left"
                    }}>
                        <div style={{ fontSize: 26, marginBottom: 4 }}>{b.avatar}</div>
                        <div style={{ fontWeight: 700, color: colors.navy, fontSize: 13, fontFamily: "'Nunito',sans-serif" }}>{b.name}</div>
                        <div style={{ fontSize: 11, color: colors.textLight }}>Age: {calcAge(b.dob)}</div>
                    </button>
                ))}
            </div>

            <AlertBanner vaccines={baby.vaccines} />

            <div className="desktop-row">
                <div className="desktop-col">
                    {/* Hero card */}
                    <div style={{ background: `linear-gradient(135deg,${colors.navy} 0%,#1a2456 100%)`, borderRadius: 20, padding: 22, marginBottom: 14, color: colors.white }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                            <div>
                                <div style={{ fontSize: 40, marginBottom: 4 }}>{baby.avatar}</div>
                                <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 22 }}>{baby.name}</div>
                                <div style={{ opacity: .65, fontSize: 13, marginTop: 2 }}>{baby.parentName}</div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div style={{ fontSize: 11, opacity: .55, marginBottom: 2 }}>Age</div>
                                <div style={{ fontWeight: 700, fontSize: 18 }}>{calcAge(baby.dob)}</div>
                                <div style={{ fontSize: 11, opacity: .55, marginTop: 8, marginBottom: 2 }}>Blood</div>
                                <div style={{ fontWeight: 700 }}>{baby.bloodGroup}</div>
                            </div>
                        </div>
                        <div style={{ marginTop: 18 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                <span style={{ fontSize: 12, opacity: .75 }}>Vaccination Progress</span>
                                <span style={{ fontSize: 13, fontWeight: 700 }}>{pct}%</span>
                            </div>
                            <div style={{ background: "rgba(255,255,255,.2)", borderRadius: 99, height: 8, overflow: "hidden" }}>
                                <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#4ECDC4,#74B9FF)", borderRadius: 99 }} />
                            </div>
                        </div>
                    </div>

                    {/* Appointment */}
                    {baby.appointment ? (
                        <div style={{ background: "linear-gradient(135deg,#F0FFF9,#E8F4FF)", borderRadius: 16, padding: 16, marginBottom: 14, border: `1.5px solid ${colors.mint}44`, display: "flex", alignItems: "center", gap: 14 }}>
                            <div style={{ width: 46, height: 46, borderRadius: 14, background: colors.mint + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>📅</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, color: colors.navy, fontFamily: "'Nunito',sans-serif", fontSize: 14 }}>Upcoming Appointment</div>
                                <div style={{ fontSize: 12, color: colors.textMid, marginTop: 2 }}>{baby.appointment.date} · {baby.appointment.slot}</div>
                            </div>
                        </div>
                    ) : (
                        <div style={{ background: "#FFF8F0", borderRadius: 16, padding: 16, marginBottom: 14, border: `1.5px solid ${colors.peach}66`, display: "flex", alignItems: "center", gap: 14 }}>
                            <div style={{ fontSize: 24 }}>⏰</div>
                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 700, color: colors.navy, fontSize: 14, fontFamily: "'Nunito',sans-serif" }}>No Appointment Booked</div>
                                <div style={{ fontSize: 12, color: colors.textMid }}>Book a vaccination slot today</div>
                            </div>
                            <button onClick={() => onNav("book")} style={{ background: colors.peach, color: colors.navy, borderRadius: 10, padding: "6px 14px", fontSize: 12, fontWeight: 700, border: "none", cursor: "pointer", fontFamily: "'Nunito',sans-serif" }}>Book Now</button>
                        </div>
                    )}
                </div>

                <div className="desktop-col">
                    {/* Growth */}
                    <div style={{ marginBottom: 16 }}>
                        <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: colors.navy, marginBottom: 12, fontSize: 16 }}>📈 AI Growth Monitor</div>
                        <GrowthChart baby={baby} />
                    </div>

                    {/* Vaccines */}
                    <div style={{ background: colors.white, borderRadius: 16, padding: 20, border: `1px solid ${colors.border}` }}>
                        <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 700, color: colors.navy, marginBottom: 14, fontSize: 16 }}>💉 Vaccine Schedule</div>
                        <VaccineTimeline vaccines={baby.vaccines} />
                    </div>
                </div>
            </div>
        </div>
    );
}
