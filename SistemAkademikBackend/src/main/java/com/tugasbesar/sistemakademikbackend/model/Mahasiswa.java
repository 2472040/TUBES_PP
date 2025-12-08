package com.tugasbesar.sistemakademikbackend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.time.LocalDate;

@Entity
@Table(name = "Mahasiswa", schema = "dbo") // Kita perjelas schema-nya
public class Mahasiswa {

    @Id
    @Column(name = "nrp")
    private String nrp;

    @Column(name = "nama")
    private String nama;

    @Column(name = "tanggal_lahir")
    private LocalDate tanggalLahir;

    @Column(name = "alamat")
    private String alamat;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "tahun_masuk")
    private LocalDateTime tahunMasuk;

    @Column(name = "id_prodi")
    private String idProdi;

    // --- BAGIAN INI YANG BIASANYA HILANG KALAU LOMBOK ERROR ---

    // 1. Constructor Kosong (Wajib buat JPA)
    public Mahasiswa() {
    }

    // 2. Constructor Lengkap (Opsional, tapi bagus ada)
    public Mahasiswa(String nrp, String nama, LocalDate tanggalLahir, String alamat, String email, String password, LocalDateTime tahunMasuk, String idProdi) {
        this.nrp = nrp;
        this.nama = nama;
        this.tanggalLahir = tanggalLahir;
        this.alamat = alamat;
        this.email = email;
        this.password = password;
        this.tahunMasuk = tahunMasuk;
        this.idProdi = idProdi;
    }

    // 3. Getter dan Setter Manual
    public String getNrp() { return nrp; }
    public void setNrp(String nrp) { this.nrp = nrp; }

    public String getNama() { return nama; }
    public void setNama(String nama) { this.nama = nama; }

    public LocalDate getTanggalLahir() { return tanggalLahir; }
    public void setTanggalLahir(LocalDate tanggalLahir) { this.tanggalLahir = tanggalLahir; }

    public String getAlamat() { return alamat; }
    public void setAlamat(String alamat) { this.alamat = alamat; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public LocalDateTime getTahunMasuk() { return tahunMasuk; }
    public void setTahunMasuk(LocalDateTime tahunMasuk) { this.tahunMasuk = tahunMasuk; }

    public String getIdProdi() { return idProdi; }
    public void setIdProdi(String idProdi) { this.idProdi = idProdi; }
}