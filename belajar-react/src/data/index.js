import malangCityImg from "../assets/Malang_City.png";
import dokumenPdf from "../assets/Logo_PDF.png";
import logoMalang from "../assets/logo_malang.png";

export const navLinks = [
  {
    id: 1,
    path: "kotaMalang/beritaEkonomi",
    text: "Berita Daerah",
  },
  {
    id: 2,
    path: "kotaMalang/layanan",
    text: "Layanan Daerah",
  },
  {
    id: 3,
    path: "kotaMalang",
    Image: malangCityImg,
    imageSize: { width: "70px", height: "70px" },
  },
  {
    id: 4,
    path: "kotaMalang/dokumen",
    text: "Dokumen",
  },
  {
    id: 5,
    path: "kotaMalang/profil",
    text: "Profil Daerah",
  },
];

export const beritaTerbaru = [
  {
    id: 1,
    path: "beritaEkonomi",
    judulBerita:
      "Malang Jadi Target Pasar Rokok Ilegal, Bea Cukai Intensifkan Operasi",
    isiBerita:
      "MALANG — Bea Cukai Malang mengintensifkan Operasi Gempur Rokok Ilegal untuk mencegah meluasnya peredaran rokok ilegal di daerah tersebut. Kepala Kantor Bea Cukai Malang, Gunawan Tri Wibowo, mengatakan untuk menekan peredaran rokok ilegal dan meningkatkan penerimaan negara di bidang cukai, Bea Cukai Malang terus melakukan Operasi Gempur Rokok Ilegal.  “Pada Kamis  (2/11/2023), BC Malang berhasil menindak sebuah mobil jenis SUV yang membawa rokok ilegal tanpa dilekati pita cukai,” katanya, Jumat (3/11/2023). Penindakan ini, kata dia, dilakukan setelah mendapatkan informasi mengenai adanya pengiriman rokok ilegal yang akan dibawa ke Kabupaten Malang.  Tim Bea Cukai Malang menindaklanjutinya dengan melakukan patroli darat pada jalur distribusi rokok ilegal.",
  },
  {
    id: 2,
    path: "beritaKesehatan",
    judulBerita: "Kasus ISPA Naik, Ini Imbauan Kadinkes Kota Malang",
    isiBerita:
      "Blimbing (malangkota.go.id). Suhu atau cuaca panas ekstrem yang melanda saat ini dapat mengganggu daya tahan tubuh dan memicu timbulnya penyakit yang disebabkan oleh debu, seperti halnya Infeksi Saluran Pernafasan Akut (ISPA).",
  },
  {
    id: 3,
    path: "beritaPemerintahan",
    judulBerita:
      "Pendidikan Kota Malang Dapat Dana Alokasi Khusus 223,8 M Dari Kemendikbud Ristek.",
    isiBerita:
      "Pemerintah melalui Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) mengalokasikan Dana Alokasi Khusus (DAK) sebesar Rp223,835 miliar untuk pembangunan pendidikan di kota Malang pada Tahun Anggaran 2023.",
  },
  {
    id: 4,
    path: "beritaPendidikan",
    judulBerita:
      "Penyesuaian Target PAD 2024, Ini Penjelasan Pj Wali Kota Malang",
    isiBerita:
      "Klojen (malangkota.go.id) Dalam Rapat Paripurna DPRD Kota Malang yang digelar pada Jumat (3/11/2023) di Ruang Rapat Paripurna DPRD Kota Malang, target Pendapatan Asli Daerah (PAD) Kota Malang tahun 2024 mengalami penyesuaian. Dari target awal sebesar Rp1,2 triliun menjadi Rp800 miliar atau turun sekitar Rp 400 miliar.",
  },
  {
    id: 5,
    path: "beritaTeknologi",
    judulBerita: "Kota Malang siap turut wujudkan 1000 startup digital.",
    isiBerita:
      "Di tahun 2045, Indonesia juga akan diprediksi menjadi empat negara raksasa di dunia. Maka dari itu mulai sekarang penataan yang baik di semua bidang harus dilakukan. Seperti halnya perekonomian yang kuat dan sumber daya manusia yang berdaya saing.",
  },
];

