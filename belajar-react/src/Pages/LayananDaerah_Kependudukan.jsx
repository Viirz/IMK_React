import React, { useState } from "react";
import { Link } from "react-router-dom";
import { layananKependudukan } from "../data/index";

function LayananDaerah_Kependudukan() {
  const [activeService, setActiveService] = useState(null);

  const handleClick = (index) => {
    setActiveService(activeService === index ? null : index);
  };

  return (
    <div className="layanan-container">
      {layananKependudukan.map((service, index) => (
        <div key={service.id} className="layanan-item">
          <button type="button" onClick={() => handleClick(index)}>
            {service.nama}
          </button>
          {activeService === index && (
            <div className="layanan-content">
              {service.Isi.map((isi, isiIndex) => (
                <div key={isiIndex}>
                  <h3>{isi.judul}</h3>
                  <ul>
                    {isi.persyaratan.map((persyaratan, persyaratanIndex) => (
                      <li key={persyaratanIndex}>{persyaratan}</li>
                    ))}
                  </ul>
                  {isi.catatan.map((catatan, catatanIndex) => (
                    <p key={catatanIndex}>{catatan}</p>
                  ))}
                </div>
              ))}
              <p>{service.namaDownload}</p>
              {service.downloadLink.map((download, downloadIndex) => (
                <Link key={downloadIndex} to={download.linkDokumen}>
                  {download.namaDokumen}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default LayananDaerah_Kependudukan;
