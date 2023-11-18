import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import { layananKesehatan } from "../data/layanandaerah";
import KesehatanComponent from "../Components/KesehatanComponent";

function LayananDaerah_Kesehatan() {
  const defaultPopupData = layananKesehatan.filter((item) => item.id === 1);
  const [showPopup, setShowPopup] = useState(true);
  const [popupData, setPopupData] = useState(defaultPopupData);

  const handlePopupToggle = (itemId) => {
    console.log(itemId)
    const selectedPopupData = layananKesehatan.filter(
      (item) => item.id === itemId
    );
      
    setPopupData(selectedPopupData);
    setShowPopup(true);
  };

  // const handleClickOutside = (event) => {
  //   if (
  //     !event.target.closest(".popUpBar") &&
  //     !event.target.closest(".textLink")
  //   ) {
  //     setShowPopup(false);
  //     setPopupData([]);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

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
          type: "bullets",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {layananKesehatan.map((item) => (
          <SwiperSlide key={item.id}>
            <div style={{ position: "relative", background: "black" }}>
              <img
                src={item.gambar}
                alt={item.nama}
                style={{ width: "100%", cursor: "pointer" }}
                onClick={() => {
                  handlePopupToggle(item.id);
                  console.log(item.id); // Pindahkan console.log ke dalam fungsi handlePopupToggle
                }}
              />

              <div
                onClick={() => handlePopupToggle(item.id)}
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
      {showPopup && (
        <KesehatanComponent
          data={popupData}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default LayananDaerah_Kesehatan;
