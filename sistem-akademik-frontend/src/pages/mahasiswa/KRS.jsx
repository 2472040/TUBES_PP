import React, { useState } from 'react';

const KRS = () => {
    const [totalSKS, setTotalSKS] = useState(0);

    // Data Mata Kuliah Tersedia
    const [matkul, setMatkul] = useState([
        { id: 1, kode: 'IF201', nama: 'Pemrograman Web Lanjut', sks: 4, dosen: 'Pak Budi', diambil: false },
        { id: 2, kode: 'IF202', nama: 'Kecerdasan Buatan', sks: 3, dosen: 'Bu Siti', diambil: false },
        { id: 3, kode: 'IF203', nama: 'Basis Data II', sks: 3, dosen: 'Pak Joko', diambil: false },
        { id: 4, kode: 'IF204', nama: 'Statistika Probabilitas', sks: 2, dosen: 'Bu Rina', diambil: false },
    ]);

    const handleAmbil = (id) => {
        const updatedMatkul = matkul.map(mk => {
            if (mk.id === id) {
                // Update total SKS (Jika belum diambil nambah, jika sudah diambil kurang)
                setTotalSKS(prev => !mk.diambil ? prev + mk.sks : prev - mk.sks);
                return { ...mk, diambil: !mk.diambil };
            }
            return mk;
        });
        setMatkul(updatedMatkul);
    };

    return (
        <div className="container-fluid">
            <div className="row mb-4">
                <div className="col-md-8">
                    <h3 className="fw-bold text-secondary">Kartu Rencana Studi (KRS)</h3>
                    <p className="text-muted">Pilih mata kuliah untuk semester Genap 2025.</p>
                </div>
                <div className="col-md-4 text-end">
                    <div className="google-card bg-primary text-white p-3 d-inline-block">
                        <span className="small opacity-75">Total SKS Diambil</span>
                        <h2 className="mb-0 fw-bold">{totalSKS} <span className="fs-6 fw-normal">/ 24</span></h2>
                    </div>
                </div>
            </div>

            <div className="row g-3">
                {matkul.map(mk => (
                    <div className="col-md-6" key={mk.id}>
                        <div className={`google-card border ${mk.diambil ? 'border-primary bg-primary-subtle' : ''} h-100`}>
                            <div className="d-flex justify-content-between align-items-start">
                                <div>
                                    <span className="badge bg-dark mb-2">{mk.kode}</span>
                                    <h5 className="fw-bold">{mk.nama}</h5>
                                    <p className="text-secondary mb-0"><i className="bi bi-person me-2"></i>{mk.dosen}</p>
                                </div>
                                <div className="text-center bg-white rounded p-2 shadow-sm">
                                    <h4 className="fw-bold mb-0 text-primary">{mk.sks}</h4>
                                    <small className="text-muted">SKS</small>
                                </div>
                            </div>
                            <hr className="my-3 opacity-25" />
                            <button
                                onClick={() => handleAmbil(mk.id)}
                                className={`btn w-100 rounded-pill fw-bold ${mk.diambil ? 'btn-danger' : 'btn-primary'}`}
                            >
                                {mk.diambil ? <><i className="bi bi-x-circle me-2"></i>Batalkan</> : <><i className="bi bi-plus-circle me-2"></i>Ambil Kelas</>}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KRS;