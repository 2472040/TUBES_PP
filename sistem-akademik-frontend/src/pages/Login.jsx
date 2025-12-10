import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            let role = 'mahasiswa';
            let namaUser = 'Maliq Athaya';

            if (email.toLowerCase().includes('admin')) {
                role = 'admin';
                namaUser = 'Administrator';
            } else if (email.toLowerCase().includes('dosen')) {
                role = 'dosen';
                namaUser = 'Dr. Budi Santoso';
            }

            login({ email, name: namaUser, role });

            if (role === 'admin') navigate('/admin');
            else if (role === 'dosen') navigate('/dosen');
            else navigate('/mahasiswa');

            setIsLoading(false);
        }, 800);
    };

    return (
        <div className="login-container">
            {/* KIRI */}
            <div className="login-left-side">
                <div className="mb-4">
                    <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                        <i className="bi bi-gemini fs-2"></i>
                    </div>
                </div>
                <h1 className="display-4 fw-bold mb-3">SIAKAD Studio</h1>
                <p className="lead opacity-75">Platform akademik terintegrasi.</p>
            </div>

            {/* KANAN */}
            <div className="login-right-side">
                <div className="login-form-wrapper">
                    <h3 className="fw-bold mb-2 text-dark">Selamat Datang</h3>
                    <p className="text-muted mb-4 small">Masuk untuk mengakses dashboard.</p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="small fw-bold text-secondary ms-1">Email</label>
                            <div className="input-group-modern">
                                <i className="bi bi-envelope text-secondary mx-2"></i>
                                <input
                                    type="email"
                                    className="input-modern"
                                    placeholder="email@univ.ac.id"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="small fw-bold text-secondary ms-1">Password</label>
                            <div className="input-group-modern">
                                <i className="bi bi-lock text-secondary mx-2"></i>
                                <input
                                    type="password"
                                    className="input-modern"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <button type="submit" className="btn-login-modern" disabled={isLoading}>
                            {isLoading ? 'Memuat...' : 'Masuk Sekarang'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;