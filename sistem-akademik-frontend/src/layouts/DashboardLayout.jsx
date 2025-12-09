import React, { useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header'; // Gunakan header yang sudah Anda buat sebelumnya
import { useAuth } from '../context/AuthContext';

const DashboardLayout = ({ allowedRoles }) => {
    const { user } = useAuth();
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();

    // 1. Jika belum login, tendang ke halaman login
    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    // 2. Jika Role tidak sesuai (misal: Mahasiswa coba akses halaman Admin)
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return (
            <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
                <div className="text-center">
                    <h1 className="display-1 fw-bold text-danger">403</h1>
                    <p className="lead">Akses Ditolak. Anda tidak memiliki izin.</p>
                    <button onClick={() => window.history.back()} className="btn btn-primary">Kembali</button>
                </div>
            </div>
        );
    }

    return (
        <div className="d-flex bg-light min-vh-100">
            <Sidebar isOpen={isSidebarOpen} />
            <div className={`flex-grow-1 d-flex flex-column transition-all`} style={{ marginLeft: isSidebarOpen ? '260px' : '70px', transition: 'margin 0.3s ease' }}>
                <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} isOpen={isSidebarOpen} />
                <main className="p-4">
                    <Outlet /> {/* Konten halaman akan dirender di sini */}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;