import { useState } from 'react'  
import {Routes, Route} from "react-router-dom"

import NavbarComponent from './Components/NavbarComponent'
import FooterComponent from './Components/FooterComponent'

import HomePage from './Pages/HomePage'
import BeritaDaerah from './Pages/BeritaDaerah'
import LayananDaerah from './Pages/LayananDaerah'
import Dokumen from './Pages/Dokumen'
import ProfilDaerah from './Pages/ProfilDaerah'

function App() {
  return <div>
    <NavbarComponent/>
    <Routes>
      <Route path="/home" Component={HomePage}/>
      <Route path="/berita" Component={BeritaDaerah}/>
      <Route path="/layanan" Component={LayananDaerah}/>
      <Route path="/dokumen" Component={Dokumen}/>
      <Route path="/profil" Component={ProfilDaerah}/>
    </Routes>
    <FooterComponent/>
  </div>
}

export default App

