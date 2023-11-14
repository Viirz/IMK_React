import { Container, Row, Col } from "react-bootstrap";
import { beritaTerbaru } from "../data/index";

const HomePage = () => {
  return (
    <div>
      <header className="w-100 min-vh-100 homePage">
        <Container>
          <div className="text-container">
            <h1>Offisial Website</h1>
            <h1>Kota Malang</h1>
            <div className="search-box">
              <input type="text" placeholder="Cari..." />
              <button type="submit">Cari</button>
            </div>
          </div>
        </Container>
      </header>
      <div>
        <Container>
          <div>
            <h1>Berita Terbaru</h1>
            <Row>
              {beritaTerbaru.map((item) => (
                <Col key={item.id}>
                  <div className="berita-container">
                    <h3>{item.judulBerita}</h3>
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
