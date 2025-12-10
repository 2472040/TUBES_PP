import React from 'react';

const Dashboard = () => {
    return (
        <div className="container-fluid px-2">
            {/* Bagian Welcome */}
            <div className="mb-4">
                <h2 className="fw-normal mb-1" style={{fontFamily: 'Google Sans, sans-serif'}}>Selamat Datang, Maliq</h2>
                <p className="text-secondary">Berikut adalah ringkasan aktivitas akademik Anda hari ini.</p>
            </div>

            {/* Quick Suggestions Cards */}
            <div className="row g-3 mb-5">
                <div className="col-md-3">
                    <div className="google-card d-flex flex-column justify-content-between" style={{minHeight: '160px', backgroundColor: '#eaddff'}}>
                        <div>
                            <i className="bi bi-stars fs-3 text-dark mb-3 d-block"></i>
                            <h5 className="fw-bold fs-6">Cek Jadwal Kuliah</h5>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-light rounded-pill btn-sm px-3 fw-bold">Buka</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="google-card d-flex flex-column justify-content-between" style={{minHeight: '160px', backgroundColor: '#d0bcff'}}>
                        <div>
                            <i className="bi bi-file-earmark-text fs-3 text-dark mb-3 d-block"></i>
                            <h5 className="fw-bold fs-6">Lihat Nilai UTS</h5>
                        </div>
                        <div className="text-end">
                            <button className="btn btn-light rounded-pill btn-sm px-3 fw-bold">Lihat</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="google-card" style={{minHeight: '160px', backgroundImage: 'linear-gradient(120deg, #e0f7fa 0%, #e1bee7 100%)'}}>
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h5 className="fw-bold mb-1">Pengumuman: Wisuda Periode II</h5>
                                <p className="small text-dark mb-3" style={{maxWidth: '80%'}}>Pendaftaran wisuda dibuka mulai tanggal 5 Oktober. Segera lengkapi berkas di menu administrasi.</p>
                            </div>
                            <span className="badge bg-white text-dark rounded-pill shadow-sm">Penting</span>
                        </div>
                        <button className="btn btn-dark rounded-pill btn-sm px-4">Detail Info</button>
                    </div>
                </div>
            </div>

            {/* Bagian Table "Recent Files" */}
            <h5 className="mb-3 ms-2 text-secondary fw-bold" style={{fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px'}}>Mata Kuliah Semester Ini</h5>

            <div className="bg-white rounded-4 p-3 shadow-sm" style={{borderRadius: '24px'}}>
                <table className="table table-borderless align-middle mb-0">
                    <thead className="text-secondary border-bottom">
                    <tr>
                        <th className="fw-normal ps-3">Nama Mata Kuliah</th>
                        <th className="fw-normal">Dosen Pengampu</th>
                        <th className="fw-normal">Hari & Jam</th>
                        <th className="fw-normal text-end pe-3">Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[1, 2, 3, 4].map((item) => (
                        <tr key={item} style={{borderBottom: '1px solid #f0f0f0'}}>
                            <td className="py-3 ps-3">
                                <div className="d-flex align-items-center">
                                    <div className="bg-light rounded p-2 me-3 text-primary">
                                        <i className="bi bi-folder-fill"></i>
                                    </div>
                                    <span className="fw-500">Pemrograman Web Lanjut</span>
                                </div>
                            </td>
                            <td className="text-secondary">Dr. Budi Santoso, M.Kom</td>
                            <td className="text-secondary">Senin, 08.00 - 10.30</td>
                            <td className="text-end pe-3">
                                <span className="badge bg-success-subtle text-success rounded-pill px-3">Hadir</span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Dashboard;