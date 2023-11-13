// Header.jsx
import './Header.css'; // Import file CSS untuk styling
import malangCityLogo from 'C:/Users/ACER/OneDrive/Pictures/Bahan_Web_IMK/Malang_City.jpg';

function Header() {
  return (
    <header className="header-container">
      <button className="header-button">Berita Daerah</button>
      <button className="header-button">Layanan Daerah</button>
      <img src={malangCityLogo} alt="Malang City" className="header-logo" />
      <button className="header-button">Dokumen</button>
      <button className="header-button">Profil Daerah</button>
    </header>
  );
}

export default Header;
