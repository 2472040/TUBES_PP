import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    // State untuk mengontrol Sidebar (Buka/Tutup)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="min-vh-100 bg-light">
            {/* 1. Sidebar */}
            <Sidebar isOpen={isSidebarOpen} />

            {/* 2. Header */}
            <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />

            {/* 3. Main Content Area */}
            <div className={`main-content ${isSidebarOpen ? 'expanded' : 'collapsed'}`}>
                <div className="container-fluid p-4">
                    <div className="row g-4">

                        {/* --- KOLOM TENGAH (PENGUMUMAN) --- */}
                        <div className="col-lg-8">
                            <h5 className="fw-bold mb-3 text-secondary">Papan Pengumuman</h5>

                            {/* Card Pengumuman Utama (Mirip Poster Morning tapi versi CSS) */}
                            <div className="announcement-card mb-4 position-relative overflow-hidden">
                                <div className="position-relative z-1">
                                    <span className="badge bg-warning text-dark mb-2">PENTING</span>
                                    <h1 className="fw-bold display-5 mb-3">E-Learning 2025</h1>
                                    <p className="lead mb-4" style={{maxWidth: '80%'}}>
                                        Platform pembelajaran daring terpadu kini hadir dengan fitur baru. Akses materi, kuis, dan presensi dalam satu pintu.
                                    </p>
                                    <button className="btn btn-light text-primary fw-bold px-4 rounded-pill">
                                        Akses Portal <i className="bi bi-arrow-right ms-2"></i>
                                    </button>
                                </div>
                                {/* Hiasan Background Abstrak */}
                                <div className="position-absolute top-0 end-0 opacity-25">
                                    <i className="bi bi-laptop" style={{fontSize: '15rem', marginRight: '-3rem', marginTop: '-2rem'}}></i>
                                </div>
                            </div>

                            {/* List Pengumuman Kecil */}
                            <div className="card border-0 shadow-sm rounded-3">
                                <div className="card-body">
                                    <h6 className="fw-bold border-bottom pb-2 mb-3">Terbaru Hari Ini</h6>
                                    <div className="d-flex mb-3">
                                        <div className="me-3 text-center">
                                            <div className="bg-light rounded p-2 text-primary fw-bold" style={{width:'50px'}}>
                                                09<br/><small>DES</small>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none text-dark fw-bold hover-primary">Jadwal Perwalian Semester Genap</a>
                                            <p className="text-muted small m-0">Bagian Administrasi Akademik</p>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <div className="me-3 text-center">
                                            <div className="bg-light rounded p-2 text-primary fw-bold" style={{width:'50px'}}>
                                                07<br/><small>DES</small>
                                            </div>
                                        </div>
                                        <div>
                                            <a href="#" className="text-decoration-none text-dark fw-bold hover-primary">Pendaftaran Wisuda Periode I</a>
                                            <p className="text-muted small m-0">Sekretariat Universitas</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- KOLOM KANAN (WIDGET) --- */}
                        <div className="col-lg-4">
                            {/* Widget Kalender */}
                            <div className="calendar-wrapper mb-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h6 className="m-0 fw-bold">Desember 2025</h6>
                                    <div className="text-muted small">
                                        <i className="bi bi-chevron-left me-3 cursor-pointer"></i>
                                        <i className="bi bi-chevron-right cursor-pointer"></i>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between text-muted small fw-bold mb-2">
                                    <span>S</span><span>S</span><span>R</span><span>K</span><span>J</span><span>S</span><span>M</span>
                                </div>
                                {/* Contoh Grid Tanggal */}
                                <div className="d-flex flex-wrap justify-content-between row-gap-2">
                                    {/* Spacer untuk tanggal 1 mulai hari Senin */}
                                    <div className="calendar-day">1</div><div className="calendar-day">2</div><div className="calendar-day">3</div>
                                    <div className="calendar-day">4</div><div className="calendar-day">5</div><div className="calendar-day">6</div><div className="calendar-day text-danger">7</div>

                                    <div className="calendar-day">8</div>
                                    <div className="calendar-day today">9</div> {/* Hari ini */}
                                    <div className="calendar-day">10</div><div className="calendar-day">11</div><div className="calendar-day">12</div><div className="calendar-day">13</div><div className="calendar-day text-danger">14</div>

                                    <div className="calendar-day">15</div><div className="calendar-day">16</div><div className="calendar-day">17</div><div className="calendar-day">18</div><div className="calendar-day">19</div><div className="calendar-day">20</div><div className="calendar-day text-danger">21</div>
                                </div>
                            </div>

                            {/* Widget Quick Links */}
                            <div className="card border-0 shadow-sm rounded-3">
                                <div className="card-body">
                                    <h6 className="fw-bold mb-3">Pintasan Cepat</h6>
                                    <button className="btn btn-outline-primary btn-sm w-100 mb-2 text-start">
                                        <i className="bi bi-calendar-event me-2"></i> Kalender Akademik
                                    </button>
                                    <button className="btn btn-outline-primary btn-sm w-100 text-start">
                                        <i className="bi bi-download me-2"></i> Unduh Panduan
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Floating Action Button (WA) */}
            <div className="position-fixed bottom-0 end-0 m-4">
                <button className="btn btn-success rounded-circle shadow p-0 d-flex align-items-center justify-content-center" style={{width:'55px', height:'55px'}}>
                    <i className="bi bi-whatsapp fs-3"></i>
                </button>
            </div>
        </div>
    );
};

export default Dashboard;