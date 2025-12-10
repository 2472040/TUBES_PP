import React from 'react';

const UserManagement = () => {
    // Data Dummy
    const users = [
        { id: 1, nama: 'Maliq Athaya', email: 'maliq@student.edu', role: 'mahasiswa', status: 'Aktif' },
        { id: 2, nama: 'Dr. Budi Santoso', email: 'budi@univ.ac.id', role: 'dosen', status: 'Aktif' },
        { id: 3, nama: 'Siti Aminah', email: 'admin@univ.ac.id', role: 'admin', status: 'Aktif' },
        { id: 4, nama: 'John Doe', email: 'john@student.edu', role: 'mahasiswa', status: 'Cuti' },
    ];

    const getRoleBadge = (role) => {
        if (role === 'admin') return 'bg-danger-subtle text-danger';
        if (role === 'dosen') return 'bg-primary-subtle text-primary';
        return 'bg-success-subtle text-success';
    };

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold text-secondary">Manajemen User</h3>
                <button className="btn-create-new py-2 px-4 mb-0">
                    <i className="bi bi-person-plus-fill me-2"></i> Tambah User
                </button>
            </div>

            <div className="google-card p-0 overflow-hidden">
                <table className="table table-hover align-middle mb-0">
                    <thead className="bg-light border-bottom">
                    <tr>
                        <th className="py-3 ps-4">Nama User</th>
                        <th>Email Institusi</th>
                        <th>Role</th>
                        <th>Status</th>
                        <th className="text-end pe-4">Aksi</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td className="py-3 ps-4 fw-500">{user.nama}</td>
                            <td className="text-secondary">{user.email}</td>
                            <td>
                                    <span className={`badge rounded-pill px-3 py-2 ${getRoleBadge(user.role)}`}>
                                        {user.role.toUpperCase()}
                                    </span>
                            </td>
                            <td>
                                    <span className={`badge border ${user.status === 'Aktif' ? 'border-success text-success' : 'border-warning text-warning'}`}>
                                        {user.status}
                                    </span>
                            </td>
                            <td className="text-end pe-4">
                                <button className="btn btn-sm btn-link text-primary"><i className="bi bi-pencil"></i></button>
                                <button className="btn btn-sm btn-link text-danger"><i className="bi bi-trash"></i></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;