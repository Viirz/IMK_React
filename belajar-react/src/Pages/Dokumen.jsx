import React from 'react';
import { navLinks } from '../data/index';

const LayoutComponent = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        {navLinks.map((link) => (
          <div key={link.id} className="sidebar-item">
            {link.text}
          </div>
        ))}
      </div>
      <div className="content">
        {/* Konten di sisi kanan akan berubah sesuai item yang dipilih di sisi kiri */}
      </div>
    </div>
  );
};

export default LayoutComponent;
