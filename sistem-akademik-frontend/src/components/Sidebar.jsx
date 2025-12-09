import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ROLE_MENUS } from '../utils/menuConfig.jsx';

const Sidebar = ({ isOpen }) => {
    const { user } = useAuth();
    const location = useLocation();

    // Ambil menu berdasarkan role user, default ke array kosong jika belum login
    const menus = user ? ROLE_MENUS[user.role] : [];

    return (
        <div className={`sidebar-wrapper ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <div className="d-flex align-items-center justify-content-center border-bottom" style={{ height: '60px' }}>
                <i className="bi bi-shield-lock-fill fs-3 text-primary"></i>
                {isOpen && <span className="ms-2 fw-bold text-dark">SIAKAD<span className="text-primary">PRO</span></span>}
            </div>

            <div className="py-3">
                <small className="text-muted px-4 fw-bold mb-2 d-block small text-uppercase">
                    {isOpen ? `Menu ${user?.role}` : '...'}
                </small>

                {menus.map((menu, index) => (
                    <Link
                        key={index}
                        to={menu.path}
                        className={`nav-link-custom ${location.pathname === menu.path ? 'active' : ''}`}
                    >
                        <i className={`bi ${menu.icon}`}></i>
                        {isOpen && <span className="ms-3">{menu.label}</span>}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;