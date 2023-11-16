import { Container, Row, Col } from "react-bootstrap";
import { beritaTerbaru } from "../data/index";

const HomePage = () => {
  return (
    <div>
      <header className="w-100 min-vh-100 homePage">
        <Container>
          <div>
            <h1 className="judul-kesatu"> OFFICIAL WEBSITE </h1>
            <h1 className="judul-kedua"> - KOTA MALANG - </h1>
            <div className="search-box">
              <input type="text" placeholder="Cari..." />
              <button type="submit">🔍</button>
            </div>
          </div>
        </Container>
      </header>
      <div className="w-100 content">
        <Container>
          <div>
            <h1 className="berita-content"> Berita Terbaru </h1>
            <Row>
              {beritaTerbaru.map((item) => (
                <Col key={item.id}>
                  <div className="berita-container">
                    <h3 className="judul-berita">{item.judulBerita}</h3>
                    <div className="isi-berita">{item.isiBerita}</div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
