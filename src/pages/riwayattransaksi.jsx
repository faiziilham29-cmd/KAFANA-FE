import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RiwayatTransaksi() {
  const navigate = useNavigate();
  const [transaksiList, setTransaksiList] = useState([]);
  const [selectedStruk, setSelectedStruk] = useState(null);

  // Load Data dari LocalStorage
  useEffect(() => {
    muatDataTransaksi();
  }, []);

  const muatDataTransaksi = () => {
    const dataDisimpan = JSON.parse(localStorage.getItem('user_transaksi')) || [];
    
    if (dataDisimpan.length === 0) {
      const defaultUserTransactions = [
        {
          id: "TRX-20260720-001",
          tanggalTransaksi: "20 Juli 2026",
          namaProperti: "Kos Putri Sakinah Eksklusif",
          tipeKamar: "Kamar A-102 (AC + Kamar Mandi Dalam)",
          durasiSewa: "1 Bulan",
          tanggalMasuk: "01 Agustus 2026",
          hargaSewa: "Rp 1.500.000",
          biayaLayanan: "Rp 10.000",
          deposit: "Rp 200.000",
          totalBayar: "Rp 1.710.000",
          metodePembayaran: "QRIS (GoPay)",
          status: "Lunas",
          gambar: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
        },
        {
          id: "TRX-20260615-004",
          tanggalTransaksi: "15 Juni 2026",
          namaProperti: "Kontrakan Paviliun Asri",
          tipeKamar: "Unit Paviliun B2 (2 Kamar)",
          durasiSewa: "6 Bulan",
          tanggalMasuk: "20 Juni 2026",
          hargaSewa: "Rp 2.200.000 / bln",
          biayaLayanan: "Rp 10.000",
          deposit: "Rp 500.000",
          totalBayar: "Rp 2.710.000",
          metodePembayaran: "Belum Dipilih",
          status: "Menunggu Pembayaran",
          gambar: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80"
        }
      ];
      localStorage.setItem('user_transaksi', JSON.stringify(defaultUserTransactions));
      setTransaksiList(defaultUserTransactions);
    } else {
      setTransaksiList(dataDisimpan);
    }
  };

  const handleLanjutKePembayaran = (item) => {
    navigate('/pembayaran', { state: { itemTransaksi: item } });
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#2D2321] font-sans antialiased pb-20 selection:bg-[#B38E5D] selection:text-white overflow-hidden">
      
      {/* CSS Animasi Internal */}
      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes scaleUp {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-fade-up {
            animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }
          .animate-fade-in {
            animation: fadeIn 0.3s ease-out forwards;
          }
          .animate-scale-up {
            animation: scaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }
          .delay-100 { animation-delay: 150ms; }
        `}
      </style>

      {/* HEADER PAGE */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4 animate-fade-up">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
          
          {/* Bagian Kiri: Teks Header */}
          <div>
            <span className="block text-xs tracking-widest text-[#B38E5D] uppercase font-bold">
              Aktivitas &amp; Tagihan Saya
            </span>
            <h1 className="text-3xl font-serif font-bold tracking-wide mt-1 text-[#2D2321]">
              Riwayat Transaksi
            </h1>
          </div>

          {/* Bagian Kanan: Tombol */}
          <div>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#2D2321] text-[#FAF5EF] px-5 py-2.5 font-bold text-xs tracking-widest uppercase shadow-md hover:bg-[#B38E5D] hover:translate-x-1 transition-all duration-300 cursor-pointer rounded whitespace-nowrap"
            >
              KEMBALI KE BERANDA →
            </button>
          </div>
          
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 animate-fade-up delay-100">
        <div className="w-full h-[1px] bg-[#D7C4B0] mb-8"></div>

        {transaksiList.length === 0 ? (
          <div className="bg-white border border-[#D7C4B0] p-12 text-center space-y-4 rounded-xl shadow-sm">
            <p className="text-[#5C4A42] font-medium text-sm">Belum ada pemesanan kos/kontrakan.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#B38E5D] text-white px-6 py-2.5 font-bold uppercase text-xs tracking-widest cursor-pointer hover:bg-[#8F6E45] hover:-translate-y-0.5 transition-all duration-300 rounded shadow-md"
            >
              Cari Kamar Sekarang
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {transaksiList.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-[#D7C4B0] overflow-hidden shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 rounded-xl"
              >
                {/* HEAD CARD */}
                <div className="bg-[#FAF5EF]/50 px-6 py-4 border-b border-[#D7C4B0] flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#B38E5D] bg-[#B38E5D]/10 px-2 py-1 border border-[#B38E5D]/30 font-bold rounded">
                      {item.id}
                    </span>
                    <span className="text-xs text-[#5C4A42] font-medium">Tgl Transaksi: <strong className="text-[#2D2321]">{item.tanggalTransaksi}</strong></span>
                  </div>

                  <span className={`text-[11px] font-bold px-3 py-1 uppercase tracking-wider rounded ${
                    item.status === 'Lunas' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    • {item.status}
                  </span>
                </div>

                {/* BODY CARD */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1 overflow-hidden rounded-lg">
                    <img 
                      src={item.gambar} 
                      alt={item.namaProperti} 
                      className="w-full h-40 md:h-36 object-cover border border-[#D7C4B0] rounded-lg transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <h3 className="text-xl font-serif font-bold text-[#2D2321]">{item.namaProperti}</h3>
                      <p className="text-xs text-[#B38E5D] font-bold">{item.tipeKamar || 'Kamar Standar'}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 bg-[#FAF5EF] rounded-lg p-3 border border-[#D7C4B0] text-xs">
                      <div>
                        <span className="text-[#5C4A42] block text-[10px] uppercase tracking-wider font-bold">Durasi Sewa:</span>
                        <span className="text-[#2D2321] font-semibold">{item.durasiSewa || '1 Bulan'}</span>
                      </div>
                      <div>
                        <span className="text-[#5C4A42] block text-[10px] uppercase tracking-wider font-bold">Tanggal Masuk:</span>
                        <span className="text-[#2D2321] font-semibold">{item.tanggalMasuk || '-'}</span>
                      </div>
                      <div>
                        <span className="text-[#5C4A42] block text-[10px] uppercase tracking-wider font-bold">Metode Bayar:</span>
                        <span className="text-[#2D2321] font-semibold">{item.metodePembayaran}</span>
                      </div>
                      <div>
                        <span className="text-[#5C4A42] block text-[10px] uppercase tracking-wider font-bold">Total Tagihan:</span>
                        <span className="text-[#B38E5D] font-bold text-sm">{item.totalBayar || item.hargaSewa || item.harga}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FOOTER CARD & ACTION */}
                <div className="bg-[#FAF5EF]/50 px-6 py-4 border-t border-[#D7C4B0] flex flex-wrap justify-between items-center gap-4">
                  <div className="text-xs font-medium">
                    {item.status === 'Lunas' ? (
                      <span className="text-emerald-600 flex items-center gap-1 font-bold">
                        ✓ Kamar sudah dikonfirmasi &amp; siap dihuni
                      </span>
                    ) : (
                      <span className="text-amber-600 font-bold">
                        ⚠️ Selesaikan pembayaran sebelum batas waktu berakhir
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {item.status === 'Menunggu Pembayaran' ? (
                      <button 
                        onClick={() => handleLanjutKePembayaran(item)}
                        className="bg-[#B38E5D] text-white font-bold px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#8F6E45] transition-colors shadow-md cursor-pointer rounded"
                      >
                        BAYAR SEKARANG
                      </button>
                    ) : (
                      <button 
                        onClick={() => setSelectedStruk(item)}
                        className="bg-white border border-[#D7C4B0] text-[#5C4A42] font-bold px-5 py-2 text-xs tracking-widest uppercase hover:border-[#B38E5D] hover:text-[#B38E5D] transition-colors cursor-pointer rounded shadow-sm"
                      >
                        📄 LIHAT STRUK RESMI
                      </button>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL STRUK RESMI */}
      {selectedStruk && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white text-[#2D2321] border border-[#D7C4B0] rounded-xl w-full max-w-md p-6 shadow-2xl font-mono text-xs relative animate-scale-up">
            <div className="text-center pb-4 border-b border-dashed border-[#D7C4B0] space-y-1">
              <h2 className="text-base font-bold uppercase font-serif tracking-wider text-[#2D2321]">BUKTI PEMBAYARAN RESMI</h2>
              <p className="text-[10px] text-[#5C4A42] font-sans font-medium">Aset Kos &amp; Kontrakan Sakinah</p>
              <p className="text-[10px] text-[#5C4A42]">No: {selectedStruk.id}</p>
            </div>

            <div className="py-4 space-y-2 border-b border-dashed border-[#D7C4B0]">
              <div className="flex justify-between">
                <span className="text-[#5C4A42]">Tanggal:</span>
                <span className="font-semibold">{selectedStruk.tanggalTransaksi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C4A42]">Properti:</span>
                <span className="font-semibold">{selectedStruk.namaProperti}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C4A42]">Unit/Kamar:</span>
                <span className="font-semibold">{selectedStruk.tipeKamar || 'Kamar Standar'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#5C4A42]">Metode Bayar:</span>
                <span className="font-semibold">{selectedStruk.metodePembayaran}</span>
              </div>
            </div>

            <div className="py-4 space-y-2 border-b border-dashed border-[#D7C4B0]">
              <div className="flex justify-between font-bold text-sm pt-2">
                <span>TOTAL LUNAS</span>
                <span className="text-[#B38E5D]">{selectedStruk.totalBayar || selectedStruk.hargaSewa}</span>
              </div>
            </div>

            <div className="pt-4 text-center text-[10px] text-[#5C4A42] space-y-1">
              <p>Status: <strong className="text-emerald-600 uppercase">● BERHASIL / LUNAS</strong></p>
            </div>

            <div className="mt-6 flex gap-2 font-sans">
              <button 
                onClick={() => window.print()}
                className="flex-1 bg-[#2D2321] text-white py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#B38E5D] rounded transition-colors"
              >
                🖨️ Cetak / PDF
              </button>
              <button 
                onClick={() => setSelectedStruk(null)}
                className="flex-1 border border-[#D7C4B0] text-[#5C4A42] py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[#FAF5EF] rounded transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}