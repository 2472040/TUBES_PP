import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // --- LOGIKA SIMULASI LOGIN (Ganti dengan API nanti) ---
        let role = 'mahasiswa';
        let namaUser = 'Maliq Athaya';

        // Deteksi role berdasarkan email yang diketik
        if (email.toLowerCase().includes('admin')) {
            role = 'admin';
            namaUser = 'Administrator Sistem';
        } else if (email.toLowerCase().includes('dosen')) {
            role = 'dosen';
            namaUser = 'Bpk. Dosen Komputer';
        }

        const userData = { email, name: namaUser, role };

        // Simpan data user ke Context Global
        login(userData);

        console.log("Login sukses sebagai:", role);

        // Redirect ke dashboard masing-masing
        if (role === 'admin') navigate('/admin');
        else if (role === 'dosen') navigate('/dosen');
        else navigate('/mahasiswa');
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center" style={{background: 'linear-gradient(135deg, #0d47a1 0%, #42a5f5 100%)'}}>
            <div className="card p-4 shadow-lg border-0" style={{ maxWidth: '400px', width: '90%', borderRadius: '15px' }}>
                <div className="card-body">
                    <div className="text-center mb-4">
                        <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="bi bi-shield-lock-fill fs-3"></i>
                        </div>
                        <h4 className="fw-bold text-dark">SIAKAD PRO</h4>
                        <p className="text-muted small">Silakan login untuk melanjutkan</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="emailInput"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label htmlFor="emailInput">Email Address</label>
                        </div>

                        <div className="form-floating mb-4">
                            <input
                                type="password"
                                className="form-control"
                                id="passwordInput"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="passwordInput">Password</label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold rounded-pill shadow-sm">
                            MASUK DASHBOARD
                        </button>
                    </form>

                    <div className="mt-4 text-center">
                        <small className="text-muted d-block mb-1">Coba login dengan:</small>
                        <span className="badge bg-light text-dark border me-1">admin@univ.ac.id</span>
                        <span className="badge bg-light text-dark border me-1">dosen@univ.ac.id</span>
                        <span className="badge bg-light text-dark border">mhs@univ.ac.id</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;