export const layananKependudukan = [
  {
    id: 1,
    nama: "KARTU KELUARGA",
    Isi: [
      {
        judul: "KK BARU UNTUK PENDUDUK WNI",
        persyaratan: [
          "Mengisi formulir pengajuan KK (F1-01) dengan Tanda tangan kepala keluarga ",
          "Buku nikah/kutipan akta perkawinan atau kutipan akta perceraian ",
          "Surat keterangan pindah/surat keterangan pindah datang bagi penduduk yang pindah dalam wilayah Negara Kesatuan Republik Indonesia",
          "Surat keterangan pindah luar negeri yang diterbitkan oleh DISDUKCAPIL kabupaten/kota bagi wni yang datang dari luar wilayah Negara Kesatuan Republik Indonesia karena pindah",
          "Surat keterangan pengganti tanda identitas bagi penduduk rentan administrasi kependudukan",
          "Petikan keputusan presiden tentang pewarganegaraan dan berita acara pengucapan sumpah atau pernyataan janji setia bagi penduduk WNI yang semula berkewarga negaraan asing atau petikan keputusan menteri yang menyelenggarakan urusan pemerintahan bidang hukum tentang perubahan status kewarganegaraan.",
        ],
        catatan: [""],
      },
      {
        judul: "PENERBITAN KK KARENA PERUBAHAN DATA",
        persyaratan: [
          "Mengisi fomulir pengajuan KK (F1-01) dengan Tanda tangan kepala keluarga ",
          "KK lama",
          "Surat keterangan/bukti perubahan peristiwa kependudukan dan peristiwa penting.",
        ],
        catatan: [""],
      },
      {
        judul: "PENERBITAN KK KARENA HILANG ATAU RUSAK BAGI PENDUDUK WNI",
        persyaratan: [
          "Surat Keterangan hilang dari kepolisian atau KK yang rusak ",
          "KTP-Elektronik",
        ],
        catatan: [""],
      },
    ],
    namaDownload: "Blanko Isian KK dapat di unduh dibawah ini:",
    downloadLink: [
      {
        namaDokumen: "F1-01 formulir biodata keluarga",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2022/09/F1.01-Form-KK-fix.pdf",
      },
      {
        namaDokumen: "Surat Pernyataan Belum Masuk KK Manapun",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/09/SPTJM-KK.pdf",
      },
      {
        namaDokumen:
          "F-1.04 Surat Pernyataan Tidak Memiliki Dokumen Kependudukan",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-1.04_Surat_Pernyataan_Tidak_Memiliki_Dokumen_Kependudukan.pdf",
      },
    ],
  },
  {
    id: 2,
    nama: "KARTU TANDA PENDUDUK",
    Isi: [
      {
        judul: "KTP BARU",
        persyaratan: [
          "Fotocopy KK TERBITAN DUKCAPIL",
          "Fotocopy AKTA KELAHIRAN",
          "Bagi penduduk yang belum berusia 17 (tujuh belas) tahun namun sudah menikah atau sudah kawin atau pernah kawin, melampirkan surat nikah/akta perkawinan",
          "Surat Pindah dalam (dalam wilayah NKRI).",
        ],
        catatan: [""],
      },
      {
        judul: "KTP HILANG DAN RUSAK",
        persyaratan: [
          "Surat kehilangan dari kepolisian",
          "Fotocopy KK TERBITAN DUKCAPIL",
          "Membawa KTP asli untuk penggantian yang rusak.",
        ],
        catatan: [""],
      },
      {
        judul: "PERUBAHAN KTP YANG SALAH / DIRUBAH",
        persyaratan: [
          "Fotocopy KK TERBITAN DUKCAPIL",
          "Fotocopy AKTA KELAHIRAN",
          "Fotocopy IJAZAH",
          "Fotocopy SURAT NIKAH ATAU SURAT CERAI BAGI PERUBAHAN STATUS",
          "Kartu Tanda Penduduk (KTP) asli",
        ],
        catatan: [""],
      },
    ],
  },
  {
    id: 3,
    nama: "KARTU IDENTITAS ANAK",
    Isi: [
      {
        judul: "PERSYARATAN BUAT BARU KIA",
        persyaratan: [
          "Prioritas usia anak O-kurang dari 17 tahun",
          "Fotokopi Akta Kelahiran",
          "Fotokopi KK orangtua/wali",
          "Fotokopi KTP-el kedua orangtua",
          " Pasfoto 2x3 (2 lembar untuk anak umur diatas 5 tahun)",
          "Fotokopi Paspor dan KITAP (Untuk WNA)",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN KIA YANG HILANG",
        persyaratan: [
          "Surat Keterangan Kehilangan dari kepolisian",
          "Fotokopi KK orangtua/wali",
        ],
        catatan: [""],
      },
    ],
    namaDownload: "Formulir dapat diundah di bawah ini:",
    downloadLink: [
      {
        namaDokumen: "Form KIA",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2022/01/FORMULIR_KIA.pdf",
      },
    ],
  },
  {
    id: 4,
    nama: "AKTA KELAHIRAN",
    Isi: [
      {
        judul: "PERSYARATAN KUTIPAN AKTA KELAHIRAN",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Surat keterangan kelahiran dari rumah sakit/puskesmas/fasilitas kesehatan/dokter atau bidan.",
          "Fotokopi Buku nikah/kutipan akta perkawinan.",
          "Fotokopi KK orang tua dan/atau pelapor",
          "Surat pernyataan tanggung jawab mutlak (SPTJM) atas kebenaran data, dengan diketahui oleh dua orang saksi: 5.1. Jika tidak memiliki surat keterangan kelahiran, dan/atau 5.2. Jika tidak memiliki buku nikah/kutipan akta perkawinan tetapi status hubungan dalam KK menunjukkan sebagai suami-istri.",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN KUTIPAN AKTA KELAHIRAN YANG HILANG/RUSAK",
        persyaratan: [
          "Form permohonan.",
          "Fotokopi KK pemohon.",
          "Surat keterangan kehilangan dari kepolisian.",
          "Fotokopi Kutipan akta kelahiran (jika ada).",
          "Kutipan akta kelahiran yang rusak.",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN PERUBAHAN NAMA PADA KUTIPAN AKTA KELAHIRAN",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Salinan penetapan pengadilan negeri.",
          "Kutipan akta kelahiran.",
          "Fotokopi Kartu Keluarga.",
          "Fotokopi Dokumen perjalanan bagi orang asing.",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN PEMBETULAN KUTIPAN AKTA KELAHIRAN",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Dokumen autentik yang menjadi dasar untuk pembetulan.",
          "Kutipan akta kelahiran yang terdapat kesalahan.",
          "Fotokopi KK pemohon.",
          "Surat pernyataan tanggung jawab mutlak (SPTJM).",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN PEMBATALAN KUTIPAN AKTA PENCATATAN SIPIL",
        persyaratan: [
          "Mengisi F-2.01.",
          "FC. Salinan putusan pengadilan yang telah memiliki kekuatan hukum tetap.",
          "Kutipan akta pencatatan sipil yang dibatalkan.",
          "Fotokopi KK.",
          "Surat pernyataan tanggung jawab mutlak (SPTJM).",
        ],
        catatan: [""],
      },
      {
        judul: "Formulir dapat diundah di bawah ini",
        persyaratan: [
          "Blanko F2-01 (Isian Data Kelahiran)",
          "Formulir Pelaporan Kelahiran",
          "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Data Kelahiran",
          "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Sebagai Pasangan Suami Isteri",
          "Surat Pernyataan Tanggung Jawab Mutlak untuk Penerbitan Akta Pencatatan Sipil",
        ],
        catatan: [""],
      },
    ],
    namaDownload: "Blanko Isian KK dapat di unduh dibawah ini:",
    downloadLink: [
      {
        namaDokumen: "Blanko F2-01 (Isian Data Kelahiran)",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2023/05/f201-baru.pdf",
      },
      {
        namaDokumen: "Formulir Pelaporan Kelahiran",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2023/05/FORMULIR-PELAPORAN-KELAHIRAN.pdf",
      },
      {
        namaDokumen:
          "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Data Kelahiran",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.03_Surat_Pernyataan_Tanggung_Jawab_Mutlak_Kebenaran_Data_Kelahiran.pdf",
      },
      {
        namaDokumen:
          "Surat Pernyataan Tanggung Jawab Mutlak Kebenaran Sebagai Pasangan Suami Isteri",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.04_Surat_Pernyataan_Tanggung_Jawab_Mutlak_Kebenaran_Sebagai_Pasangan_Suami_Isteri.pdf",
      },
      {
        namaDokumen:
          "Surat Pernyataan Tanggung Jawab Mutlak untuk Penerbitan Akta Pencatatan Sipil",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/09/SPTJM-CAPIL-1.pdf",
      },
    ],
  },
  {
    id: 5,
    nama: "AKTA KEMATIAN",
    Isi: [
      {
        judul: "PERSYARATAN KEPENGURUSAN AKTA KEMATIAN",
        persyaratan: [
          "Mengisi form F-2.01.",
          "Surat keterangan kematian dari dokter/RS/lurah.",
          "Dokumen kependudukan: KK almarhum (alm), KIP almarhum (alm), KTP suami atau istri almarhum (alm)",
          "SPTJM.",
        ],
        catatan: [
          "Catatan: SPTJM digunakan apabila ada ketidaksesuaian atas data permintaan pemohon.",
          "Berkas permohonan yang lengkap masukkan map berwarna hijau.",
        ],
      },
      {
        judul: "PERSYARATAN KUTIPAN AKTA KEMATIAN YANG HILANG/RUSAK",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi KK pemohon.",
          "Surat keterangan kematian dari kepolisian.",
          "Fotokopi Kutipan akta kematian (jika ada).",
          "Kutipan akta kematian yang rusak.",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN PERUBAHAN NAMA PADA KUTIPAN AKTA KEMATIAN",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Salinan penetapan pengadilan negeri.",
          "Kutipan akta kematian.",
          "Fotokopi Kartu Keluarga.",
          "Fotokopi Dokumen perjalanan bagi orang asing.",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN PEMBETULAN KUTIPAN AKTA KEMATIAN",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Dokumen autentik yang menjadi pendukung untuk pembetulan.",
          "Kutipan akta kematian yang terdapat kesalahan.",
          "Fotokopi KK pemohon.",
          "Surat pernyataan tanggung jawab mutu (SPTJM).",
        ],
        catatan: [""],
      },
      {
        judul: "PERSYARATAN PEMBATALAN KUTIPAN AKTA PENCATATAN SIPIL",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Salinan putusan pengadilan yang telah mempunyai kekuatan hukum tetap.",
          "Kutipan akta pencatatan sipil yang dibatalkan.",
          "Fotokopi KK.",
          "Surat pernyataan tanggung jawab mutu (SPTJM).",
        ],
        catatan: [""],
      },
      {
        judul: "Formulir ",
        persyaratan: [
          "Banko F2-01 Pelaporan Pencatatan Sipil di dalam wilayah NKRI",
          "SPTJM Peristiwa Kematian",
          "SPTJM untuk Penerbitan Akta Pencatatan Sipil",
        ],
        catatan: [""],
      },
    ],
    namaDownload: "Formulir dapat diunduh di bawah ini:",
    downloadLink: [
      {
        namaDokumen:
          "Banko F2-01 Pelaporan Pencatatan Sipil di dalam wilayah NKRI",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2023/05/f201-baru.pdf",
      },
      {
        namaDokumen: "SPTJM Peristiwa Kematian",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/SPTJM-kebenaran-peristiwa-kematian.pdf",
      },
      {
        namaDokumen: "SPTJM untuk Penerbitan Akta Pencatatan Sipil",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/09/SPTJM-CAPIL-1.pdf",
      },
    ],
  },
  {
    id: 6,
    nama: "AKTA PERKAWINAN",
    Isi: [
      {
        judul: "PERSYARATAN KEPENGURUSAN AKTA PERKAWINAN",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Surat keterangan telah terjadinya perkawinan dari pemuka agama atau penghayat kepercayaan terhadap Tuhan Yang Maha Esa.",
          "Pas foto berwarna dan istri ukuran 4x6 1 lembar.",
          "KTP-el asli.",
          "KK asli.",
          "Bagi janda atau duda karena cerai mati, melampirkan fotokopi akta kematian pasangannya.",
          "Bagi janda atau duda karena cerai hidup, melampirkan fotokopi akta perceraian.",
        ],
        catatan: [
          "Catatan: SPTJM digunakan apabila ada ketidaksesuaian data atas permintaan pemohon.",
          "Berkas permohonan yang lengkap masukkan map berwarna merah.",
        ],
      },
    ],
    namaDownload: "Formulir dapat diunduh di bawah ini:",
    downloadLink: [
      {
        namaDokumen: "Formulir Perkawinan",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.01_Pelaporan_Pencatatan_Sipil_di_dalam_wilayah_NKRI-2.pdf",
      },
    ],
  },
  {
    id: 7,
    nama: "AKTA CERAI",
    Isi: [
      {
        judul: "PERSYARATAN KEPENGURUSAN AKTA PERCERAIAN",
        persyaratan: [
          "Mengisi F-2.01.",
          "Fotokopi Salinan putusan perceraian dari pengadilan yang telah mempunyai kekuatan hukum tetap.",
          "Kutipan akta perkawinan asli.",
          "KTP-el asli.",
          "KK asli.",
        ],
        catatan: [
          "Catatan: SPTJM digunakan apabila ada ketidaksesuaian data atas permintaan pemohon.",
        ],
      },
    ],
    namaDownload: "Formulir dapat diunduh di bawah ini:",
    downloadLink: [
      {
        namaDokumen: "Formulir Perceraian",
        linkDokumen:
          "http://dispendukcapil.malangkota.go.id/wp-content/uploads/2021/08/F-2.01_Pelaporan_Pencatatan_Sipil_di_dalam_wilayah_NKRI-2.pdf",
      },
    ],
  },
];

