import React, { useState, useEffect } from 'react';
import { UserDashboard } from './components/UserDashboard';
import { BookingPage } from './components/BookingPage';
import { ProfilePage } from './components/ProfilePage';
import { AdminDashboard } from './components/AdminDashboard';
import { AdminBabies } from './components/AdminBabies';
import { colors } from './data';

export default function App(): JSX.Element {
    const [role, setRole] = useState<string | null>(null);
    const [page, setPage] = useState<string>("home");
    const [adminPage, setAdminPage] = useState<string>("dashboard");

    useEffect(() => {
        const l = document.createElement("link");
        l.rel = "stylesheet";
        l.href = "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap";
        document.head.appendChild(l);
    }, []);

    if (!role) return (
        <div className="app-wrapper" style={{ background: `linear-gradient(160deg,#E8F4FF 0%,#F0FFF9 50%,#FFF0F8 100%)`, alignItems: "center" }}>
            <div className="auth-card" style={{ padding: 30 }}>
                <div style={{ textAlign: "center", marginBottom: 36 }}>
                    <div style={{ fontSize: 60, marginBottom: 12 }}>🍼</div>
                    <div style={{ fontWeight: 900, fontSize: 30, color: colors.navy }}>VaxBaby</div>
                    <div style={{ color: colors.textMid, fontSize: 14, marginTop: 8, lineHeight: 1.6 }}>Smart vaccination tracker &<br />AI growth monitor for your little ones</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <button onClick={() => setRole("user")} style={{ padding: 18, borderRadius: 18, background: `linear-gradient(135deg,${colors.mint},${colors.sky})`, border: "none", color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito',sans-serif", boxShadow: `0 8px 24px ${colors.mint}44` }}>
                        👩‍👧 Parent / User Login
                    </button>
                    <button onClick={() => setRole("admin")} style={{ padding: 18, borderRadius: 18, background: `linear-gradient(135deg,${colors.navy},#1a2456)`, border: "none", color: "#fff", fontSize: 16, fontWeight: 800, cursor: "pointer", fontFamily: "'Nunito',sans-serif", boxShadow: `0 8px 24px ${colors.navy}44` }}>
                        🏥 Admin / Clinic Login
                    </button>
                </div>
                <div style={{ textAlign: "center", marginTop: 20, fontSize: 12, color: colors.textLight }}>Tap either button to explore the demo</div>
            </div>
        </div>
    );

    const isAdmin = role === "admin";
    const navItems = isAdmin
        ? [{ id: "dashboard", icon: "📊", label: "Dashboard" }, { id: "babies", icon: "👶", label: "Babies" }]
        : [{ id: "home", icon: "🏠", label: "Home" }, { id: "book", icon: "📅", label: "Book Slot" }, { id: "profile", icon: "👤", label: "Profile" }];
    const activePage = isAdmin ? adminPage : page;
    const setActivePage = isAdmin ? setAdminPage : setPage;

    return (
        <div className="app-wrapper">
            <div className="app-container">
                {/* Desktop Sidebar (matches mobile bottom nav structure but styled differently) */}
                <div className="app-nav desktop-sidebar">
                    <div className="desktop-only" style={{ padding: "0 24px 24px", display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ fontSize: 28 }}>🍼</div>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: 20, color: colors.navy }}>VaxBaby</div>
                            <div style={{ fontSize: 12, color: colors.textLight }}>{isAdmin ? "Admin Portal" : "Parent Portal"}</div>
                        </div>
                    </div>
                    {navItems.map(item => {
                        const active = activePage === item.id;
                        return (
                            <button key={item.id} className={`nav-item ${active ? 'active' : ''}`} onClick={() => setActivePage(item.id)} style={{
                                flex: 1, padding: "12px 0 10px", border: "none", background: "transparent", cursor: "pointer",
                                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
                                borderTop: `2.5px solid ${active ? colors.mint : "transparent"}`, transition: "all .2s"
                            }}>
                                <span className="nav-icon" style={{ fontSize: 20 }}>{item.icon}</span>
                                <span className="nav-text" style={{ fontSize: 11, fontWeight: active ? 800 : 600, color: active ? colors.mint : colors.textLight, fontFamily: "'Nunito',sans-serif" }}>{item.label}</span>
                            </button>
                        );
                    })}
                    <div className="desktop-only" style={{ marginTop: "auto", width: "100%", padding: "20px 24px" }}>
                        <button onClick={() => { setRole(null); setPage("home"); setAdminPage("dashboard"); }} style={{ width: "100%", background: colors.softGray, border: "none", borderRadius: 12, padding: "12px", fontSize: 13, color: colors.textMid, cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 700 }}>Logout</button>
                    </div>
                </div>

                {/* Mobile Header */}
                <div className="app-header">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ fontSize: 22 }}>🍼</div>
                        <div>
                            <div style={{ fontWeight: 900, fontSize: 17, color: colors.navy }}>VaxBaby</div>
                            <div style={{ fontSize: 11, color: colors.textLight }}>{isAdmin ? "Admin Portal" : "Parent Portal"}</div>
                        </div>
                    </div>
                    <button onClick={() => { setRole(null); setPage("home"); setAdminPage("dashboard"); }} style={{ background: colors.softGray, border: "none", borderRadius: 10, padding: "6px 14px", fontSize: 12, color: colors.textMid, cursor: "pointer", fontFamily: "'Nunito',sans-serif", fontWeight: 600 }}>Logout</button>
                </div>

                {/* Content */}
                <div className="app-content">
                    {!isAdmin && page === "home" && <UserDashboard onNav={setPage} />}
                    {!isAdmin && page === "book" && <BookingPage onNav={setPage} />}
                    {!isAdmin && page === "profile" && <ProfilePage />}
                    {isAdmin && adminPage === "dashboard" && <AdminDashboard />}
                    {isAdmin && adminPage === "babies" && <AdminBabies />}
                </div>
            </div>
        </div>
    );
}
