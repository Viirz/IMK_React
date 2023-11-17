import { Container, Row, Col, NavLink } from "react-bootstrap";
import { beritaTerbaru } from "../data/index";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const HomePage = () => {
  return (
    <div className="navPadding">
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
              <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 100,
                  },
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                {beritaTerbaru.map((data) => {
                  return (
                    <SwiperSlide key={data.id}>
                      <div className="berita-container">
                        <h3 className="judul-berita">{data.judulBerita}</h3>
                        <div className="isi-berita">{data.isiBerita}</div>
                        <Link to={data.path}>Baca Selengkapnya</Link>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomePage;
