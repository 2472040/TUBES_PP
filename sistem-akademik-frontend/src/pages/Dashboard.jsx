import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [mahasiswa, setMahasiswa] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadMahasiswa();
    }, []);

    const loadMahasiswa = async () => {
        try {
            const result = await axios.get("http://localhost:8080/api/mahasiswa");
            setMahasiswa(result.data);
        } catch (error) {
            console.error("Gagal tarik data:", error);
            // Data dummy jika backend mati (untuk preview tampilan)
            if (mahasiswa.length === 0) {
                setMahasiswa([
                    { nrp: '193040001', nama: 'Budi Santoso', email: 'budi@unpas.ac.id', idProdi: 'Teknik Informatika' },
                    { nrp: '193040002', nama: 'Siti Aminah', email: 'siti@unpas.ac.id', idProdi: 'Teknik Pangan' }
                ]);
            }
        }
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="min-vh-100 d-flex flex-column">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm px-4">
                <div className="container">
                    <span className="navbar-brand fw-bold">Sistem Akademik</span>
                    <button onClick={handleLogout} className="btn btn-light btn-sm text-primary fw-bold rounded-pill px-4">
                        Logout
                    </button>
                </div>
            </nav>

            <div className="container mt-5">
                {/* Header Section */}
                <div className="d-flex justify-content-between align-items-end mb-4">
                    <div>
                        <h2 className="fw-bold mb-1">Data Mahasiswa</h2>
                        <p className="text-muted m-0">Kelola data mahasiswa universitas</p>
                    </div>
                    <button className="btn btn-primary shadow-sm rounded-pill px-4">
                        + Tambah Data
                    </button>
                </div>

                {/* Statistik Cards */}
                <div className="row mb-4">
                    <div className="col-md-4">
                        <div className="card card-modern p-3 mb-3 border-start border-4 border-primary">
                            <h6 className="text-muted text-uppercase small fw-bold">Total Mahasiswa</h6>
                            <h3 className="fw-bold mb-0">{mahasiswa.length}</h3>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                <div className="card card-modern overflow-hidden">
                    <div className="table-responsive">
                        <table className="table table-modern mb-0">
                            <thead>
                            <tr>
                                <th>NRP</th>
                                <th>Nama Lengkap</th>
                                <th>Email</th>
                                <th>Program Studi</th>
                                <th className="text-center">Aksi</th>
                            </tr>
                            </thead>
                            <tbody>
                            {mahasiswa.length > 0 ? (
                                mahasiswa.map((mhs) => (
                                    <tr key={mhs.nrp}>
                                        <td className="fw-bold text-primary">#{mhs.nrp}</td>
                                        <td className="fw-500">{mhs.nama}</td>
                                        <td className="text-muted">{mhs.email}</td>
                                        <td>
                                                <span className="badge bg-light text-primary border border-primary rounded-pill px-3">
                                                    {mhs.idProdi}
                                                </span>
                                        </td>
                                        <td className="text-center">
                                            <button className="btn btn-sm btn-outline-primary me-2 rounded-pill">Edit</button>
                                            <button className="btn btn-sm btn-outline-danger rounded-pill">Hapus</button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-5 text-muted">
                                        Belum ada data mahasiswa
                                    </td>
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <footer className="mt-auto py-3 text-center text-muted small">
                2025 &copy; Sistem Informasi Akademik
            </footer>
        </div>
    );
};

export default Dashboard;