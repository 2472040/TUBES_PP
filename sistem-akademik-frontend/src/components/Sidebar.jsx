import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ROLE_MENUS } from '../utils/menuConfig';

const Sidebar = ({ isOpen }) => {
    const { user, logout } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    // Ambil menu sesuai role (default kosong jika belum login)
    const menus = (user && user.role && ROLE_MENUS[user.role]) ? ROLE_MENUS[user.role] : [];

    const handleLogout = () => {
        logout();       // 1. Hapus data user dari memori
        navigate('/');  // 2. Pindah ke halaman Login
    };

    return (
        <div className={`sidebar-wrapper ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>

            {/* --- 1. HEADER SIDEBAR (LOGO) --- */}
            <div className="ps-2 mb-4 mt-2 d-flex align-items-center" style={{height: '40px', flexShrink: 0}}>
                <i className="bi bi-gemini fs-3 text-primary me-2"></i>
                {isOpen && (
                    <span className="fs-5 fw-bold" style={{color: '#444746', fontFamily: 'sans-serif'}}>
                        SIAKAD <span className="text-primary">Studio</span>
                    </span>
                )}
            </div>

            {/* --- 2. TOMBOL BUAT BARU --- */}
            {isOpen && (
                <button className="btn-create-new w-100 d-flex align-items-center justify-content-center gap-2 flex-shrink-0">
                    <i className="bi bi-plus-lg fs-5"></i>
                    <span>Buat Pengajuan</span>
                </button>
            )}

            {/* --- 3. DAFTAR MENU (Scrollable) --- */}
            <div className="d-flex flex-column flex-grow-1 overflow-auto" style={{ scrollbarWidth: 'none' }}>
                {menus.map((menu, index) => (
                    <Link
                        key={index}
                        to={menu.path}
                        className={`nav-link-google ${location.pathname === menu.path ? 'active' : ''}`}
                        title={!isOpen ? menu.label : ''}
                    >
                        <i className={`bi ${menu.icon}`}></i>
                        {isOpen && <span>{menu.label}</span>}
                    </Link>
                ))}
            </div>

            {/* --- 4. TOMBOL KELUAR (Selalu di Bawah) --- */}
            <div className="pt-3 mt-2 border-top">
                <button
                    onClick={handleLogout}
                    className="nav-link-google btn-logout-google w-100 border-0 bg-transparent"
                    title={!isOpen ? "Keluar" : ''}
                >
                    <i className="bi bi-box-arrow-right"></i>
                    {isOpen && <span>Keluar</span>}
                </button>
            </div>

        </div>
    );
};

export default Sidebar;