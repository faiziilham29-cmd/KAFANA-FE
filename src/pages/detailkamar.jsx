import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DetailKamar() {
  const navigate = useNavigate();

  // 1. Data Pilihan Properti (Kos Putra, Kos Putri, Kontrakan)
  const daftarProperti = [
    {
      id: "KOS-BAROKAH-01",
      namaProperti: "Kos Putra Barokah Standar",
      kategori: "Kos Putra",
      alamat: "Jl. Sukabirus No. 42, Dayeuhkolot, Bandung (Dekat Kampus Telkom)",
      hargaPerBulan: 750000,
      biayaLayanan: 10000,
      deposit: 100000,
      gambarUtama: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80"
      ],
      deskripsi: "Kamar kos nyaman dan tenang khusus putra, cocok untuk mahasiswa atau pekerja. Lingkungan bersih dengan akses 24 jam, dekat dengan pusat kuliner dan minimarket.",
      fasilitasKamar: [
        "Kasur (Spring Bed)",
        "Lemari Pakaian",
        "Meja & Kursi Belajar",
        "Jendela & Ventilasi Bagus",
        "Stopkontak & WiFi High-Speed"
      ],
      fasilitasBersama: [
        "Kamar Mandi Luar (Clean & Maintained)",
        "Dapur Bersama + Kompor",
        "Kulkas Bersama",
        "Area Parkir Motor Luas",
        "Jemuran Pakaian"
      ],
      aturanKos: [
        "Akses 24 Jam untuk Penghuni",
        "Dilarang membawa hewan peliharaan",
        "Tamu lawan jenis dilarang masuk kamar",
        "Jaga ketenangan setelah pukul 22.00 WIB"
      ]
    },
    {
      id: "KOS-MAWAR-02",
      namaProperti: "Kos Putri Mawar Asri",
      kategori: "Kos Putri",
      alamat: "Jl. Sukabirus No. 15, Dayeuhkolot, Bandung (Akses Gerbang Utama)",
      hargaPerBulan: 850000,
      biayaLayanan: 10000,
      deposit: 100000,
      gambarUtama: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80"
      ],
      deskripsi: "Kos khusus putri yang sangat aman dan tenang. Dilengkapi sistem keamanan gerbang auto-lock, CCTV 24 jam, serta lingkungan yang bersih dan rapi.",
      fasilitasKamar: [
        "Kamar Mandi Dalam",
        "AC / Pendingin Ruangan",
        "Kasur Spring Bed & Bantal",
        "Lemari Baju 2 Pintu",
        "Meja Rias & Belajar"
      ],
      fasilitasBersama: [
        "Dapur Bersama Lengkap",
        "WiFi 100Mbps Ultra-Fast",
        "Dispenser Air Minum",
        "Mesin Cuci Bersama",
        "CCTV 24 Jam & Security"
      ],
      aturanKos: [
        "Khusus Penghuni Putri",
        "Tamu Laki-laki hanya di Ruang Tamu Depan",
        "Dilarang merokok di area kos",
        "Pintu Gerbang dikunci pukul 23.00 WIB"
      ]
    },
    {
      id: "KONTRAKAN-HOUSE-03",
      namaProperti: "Kontrakan House 2 Kamar",
      kategori: "Kontrakan",
      alamat: "Gg. PGA No. 8, Dayeuhkolot, Bandung (Lingkungan Asri)",
      hargaPerBulan: 2500000,
      biayaLayanan: 20000,
      deposit: 500000,
      gambarUtama: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      galeri: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80"
      ],
      deskripsi: "Rumah kontrakan minimalis 1 lantai dengan 2 kamar tidur pribadi. Sangat cocok untuk sewa kelompok teman/mahasiswa atau keluarga kecil.",
      fasilitasKamar: [
        "2 Kamar Tidur Utama",
        "Ruang Tamu & Ruang Keluarga Luas",
        "Dapur Pribadi + Sink",
        "Kamar Mandi Pribadi",
        "Teras Depan Rumah"
      ],
      fasilitasBersama: [
        "Garasi Mobil & Motor Pribadi",
        "Kanopi Parkiran",
        "Air PDAM & Sumur Lancar",
        "Listrik PLN 1300W (Token)"
      ],
      aturanKos: [
        "Wajib menyerahkan fotokopi KTP",
        "Menjaga kebersihan lingkungan sekitar",
        "Dilarang membuat kegaduhan pesta malam",
        "Iuran sampah & lingkungan ditanggung penyewa"
      ]
    }
  ];

  // 2. State Properti yang Sedang Dipilih (Default: Kos Putra / Index 0)
  const [selectedProperti, setSelectedProperti] = useState(daftarProperti[0]);

  // State Pilihan Durasi Sewa
  const [durasiSewa, setDurasiSewa] = useState(1);

  // Kalkulasi Total Biaya Sesuai Properti Aktif
  const subtotalSewa = selectedProperti.hargaPerBulan * durasiSewa;
  const totalPembayaran = subtotalSewa + selectedProperti.biayaLayanan + selectedProperti.deposit;

  // Format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  // Kirim data ke Halaman Pembayaran
  const handleLanjutPembayaran = () => {
    const dataDikirim = {
      namaProperti: selectedProperti.namaProperti,
      tipeKamar: selectedProperti.kategori,
      hargaSewa: `${formatRupiah(selectedProperti.hargaPerBulan)} / bln`,
      durasiSewa: `${durasiSewa} Bulan`,
      tanggalMasuk: "01 Agustus 2026",
      biayaLayanan: formatRupiah(selectedProperti.biayaLayanan),
      deposit: formatRupiah(selectedProperti.deposit),
      totalBayar: formatRupiah(totalPembayaran),
      gambar: selectedProperti.gambarUtama
    };

    navigate('/pembayaran', { state: { itemTransaksi: dataDikirim } });
  };

  return (
    <div className="min-h-screen bg-[#1A1613] text-white font-sans antialiased pb-20">
      
      {/* HEADER PAGE & SELEKTOR PROPERTI */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        
        {/* TOMBOL KEMBALI */}
        <button 
          onClick={() => navigate(-1)}
          className="bg-[#FAF8F5] text-[#1A1613] px-4 py-2 font-semibold text-xs tracking-widest uppercase shadow-md hover:bg-[#B48A35] hover:text-white transition-all mb-6 cursor-pointer"
        >
          ← KEMBALI
        </button>

        {/* PILIHAN TAB (KOS PUTRA, KOS PUTRI, KONTRAKAN) */}
        <div className="flex flex-wrap gap-3 mb-6">
          {daftarProperti.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedProperti(item)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border ${
                selectedProperti.id === item.id
                  ? 'bg-[#B48A35] text-[#1A1613] border-[#B48A35] shadow-lg'
                  : 'bg-[#14110F] text-stone-300 border-[#8C6943]/40 hover:border-[#B48A35]'
              }`}
            >
              {item.kategori}
            </button>
          ))}
        </div>

        {/* INFO PROPERTI AKTIF */}
        <span className="text-xs tracking-widest text-[#B48A35] uppercase font-bold block">
          {selectedProperti.kategori}
        </span>
        <h1 className="text-3xl font-serif tracking-wide text-stone-100">{selectedProperti.namaProperti}</h1>
        <p className="text-xs text-stone-400 mt-1">📍 {selectedProperti.alamat}</p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
        
        {/* KOLOM KIRI: FOTO, DESKRIPSI, FASILITAS, ATURAN */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* GALERI FOTO */}
          <div className="space-y-3">
            <img 
              src={selectedProperti.gambarUtama} 
              alt={selectedProperti.namaProperti} 
              className="w-full h-80 object-cover border border-[#8C6943]/30 shadow-lg"
            />
            <div className="grid grid-cols-3 gap-3">
              {selectedProperti.galeri.map((img, index) => (
                <img key={index} src={img} alt="Foto Properti" className="h-24 w-full object-cover border border-[#8C6943]/20" />
              ))}
            </div>
          </div>

          {/* DESKRIPSI */}
          <div className="bg-[#14110F] border border-[#8C6943]/30 p-6 space-y-2">
            <h3 className="text-lg font-serif text-[#B48A35]">Deskripsi Properti</h3>
            <p className="text-xs text-stone-300 leading-relaxed">{selectedProperti.deskripsi}</p>
          </div>

          {/* FASILITAS KAMAR & BERSAMA */}
          <div className="bg-[#14110F] border border-[#8C6943]/30 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-serif text-[#B48A35] mb-3 uppercase tracking-wider font-bold">Fasilitas Kamar</h3>
              <ul className="space-y-2 text-xs text-stone-300">
                {selectedProperti.fasilitasKamar.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">✓ {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-serif text-[#B48A35] mb-3 uppercase tracking-wider font-bold">Fasilitas Bersama</h3>
              <ul className="space-y-2 text-xs text-stone-300">
                {selectedProperti.fasilitasBersama.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">🏢 {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* ATURAN HUNIAN */}
          <div className="bg-[#14110F] border border-[#8C6943]/30 p-6 space-y-3">
            <h3 className="text-sm font-serif text-[#B48A35] uppercase tracking-wider font-bold">Aturan Hunian</h3>
            <ul className="space-y-2 text-xs text-stone-300">
              {selectedProperti.aturanKos.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-amber-200/80">⚠️ {item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* KOLOM KANAN: CARD PEMESANAN & RINCIAN HARGA */}
        <div className="lg:col-span-1">
          <div className="bg-[#14110F] border border-[#8C6943]/40 p-6 sticky top-8 shadow-2xl space-y-6">
            
            <div className="border-b border-[#8C6943]/20 pb-4">
              <span className="text-xs text-stone-400 block">Harga Sewa:</span>
              <span className="text-2xl font-serif text-[#B48A35] font-bold">{formatRupiah(selectedProperti.hargaPerBulan)}</span>
              <span className="text-xs text-stone-400"> / bulan</span>
            </div>

            {/* PILIHAN DURASI SEWA */}
            <div className="space-y-2">
              <label className="text-xs text-stone-300 font-semibold block">Pilih Durasi Sewa:</label>
              <select 
                value={durasiSewa} 
                onChange={(e) => setDurasiSewa(Number(e.target.value))}
                className="w-full bg-[#1A1613] border border-[#8C6943]/50 text-stone-200 text-xs p-3 focus:outline-none focus:border-[#B48A35]"
              >
                <option value={1}>1 Bulan</option>
                <option value={3}>3 Bulan</option>
                <option value={6}>6 Bulan</option>
                <option value={12}>12 Bulan (1 Tahun)</option>
              </select>
            </div>

            {/* RINCIAN BIAYA */}
            <div className="bg-[#1A1613] p-4 border border-[#8C6943]/20 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-400">Sewa ({durasiSewa} bln):</span>
                <span>{formatRupiah(subtotalSewa)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Biaya Layanan:</span>
                <span>{formatRupiah(selectedProperti.biayaLayanan)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Deposit Jaminan:</span>
                <span>{formatRupiah(selectedProperti.deposit)}</span>
              </div>
              <div className="flex justify-between pt-3 border-t border-[#8C6943]/30 font-bold text-sm text-[#B48A35]">
                <span>Total Biaya:</span>
                <span>{formatRupiah(totalPembayaran)}</span>
              </div>
            </div>

            {/* TOMBOL AKSI */}
            <button 
              onClick={handleLanjutPembayaran}
              className="w-full bg-[#B48A35] text-[#1A1613] font-bold py-3 text-xs tracking-widest uppercase hover:bg-[#9a7527] transition-all shadow-md cursor-pointer"
            >
              LANJUT KE PEMBAYARAN →
            </button>

            <p className="text-[10px] text-center text-stone-500">
              *Kamu bisa memilih metode pembayaran di langkah berikutnya.
            </p>

          </div>
        </div>

      </div>

    </div>
  );
}