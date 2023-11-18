import { Swiper, SwiperSlide } from "swiper/react";
import { layananKesehatan } from "../data/layanandaerah";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function LayananDaerahKesehatan() {

  return (
    <div>
      <div style={{ height: 500 }}></div>
      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
          type: "bullets", // menampilkan titik-titik sebagai indikator halaman
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {layananKesehatan.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ position: "relative" }}>
              <img
                src={item.gambar}
                alt={item.nama}
                style={{ width: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  background: "rgba(0,0,0,0.5)",
                  color: "white",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                {item.nama}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LayananDaerahKesehatan;
