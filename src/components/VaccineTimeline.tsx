import React from 'react';
import { Vaccine } from '../types';
import { colors } from '../data';

export function VaccineTimeline({ vaccines }: { vaccines: Vaccine[] }): JSX.Element {
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxHeight: 260, overflowY: "auto", paddingRight: 2 }}>
            {vaccines.map((v, i) => {
                const col = v.status === "done" ? colors.mint : v.status === "due" ? colors.coral : colors.lavender;
                const icon = v.status === "done" ? "✓" : v.status === "due" ? "!" : "○";
                return (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                        <div style={{ width: 26, height: 26, borderRadius: "50%", background: col + "22", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: col, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{icon}</div>
                        <div>
                            <div style={{ fontSize: 13, fontWeight: 600, color: colors.textDark, fontFamily: "'Nunito',sans-serif" }}>{v.name}</div>
                            <div style={{ fontSize: 11, color: colors.textLight }}>
                                {v.status === "done" ? `Given: ${v.date}` : `Due: ${v.due}`}
                                {" · "}<span style={{ color: col, fontWeight: 600, textTransform: "capitalize" }}>{v.status}</span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
