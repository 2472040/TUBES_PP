import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Komponen Dummy Sederhana untuk Test
const AdminPage = () => <div className="p-5"><h1>Halaman Admin</h1></div>;
const DosenPage = () => <div className="p-5"><h1>Halaman Dosen</h1></div>;

function App() {
    return (
        // 1. AuthProvider MENGURUNG SEMUANYA
        <AuthProvider>
            {/* 2. Router ada DI DALAM AuthProvider */}
            <Router>
                <Routes>
                    {/* Halaman Login (Public) */}
                    <Route path="/" element={<Login />} />

                    {/* Halaman Admin */}
                    <Route element={<DashboardLayout allowedRoles={['admin']} />}>
                        <Route path="/admin" element={<AdminPage />} />
                    </Route>

                    {/* Halaman Dosen */}
                    <Route element={<DashboardLayout allowedRoles={['dosen']} />}>
                        <Route path="/dosen" element={<DosenPage />} />
                    </Route>

                    {/* Halaman Mahasiswa */}
                    <Route element={<DashboardLayout allowedRoles={['mahasiswa']} />}>
                        <Route path="/mahasiswa" element={<Dashboard />} />
                        {/* Redirect dashboard lama ke mahasiswa */}
                        <Route path="/dashboard" element={<Navigate to="/mahasiswa" replace />} />
                    </Route>

                    {/* Fallback jika halaman tidak ditemukan */}
                    <Route path="*" element={<div className="p-5"><h1>404 Not Found</h1></div>} />

                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;