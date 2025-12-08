package com.tugasbesar.sistemakademikbackend.Repository; // Sesuaikan jika kamu ubah nama package

import com.tugasbesar.sistemakademikbackend.model.Mahasiswa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MahasiswaRepository extends JpaRepository<Mahasiswa, String> {
    // Kosong saja, Spring Boot otomatis buatkan query SQL-nya
}