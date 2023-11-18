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
    namaDownload: "",
    downloadLink: [
      {
        namaDokumen: "",
        linkDokumen: "",
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


// Berita Ekonomi Page

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
    isiberita:
      'MALANG — Memanfaatkan kredit dari pinjaman online itu memang bisa menjadi alternatif asalkan pemakai tahu aplikasi yang digunakan sudah dilindungi OJK serta penggunaan uang tersebut juga harus dipastikan untuk kebutuhan yang penting dan mendesak. Dosen D3 Perbankan Universitas Muhammadiyah Malang (UMM), Aep Saepuddin, mengatakan masyarakat yang mengambil pinjaman online untuk tetap waspada. Boleh-boleh saja asal tahu dan paham konsekuensi yang harus ditanggung. "Begitupun tanggung jawab untuk melunasi hutangnya tepat waktu," katanya, Kamis (16/11/2023). Pernyataannya itu menanggapi banyak kasus mencuat tentang tentang nasabah yang terlilit hutang pinjaman online belakangan ini. Menurut dia, banyak alasan yang mendorong mereka untuk menjajal pinjol, mulai dari kebutuhan mendadak, kecanduan, dan bahkan hedonisme. Aep mengatakan, dalam sudut pandang ekonomi, pinjam meminjam menjadi sah jika memenuhi syarat yang sudah ditentukan. Saat seseorang mengajukan pinjaman ke bank, di tahap awal biasanya bank akan melakukan analisis 5C (character, capacity, capital, collateral, dan condition) ke nasabahnya. Jika dirasa nasabah tidak memenuhi kriteria ini, maka bank berhak menolak ajuan pinjaman tersebut. Beda halnya dengan pinjol, kata dia, sistem yang digunakan tidak melalui analisis panjang 5C sehingga tidak perlu memakan waktu yang lama. Uang pun segera cair dan masuk ke rekening peminjam. Inilah alasan mengapa banyak masyarakat khususnya anak muda menyukai pinjaman online. "Kebanyakan kasus pinjol hari ini dilakukan oleh anak muda, alasannya beragam tapi intinya mereka tidak bisa mengontrol keuangan," kata pria yang akrab disapa Aep.',
  },
  {
    id: 3,
    berita: "Penerimaan Pajak Kanwil DJP Jatim III Tembus Rp26,8 Triliun",
    isiberita:
      'BATU — Penerimaan pajak di lingkup Kanwil DJP Jatim III berhasil menembus Rp26,8 triliun atau 80% dari target penerimaan yang mencapai Rp33,3 triliun pada posisi Oktober 2023. Kepala Kanwil DJP Jatim III, Farid Bachtiar, mengatakan secara mtm berarti tumbuh 29,01%, yoy 5,8%, dan c to c 13,11%. “Dengan pencapaian sebesar, perlu kerja keras untuk mencapai target penerimaan sebesar Rp33,3 triliun,” katanya pada Kampanye Simpatik "Spectaxcular 2023" di Balai Among Tani, Batu, Kamis (16/11/2023). Strategi yang dipakai untuk mengejar target penerimaan pajak, kata dia, mencoba mengoptimalkan penerimaan pada lima sektor ekonomi, yakni emas, industri hasil tembakau, perikanan, pertambangan, dan perdagangan. Penerimaan terbesar, yakni dari IHT (industri hasil tembakau). Sedangkan penerimaan dari sektor lain masih relatif kecil. “Tapi kami tetap optimistis dapat ditingkatkan. Intinya, jangan yang gede aja digali, tapi semua potensi juga harus digali,” ujarnya. Kepala Bidang Penyuluhan. Pelayanan, dan Hubungan Masyarakat Kantor Wilayah DJP Jawa Timur 3, Vincentius Sukamto, menambahkan sektor IHT menjadi primadona penerimaan pajak di Kanwil DJP Jatim III. Namun untuk penerimaan pajak dari IHT, kata dia, tidak terlalu dapat diharapkan karena kinerja IHT sedang tidak baik-baiknya. Perusahaan rokok golongan II terpuruk karena berbagai alasan. “Karena harapannya pada pada empat sektor ekonomi lain dipacu penerimaannya,” ucapnya.',
  },
  {
    id: 4,
    berita: "Formasi Empat Pesawat Dilakukan Sebelum Dua Unit Kemudian Jatuh",
    isiberita:
      'MALANG - Kecelakaan dua pesawat tempur taktis EMB-314 Super Tucano milik Skadron Udara 21 Lanud Abd Saleh TNI Angkatan Udara di wilayah Kabupaten Pasuruan, Jawa Timur diduga akibat faktor cuaca buruk. Kepala Dinas Penerangan TNI Angkatan Udara (Kadispenau) Marsekal Pertama TNI R. Agung Sasongkojati dalam jumpa pers di Lanud Abd Saleh Malang, Jawa Timur, Kamis (16/11/2023) mengatakan bahwa akibat kondisi cuaca buruk menyebabkan pilot tidak memiliki jarak pandang maksimal. "Sehingga ini murni akibat cuaca kelihatannya, namun, saya belum bisa memastikan karena harus ada penyelidikan lebih lanjut," kata Agung dilansir Antara. Agung menjelaskan, ada empat pesawat yang melakukan sesi latihan formasi rutin dalam penerbangan tersebut. Keempat pesawat itu, bergabung dalam sebuah formasi, dan kemudian terjadi cuaca buruk. Menurutnya, pesawat saat melintas dalam kondisi cuaca buruk tersebut melakukan manuver untuk melepaskan diri. Namun, pada saat melakukan manuver tersebut, terjadi hilang kontak pada pesawat dengan nomor ekor TT-3111 dan TT-3103. "Dua pesawat lain berusaha naik dan ke luar dari awan. Pada saat itu dilakukan kontak, tidak bisa menghubungi. Dan setelah dua pesawat mendarat, mendapat laporan dari aparat teritorial bahwa ada pesawat terjatuh di Kabupaten Pasuruan," katanya.',
  },
  {
    id: 5,
    berita: "KAI Cek Kondisi Jalur Gubeng ke Malang Jelang Nataru",
    isiberita:
      'MALANG - PT Kereta Api Indonesia (Persero) Daerah Operasi (Daop) 8 Surabaya melakukan pengecekan jalur Surabaya Gubeng menuju Malang menjelang datangnya libur Natal dan Tahun Baru 2024 serta antisipasi musim hujan. Manager Humas KAI Daop 8 Surabaya Luqman Arif di Kota Malang, Jawa Timur, Rabu (15/11/2023) mengatakan bahwa pengecekan tersebut bertujuan untuk menjaga keselamatan dan kelancaran perjalan kereta api menghadapi musim hujan dan menyambut Natal serta Tahun Baru 2024. "KAI Daop 8 Surabaya akan berusaha semaksimal mungkin untuk mewujudkan perjalanan kereta api yang selamat, aman, dan nyaman bagi pelanggannya," kata Luqman.​​​​​​​Luqman menjelaskan, pada pelaksanaan cek lintas operasional tersebut, KAI Daop 8 Surabaya memastikan satu titik yang masuk dalam daerah pantauan khusus yang berpotensi mengganggu operasional kereta api. Titik tersebut berada di Bangunan Hidmat atau jembatan Nomor 248, antara Stasiun Malang dengan Stasiun Malang Kotalama, yang memiliki potensi terjadi hidrolika, yaitu derasnya arus sungai saat musim hujan. Dalam upaya mengantisipasi potensi yang bisa mengganggu kelancaran perjalanan kereta api tersebut, lanjutnya, KAI Daop 8 Surabaya telah menempatkan AMUS yang merupakan alat bantu darurat berupa karung, bantalan kayu dan beton. Kemudian, pasir, balas, rel cadangan, penambat, plat sambung, perancah, lampu dan generator, terpal, alat potong dan sejumlah peralatan pendukung lainnya. Selain itu, Daop 8 Surabaya juga akan menyiapkan petugas khusus di lokasi tersebut.',
  },
];


