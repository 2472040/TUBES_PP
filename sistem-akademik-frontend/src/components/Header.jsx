import React from 'react';

const Header = ({ toggleSidebar, isOpen }) => {
    return (
        <div className={`header-fixed d-flex align-items-center justify-content-between px-4 ${isOpen ? 'header-expanded' : 'header-collapsed'}`}>

            <div className="d-flex align-items-center">
                {/* Tombol Toggle Sidebar */}
                <button onClick={toggleSidebar} className="btn text-white me-3 border-0 p-0">
                    <i className="bi bi-list fs-3"></i>
                </button>

                {/* Dropdown Prodi (Mirip Screenshot) */}
                <div className="d-none d-md-block">
                    <select className="form-select form-select-sm bg-light border-0 text-dark fw-bold" style={{borderRadius: '20px', minWidth: '250px'}}>
                        <option>2025 - Ganjil (Teknik Informatika)</option>
                        <option>2024 - Genap (Teknik Informatika)</option>
                    </select>
                </div>
            </div>

            <div className="d-flex align-items-center gap-3">
                <div className="position-relative cursor-pointer">
                    <i className="bi bi-bell fs-5"></i>
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                </div>
                <div className="d-flex align-items-center gap-2 cursor-pointer">
                    <div className="bg-white text-primary rounded-circle d-flex justify-content-center align-items-center fw-bold" style={{width:'32px', height:'32px'}}>
                        MA
                    </div>
                    <span className="d-none d-sm-block fw-500 small">Maliq Athaya</span>
                </div>
            </div>
        </div>
    );
};

export default Header;