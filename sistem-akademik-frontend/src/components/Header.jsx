import React from 'react';

const Header = ({ toggleSidebar, isOpen }) => {
    return (
        <div className="top-bar d-flex justify-content-between w-100 mb-2">

            <div className="d-flex align-items-center gap-3" style={{flex: 1}}>
                <button onClick={toggleSidebar} className="btn btn-link text-dark p-0 border-0">
                    <i className="bi bi-list fs-4"></i>
                </button>

                {/* Search Bar ala Google */}
                <input type="text" className="google-search" placeholder="Telusuri mata kuliah, jadwal, atau nilai..." />
            </div>

            <div className="d-flex align-items-center gap-3 ps-3">
                <button className="btn btn-light rounded-circle p-2" title="Apps">
                    <i className="bi bi-grid-3x3-gap-fill fs-5 text-secondary"></i>
                </button>
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold"
                     style={{width: '32px', height: '32px', fontSize: '0.9rem', cursor: 'pointer'}}>
                    M
                </div>
            </div>
        </div>
    );
};

export default Header;