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
import LayananDaerah_Kependudukan from "./Pages/LayananDaerah_Kependudukan";
import LayananDaerah_Kesehatan from "./Pages/LayananDaerah_Kesehatan";
import Dokumen from "./Pages/Dokumen";
import ProfilDaerah from "./Pages/ProfilDaerah";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/kotaMalang" element={<HomePage />} />
        <Route path="/kotaMalang/beritaEkonomi" element={<BeritaDaerah_Ekonomi />} />
        <Route path="/kotaMalang/beritaKesehatan" element={<BeritaDaerah_Kesehatan />} />
        <Route path="/kotaMalang/beritaPemerintahan" element={<BeritaDaerah_Pemerintahan />}/>
        <Route path="/kotaMalang/beritaPendidikan" element={<BeritaDaerah_Pendidikan />} />
        <Route path="/kotaMalang/beritaTeknologi" element={<BeritaDaerah_Teknologi />} />
        <Route path="/kotaMalang/layananKependudukan" element={<LayananDaerah_Kependudukan />} />
        <Route path="/kotaMalang/layananKesehatan" element={<LayananDaerah_Kesehatan />} />
        <Route path="/kotaMalang/dokumen" element={<Dokumen />} />
        <Route path="/kotaMalang/profil" element={<ProfilDaerah />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
