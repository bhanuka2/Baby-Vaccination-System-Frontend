import React, { useState } from 'react';
import { mockBabies, colors } from '../data';
import { calcAge, progressPct } from '../utils';

export function AdminBabies(): JSX.Element {
    const [q, setQ] = useState<string>("");
    const all = [
        ...mockBabies,
        { id: 3, name: "Noah Chen", dob: "2024-03-10", gender: "Male", bloodGroup: "B+", parentName: "Min Chen", avatar: "👦", appointment: null, weight: [], vaccines: mockBabies[0].vaccines },
        { id: 4, name: "Isla Murphy", dob: "2025-08-01", gender: "Female", bloodGroup: "AB+", parentName: "James Murphy", avatar: "👧", appointment: null, weight: [], vaccines: mockBabies[1].vaccines },
    ].filter(b => b.name.toLowerCase().includes(q.toLowerCase()) || b.parentName.toLowerCase().includes(q.toLowerCase()));
    return (
        <div style={{ paddingBottom: 80 }}>
            <div style={{ fontFamily: "'Nunito',sans-serif", fontWeight: 800, color: colors.navy, fontSize: 20, marginBottom: 4 }}>Baby Registry</div>
            <div style={{ fontSize: 13, color: colors.textLight, marginBottom: 16 }}>{all.length} babies</div>
            <div style={{ background: colors.white, borderRadius: 12, padding: "10px 14px", marginBottom: 16, display: "flex", alignItems: "center", gap: 10, border: `1px solid ${colors.border}` }}>
                <span style={{ color: colors.textLight }}>🔍</span>
                <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search baby or parent..." style={{ border: "none", background: "transparent", outline: "none", flex: 1, fontSize: 14, color: colors.textDark, fontFamily: "'Nunito',sans-serif" }} />
            </div>
            {all.map(b => (
                <div key={b.id} style={{ background: colors.white, borderRadius: 16, padding: 16, marginBottom: 12, border: `1px solid ${colors.border}` }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                        <div style={{ fontSize: 34 }}>{b.avatar}</div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 700, color: colors.navy, fontFamily: "'Nunito',sans-serif" }}>{b.name}</div>
                            <div style={{ fontSize: 12, color: colors.textMid }}>{b.parentName} · Age: {calcAge(b.dob)}</div>
                            <div style={{ fontSize: 12, color: colors.textLight }}>{b.bloodGroup} · {b.gender}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <div style={{ fontWeight: 800, color: colors.mint, fontFamily: "'Nunito',sans-serif", fontSize: 18 }}>{progressPct(b.vaccines)}%</div>
                            <div style={{ fontSize: 11, color: colors.textLight }}>Done</div>
                        </div>
                    </div>
                    <div style={{ background: colors.border + "80", borderRadius: 99, height: 6, overflow: "hidden" }}>
                        <div style={{ width: `${progressPct(b.vaccines)}%`, height: "100%", background: `linear-gradient(90deg,${colors.mint},${colors.sky})`, borderRadius: 99 }} />
                    </div>
                </div>
            ))}
        </div>
    );
}