export const beritaEkonomi = [
  {
    id: 1,
    berita:
      "Malang Jadi Target Pasar Rokok Ilegal, Bea Cukai Intensifkan Operasi",
    isiberita:
      "MALANG — Bea Cukai Malang mengintensifkan Operasi Gempur Rokok Ilegal untuk mencegah meluasnya peredaran rokok ilegal di daerah tersebut. Kepala Kantor Bea Cukai Malang, Gunawan Tri Wibowo, mengatakan untuk menekan peredaran rokok ilegal dan meningkatkan penerimaan negara di bidang cukai, Bea Cukai Malang terus melakukan Operasi Gempur Rokok Ilegal.  “Pada Kamis  (2/11/2023), BC Malang berhasil menindak sebuah mobil jenis SUV yang membawa rokok ilegal tanpa dilekati pita cukai,” katanya, Jumat (3/11/2023). Penindakan ini, kata dia, dilakukan setelah mendapatkan informasi mengenai adanya pengiriman rokok ilegal yang akan dibawa ke Kabupaten Malang.  Tim Bea Cukai Malang menindaklanjutinya dengan melakukan patroli darat pada jalur distribusi rokok ilegal.",
  },
  {
    id: 2,
    berita: "Akademisi Paparkan Cara Aman Kredit Dana ke Pinjol",
    isiberita : 'MALANG — Memanfaatkan kredit dari pinjaman online itu memang bisa menjadi alternatif asalkan pemakai tahu aplikasi yang digunakan sudah dilindungi OJK serta penggunaan uang tersebut juga harus dipastikan untuk kebutuhan yang penting dan mendesak. Dosen D3 Perbankan Universitas Muhammadiyah Malang (UMM), Aep Saepuddin, mengatakan masyarakat yang mengambil pinjaman online untuk tetap waspada. Boleh-boleh saja asal tahu dan paham konsekuensi yang harus ditanggung. "Begitupun tanggung jawab untuk melunasi hutangnya tepat waktu," katanya, Kamis (16/11/2023). Pernyataannya itu menanggapi banyak kasus mencuat tentang tentang nasabah yang terlilit hutang pinjaman online belakangan ini. Menurut dia, banyak alasan yang mendorong mereka untuk menjajal pinjol, mulai dari kebutuhan mendadak, kecanduan, dan bahkan hedonisme. Aep mengatakan, dalam sudut pandang ekonomi, pinjam meminjam menjadi sah jika memenuhi syarat yang sudah ditentukan. Saat seseorang mengajukan pinjaman ke bank, di tahap awal biasanya bank akan melakukan analisis 5C (character, capacity, capital, collateral, dan condition) ke nasabahnya. Jika dirasa nasabah tidak memenuhi kriteria ini, maka bank berhak menolak ajuan pinjaman tersebut. Beda halnya dengan pinjol, kata dia, sistem yang digunakan tidak melalui analisis panjang 5C sehingga tidak perlu memakan waktu yang lama. Uang pun segera cair dan masuk ke rekening peminjam. Inilah alasan mengapa banyak masyarakat khususnya anak muda menyukai pinjaman online. "Kebanyakan kasus pinjol hari ini dilakukan oleh anak muda, alasannya beragam tapi intinya mereka tidak bisa mengontrol keuangan," kata pria yang akrab disapa Aep.'
  },
  {
    id: 3,
    berita:
      "Penerimaan Pajak Kanwil DJP Jatim III Tembus Rp26,8 Triliun",
    isiberita : 'BATU — Penerimaan pajak di lingkup Kanwil DJP Jatim III berhasil menembus Rp26,8 triliun atau 80% dari target penerimaan yang mencapai Rp33,3 triliun pada posisi Oktober 2023. Kepala Kanwil DJP Jatim III, Farid Bachtiar, mengatakan secara mtm berarti tumbuh 29,01%, yoy 5,8%, dan c to c 13,11%. “Dengan pencapaian sebesar, perlu kerja keras untuk mencapai target penerimaan sebesar Rp33,3 triliun,” katanya pada Kampanye Simpatik "Spectaxcular 2023" di Balai Among Tani, Batu, Kamis (16/11/2023). Strategi yang dipakai untuk mengejar target penerimaan pajak, kata dia, mencoba mengoptimalkan penerimaan pada lima sektor ekonomi, yakni emas, industri hasil tembakau, perikanan, pertambangan, dan perdagangan. Penerimaan terbesar, yakni dari IHT (industri hasil tembakau). Sedangkan penerimaan dari sektor lain masih relatif kecil. “Tapi kami tetap optimistis dapat ditingkatkan. Intinya, jangan yang gede aja digali, tapi semua potensi juga harus digali,” ujarnya. Kepala Bidang Penyuluhan. Pelayanan, dan Hubungan Masyarakat Kantor Wilayah DJP Jawa Timur 3, Vincentius Sukamto, menambahkan sektor IHT menjadi primadona penerimaan pajak di Kanwil DJP Jatim III. Namun untuk penerimaan pajak dari IHT, kata dia, tidak terlalu dapat diharapkan karena kinerja IHT sedang tidak baik-baiknya. Perusahaan rokok golongan II terpuruk karena berbagai alasan. “Karena harapannya pada pada empat sektor ekonomi lain dipacu penerimaannya,” ucapnya.'
  },
  {
    id: 4,
    berita: "Formasi Empat Pesawat Dilakukan Sebelum Dua Unit Kemudian Jatuh",
    isiberita : 'MALANG - Kecelakaan dua pesawat tempur taktis EMB-314 Super Tucano milik Skadron Udara 21 Lanud Abd Saleh TNI Angkatan Udara di wilayah Kabupaten Pasuruan, Jawa Timur diduga akibat faktor cuaca buruk. Kepala Dinas Penerangan TNI Angkatan Udara (Kadispenau) Marsekal Pertama TNI R. Agung Sasongkojati dalam jumpa pers di Lanud Abd Saleh Malang, Jawa Timur, Kamis (16/11/2023) mengatakan bahwa akibat kondisi cuaca buruk menyebabkan pilot tidak memiliki jarak pandang maksimal. "Sehingga ini murni akibat cuaca kelihatannya, namun, saya belum bisa memastikan karena harus ada penyelidikan lebih lanjut," kata Agung dilansir Antara. Agung menjelaskan, ada empat pesawat yang melakukan sesi latihan formasi rutin dalam penerbangan tersebut. Keempat pesawat itu, bergabung dalam sebuah formasi, dan kemudian terjadi cuaca buruk. Menurutnya, pesawat saat melintas dalam kondisi cuaca buruk tersebut melakukan manuver untuk melepaskan diri. Namun, pada saat melakukan manuver tersebut, terjadi hilang kontak pada pesawat dengan nomor ekor TT-3111 dan TT-3103. "Dua pesawat lain berusaha naik dan ke luar dari awan. Pada saat itu dilakukan kontak, tidak bisa menghubungi. Dan setelah dua pesawat mendarat, mendapat laporan dari aparat teritorial bahwa ada pesawat terjatuh di Kabupaten Pasuruan," katanya.'
  },
  {
    id: 5,
    berita: "KAI Cek Kondisi Jalur Gubeng ke Malang Jelang Nataru",
    isiberita: 'MALANG - PT Kereta Api Indonesia (Persero) Daerah Operasi (Daop) 8 Surabaya melakukan pengecekan jalur Surabaya Gubeng menuju Malang menjelang datangnya libur Natal dan Tahun Baru 2024 serta antisipasi musim hujan. Manager Humas KAI Daop 8 Surabaya Luqman Arif di Kota Malang, Jawa Timur, Rabu (15/11/2023) mengatakan bahwa pengecekan tersebut bertujuan untuk menjaga keselamatan dan kelancaran perjalan kereta api menghadapi musim hujan dan menyambut Natal serta Tahun Baru 2024. "KAI Daop 8 Surabaya akan berusaha semaksimal mungkin untuk mewujudkan perjalanan kereta api yang selamat, aman, dan nyaman bagi pelanggannya," kata Luqman.​​​​​​​Luqman menjelaskan, pada pelaksanaan cek lintas operasional tersebut, KAI Daop 8 Surabaya memastikan satu titik yang masuk dalam daerah pantauan khusus yang berpotensi mengganggu operasional kereta api. Titik tersebut berada di Bangunan Hidmat atau jembatan Nomor 248, antara Stasiun Malang dengan Stasiun Malang Kotalama, yang memiliki potensi terjadi hidrolika, yaitu derasnya arus sungai saat musim hujan. Dalam upaya mengantisipasi potensi yang bisa mengganggu kelancaran perjalanan kereta api tersebut, lanjutnya, KAI Daop 8 Surabaya telah menempatkan AMUS yang merupakan alat bantu darurat berupa karung, bantalan kayu dan beton. Kemudian, pasir, balas, rel cadangan, penambat, plat sambung, perancah, lampu dan generator, terpal, alat potong dan sejumlah peralatan pendukung lainnya. Selain itu, Daop 8 Surabaya juga akan menyiapkan petugas khusus di lokasi tersebut.'
  },
];

