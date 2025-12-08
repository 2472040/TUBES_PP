import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulasi login sukses
        console.log("Login diklik, mencoba pindah...");
        navigate("/dashboard");
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center login-bg">
            <div className="card card-modern p-4" style={{ maxWidth: '400px', width: '90%' }}>
                <div className="card-body">
                    <div className="text-center mb-4">
                        <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                            <i className="bi bi-shield-lock-fill fs-3"></i> {/* Jika pakai icon */}
                            <span className="fs-3 fw-bold">SA</span>
                        </div>
                        <h4 className="fw-bold">Selamat Datang</h4>
                        <p className="text-muted small">Silakan login ke Sistem Akademik</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control border-0 bg-light"
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
                                className="form-control border-0 bg-light"
                                id="passwordInput"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="passwordInput">Password</label>
                        </div>

                        <button type="submit" className="btn btn-primary w-100 py-2 fw-bold shadow-sm" style={{borderRadius: '10px'}}>
                            MASUK DASHBOARD
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;