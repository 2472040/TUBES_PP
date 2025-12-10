import React, { useState } from 'react';

const InputNilai = () => {
    // Data Dummy Mahasiswa
    const [mahasiswa, setMahasiswa] = useState([
        { id: 1, nrp: '2472901', nama: 'Maliq Athaya', tugas: 0, uts: 0, uas: 0 },
        { id: 2, nrp: '2472902', nama: 'Budi Santoso', tugas: 0, uts: 0, uas: 0 },
    ]);

    // Rumus: Tugas 30%, UTS 30%, UAS 40%
    const hitungNA = (mhs) => (mhs.tugas * 0.3) + (mhs.uts * 0.3) + (mhs.uas * 0.4);

    const getGrade = (nilai) => {
        if (nilai >= 80) return 'A';
        if (nilai >= 70) return 'B';
        if (nilai >= 55) return 'C';
        if (nilai >= 40) return 'D';
        return 'E';
    };

    const handleChange = (id, field, value) => {
        const val = parseInt(value) || 0; // Pastikan angka
        setMahasiswa(prev => prev.map(m => m.id === id ? { ...m, [field]: val } : m));
    };

    return (
        <div className="container-fluid">
            <h3 className="fw-bold text-secondary mb-4">Input Nilai Mahasiswa</h3>

            <div className="google-card p-4">
                <div className="mb-4 d-flex gap-3">
                    <select className="form-select w-auto"><option>IF201 - Pemrograman Web</option></select>
                    <button className="btn btn-success rounded-pill px-4"><i className="bi bi-save me-2"></i>Simpan Semua</button>
                </div>

                <table className="table align-middle">
                    <thead>
                    <tr>
                        <th>Mahasiswa</th>
                        <th style={{width: '100px'}}>Tugas (30%)</th>
                        <th style={{width: '100px'}}>UTS (30%)</th>
                        <th style={{width: '100px'}}>UAS (40%)</th>
                        <th className="text-center">Nilai Akhir</th>
                        <th className="text-center">Grade</th>
                    </tr>
                    </thead>
                    <tbody>
                    {mahasiswa.map(mhs => {
                        const na = hitungNA(mhs);
                        return (
                            <tr key={mhs.id}>
                                <td>
                                    <div className="fw-bold">{mhs.nama}</div>
                                    <small className="text-muted">{mhs.nrp}</small>
                                </td>
                                <td><input type="number" className="form-control" value={mhs.tugas || ''} onChange={(e) => handleChange(mhs.id, 'tugas', e.target.value)} /></td>
                                <td><input type="number" className="form-control" value={mhs.uts || ''} onChange={(e) => handleChange(mhs.id, 'uts', e.target.value)} /></td>
                                <td><input type="number" className="form-control" value={mhs.uas || ''} onChange={(e) => handleChange(mhs.id, 'uas', e.target.value)} /></td>
                                <td className="text-center fw-bold fs-5">{na.toFixed(1)}</td>
                                <td className="text-center">
                                        <span className={`badge rounded-circle p-2 fs-6 ${na >= 55 ? 'bg-success' : 'bg-danger'}`} style={{width:'35px', height:'35px'}}>
                                            {getGrade(na)}
                                        </span>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default InputNilai;