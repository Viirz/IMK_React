import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { beritaEkonomi } from "../data";

const BeritaDaerah_Ekonomi = () => {
  return (
    <div className="beritaPage">
      Berita Ekonomi Daerah
      <Container>
        <Row className="">
          <Col className="bacaBerita" style={{ overflowY: "scroll" }}>
            <div className="BacaBerita">
              <p>
                Di tahun 2045, Indonesia juga akan diprediksi menjadi empat
                negara raksasa di dunia. Maka dari itu mulai sekarang penataan
                yang baik di semua bidang harus dilakukan. Seperti halnya
                perekonomian yang kuat dan sumber daya manusia yang berdaya
                saing. Beberapa hal itu ditekankan Wali Kota Malang Drs. H.
                Sutiaji dalam Roadshow Gerakan Nasional 1000 Startup Digital
                yang mengangkat tema ‘Sinergitas Pentahelix Dalam Peningkatan
                Inovasi Startup Digital Jawa Timur di Gedung Malang Creative
                Center (MCC)‘, Kamis (25/05/2023). Pria berkacamata itu
                menegaskan bahwa pertumbuhan ekonomi kreatif di Kota Malang
                sangat baik. “Pada tahun 2022 (pertumbuhan ekraf) sebesar 4,7
                persen, saat ini sudah di atas 10 persen. Begitu juga para
                pelakunya, dari 87 pelaku ekonomi kreatif, saat ini sudah 200
                lebih. Capaian ini dikarenakan berbagai kemudahan dan sarana
                prasarana yang memadai. Seperti halnya keberadaan MCC ini,”
                jelasnya. Sebagai bentuk kontribusi untuk terwujudnya Gerakan
                Nasional 1000 Startup Digital, diungkapkannya bahwa saat ini di
                Kota Malang ada 63 perguruan tinggi yang memiliki jurusan
                teknologi informatika. 16 diantaranya telah menjalin kerja sama
                dengan Pemerintah Kota (Pemkot) Malang untuk membuat kurikulum
                aplikasi dan game.
              </p>
            </div>
          </Col>
          <Col>
            <div style={{ overflowY: "scroll", height: "100vh" }}>
              {beritaEkonomi.map((item) => (
                <Col key={item.id}>
                  <div className="beritaKanan">
                    <p>{item.berita}</p>
                  </div>
                </Col>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeritaDaerah_Ekonomi;
