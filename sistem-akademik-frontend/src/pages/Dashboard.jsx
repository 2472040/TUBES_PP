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
            // Pastikan backend Java jalan di port 8080
            const result = await axios.get("http://localhost:8080/api/mahasiswa");
            setMahasiswa(result.data);
        } catch (error) {
            console.error("Gagal tarik data:", error);
        }
    };

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Data Mahasiswa</h2>
                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
            </div>

            <table className="table table-striped shadow border">
                <thead className="table-dark">
                <tr>
                    <th>NRP</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Prodi</th>
                </tr>
                </thead>
                <tbody>
                {mahasiswa.length > 0 ? (
                    mahasiswa.map((mhs) => (
                        <tr key={mhs.nrp}>
                            <td>{mhs.nrp}</td>
                            <td>{mhs.nama}</td>
                            <td>{mhs.email}</td>
                            <td>{mhs.idProdi}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="4" className="text-center">Belum ada data mahasiswa</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;