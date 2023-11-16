import React from 'react';
import { dokumen } from '../data/index';

function Dokumen() {
  return (
    <div className='navPadding'>
      <h2>Dokumen</h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {dokumen.map((item) => (
          <div key={item.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <img src={item.gambar} alt={item.namaDokumen} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
            <p>{item.namaDokumen}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dokumen;