// Berita Kesehatan Page
export const beritaKesehatan = [
  {
    id: 1,
    berita:
      "Kasus ISPA Naik, Ini Imbauan Kadinkes Kota Malang",
    isiberita:
    'Blimbing (malangkota.go.id), Suhu atau cuaca panas ekstrem yang melanda saat ini dapat mengganggu daya tahan tubuh dan memicu timbulnya penyakit yang disebabkan oleh debu, seperti halnya Infeksi Saluran Pernafasan Akut (ISPA). Kasus ISPA di Kota Malang saat ini meningkat. Dari data yang tercatat di Dinas Kesehatan (Dinkes) Kota Malang, menunjukkan sepanjang Januari hingga Juli 2023 terdapat 43 ribu yang telah terdiagnosa mengalami ISPA. Kondisi tersebut lebih tinggi dari pada tahun 2022 lalu yang hanya mencapai 56 ribu selama 1 tahun. Demikian yang disampaikan Kepala Dinkes Kota Malang dr. Husnul Muarif, Selasa (26/9/2023). Menurutnya, hal tersebut diakibatkan karena saat ini telah memasuki kondisi cuaca panas atau cuaca ekstrem, sehingga banyak debu-debu yang '
  },
  {
    id: 2,
    berita: "GERAKAN NASIONAL “AKSI BERGIZI” PECAHKAN REKOR MURI",
    isiberita:
    'Kegiatan Aksi Bergizi Kota Malang dilaksanakan melalui koordinasi multi sektor antara Dinas Kesehatan Kota Malang, Dinas Pendidikan, dan Kementerian Agama Kota Malang. Lokasi khusus diadakannya Gerakan Nasional Aksi Bergizi Kota Malang yaitu SMP Negeri 1 Kota Malang dan MTs. Negeri 2 Kota Malang. Kegiatan ini yang dilaksanakan pada hari Rabu tanggal 26 Oktober 2022 yang diikuti oleh siswa siswi. Meskipun sempat mengalami cuaca hujan, rangkaian utama dalam kegiatan ini tetap berjalan yaitu berupa senam bersama, sarapan bersama, Flashmob TTD, konsumsi TTD bersama bagi siswi (remaja putri), edukasi interaktif Aksi Bergizi, serta pengisian Aplikasi CERIA. Gerakan Nasional Aksi Bergizi secara serentak se-Indonesia yang dapat diikuti melalui media zoom. Konsumsi TTD dan pengisian Aplikasi CERIA diikuti oleh siswi putri kelas VII, VIII, dan IX sejumlah 433 siswi SMP Negeri 1 Kota Malang dan sejumlah 206 siswi MTs Negeri 2 Kota Malang. Sedangkan untuk kegiatan lainnya tetap diikuti oleh seluruh siswa siswi. Kegiatan Aksi Bergizi disambut antusias oleh pihak sekolah. Diwujudkan melalui dukungan terlaksananya kegiatan Aksi Bergizi serta partisipasi dari semua siswa dan siswi. Partisipasi dalam kegiatan Aksi Bergizi tidak hanya dilakukan saat kegiatan itu saja, melainkan pasca kegiatan yang diwujudkan dalam komitmen melanjutkan gerakan Aksi Bergizi dan pengisian Aplikasi CERIA. Dinas Kesehatan Kota Malang melalui Puskesmas telah mendistribusikan TTD bagi tiap sekolah di wilayah kerjanya agar dapat dikonsumsi setiap minggunya hingga April 2023 kedepan. Aplikasi CERIA merupakan aplikasi yang digunakan untuk meningkatkan kebutuhan dan kepatuhan konsumsi TTD, serta meningkatkan penerapan asupan makanan bergizi seimbang untuk mencegah timbulnya anemia pada remaja putri, sebagai sosialisasi pentingnya mengonsumsi TTD remaja putri di kalangan peserta didik, sekolah mendorong pemantauan konsumsi TTD melalui aplikasi CERIA, serta dukungan lintas sektor dalam peningkatan kesehatan remaja putri khususnya penurunan anemi pada remaja. Selain komitmen dalam melaksanakan Aksi Bergizi , juga terdapat lomba konten untuk memeriahkan Gerakan Nasional Aksi Bergizi yang diadakan Kementerian Kesehatan yang dapat diikuti seluruh siswa sekolah. [BK]'
  },
  {
    id: 3,
    berita: "PUNCAK PERINGATAN HARI GIZI 2023 KOTA MALANG",
    isiberita:
    'Dalam rangka menyambut Hari Gizi Nasional (HGN) yang jatuh pada tanggal 25 Januari 2023, Dinas Kesehatan Kota Malang melaksanakan berbagai rangkaian kegiatan dalam memeriahkan HGN dan berkolaborasi dengan forum kesehatan dan organisasi profesi. Tanggal 11 Februari 2023 bertepatan dengan acara puncak perayaan Hari Gizi Nasional 2023, mengadakan rangkaian acara seperti  vaksinasi covid 19, edukasi kesehatan, jebol perintis PTM, skrining resiko stunting balita, inspeksi sanitasi pangan jajanan, dan juga bazar makanan dan minuman. Bertempat di sekitar museum Brawijaya terdapat tim kesehatan linkungan bersama Forum Masyarakat Kota Sehat. Mereka melakukan kegiatan inspeksi sanitasi pangan jajanan. Inspeksi sanitasi pangan ini bertujuan untuk melihat kualitas bahan dan pangan serta kebersihan lingkungan sesuai standar atau belum. Petugas akan memberikan label kepada pedagang yang lolos inspeksi, mereka juga mendapatkan edukasi seputar kualitas, jenis makanan dan minuman sesuai standar kesehatan. Inspeksi yang dilakukan ini sebelumnya dilakukan tanpa memberitahu pedagang di sekitar wilayah car free day alias inspeksi dadakan. Dari sekitar 105 pedagang kaki lima (PKL), 100 PKL telah diberi label bahwa dagangan sesuai dengan standar kesehatan.'
  },
  {
    id: 4,
    berita: "HIPERTENSI : DARI ORANG DEWASA, IBU HAMIL, HINGGA USIA TUA",
    isiberita:
    'Hipertensi atau tekanan darah tinggi adalah peningkatan tekanan darah sistolik lebih dari 140 mmHg dan tekanan darah diastolik lebih dari 90 mmHg pada dua kali pengukuran dengan selang waktu lima menit dalam keadaan cukup istirahat/ tenang (InfoDATIN, Kemenkes RI). Penelitian membuktikan bahwa semakin tinggi tekanan darah seseorang, semakin tinggi pula risiko orang tersebut terkena penyakit jantung, gagal ginjal, dan stroke. Awal dari semua penyakit komplikasi itu yaitu kehilangan keseimbangan. Ketika tekanan darah tinggi naik, maka seseorang akan kesulitan berjalan karena tengkuk, leher, dan punggung akan terasa berat dan pegal. Ini disebabkan oleh kadar kolesterol yang langsung menyerang syaraf keseimbangan.'
  },
  {
    id: 5,
    berita: "ERADIKASI FRAMBUSIA KOTA MALANG : SAATNYA INDONESIA BEBAS FRAMBUSIA",
    isiberita:
    'Indonesia masih mempunyai penyakit-penyakit kuno salah satunya adalah penyakit frambusia yang muncul sejak sebelum Masehi. Namun demikian, saat ini prevalensi Frambusia di Indonesia mulai menurun. Untuk itu, khususnya di Kota Malang akan mengikuti penilaian untuk sertifikasi eradikasi Frambusia atau zero case frambusia. Sertifikasi Eradikasi Frambusia diserahkan kepada Kabupaten/Kota non Endemis (Bebas) Frambusia diberikan pada daerah yang telah direkomendasikan oleh provinsi serta penilaian oleh Komisi Eradikasi Frambusia'
  },
];

