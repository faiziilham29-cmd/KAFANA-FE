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

  // FUNGSI UNTUK MENGARAHKAN USER KE HALAMAN PEMBAYARAN (UNTUK PILIH METODE & BAYAR)
  const handleLanjutKePembayaran = (item) => {
    navigate('/pembayaran', { state: { itemTransaksi: item } });
  };

  return (
    <div className="min-h-screen bg-[#1A1613] text-white font-sans antialiased pb-20">
      
      {/* HEADER PAGE */}
      <div className="max-w-4xl mx-auto px-6 pt-8 pb-4">
        {/* TOMBOL NAVIGASI DIUBAH KE BERANDA */}
        <button 
          onClick={() => navigate('/')}
          className="bg-[#FAF8F5] text-[#1A1613] px-4 py-2 font-semibold text-xs tracking-widest uppercase shadow-md hover:bg-[#B48A35] hover:text-white transition-all duration-200 mb-6 cursor-pointer"
        >
          ← KEMBALI KE BERANDA
        </button>

        <span className="block text-xs tracking-widest text-[#B48A35] uppercase font-bold">
          Aktivitas &amp; Tagihan Saya
        </span>
        <h1 className="text-3xl font-serif tracking-wide mt-1 text-stone-100">Riwayat Transaksi</h1>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="w-full h-[1px] bg-[#8C6943]/20 mb-8"></div>

        {transaksiList.length === 0 ? (
          <div className="bg-[#14110F] border border-[#8C6943]/20 p-12 text-center space-y-4">
            <p className="text-stone-400 text-sm">Belum ada pemesanan kos/kontrakan.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#B48A35] text-[#1A1613] px-6 py-2 font-bold uppercase text-xs tracking-widest cursor-pointer"
            >
              Cari Kamar Sekarang
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {transaksiList.map((item) => (
              <div 
                key={item.id} 
                className="bg-[#14110F] border border-[#8C6943]/30 overflow-hidden shadow-lg"
              >
                {/* HEAD CARD */}
                <div className="bg-[#1D1916] px-6 py-3 border-b border-[#8C6943]/20 flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#B48A35] bg-[#B48A35]/10 px-2 py-1 border border-[#B48A35]/30 font-bold">
                      {item.id}
                    </span>
                    <span className="text-xs text-stone-400">Tgl Transaksi: <strong className="text-stone-200">{item.tanggalTransaksi}</strong></span>
                  </div>

                  <span className={`text-[11px] font-bold px-3 py-1 uppercase tracking-wider ${
                    item.status === 'Lunas' 
                      ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' 
                      : 'bg-amber-950 text-amber-400 border border-amber-800'
                  }`}>
                    • {item.status}
                  </span>
                </div>

                {/* BODY CARD */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="md:col-span-1">
                    <img 
                      src={item.gambar} 
                      alt={item.namaProperti} 
                      className="w-full h-40 md:h-36 object-cover border border-[#8C6943]/20"
                    />
                  </div>

                  <div className="md:col-span-2 space-y-3">
                    <div>
                      <h3 className="text-xl font-serif text-stone-100">{item.namaProperti}</h3>
                      <p className="text-xs text-[#B48A35] font-semibold">{item.tipeKamar || 'Kamar Standar'}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 bg-[#1A1613] p-3 border border-[#8C6943]/20 text-xs">
                      <div>
                        <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Durasi Sewa:</span>
                        <span className="text-stone-200 font-semibold">{item.durasiSewa || '1 Bulan'}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Tanggal Masuk:</span>
                        <span className="text-stone-200 font-semibold">{item.tanggalMasuk || '-'}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Metode Bayar:</span>
                        <span className="text-stone-200 font-semibold">{item.metodePembayaran}</span>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[10px] uppercase tracking-wider">Total Tagihan:</span>
                        <span className="text-[#B48A35] font-bold">{item.totalBayar || item.hargaSewa || item.harga}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FOOTER CARD & ACTION */}
                <div className="bg-[#181412] px-6 py-4 border-t border-[#8C6943]/20 flex flex-wrap justify-between items-center gap-4">
                  <div className="text-xs text-stone-400">
                    {item.status === 'Lunas' ? (
                      <span className="text-emerald-400 flex items-center gap-1">
                        ✓ Kamar sudah dikonfirmasi &amp; siap dihuni
                      </span>
                    ) : (
                      <span className="text-amber-400">
                        ⚠️ Selesaikan pembayaran sebelum batas waktu berakhir
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {item.status === 'Menunggu Pembayaran' ? (
                      <button 
                        onClick={() => handleLanjutKePembayaran(item)}
                        className="bg-[#B48A35] text-[#1A1613] font-bold px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#9a7527] transition-all shadow-md cursor-pointer"
                      >
                        BAYAR SEKARANG
                      </button>
                    ) : (
                      <button 
                        onClick={() => setSelectedStruk(item)}
                        className="border border-[#8C6943]/50 text-stone-200 font-bold px-5 py-2 text-xs tracking-widest uppercase hover:border-[#B48A35] hover:text-[#B48A35] transition-all cursor-pointer"
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-[#FAF8F5] text-[#1A1613] w-full max-w-md p-6 shadow-2xl font-mono text-xs relative">
            <div className="text-center pb-4 border-b border-dashed border-stone-400 space-y-1">
              <h2 className="text-base font-bold uppercase font-serif tracking-wider text-[#1A1613]">BUKTI PEMBAYARAN RESMI</h2>
              <p className="text-[10px] text-stone-500">Aset Kos &amp; Kontrakan Sakinah</p>
              <p className="text-[10px] text-stone-400">No: {selectedStruk.id}</p>
            </div>

            <div className="py-4 space-y-2 border-b border-dashed border-stone-400">
              <div className="flex justify-between">
                <span className="text-stone-500">Tanggal:</span>
                <span className="font-semibold">{selectedStruk.tanggalTransaksi}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Properti:</span>
                <span className="font-semibold">{selectedStruk.namaProperti}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Unit/Kamar:</span>
                <span className="font-semibold">{selectedStruk.tipeKamar || 'Kamar Standar'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Metode Bayar:</span>
                <span className="font-semibold">{selectedStruk.metodePembayaran}</span>
              </div>
            </div>

            <div className="py-4 space-y-2 border-b border-dashed border-stone-400">
              <div className="flex justify-between font-bold text-sm pt-2">
                <span>TOTAL LUNAS</span>
                <span className="text-[#B48A35]">{selectedStruk.totalBayar || selectedStruk.hargaSewa}</span>
              </div>
            </div>

            <div className="pt-4 text-center text-[10px] text-stone-500 space-y-1">
              <p>Status: <strong className="text-emerald-700 uppercase">● BERHASIL / LUNAS</strong></p>
            </div>

            <div className="mt-6 flex gap-2 font-sans">
              <button 
                onClick={() => window.print()}
                className="flex-1 bg-[#1A1613] text-white py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#B48A35]"
              >
                🖨️ Cetak / PDF
              </button>
              <button 
                onClick={() => setSelectedStruk(null)}
                className="flex-1 border border-stone-400 text-stone-700 py-2 text-xs font-bold uppercase tracking-wider hover:bg-stone-200"
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