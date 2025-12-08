import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // PENTING: Import ini wajib ada

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // PENTING: Ini penggeraknya

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perhatikan: TIDAK ADA lagi alert() disini
        console.log("Login diklik, mencoba pindah...");

        // Perintah sakti untuk pindah halaman
        navigate("/dashboard");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Sistem Akademik</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-danger w-100">
                        TOMBOL BARU
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;