// Berita Kesehatan Page
export const beritaPemerintahan = [
  {
    id: 1,
    berita:
      "Penyesuaian Target PAD 2024, Ini Penjelasan Pj Wali Kota Malang",
    isiberita:
    'Klojen (malangkota.go.id) – Dalam Rapat Paripurna DPRD Kota Malang yang digelar pada Jumat (3/11/2023) di Ruang Rapat Paripurna DPRD Kota Malang, target Pendapatan Asli Daerah (PAD) Kota Malang tahun 2024 mengalami penyesuaian. Dari target awal sebesar Rp1,2 triliun menjadi Rp800 miliar atau turun sekitar Rp 400 miliar. Perubahan ini mengacu kepada UU No 33 tahun 2004 tentang Perimbangan Keuangan Antara Pemerintah Pusat dan Pemerintah Daerah. Dari aturan ini, beberapa poin direvisi oleh Kementerian Keuangan dan sampai saat ini Kota Malang belum memiliki peraturan daerah (perda) perpajakan sebagai turunan dari kebijakan tersebut. Pernyataan itu disampaikan Penjabat (Pj) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM usai mengikuti rapat paripurna. Dari kondisi itu, dikatakannya sejumlah potensi pendapatan pajak tidak bisa dioptimalkan, seperti pajak kos atau rumah sewa yang diprediksi akan ditiadakan. Selain itu, peningkatan tarif pajak Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB) tidak bisa dilakukan. Menyikapi hal ini Pemkot Malang akan mengoptimalkan potensi pajak lain, seperti pajak hotel, restoran, reklame dan parkir.'
  },
  {
    id: 2,
    berita: "BKAD Kota Malang Sosialisasikan Tata Cara Pelaksanaan Sewa BMD",
    isiberita:
    'Sekretaris Daerah (Sekda) Kota Malang Erik Setyo Santoso, ST, MT mengungkapkan bahwa Peraturan Wali Kota Malang nomor 24 tahun 2021 ini sudah berlaku sejak tiga tahun lalu.”Kenapa perlu diinformasikan? Karena di lapangan, pemahaman tentang izin pemakaian, izin sewa, ini rasanya ada yang perlu kami luruskan,” jelas Erik dalam sambutannya. Dikatakannya selama ini masih ada yang menganggap jika izin sewa setara dengan sertifikat tanah dan pada saatnya nanti bisa dikuasai. Setelah menempati lupa membayar retribusi, maka dari itu perlu diinformasikan terkait hak dan risikonya. “Saat ini BMD menjadi isu strategis yang menjadi amanat dari Pemerintah Pusat, dimana aset barang milik negara itu Pemerintan Kota Malang didampingi aparat penegak hukum, KPK, Kejaksaan Negeri mendapat amanat untuk mengamankan dan menertibkan asset BMD,” tegas Erik. Nantinya, BMD berpotensi sebagai salah satu sumber pembiayaan pelaksanaan pemerintah daerah dan juga sumber pendapatan asli daerah (PAD). Jadi aset BMD jika tidak dibutuhkan untuk pelayanan publik bisa dimanfaatkan, bisa digunausahakan untuk mengoptimalkan PAD.“PAD nantinya dikembalikan kepada warga masyarakat dalam bentuk pembangunan-pembangunan, seperti untuk pembangunan jalan, jembatan, saluran irigasi, pelayanan publik, dan lain sebagainya,” terang Erik lagi. Untuk itu menurutnya harus ada persamaan persepsi serta langkah dan tindakan semua pihak agar lebih memahami peraturan perundang-udangan yang berkaitan dengan pengelolaan BMD, khususnya tentang tata cara pelaksaan sewa. “Kota Malang telah memiliki regulasinya terkait dengan penyewaan BMD yang saat ini terus disosialisasikan. Hal ini jua untuk membantu kami mengamankan aset daerah agar bisa bermanfaat maksimal bagi masyarakat,” tegas Erik. (cah/yon)'
  },
  {
    id: 3,
    berita: "Pj. Wali Kota Malang Ajak Sambut Pesta Demokrasi Dengan Riang Gembira",
    isiberita:
    'Klojen (malangkota.go.id) – Pesta Demokrasi Serentak akan dilaksanakan pada tahun 2024 mendatang. Namanya pesta maka harus disambut dengan riang gembira dan kebersamaan. Berbeda pilihan itu hal yang biasa, jangan sampai karena berbeda pilihan terjadi sebuah konflik. Pada dasarnya perbedaan itu indah dan menjadi bagian penting dalam demokrasi. Hal itu yang ditekankan Penjabat (Pj.) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM saat membuka kegiatan Dialog Kebangsaan di Hotel Tychi Kota Malang, Senin (13/11/2023). Kegiatan yang digawangi Kecamatan Sukun ini mengusung tema ‘Peningkatan Wawasan Kebangsaan Dalam Mewujudkan Kota Malang yang Aman, Tertib dan Rukun. “Mari kita bersatu dan bersinergi agar tidak ada gesekan. Kapan hari kita sudah mengumpulkan 570 caleg. Kita ingin ciptakan kondusivitas dan ini untuk kepentingan bangsa dan negara. Dari langkah ini nanti masyarakat yang akan merasakan,” imbuh Wahyu. Dikatakannya, di negeri ini terdiri dari berbagai macam suku, ras dan agama. Inilah Indonesia dan Kota Malang yang tetap dan selalu bersatu dalam bingkai Bineka Tunggal Ika. “Kita juga mempunyai Salam Satu Jiwa yang harus dimaknai dengan baik dan menjadi pemersatu,” jelas Wahyu. Apabila suatu daerah kondusif maka pembangunan akan berjalan dengan baik, rakyatnya makmur, sehat dan maju. “Maka dari itu, pesta demokrasi yang damai, lancar dan bermartabat, akan mewujudkan beberapa hal tersebut,” sambungnya. “Sebagai warga negara yang baik dan bijak, tentu akan turut menyukseskan Pesta Demokrasi guna memilih dan menentukan calon pemimpin bangsa ini. Maka dari itu, jadilah warga masyarakat yang demikian, karena masa depan bangsa ini ditentukan oleh rakyat,” pungkasnya. (say/yon)'
  },
  {
    id: 4,
    berita: "Ciptakan Tenaga Kerja Terampil, Diskopindag Gelar Pelatihan Melinting",
    isiberita:
    'Sukun (malangkota.go.id) – Pemerintah Kota (Pemkot) Malang melalui Dinas Koperasi, Perindustrian, dan Perdagangan (Diskopindag) Kota Malang menggelar Pelatihan Melinting untuk Industri Hasil Tembakau di Pabrik PT Sinar Mahkota Mas, Bandulan Kecamatan Sukun, Senin (13/11/2023). Dalam pelatihan yang diikuti 700 peserta ini, Penjabat (Pj.) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM menyampaikan kegiatan ini adalah sebagai bentuk pembinaan dan peningkatan kapasitas Sumber Daya Manusia (SDM) sehingga tercipta tenaga terampil yang siap kerja. “Ini merupakan wujud kepedulian dari Pemkot Malang untuk senantiasa meningkatkan wawasan, pengetahuan dan potensi serta kinerja para pekerja di industri rokok guna menghasilkan produk yang lebih baik. Terlebih tenaga kerja untuk melinting ini oleh industri rokok sekarang banyak dibutuhkan. Jadi tadi ada kuota banyak yang dibutuhkan oleh industri rokok yang ada di Kota Malang ini,” urai Wahyu. Lebih lanjut Pj. Wali Kota Malang berharap melalui pelatihan yang dialokasikan dari Dana Bagi Hasil Cukai Hasil Tembakau (DBHCHT) ini menjadi salah satu upaya dalam menekan angka pengangguran dengan melatih dan mendidik tenaga kerja baru. Peserta akan diajarkan cara melinting tembakau dengan baik dan benar, karana melinting tembakau bukan hanya sekadar suatu pekerjaan, tetapi seni yang memerlukan keterampilan dan dedikasi. “Pelatihan ini dapat meningkatkan SDM yang mereka sedang dibutuhkan. Mereka belum memiliki keterampilan apapun, akhirnya mereka kita beri bantuan pelatihan melinting ini agar nanti keterampilannya dapat dimanfaatkan oleh industri rokok. Selain itu kita juga bisa menekan angka pengangguran dengan memberikan pelatihan ini. Jadi ada simbiosis mutualisame,” jelasnya. Selaras dengan hal itu, pelatihan ini juga menjadi salah satu upaya mewujudkan kemampuan pelaku industri dalam menghasilkan produk yang berkualitas. Untuk itu, Wahyu mengajak para peserta agar manfaatkan sebaik mungkin pelatihan ini. Menurutnya seiring berjalannya waktu, tuntutan kualitas, efisiensi, dan keamanan dalam produksi tembakau semakin meningkat. Oleh karena itu, penting untuk terus memperbaharui pengetahuan dan keterampilan.'
  },
  {
    id: 5,
    berita: "Pj. Wali Kota Malang Ajak Teladani Semangat Para Pahlawan",
    isiberita:
    'Lowokwaru (malangkota.go.id) – Perjuangan dan semangat para pahlawan yang rela berkorban bagi nusa dan bangsa harus terus digelorakan dan menjadi inspirasi bagi generasi muda Kota Malang. Begitu salah satu yang disampaikan Penjabat (Pj.) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM usai melakukan ziarah dan tabur bunga bersama jajaran Forkopimda di Taman Makam Pahlawan (TMP) Suropati Kota Malang, Jumat (10/11/2023). Pj. Wali Kota Malang Wahyu Hidayat mengungkapkan di era perkembangan teknologi, informasi dan komunikasi seperti sekarang ini memberikan dampak positif dan negatif. Oleh karena itulah menurutnya sangat penting untuk menjaga dan mengajak generasi muda untuk senantiasa cinta tanah air. “Di Peringatan Hari Pahlawan ini kami ingin mengajak semua pihak, khususnya generasi muda untuk membawa Indonesia lebih baik lagi,” ajak Wahyu. Disampaikannya, perjuangan saat ini tak kalah berat dengan perjuangan di masa penjajahan. Meskipun saat ini yang dihadapi bukanlah perang melawan musuh yang secara fisik berhadapan, tapi saat ini musuhnya tidak terlihat, yakni teknologi yang jika tidak disikapi secara bijak akan membawa dampak negatif terhadap moral. “Meningkatkan ekonomi kreatif dan ekonomi kerakyatan merupakan bagian dari perjuangan modern. Kita sudah memiliki MCC, yang bisa menjadi episentrum ekonomi kreatif,” jelasnya. Dengan keberadaan MCC yang mewadahi 17 subsektor ekraf, disebutkannya ini menjadi local heroes-nya ekraf dan menjadikan MCC sebagai pusat kota AI, kota cerdas. Oleh karena itulah ia berpesan bahwa sangat penting untuk meneladani semangat pahlawan terdahulu sebagai pendiri bangsa. “Kerja keras, pantang menyerah untuk memecahkan apapun kesulitan dan tantangan, itu adalah semangat kepahlawan yang harus terus dipupuk dan diteladani,” pungkas Wahyu. (cah/yon)'
  },
];

