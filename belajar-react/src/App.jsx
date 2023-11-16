import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";

import HomePage from "./Pages/HomePage";
import BeritaDaerah_Ekonomi from "./Pages/BeritaDaerah_Ekonomi";
import BeritaDaerah_Kesehatan from "./Pages/BeritaDaerah_Kesehatan";
import BeritaDaerah_Pemerintahan from "./Pages/BeritaDaerah_Pemerintahan";
import BeritaDaerah_Pendidikan from "./Pages/BeritaDaerah_Pendidikan";
import BeritaDaerah_Teknologi from "./Pages/BeritaDaerah_Teknologi";
import LayananDaerah from "./Pages/LayananDaerah";
import Dokumen from "./Pages/Dokumen";
import ProfilDaerah from "./Pages/ProfilDaerah";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/beritaEkonomi" element={<BeritaDaerah_Ekonomi />} />
        <Route path="/beritaKesehatan" element={<BeritaDaerah_Kesehatan />} />
        <Route path="/beritaPemerintahan" element={<BeritaDaerah_Pemerintahan />}/>
        <Route path="/beritaPendidikan" element={<BeritaDaerah_Pendidikan />} />
        <Route path="/beritaTeknologi" element={<BeritaDaerah_Teknologi />} />
        <Route path="/layanan" element={<LayananDaerah />} />
        <Route path="/dokumen" element={<Dokumen />} />
        <Route path="/profil" element={<ProfilDaerah />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