export const dokumen = [
  {
    id: 1,
    gambar: dokumenPdf,
    namaDokumen: "APBD (Anggaran Pendapatan Belanja Daerah)",
  },
  {
    id: 2,
    gambar: dokumenPdf,
    namaDokumen: "IPKD (Indeks  Pengelolaan Keuangan Daerah)",
  },
  {
    id: 3,
    gambar: dokumenPdf,
    namaDokumen: "LKPJ (Laporan Keterangan Pertanggungjawaban)",
  },
];

export const profil = [
  {
    id: 1,
    judul: "Visi Misi Pemerintah Kota Malang",
    isi: "VISI : “KOTA MALANG BERMARTABAT”Hakekat Bermartabat:Perwujudan dan Implementasi dari Kewajiban dan Tanggung Jawab Manusia Sebagai Khalifah, Kepada Masyarakat yang Dipimpin. Bermartabat Merujuk Pada Sebuah Nilai Harga Diri Kemanusiaan, yang Memiliki Arti Kemuliaan.Baldatun Thoyibatun Wa Robbun Ghofur:Tercipta Situasi, Kondisi, Tatanan Dan Karakter Yang Mulia Bagi Kota Malang Beserta Segenap Masyarakatnya",
  },
  {
    id: 2,
    judul: "Lambang dan Motto Kota Malang",
    gambar: logoMalang,
    isi: "VISI : “KOTA MALANG BERMARTABAT”Hakekat Bermartabat:Perwujudan dan Implementasi dari Kewajiban dan Tanggung Jawab Manusia Sebagai Khalifah, Kepada Masyarakat yang Dipimpin. Bermartabat Merujuk Pada Sebuah Nilai Harga Diri Kemanusiaan, yang Memiliki Arti Kemuliaan.Baldatun Thoyibatun Wa Robbun Ghofur:Tercipta Situasi, Kondisi, Tatanan Dan Karakter Yang Mulia Bagi Kota Malang Beserta Segenap Masyarakatnya",
    isi1: "VISI : “KOTA MALANG BERMARTABAT”Hakekat Bermartabat:Perwujudan dan Implementasi dari Kewajiban dan Tanggung Jawab Manusia Sebagai Khalifah, Kepada Masyarakat yang Dipimpin. Bermartabat Merujuk Pada Sebuah Nilai Harga Diri Kemanusiaan, yang Memiliki Arti Kemuliaan.Baldatun Thoyibatun Wa Robbun Ghofur:Tercipta Situasi, Kondisi, Tatanan Dan Karakter Yang Mulia Bagi Kota Malang Beserta Segenap Masyarakatnya",
  },
  {
    id: 3,
    judul: "Sejarah Kota Malang",
    isi: "VISI : “KOTA MALANG BERMARTABAT”Hakekat Bermartabat:Perwujudan dan Implementasi dari Kewajiban dan Tanggung Jawab Manusia Sebagai Khalifah, Kepada Masyarakat yang Dipimpin. Bermartabat Merujuk Pada Sebuah Nilai Harga Diri Kemanusiaan, yang Memiliki Arti Kemuliaan.Baldatun Thoyibatun Wa Robbun Ghofur:Tercipta Situasi, Kondisi, Tatanan Dan Karakter Yang Mulia Bagi Kota Malang Beserta Segenap Masyarakatnya",
  },
  {
    id: 4,
    judul: "Program Pembangunan Kota Malang",
    isi: "VISI : “KOTA MALANG BERMARTABAT”Hakekat Bermartabat:Perwujudan dan Implementasi dari Kewajiban dan Tanggung Jawab Manusia Sebagai Khalifah, Kepada Masyarakat yang Dipimpin. Bermartabat Merujuk Pada Sebuah Nilai Harga Diri Kemanusiaan, yang Memiliki Arti Kemuliaan.Baldatun Thoyibatun Wa Robbun Ghofur:Tercipta Situasi, Kondisi, Tatanan Dan Karakter Yang Mulia Bagi Kota Malang Beserta Segenap Masyarakatnya",
  },
];

