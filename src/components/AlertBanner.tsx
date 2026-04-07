import React from 'react';
import { Vaccine } from '../types';
import { colors } from '../data';

export function AlertBanner({ vaccines }: { vaccines: Vaccine[] }): JSX.Element | null {
    const due = (vaccines || []).filter(v => v.status === "due");
    if (!due.length) return null;
    return (
        <div style={{ background: "linear-gradient(135deg,#FFE8E8,#FFF0E8)", border: `1.5px solid ${colors.coral}44`, borderRadius: 14, padding: "14px 18px", marginBottom: 18, display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ fontSize: 22 }}>🔔</div>
            <div>
                <div style={{ fontWeight: 700, color: colors.coral, fontFamily: "'Nunito',sans-serif", fontSize: 14 }}>{due.length} Vaccine{due.length > 1 ? "s" : ""} Overdue!</div>
                <div style={{ fontSize: 12, color: colors.textMid }}>{due.map(v => v.name).join(", ")}</div>
            </div>
        </div>
    );
}
