import React from 'react';
import { Baby } from '../types';
import { colors } from '../data';

export function GrowthChart({ baby }: { baby: Baby }): JSX.Element | null {
    const W = 260, H = 90;
    const data = Array.isArray(baby.weight) ? baby.weight : [];
    if (data.length === 0) return null;
    const kgValues = data.map(d => d.kg);
    const maxW = Math.max(...kgValues) + 1;
    const minW = Math.min(...kgValues) - 0.5;
    const pts = data.map((d, i) => {
        const x = data.length === 1 ? W / 2 : (i / (data.length - 1)) * (W - 24) + 12;
        const y = H - ((d.kg - minW) / (maxW - minW || 1)) * (H - 18) - 5;
        return { x, y, d };
    });
    const last = data[data.length - 1];
    const prev = data[data.length - 2] ?? last;
    const gainNum = parseFloat((last.kg - prev.kg).toFixed(1));
    const insight = gainNum >= 0.8 ? "🌟 Excellent growth — on track!" : gainNum >= 0.4 ? "✅ Healthy growth. Keep it up!" : "⚠️ Slightly slow. Consult pediatrician.";
    return (
        <div style={{ background: colors.white, borderRadius: 16, padding: 18, border: `1px solid ${colors.border}` }}>
            <div style={{ fontWeight: 700, color: colors.navy, fontSize: 14, fontFamily: "'Nunito',sans-serif", marginBottom: 10 }}>Weight Growth (kg)</div>
            <svg width="100%" viewBox={`0 0 ${W} ${H}`}>
                <defs>
                    <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={colors.mint} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={colors.mint} stopOpacity="0" />
                    </linearGradient>
                </defs>
                <polygon fill="url(#lg)" points={`${pts[0].x},${H} ${pts.map(p => `${p.x},${p.y}`).join(" ")} ${pts[pts.length - 1].x},${H}`} />
                <polyline fill="none" stroke={colors.mint} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" points={pts.map(p => `${p.x},${p.y}`).join(" ")} />
                {pts.map((p, i) => (
                    <g key={i}>
                        <circle cx={p.x} cy={p.y} r="4.5" fill={colors.white} stroke={colors.mint} strokeWidth="2.5" />
                        <text x={p.x} y={H - 1} textAnchor="middle" fontSize="8.5" fill={colors.textLight}>{p.d.date}</text>
                        <text x={p.x} y={p.y - 8} textAnchor="middle" fontSize="8" fill={colors.mint} fontWeight="700">{p.d.kg}</text>
                    </g>
                ))}
            </svg>
            <div style={{ marginTop: 12, background: "#F0FFF9", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: colors.textMid, fontFamily: "'Nunito',sans-serif" }}>
                <span style={{ fontWeight: 700, color: colors.mint }}>AI Monitor: </span>{insight}
            </div>
        </div>
    );
}