// Berita Pendidikan Page
export const beritaPendidikan = [
  {
    id: 1,
    berita:
      "Tanamkan Jiwa Tanggap Bencana Sejak Dini, Kel. Tunjungsekar Gelar Pelatihan Tanggap Bencana Untuk Anak",
    isiberita:
    'Lowokwaru (malangkota.go.id) – Dalam rangka menanamkan pengetahuan kebencanaan sejak dini, Kelurahan Tunjungsekar menggelar kegiatan Sosialisasi dan Pelatihan Tanggap Bencana bagi Anak-Anak di wilayah Kelurahan Tunjungsekar di Aula Serba Guna Kantor Kelurahan Tunjungsekar, Kamis (16/11/2023). Lurah Tunjungsekar Subhan Effendi, ST menyebutkan kegiatan yang diikuti oleh 79 siswa pendidikan anak usia dini (PAUD) ini dilakukan sebagai upaya untuk menanamkan sikap tanggap bencana sejak dini kepada anak-anak di wilayah Tunjungsekar. “Dengan kegiatan ini, diharapkan nantinya anak-anak ini mengerti apa yang harus dilakukan ketika bencana gempa terjadi,” jelasnya. Menambahkan, Kepala Bidang Pencegahan dan Kesiapsiagaan Badan Penanggulangan Bencana Daerah (BPBD) Kota Malang Dra. Khabibah, MM mengatakan bahwa tujuan kegiatan ini adalah untuk melatih anak-anak terkait dengan kesiapsiagaan bencana terutama gempa bumi. Hal ini mengingat bencana gempa bumi cukup sering terjadi di wilayah Malang sehingga anak-anak perlu dibekali dengan pengetahuan untuk mengantisipasinya. “Kami dari BPBD memang sering mendapat undangan terkait antisipasi dan penanggulangan bencana. Tujuannya agar pengetahuan akan antisipasi bencana ini bisa dimiliki oleh masyarakat secara luas, tak terkecuali anak-anak,” ujar Khabibah. Khabibah berharap agar semua pihak bisa memiliki pengetahuan dasar akan hal-hal apa yang seharusnya dilakukan sebelum, saat, dan setelah bencana terjadi. Hal ini untuk meminimalisir dampak yang mungkin diakibatkan oleh terjadinya bencana itu sendiri. “Harapannya semua lapisan masyarakat, mulai dari anak-anak hingga orang tua memiliki pemahaman tentang bagaimana mengatasi adanya bencana yang mungkin terjadi sehingga mampu menanggulanginya,” tutupnya. (iu/yon)'
  },
  {
    id: 2,
    berita: "Nostalgia Pj. Wali Kota Malang di SDN Bareng 3",
    isiberita:
    'Klojen (malangkota.go.id) – Penjabat (Pj.) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM melakukan kunjungan kerja dalam rangka untuk melihat perkembangan sarana prasarana, gedung, dan proses pendidikan di SDN Bareng 3, Selasa (14/11/2023). Kunjungan ini ternyata menjadi ajang nostalgia bagi Pj. Wali Kota Malang Wahyu Hidayat, karena ternyata beliau memiliki kenangan tersendiri di SDN Bareng 3, tepatnya di tahun 1979. Diceritakannya bahwa saat kelas tiga sampai kelas enam dirinya mengenyam pendidikan di SDN Bareng 3 setelah pindah dari Jakarta. Dan kebetulan rumahnya tepat di samping sekolah. “Ketika dulu saya masih sekolah di sini, saya merasa gedung sekolah ini besar. Apa mungkin waktu itu karena masih kecil ya,” kelakar Wahyu. Setelah berkeliling sekolah, Wahyu menyampaikan bahwa perkembangan sekolah ini sudah sangat bagus. Kualitas pendidikannya dari dulu hingga sekarang masih terjaga dengan baik. “Sekolah tetap terjaga, kualitasnya juga semakin baik, dan saat ini sarana dan prasaranya juga baik. Prestasinya juga semakin banyak,” ungkap Wahyu. Pada kesempatan ini Pj. Wali Kota Malang secara simbolis menyerahkan bantuan seragam sekolah yang merupakan program Disdikbud Kota Malang. Sementara itu Kepala Disdikbud Kota Malang Suwarjana mengungkapkan kunjungan kerja ini dilakukan untuk melihat proses pembelajaran di lembaga pendidikan di Kota Malang.'
  },
  {
    id: 3,
    berita: "Pj. Wali Kota Malang Lepas Kontingen Raimuna Jatim 2023",
    isiberita:
    'Malang, (malangkota.go.id) – Penjabat (Pj.) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM secara resmi melepas Kontingen Raimuna Daerah Jawa Timur XIV Tahun 2023 Gerakan Pramuka Kwartir Cabang (Kwarcab) Kota Malang, Jumat (10/11/2023). Raimuna tahun ini diadakan pada pada tanggal 16 hingga 21 November 2023 bertempat di Bumi Perkemahan Pantai Prigi, Kabupaten Trenggalek. Pelepasan Kontingen Raimuna Jatim XIV Tahun 2023 yang beranggotakan 48 orang ini secara simbolis dilakukan dengan pemakaian rompi dan topi kontingen yang diberikan oleh Pj Wali Kota kepada dua orang perwakilan regu. Dalam sambutannya, Wahyu menyampaikan berbagai pesannya bagi para anggota kontingen. Hal yang menjadi penekanannya adalah bahwa perwakilan Kwarcab Kota Malang dapat mengikuti dan melakukan hal terbaik dalan Raimuna Jatim 2023 ini. “Adik-adik sekalian membawa nama baik Kota Malang. Pesan saya, selalu lakukan hal-hal yang terbaik. Semoga ada hal positif yang dapat dibawa pulang yang nanti bisa dimanfaatkan dan berdampak pada masyarakat Kota Malang,” tutur Pj. Wali Kota Malang yang sekaligus adalah Ketua Majelis Cabang Gerakan Pramuka Kota Malang. Lebih lanjut Wahyu menyampaikan, Kwarcab Kota Malang dipandang mampu dan memiliki potensi untuk berprestasi. Berbagai prestasi telah diraih oleh Pramuka Kwarcab Kota Malang selama ini dan tentu akan menjadi motivasi untuk terus berprestasi. Karenanya, Wahyu juga berharap kontingen Kota Malang  juga mampu berprestasi dalam ajang Raimuna Jatim tahun ini.'
  },
  {
    id: 4,
    berita: "P5 di SMAN 6 Tanamkan Kepedulian Lingkungan",
    isiberita:
    'Kedungkandang (malangkota.go.id) – SMP Negeri 6 Kota Malang melaksanakan program Proyek Penguatan Profil Pelajar Pancasila (5P) yang merupakan cara baru untuk menanamkan nilai Pancasila kepada pelajar. Salah satu langkah yang dilakukan adalah dengan mengedukasi pelajar tentang lingkungan hidup dengan menghadirkan narasumber pegiat lingkungan dari Bank Sampah Eltari M-230, Selasa (3/10/2023). Dua orang narasumber yang dihadirkan yakni Ketua Bank Sampah Eltari M-230 Efrida Hartini dan Yusup Karyawan. Efrida Hartini mengungkapkan senang sekali dengan animo pelajar SMAN 6 Kota Malang dengan adanya kegiatan edukasi terkait lingkungan ini. Di sekolah ini, dikatakannya siswanya sudah memiliki kesadaran yang baik dalam menjaga dan melestarikan lingkungan. “Masing-masing kelas di SMAN 6 Kota Malang sudah dapat memilah sampah sendiri-sendiri, dikumpulkan, dijual, kemudian uangnya digunakan untuk kas kelas. Ini tentu menggembirakan,” cerita Efrida, Selasa (3/10/2023). Ditambahkannya, melalui OSIS pendalaman terkait bank sampah tentang pengelolaan lingkungan yang dapat membawa kemanfaatan dapat diperoleh. “Selain sampah, di SMAN 6 ini juga memiliki potensi besar yani tanaman obat keluarga (Toga),” kata Efrida.'
  },
  {
    id: 5,
    berita: "Pendidikan Kota Malang Dapat Dana Alokasi Khusus 223,8 M Dari Kemendikbud Ristek.",
    isiberita:
    'Pemerintah melalui Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi (Kemendikbudristek) mengalokasikan Dana Alokasi Khusus (DAK) sebesar Rp223,835 miliar untuk pembangunan pendidikan di kota Malang pada Tahun Anggaran 2023. "Alokasi tersebut terdiri atas Rp5,457 miliar DAK Fisik dan Rp218,377 miliar DAK Nonfisik," disampaikan Pelaksana Tugas Direktur Kepala Sekolah, Pengawas Sekolah, dan Tenaga Kependidikan (Plt. Dir. KSPSTK) Kemendikbudristek, Kasiman, dalam kegiatan Kunjungan Kerja Masa Reses Komisi X Dewan Perwakilan Rakyat Republik Indonesia (DPR RI) di Kantor Wali Kota Malang, Rabu (4/10). Lebih lanjut, Kasiman menjelaskan Kemendikburistek berharap alokasi tersebut dapat dioptimalkan untuk mendukung penyelenggaraan program-program prioritas nasional bidang pendidikan, di antaranya Program Sekolah Penggerak, Implementasi Kurikulum Merdeka, Asesmen Nasional, Pemajuan Kebudayaan, dan lain-lain. Adapun alokasi DAK Nonfisik Pendidikan untuk Kota Malang dialokasikan untuk Bantuan Operasional Satuan Pendidikan, Tunjangan Guru, serta Bantuan Operasional untuk Penyelenggaraan Museum dan Cagar Budaya. Sebagaimana diketahui bersama, DAK merupakan dana yang bersumber dari pendapatan APBN yang dialokasikan kepada Daerah tertentu dengan tujuan untuk membantu mendanai kegiatan khusus yang merupakan urusan Daerah dan sesuai dengan prioritas nasional. Dalam sambutannya, Ketua Rombongan Komisi X DPR RI, Hasanudin Wahid, mengungkapkan kunjungan kerja ke Kota Malang di masa reses bertujuan untuk menyerap gagasan dan aspirasi pemangku kepentingan bidang pendidikan, kebudayaan, ekonomi kreatif, kepemudaan dan olahraga, serta arsip dan perpustakaan. "Kami melakukan pengawasan program-program pemerintah yang dilaksanakan di Kota Malang. Terutama terkait peraturan perundang-undangan, kemudian tentu saja untuk anggaran, dan sebagainya. Kami datang kali ini dalam rangka menyerap seluruh aspirasi, gagasan, usulan-usulan dari masyarakat Kota Malang," katanya.'
  },
];

