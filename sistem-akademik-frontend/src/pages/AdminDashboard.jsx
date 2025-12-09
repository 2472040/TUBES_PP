import React from 'react';

const AdminDashboard = () => {
    return (
        <div>
            <h2 className="fw-bold mb-4">Admin Dashboard</h2>
            <div className="row g-3">
                <div className="col-md-3">
                    <div className="card p-3 border-0 shadow-sm bg-primary text-white">
                        <h3>1,250</h3>
                        <span>Total Mahasiswa</span>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card p-3 border-0 shadow-sm bg-success text-white">
                        <h3>85</h3>
                        <span>Total Dosen</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default AdminDashboard;