export const popUpNav = [
  // Menu Berita
  {
    id: 1,
    no: 1,
    buttonText: "Ekonomi",
    path: "kotaMalang/beritaEkonomi",
  },
  {
    id: 1,
    no: 2,
    buttonText: "Kesehatan",
    path: "kotaMalang/beritaKesehatan",
  },
  {
    id: 1,
    no: 3,
    buttonText: "Pemerintahan",
    path: "kotaMalang/beritaPemerintahan",
  },
  {
    id: 1,
    no: 4,
    buttonText: "Pendidikan",
    path: "kotaMalang/beritaPendidikan",
  },
  {
    id: 1,
    no: 5,
    buttonText: "Teknologi",
    path: "kotaMalang/beritaTeknologi",
  },

  // Menu Layanan
  {
    id: 2,
    no: 1,
    buttonText: "Kependudukan",
    path: "kotaMalang/layananKependudukan",
  },
  {
    id: 2,
    no: 2,
    buttonText: "Kesehatan",
    path: "kotaMalang/layananKesehatan",
  },

  // Menu Dokumen
  {
    id: 4,
    no: 1,
    buttonText: "Dokumen",
    path: "kotaMalang/dokumen",
  },

  // Menu Profil
  {
    id: 5,
    no: 1,
    buttonText: "Profil",
    path: "kotaMalang/profil",
  },
];
