package com.tugasbesar.sistemakademikbackend.controller;

import com.tugasbesar.sistemakademikbackend.model.Mahasiswa;
import com.tugasbesar.sistemakademikbackend.Repository.MahasiswaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/mahasiswa")
@CrossOrigin(origins = "http://localhost:5173") // Izin untuk React nanti
public class MahasiswaController {

    @Autowired
    private MahasiswaRepository mahasiswaRepository;

    // GET: Ambil semua data mahasiswa
    @GetMapping
    public List<Mahasiswa> getAllMahasiswa() {
        return mahasiswaRepository.findAll();
    }

    // POST: Tambah mahasiswa baru (Pendaftaran)
    @PostMapping
    public Mahasiswa createMahasiswa(@RequestBody Mahasiswa mahasiswa) {
        return mahasiswaRepository.save(mahasiswa);
    }
}