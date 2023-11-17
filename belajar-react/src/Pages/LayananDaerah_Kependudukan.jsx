import React, { useState } from 'react';
import { layananKependudukan } from '../data/index';

function LayananDaerah_Kependudukan() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="layanan-container">
      {layananKependudukan.map((item, index) => (
        <div key={item.id} className="layanan-item">
          <button type="button" onClick={() => handleClick(index)}>
            {item.nama}
          </button>
          {activeIndex === index && <div className="layanan-content">
            {item.Isi.map((isi, isiIndex) => (
              <div key={isiIndex}>
                <h3>{isi.judul}</h3>
                <ul>
                  {isi.Persyaratan.map((persyaratan, persyaratanIndex) => (
                    <li key={persyaratanIndex}>{persyaratan}</li>
                  ))}
                </ul>
                {isi.catatan.map((catatan, catatanIndex) => (
                  <p key={catatanIndex}>{catatan}</p>
                ))}
                  <p>{isi.downloadlink}</p>
              </div>
            ))}
          </div>}
        </div>
      ))}
    </div>
  );
}

export default LayananDaerah_Kependudukan;
