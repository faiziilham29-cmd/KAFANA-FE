import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Pembayaran() {
  const navigate = useNavigate();
  const location = useLocation();

  const itemTransaksi = location.state?.itemTransaksi || {
    namaProperti: "Kos Putra Barokah Standar",
    tipeKamar: "Kamar Standar (Kamar Mandi Luar)",
    durasiSewa: "1 Bulan",
    tanggalMasuk: "01 Agustus 2026",
    hargaSewa: "Rp 750.000 / bln",
    biayaLayanan: "Rp 10.000",
    deposit: "Rp 100.000",
    totalBayar: "Rp 860.000",
    gambar: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80"
  };

  const [metodeAktif, setMetodeAktif] = useState({
    id: 'bca',
    jenis: 'bank',
    nama: 'Bank BCA',
    nomorVa: '8830-1928-37'
  });

  const [copied, setCopied] = useState(false);
  const [, setBuktiTransfer] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const daftarBank = [
    { id: 'bca', jenis: 'bank', nama: 'Bank BCA', nomorVa: '8830-1928-37' },
    { id: 'mandiri', jenis: 'bank', nama: 'Bank Mandiri', nomorVa: '1370-0098-2134' },
    { id: 'bri', jenis: 'bank', nama: 'Bank BRI', nomorVa: '0021-0108-9932' },
    { id: 'bni', jenis: 'bank', nama: 'Bank BNI', nomorVa: '0091-2834-1102' },
    { id: 'cimb', jenis: 'bank', nama: 'Bank CIMB Niaga', nomorVa: '8001-9283-7711' },
    { id: 'bsi', jenis: 'bank', nama: 'Bank Syariah (BSI)', nomorVa: '7123-8890-1122' },
  ];

  // DAFTAR QRIS DENGAN KODE & ID UNIK UNTUK TIAP E-WALLET
  const daftarQris = [
    { id: 'gopay', jenis: 'qris', nama: 'QRIS (GoPay)', nmid: 'ID102026883901' },
    { id: 'ovo', jenis: 'qris', nama: 'QRIS (OVO)', nmid: 'ID102026883902' },
    { id: 'shopeepay', jenis: 'qris', nama: 'QRIS (ShopeePay)', nmid: 'ID102026883903' },
    { id: 'dana', jenis: 'qris', nama: 'QRIS (DANA)', nmid: 'ID102026883904' },
  ];

  const daftarLainnya = [
    { id: 'indomaret', jenis: 'retail', nama: 'Indomaret / Ceriamart', kodePay: 'IND-9918237' },
    { id: 'alfamart', jenis: 'retail', nama: 'Alfamart / Alfamidi', kodePay: 'ALF-9918237' },
    { id: 'tunai', jenis: 'cash', nama: 'Tunai di Lokasi (Check-in)', kodePay: 'BAYAR-DI-LOKASI' },
  ];

  // FUNGSI MEMBUAT URL QR CODE DINAMIS SESUAI E-WALLET & TOTAL BAYAR
  const getDynamicQrUrl = () => {
    const dataString = `PAYMENT-${metodeAktif.id.toUpperCase()}-${metodeAktif.nmid || 'QRIS'}-${itemTransaksi.totalBayar}`;
    return `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(dataString)}`;
  };

  const handleCopy = () => {
    if (metodeAktif.nomorVa) {
      navigator.clipboard.writeText(metodeAktif.nomorVa);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKonfirmasi = () => {
    setIsProcessing(true);

    setTimeout(() => {
      const transaksiBaru = {
        id: `TRX-${Date.now().toString().slice(-6)}`,
        tanggalTransaksi: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
        namaProperti: itemTransaksi.namaProperti,
        tipeKamar: itemTransaksi.tipeKamar,
        durasiSewa: itemTransaksi.durasiSewa,
        tanggalMasuk: itemTransaksi.tanggalMasuk,
        hargaSewa: itemTransaksi.hargaSewa,
        biayaLayanan: itemTransaksi.biayaLayanan,
        deposit: itemTransaksi.deposit,
        totalBayar: itemTransaksi.totalBayar,
        metodePembayaran: metodeAktif.nama,
        status: 'Lunas',
        gambar: itemTransaksi.gambar
      };

      const dataLama = JSON.parse(localStorage.getItem('user_transaksi')) || [];
      localStorage.setItem('user_transaksi', JSON.stringify([transaksiBaru, ...dataLama]));

      setIsProcessing(false);
      navigate('/riwayat');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#2D2321] font-sans p-6 md:p-10 antialiased selection:bg-[#B38E5D] selection:text-white overflow-hidden">
      
      {/* CSS Animasi Internal (Simple & Elegan) */}
      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0; /* Mulai dari invisible */
          }
          .delay-100 { animation-delay: 150ms; }
          .delay-200 { animation-delay: 300ms; }
        `}
      </style>

      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-[#2D2321]">Konfirmasi Pembayaran</h1>
          <p className="text-xs text-[#5C4A42] mt-1 font-sans">Selesaikan pembayaran untuk mengamankan kamar pesanan Anda.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-6 animate-fade-up delay-100">
            
            {/* 1. PILIH METODE PEMBAYARAN */}
            <div className="bg-white border border-[#D7C4B0] p-6 space-y-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#B38E5D]">
                1. PILIH METODE PEMBAYARAN
              </h2>

              {/* VIRTUAL ACCOUNT */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold tracking-wider text-[#5C4A42] uppercase block">
                  TRANSFER VIRTUAL ACCOUNT / BANK:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {daftarBank.map((bank) => (
                    <button
                      key={bank.id}
                      onClick={() => setMetodeAktif(bank)}
                      className={`flex items-center gap-3 p-3 border text-xs text-left transition-all duration-300 cursor-pointer rounded-lg hover:-translate-y-0.5 ${
                        metodeAktif.id === bank.id
                          ? 'border-[#B38E5D] bg-[#B38E5D]/10 text-[#2D2321] font-bold shadow-sm'
                          : 'border-[#D7C4B0] bg-[#FAF5EF]/50 text-[#5C4A42] hover:border-[#B38E5D] hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        metodeAktif.id === bank.id ? 'border-[#B38E5D] bg-[#B38E5D]' : 'border-slate-400'
                      }`}>
                        {metodeAktif.id === bank.id && <div className="w-1 h-1 bg-white rounded-full"></div>}
                      </div>
                      <span>{bank.nama}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* QRIS & E-WALLET */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold tracking-wider text-[#5C4A42] uppercase block">
                  QRIS &amp; E-WALLET:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {daftarQris.map((qris) => (
                    <button
                      key={qris.id}
                      onClick={() => setMetodeAktif(qris)}
                      className={`flex items-center gap-3 p-3 border text-xs text-left transition-all duration-300 cursor-pointer rounded-lg hover:-translate-y-0.5 ${
                        metodeAktif.id === qris.id
                          ? 'border-[#B38E5D] bg-[#B38E5D]/10 text-[#2D2321] font-bold shadow-sm'
                          : 'border-[#D7C4B0] bg-[#FAF5EF]/50 text-[#5C4A42] hover:border-[#B38E5D] hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        metodeAktif.id === qris.id ? 'border-[#B38E5D] bg-[#B38E5D]' : 'border-slate-400'
                      }`}>
                        {metodeAktif.id === qris.id && <div className="w-1 h-1 bg-white rounded-full"></div>}
                      </div>
                      <span className="flex items-center gap-1.5">
                        <span className="text-[10px] bg-[#B38E5D]/20 border border-[#B38E5D]/40 text-[#2D2321] px-1 rounded font-mono font-bold">QR</span>
                        {qris.nama}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* LAINNYA */}
              <div className="space-y-3">
                <span className="text-[10px] font-bold tracking-wider text-[#5C4A42] uppercase block">
                  LAINNYA:
                </span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {daftarLainnya.map((lain) => (
                    <button
                      key={lain.id}
                      onClick={() => setMetodeAktif(lain)}
                      className={`flex items-center gap-3 p-3 border text-xs text-left transition-all duration-300 cursor-pointer rounded-lg hover:-translate-y-0.5 ${
                        metodeAktif.id === lain.id
                          ? 'border-[#B38E5D] bg-[#B38E5D]/10 text-[#2D2321] font-bold shadow-sm'
                          : 'border-[#D7C4B0] bg-[#FAF5EF]/50 text-[#5C4A42] hover:border-[#B38E5D] hover:shadow-sm'
                      }`}
                    >
                      <div className={`w-3 h-3 rounded-full border flex items-center justify-center transition-colors duration-300 ${
                        metodeAktif.id === lain.id ? 'border-[#B38E5D] bg-[#B38E5D]' : 'border-slate-400'
                      }`}>
                        {metodeAktif.id === lain.id && <div className="w-1 h-1 bg-white rounded-full"></div>}
                      </div>
                      <span>{lain.nama}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* 2. PETUNJUK PEMBAYARAN */}
            <div className="bg-white border border-[#D7C4B0] p-6 space-y-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#B38E5D]">
                2. PETUNJUK PEMBAYARAN ({metodeAktif.nama.toUpperCase()})
              </h2>

              {/* PETUNJUK BANK */}
              {metodeAktif.jenis === 'bank' && (
                <div className="space-y-6 animate-fade-up">
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-[#5C4A42]">Bank / Penyedia:</span>
                      <span className="font-bold text-[#2D2321] uppercase">{metodeAktif.nama.replace('Bank ', '')}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-100">
                      <span className="text-[#5C4A42]">Atas Nama:</span>
                      <span className="font-bold text-[#2D2321]">Kafana Vista Property</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#5C4A42] block mb-1 uppercase text-[10px] tracking-wider font-bold">NOMOR REKENING / VA:</span>
                      <div className="flex justify-between items-center bg-[#FAF5EF] p-3 border border-[#D7C4B0] rounded-lg">
                        <span className="font-mono text-lg font-bold text-[#B38E5D] tracking-wider">{metodeAktif.nomorVa}</span>
                        <button
                          onClick={handleCopy}
                          className="border border-[#B38E5D] text-[#B38E5D] px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider hover:bg-[#B38E5D] hover:text-white transition-all cursor-pointer rounded"
                        >
                          {copied ? 'TERSALIN!' : 'SALIN REKENING'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PETUNJUK QRIS */}
              {metodeAktif.jenis === 'qris' && (
                <div className="text-center space-y-4 py-2 animate-fade-up">
                  <p className="text-xs text-[#B38E5D] font-bold">
                    Scan QRIS Code khusus {metodeAktif.nama} berikut:
                  </p>
                  <div className="inline-block bg-white p-4 border-4 border-[#B38E5D]/40 shadow-xl rounded-lg transform transition-transform hover:scale-105 duration-500">
                    <img 
                      key={metodeAktif.id}
                      src={getDynamicQrUrl()} 
                      alt={`QRIS ${metodeAktif.nama}`} 
                      className="w-52 h-52 object-contain mx-auto"
                    />
                    <span className="block text-[10px] text-[#2D2321] font-mono font-bold mt-2">
                      NMID: {metodeAktif.nmid}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#5C4A42]">
                    Buka aplikasi {metodeAktif.nama.replace('QRIS ', '')} / m-Banking &gt; Pilih Scan QRIS &gt; Selesaikan Pembayaran
                  </p>
                </div>
              )}

              {/* PETUNJUK RETAIL/CASH */}
              {(metodeAktif.jenis === 'retail' || metodeAktif.jenis === 'cash') && (
                <div className="space-y-4 text-xs animate-fade-up">
                  <div className="flex justify-between items-center py-2 border-b border-slate-100">
                    <span className="text-[#5C4A42]">Metode:</span>
                    <span className="font-bold text-[#2D2321]">{metodeAktif.nama}</span>
                  </div>
                  <div className="bg-[#FAF5EF] p-4 border border-[#D7C4B0] rounded-lg">
                    <span className="text-[#5C4A42] block text-[10px] uppercase font-bold">Kode Pembayaran / Instruksi:</span>
                    <span className="font-mono text-base font-bold text-[#B38E5D]">{metodeAktif.kodePay || 'Tunjukkan Email Pemesanan ke Kasir/Pengelola'}</span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 space-y-2">
                <label className="text-xs text-[#5C4A42] font-semibold block">Upload Bukti Transfer (Opsional):</label>
                <div className="flex items-center gap-3">
                  <input
                    type="file"
                    onChange={(e) => setBuktiTransfer(e.target.files[0])}
                    className="text-xs text-[#5C4A42] file:mr-4 file:py-2 file:px-4 file:border file:border-[#D7C4B0] file:rounded file:text-xs file:font-semibold file:bg-[#FAF5EF] file:text-[#2D2321] hover:file:bg-[#B38E5D] hover:file:text-white cursor-pointer transition-all"
                  />
                </div>
              </div>

            </div>

          </div>

          {/* RINGKASAN PESANAN (KOLOM KANAN) */}
          <div className="lg:col-span-1 animate-fade-up delay-200">
            <div className="bg-white border border-[#D7C4B0] p-6 space-y-6 sticky top-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#B38E5D] border-b border-slate-100 pb-3">
                RINGKASAN PESANAN
              </h2>

              <div className="overflow-hidden rounded-lg border border-[#D7C4B0]">
                <img 
                  src={itemTransaksi.gambar} 
                  alt={itemTransaksi.namaProperti} 
                  className="w-full h-40 object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="space-y-1">
                <h3 className="text-base font-serif font-bold text-[#2D2321]">{itemTransaksi.namaProperti}</h3>
                <p className="text-xs text-[#B38E5D] font-medium">{itemTransaksi.tipeKamar}</p>
              </div>

              <div className="space-y-2.5 text-xs text-[#5C4A42] pt-2 border-t border-slate-100">
                <div className="flex justify-between">
                  <span>Durasi Sewa:</span>
                  <span className="font-semibold text-[#2D2321]">{itemTransaksi.durasiSewa}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tanggal Masuk:</span>
                  <span className="font-semibold text-[#2D2321]">{itemTransaksi.tanggalMasuk}</span>
                </div>
                <div className="flex justify-between">
                  <span>Harga Sewa:</span>
                  <span className="font-semibold text-[#2D2321]">{itemTransaksi.hargaSewa}</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Layanan:</span>
                  <span className="font-semibold text-[#2D2321]">{itemTransaksi.biayaLayanan}</span>
                </div>
                <div className="flex justify-between">
                  <span>Deposit:</span>
                  <span className="font-semibold text-[#2D2321]">{itemTransaksi.deposit}</span>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#D7C4B0]/60 font-bold text-sm">
                  <span className="text-[#2D2321]">Total Tagihan:</span>
                  <span className="text-[#B38E5D]">{itemTransaksi.totalBayar}</span>
                </div>
              </div>

              <button
                onClick={handleKonfirmasi}
                disabled={isProcessing}
                className="w-full bg-[#B38E5D] text-white font-bold py-3.5 text-xs tracking-widest uppercase hover:bg-[#8F6E45] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:hover:translate-y-0 mt-4 rounded-lg"
              >
                {isProcessing ? "MEMPROSES..." : "KONFIRMASI PEMBAYARAN"}
              </button>

              <p className="text-[10px] text-center text-[#5C4A42]/80 leading-relaxed">
                *Setelah mengonfirmasi, transaksi akan langsung tercatat LUNAS di halaman Riwayat Transaksi Anda.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}