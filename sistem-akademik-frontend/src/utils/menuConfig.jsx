// Pastikan nama filenya menuConfig.jsx
import React from 'react';

export const ROLE_MENUS = {
    admin: [
        { label: 'Dashboard Admin', path: '/admin', icon: 'bi-speedometer2' },
        { label: 'Manajemen User', path: '/admin/users', icon: 'bi-people-fill' },
    ],
    dosen: [
        { label: 'Dashboard Dosen', path: '/dosen', icon: 'bi-briefcase' },
        { label: 'Jadwal Mengajar', path: '/dosen/schedule', icon: 'bi-calendar-check' },
    ],
    mahasiswa: [
        { label: 'Dashboard Mhs', path: '/mahasiswa', icon: 'bi-mortarboard' },
        { label: 'KRS & Perwalian', path: '/mahasiswa/krs', icon: 'bi-card-checklist' },
        { label: 'Jadwal Kuliah', path: '/mahasiswa/jadwal', icon: 'bi-calendar3' },
        { label: 'Kartu Hasil Studi', path: '/mahasiswa/khs', icon: 'bi-file-earmark-bar-graph' },
        { label: 'Tagihan', path: '/mahasiswa/tagihan', icon: 'bi-wallet2' },
    ]
};