export const beritaTeknologi = [
  {
    id: 1,
    berita:
      "Penyesuaian Target PAD 2024, Ini Penjelasan Pj Wali Kota Malang",
    isiberita:
    'Klojen (malangkota.go.id) – Dalam Rapat Paripurna DPRD Kota Malang yang digelar pada Jumat (3/11/2023) di Ruang Rapat Paripurna DPRD Kota Malang, target Pendapatan Asli Daerah (PAD) Kota Malang tahun 2024 mengalami penyesuaian. Dari target awal sebesar Rp1,2 triliun menjadi Rp800 miliar atau turun sekitar Rp 400 miliar. Perubahan ini mengacu kepada UU No 33 tahun 2004 tentang Perimbangan Keuangan Antara Pemerintah Pusat dan Pemerintah Daerah. Dari aturan ini, beberapa poin direvisi oleh Kementerian Keuangan dan sampai saat ini Kota Malang belum memiliki peraturan daerah (perda) perpajakan sebagai turunan dari kebijakan tersebut. Pernyataan itu disampaikan Penjabat (Pj) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM usai mengikuti rapat paripurna. Dari kondisi itu, dikatakannya sejumlah potensi pendapatan pajak tidak bisa dioptimalkan, seperti pajak kos atau rumah sewa yang diprediksi akan ditiadakan. Selain itu, peningkatan tarif pajak Bea Perolehan Hak atas Tanah dan Bangunan (BPHTB) tidak bisa dilakukan. Menyikapi hal ini Pemkot Malang akan mengoptimalkan potensi pajak lain, seperti pajak hotel, restoran, reklame dan parkir.'
  },
  {
    id: 2,
    berita: "Wujud Komitmen Perlindungan Siber, Pemkot Malang Luncurkan MalangKota-CSIRT",
    isiberita:
    'Blimbing (malangkota.go.id) – Sebagai bentuk antisipasi dan pencegahan akan maraknya ancaman gangguan siber yang terjadi, Pemerintah Kota (Pemkot) Malang melalui Dinas Komunikasi dan Informatika (Diskominfo) Kota Malang bekerjasama dengan Badan Siber dan Sandi Negara (BSSN) secara resmi meluncurkan Malang Kota Computer Security Incident Response Team (CSIRT) di Auditorium Malang Creative Center (MCC), Rabu (8/11/2023). Penjabat (Pj) Wali Kota Malang Dr. Ir. Wahyu Hidayat, MM yang hadir pada acara ini mengungkapkan, Pemkot Malang saat ini terus berupaya mewujudkan tata kelola pemerintahan yang baik melalui sistem elektronik, atau yang biasa disebut dengan Sistem Pemerintah Berbasis Elektronik (SPBE). Melalui dibentuknya MalangKota-CSIRT ini Wahyu berharap nantinya akan tercipta ruang siber milik Pemkot Malang yang aman dan kondusif sehingga meningkatkan kepercayaan masyarakat dan terciptanya tujuan Pemerintah Pusat yaitu mensejahterakan masyarakat di ruang siber selain juga tentunya dapat membatu mendorong pertumbuhan ekonomi digital di Kota Malang. “Alhamdulillah dengan pendampingan dari BSSN dan Diskominfo Provinsi Jawa Timur, semua program yang berkaitan dengan elektronik bisa berjalan sesuai dengan harapan kita,” ujar Wahyu. Meski begitu, tidak dapat dipungkiri dalam SPBE juga terdapat sisi gelap yang mengintai sehingga akan menimbukan sebuah tantangan baru yaitu munculnya ancaman terhadap kemanan sistem yang dimiliki. Oleh karena itu menurut Wahyu penting untuk membentuk sebuah tim yang nantinya bertugas untuk melakukan pengawasan keamanan siber terhadap sistem elektronik yang dimiliki oleh Pemkot Malang.'
  },
  {
    id: 3,
    berita: "Bangga! Game Karya Arek Malang Ini Mendunia",
    isiberita:
    'Lowokwaru (malangkota.go.id) – Clay Game Studio, sebuah perusahaan studio pengembangan game yang berbasis di Griyashanta, Kelurahan Mojolangu Kecamatan Lowokwaru, Kota Malang, pada 28 September 2023 lalu berhasil merilis game terbaru mereka, Faerie Afterlight di platform Steam dan Nintendo Switch. Game Designer, Programmer, Project Manager Clay Game Studio, Ilham Hasymi Effendi menyebutkan game ini sebelumnya sudah memiliki prototype pertama yang pernah dibuat di tahun 2018. Namun kemudian baru benar-benar bisa dikembangkan secara serius pada tahun 2020 dengan bantuan program Indigo Game Startup Incubation (IGSI). Ilham mengungkapkan melalui IGSI inilah akhirnya Clay Game Studio bertemu dengan publisher asal Amerika bernama Mastiff Games yang tertarik untuk mempublish game Faerie Afterlight. “Berawal prototype kami yang berjudul The Lightseeker, game ini pernah kami bawa ke Level Up KL di Malaysia dan GTR Pre-Acceleration Program di Thailand, kami mendapatkan feedback dan ilmu yang bermanfaat. Sepulang dari event tersebut, kami upgrade prototype tersebut dan berganti judul menjadi Faerie Afterlight,” jelasnya menceritakan, Kamis (26/10/2023). Game Faerie Afterlight ini dikatakan Ilham terinspirasi dari filosofi dan kesenian rakyat Indonesia. Selain itu juga terinspirasi oleh banyak game-game lain seperti Hollow Knight, Ori Series, Gris, Rayman, Super Marian dan lain-lain. Saat ini, Faerie Afterlight sudah banyak dimainkan oleh para gamers di seluruh dunia. 30 persen pengguna game ini berasal dari Amerika Serikat.'
  },
  {
    id: 4,
    berita: "Tingkatkan Efektivitas Pertanian Perkotaan, Dispangtan Luncurkan Smart Farming",
    isiberita:
    'Blimbing (malangkota.go.id) – Pemerintah Kota (Pemkot) Malang terus berupaya menggalakkan kegiatan urban farming yang menjadi salah satu strategi untuk memenuhi kebutuhan pangan hingga pada kelompok kecil di masyarakat. Untuk menjaga keberlanjutan kegiatan urban farming tersebut, Dinas Ketahanan Pangan dan Pertanian (Dispangtan) Kota Malang meluncurkan penggunaan Internet of Things (IoT) berupa aplikasi Smart Farming di Kelompok Tani Urban Farming Mak Cemput Kelurahan Arjowinangun, Kecamatan Kedungkandang Kota Malang, Selasa (13/9/2023). Kepala Dispangtan Kota Malang, Slamet Husnan Hariadi, SP menuturkan bahwa smart farming yang dikembangkan di Kota Malang ini menggunakan teknologi digital dan informasi untuk meningkatkan efisiensi, produktivitas, dan keberlanjutan dalam produksi pertanian perkotaan. Slamet menjabarkan dalam aplikasi smart farming ini ada beberapa kegiatan pertanian yang dapat dilakukan dari jarak jauh, di antaranya adalah smart irigasi dan dan smart lighting. Melalui penggunaan aplikasi ini, kegiatan urban farming yang dilakukan oleh masyarakat diharapkan memperoleh hasil produksi yang berkualitas. “Aplikasi yang kita gunakan ini berbasis android, jadi di manapun kita berada, kita bisa mengendalikan, kapan harus menyalakan lampu, kapan harus menghentikan kegiatan penyiraman. Sehingga secara perhitungan akan lebih efektif, baik dalam penggunaan air maupun penggunaan daya listrik. Nah ini adalah konsep dasar dari penggunaan smart farming, smart irigasi, dan smart lighting,” beber Kadispangtan. Lebih lanjut, Slamet menyebutkan bahwa teknologi IoT ini nantinya dapat digunakan di seluruh kelompok tani yang melaksanakan urban farming yang juga dapat terintegrasi dengan kegiatan peternakan dan perikanan. “Untuk tahap awal, aplikasi ini akan digunakan di tujuh kelompok urban farming yang telah dianggarkan pada perubahan APBD tahun 2023. Ke depan, dengan ketersediaan anggaran yang ada di 2024, monggo (silakan_red) masyarakat melalui kelompok tani bisa mengajukan ke Dispangtan untuk bisa mendapatkan aplikasi ini,” terangnya'
  },
  {
    id: 5,
    berita: "Gelar Safari Jurnalistik, PWI Ajak Jurnalis Akrab Dengan AI",
    isiberita:
    'Blimbing (malangkota.go.id) – Persatuan Wartawan Indonesia (PWI) Malang Raya menggelar Safari Jurnalistik yang mengangkat tema ‘Meningkatkan Kompetensi Wartawan di Era AI (Artificial Intelligence/Kecerdasan Buatan)’ di Hotel Santika Kota Malang, Kamis (3/8/2023). Wakil Wali Kota Malang Ir. H. Sofyan Edi Jarwoko yang hadir sekaligus membuka kegiatan memberikan apresiasis atas terselenggaranya Safari Jurnalistik ini. “Kegiatan seperti ini masih sangat langka, dengan materi terkait Artificial Intelligence. Saya kira ini adalah yang pertama di Kota Malang. Ini sangat bagus untuk menambah wawasan dan pengetahuan teman teman wartawan untuk menghadapi tuntutan perkembangan zaman,” jelasnya. Melalui Safari Jurnalistik ini wartawan akan mendapatkan wawasan-wawasan baru agar semakin siap menghadapi tantangan di era perkembangan teknologi seperti saat ini, termasuk memasuki era AI. “Ini penting dilakukan agar wartawan lebih menyiapkan diri sebaik mungkin,” tuturnya. Sementara itu Ketua Bidang Pendidikan PWI Pusat Nurjaman Mochtar mengatakan saat ini eranya sudah berubah dan memasuki dunia baru. Perkembangan teknologi saat ini, yaitu AI menjadi kenyataan yang ada untuk membantu pekerjaan manusia. “Dengan berubahnya zaman tentunya pola pikir dan mindset pekerja media juga harus berubah, harus terus berinovasi,” tutur Nurjaman.'
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
    isi1: "Misi : Meningkatkan akses dan kualitas pendidikan, kesehatan dan layanan dasar lainnya bagi semua warga.Mewujudkan kota produktif dan berdaya saing berbasis ekonomi kreatif, keberlanjutan dan keterpaduan. Mewujudkan kota yang rukun dan toleran berazaskan keberagaman dan keberpihakan terhadap masyarakat rentan dan gender. Memastikan kepuasan masyarakat atas layanan pemerintah yang tertib hukum, profesional dan akuntabel."
  },
  {
    id: 2,
    judul: "Lambang dan Motto Kota Malang",
    gambar: logoMalang,
    isi: "Arti Warna Lambang : Merah Putih, adalah lambang bendera nasional Indonesia. Kuning, berarti keluhuran dan kebesaran. Hijau adalah kesuburan. Biru Muda berarti Kesetiaan pada Tuhan, Negara dan Bangsa. Segilima berbentuk perisai bermakna semangat perjuangan kepahlawanan, kondisi geografis, pegunungan, serta semangat membangun untuk mencapai masyarakat yang adil dan makmur berdasarkan Pancasila",
    isi1: 'Motto “MALANG KUCECWARA” Artinya: ”Tuhan menghancurkan yang bathil, menegakkan yang benar”',
  },
  {
    id: 3,
    judul: "Sejarah Kota Malang",
    isi: "Kota Malang seperti kota-kota lain di Indonesia pada umumnya baru tumbuh dan berkembang setelah hadirnya pemerintah kolonial Belanda. Pada masa itu tata ruang kota dirancang sedemikian rupa oleh pemerintahan kolonial dengan tujuan utama memenuhi kebutuhan keluarga-keluarga Belanda dan bangsa Eropa lainnya. Sementara penduduk pribumi harus puas bertempat tinggal di pinggiran kota dengan fasilitas yang kurang memadai. Pada Tahun 1879, di Kota Malang mulai beroperasi kereta api dan sejak itu Kota Malang berkembang dengan pesatnya. Berbagai kebutuhan masyarakat semakin meningkat terutama akan ruang gerak melakukan berbagai kegiatan. Akibatnya terjadilah perubahan tata guna tanah, daerah yang terbangun bermunculan tanpa terkendali. Perubahan fungsi lahan mengalami perubahan sangat pesat, seperti dari fungsi pertanian menjadi perumahan dan industri. ",
    isi1: "Penataan ruang Kota Malang pada masa itu tidak lepas dari karya Herman Thomas Karsten. Arsitek kelahiran Amsterdam tahun 1884 ini diangkat menjadi penasihat perencanaan Kota Malang pada 1929. Karsten terlibat aktif dalam rencana pengembangan kota yang disebut Bouwplan I-VIII yang di dalamnya menyiapkan antisipasi perkembangan hingga 25 tahun ke depan. Salah satu karyanya adalah Ijen Boulevard yang hingga kini menjadi salah satu landmark heritage Kota Malang. Sejalan perkembangan tersebut di atas, urbanisasi terus berlangsung dan kebutuhan masyarakat akan perumahan meningkat di luar kemampuan pemerintah, sementara tingkat ekonomi urbanis sangat terbatas, yang selanjutnya akan berakibat timbulnya perumahan-perumahan liar yang pada umumnya berkembang di sekitar daerah perdagangan, di sepanjang jalur hijau, sekitar sungai, rel kereta api dan lahan-lahan yang dianggap tidak bertuan. Selang beberapa lama kemudian daerah itu menjadi perkampungan, dan degradasi kualitas lingkungan hidup mulai terjadi dengan segala dampak bawaannya. Gejala-gejala itu cenderung terus meningkat, dan sulit dibayangkan apa yang terjadi seandainya masalah itu diabaikan."
  },
  {
    id: 4,
    judul: "Program Pembangunan Kota Malang",
    isi: '1. Menjamin Akses dan Kualitas Pendidikan, Kesehatan dan Layanan Dasar Lainnya Bagi Semua Warga. pembangunan diprioritaskan pada peningkatan kualitas sumberdaya manusia dengan meningkatkan kualitas, aksesibilitas, dan pemerataan pelayanan pendidikan dan kesehatan serta meningkatkan akses pelayanan publik dasar bagi semua warga Kota Malang. 2. Mewujudkan Kota Produktif dan Berdaya Saing Berbasis Ekonomi Kreatif, Keberlanjutan dan Keterpaduan, pembangunan diprioritaskan pada peningkatan produktivitas dan daya saing daerah serta kesejahteraan dan meningkatkan pembangunan infrastruktur dan daya dukung Kota yang terpadu dan berkelanjutan, tertib penataan ruang serta berwawasan lingkungan.',
    isi1: '3. Mewujudkan Kota yang Rukun dan Toleran Berasaskan Keberagaman dan Keberpihakan terhadap Masyarakat Rentan dan Gender, penyelenggaraan pemerintah diprioritaskan pada peningkatan kerukunan antar umat beragama dengan menjunjung tinggi keragaman budaya dan toleransi antar umat beragama dan perlindungan terhadap masyarakat rentan, penyetaraan gender, serta kerukunan sosial. 4.  Memastikan Kepuasan Masyarakat atas Layanan Pemerintah yang Tertib Hukum, Profesional dan Akuntabel, pembangunan diprioritaskan untuk mewujudkan pelaksanaan reformasi birokrasi dan kualitas, pelayanan publik yang profesional, akuntabel dan berorientasi pada kepuasan masyarakat.'
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
