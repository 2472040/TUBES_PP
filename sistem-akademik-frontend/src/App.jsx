import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './layouts/DashboardLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Import Halaman Baru yang tadi dibuat
import UserManagement from './pages/admin/UserManagement';
import KRS from './pages/mahasiswa/KRS';
import InputNilai from './pages/dosen/InputNilai';

// Komponen Dummy untuk halaman yang belum dibuat (agar tidak error)
const BlankPage = ({ title }) => <div className="p-4 text-center text-muted"><h2>{title}</h2><p>Fitur ini sedang dalam pengembangan.</p></div>;

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />

                    {/* === ADMIN ROUTES === */}
                    <Route element={<DashboardLayout allowedRoles={['admin']} />}>
                        <Route path="/admin" element={<BlankPage title="Dashboard Admin" />} />
                        {/* Ganti yang tadinya dummy dengan file asli */}
                        <Route path="/admin/users" element={<UserManagement />} />
                        <Route path="/admin/courses" element={<BlankPage title="Master Kurikulum" />} />
                        <Route path="/admin/finance" element={<BlankPage title="Keuangan" />} />
                    </Route>

                    {/* === DOSEN ROUTES === */}
                    <Route element={<DashboardLayout allowedRoles={['dosen']} />}>
                        <Route path="/dosen" element={<BlankPage title="Dashboard Dosen" />} />
                        <Route path="/dosen/schedule" element={<BlankPage title="Jadwal Mengajar" />} />
                        {/* Fitur Input Nilai */}
                        <Route path="/dosen/grading" element={<InputNilai />} />
                        <Route path="/dosen/counseling" element={<BlankPage title="Perwalian Dosen" />} />
                    </Route>

                    {/* === MAHASISWA ROUTES === */}
                    <Route element={<DashboardLayout allowedRoles={['mahasiswa']} />}>
                        <Route path="/mahasiswa" element={<Dashboard />} />
                        {/* Fitur KRS */}
                        <Route path="/mahasiswa/krs" element={<KRS />} />
                        <Route path="/mahasiswa/jadwal" element={<BlankPage title="Jadwal Kuliah" />} />
                        <Route path="/mahasiswa/khs" element={<BlankPage title="Kartu Hasil Studi" />} />
                        <Route path="/mahasiswa/tagihan" element={<BlankPage title="Tagihan Keuangan" />} />
                        <Route path="/dashboard" element={<Navigate to="/mahasiswa" replace />} />
                    </Route>

                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;