import React, { useState } from 'react';
import { mockBabies, mockSlots, bookedSlots, colors } from '../data';

export function BookingPage({ onNav }: { onNav: (p: string) => void }): JSX.Element {
    const [selectedDate, setSelectedDate] = useState<string>("2026-04-10");
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [selectedBaby, setSelectedBaby] = useState<number>(0);
    const [booked, setBooked] = useState<boolean>(false);

    if (booked) return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 420, textAlign: "center" }}>
            <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, fontSize: 24, color: colors.navy, marginBottom: 8 }}>Booked!</div>
            <div style={{ color: colors.textMid, fontSize: 14, marginBottom: 6 }}>{selectedDate}</div>
            <div style={{ background: colors.mint + "22", color: colors.mint, fontWeight: 700, padding: "8px 22px", borderRadius: 99, fontSize: 14, marginBottom: 24 }}>{selectedSlot}</div>
            <div style={{ fontSize: 13, color: colors.textMid, marginBottom: 30, maxWidth: 260 }}>A reminder will be sent 24 hours before your appointment. 🔔</div>
            <button onClick={() => onNav("home")} style={{ background: colors.navy, color: "#fff", border: "none", borderRadius: 14, padding: "14px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito',sans-serif" }}>Back to Home</button>
        </div>
    );

    return (
        <div style={{ paddingBottom: 80 }}>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, color: colors.navy, fontSize: 20, marginBottom: 4 }}>Book a Slot</div>
            <div style={{ fontSize: 13, color: colors.textMid, marginBottom: 20 }}>Each session is 15 minutes ⏱</div>

            <div style={{ marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: colors.navy, fontFamily: "'Nunito',sans-serif", marginBottom: 10, fontSize: 14 }}>Select Baby</div>
                <div className="baby-selector">
                    {mockBabies.map((b, i) => (
                        <button key={b.id} onClick={() => setSelectedBaby(i)} style={{
                            flex: 1, padding: 14, borderRadius: 14, border: "2px solid",
                            borderColor: selectedBaby === i ? colors.mint : colors.border,
                            background: selectedBaby === i ? colors.mint + "15" : colors.white,
                            cursor: "pointer", textAlign: "center"
                        }}>
                            <div style={{ fontSize: 28, marginBottom: 4 }}>{b.avatar}</div>
                            <div style={{ fontSize: 13, fontWeight: 700, color: colors.navy, fontFamily: "'Nunito',sans-serif" }}>{b.name}</div>
                        </button>
                    ))}
                </div>
            </div>

            <div style={{ marginBottom: 20 }}>
                <div style={{ fontWeight: 700, color: colors.navy, fontFamily: "'Nunito',sans-serif", marginBottom: 10, fontSize: 14 }}>Select Date</div>
                <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} style={{
                    width: "100%", padding: "12px 16px", borderRadius: 12, border: `1.5px solid ${colors.border}`,
                    fontSize: 14, color: colors.textDark, background: colors.white, boxSizing: "border-box", fontFamily: "'Nunito',sans-serif", outline: "none"
                }} />
            </div>

            <div style={{ marginBottom: 24 }}>
                <div style={{ fontWeight: 700, color: colors.navy, fontFamily: "'Nunito',sans-serif", marginBottom: 10, fontSize: 14 }}>Available Time Slots</div>
                <div className="time-slots">
                    {mockSlots.map(slot => {
                        const isBooked = bookedSlots.includes(slot), isSel = selectedSlot === slot;
                        return (
                            <button key={slot} onClick={() => !isBooked && setSelectedSlot(slot)} style={{
                                padding: "10px 4px", borderRadius: 12, border: "1.5px solid",
                                borderColor: isBooked ? colors.border : isSel ? colors.mint : colors.border,
                                background: isBooked ? "#F5F5F8" : isSel ? colors.mint : colors.white,
                                color: isBooked ? colors.textLight : isSel ? "#fff" : colors.textDark,
                                fontSize: 12, fontWeight: 600, cursor: isBooked ? "not-allowed" : "pointer",
                                fontFamily: "'Nunito',sans-serif", transition: "all .2s"
                            }}>
                                {slot}
                                {isBooked && <div style={{ fontSize: 9, opacity: .6, marginTop: 2 }}>Taken</div>}
                            </button>
                        );
                    })}
                </div>
            </div>

            <button onClick={() => setBooked(true)} disabled={!selectedSlot} style={{
                width: "100%", padding: 16, borderRadius: 16, border: "none",
                background: selectedSlot ? `linear-gradient(135deg,${colors.mint},${colors.sky})` : colors.border,
                color: selectedSlot ? "#fff" : colors.textLight,
                fontSize: 15, fontWeight: 800, cursor: selectedSlot ? "pointer" : "not-allowed",
                fontFamily: "'Nunito',sans-serif", transition: "all .2s"
            }}>
                {selectedSlot ? `Confirm · ${selectedSlot}` : "Select a time slot"}
            </button>
        </div>
    );
}
