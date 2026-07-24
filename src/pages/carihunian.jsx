import React, { useState } from 'react';

export default function CariHunian() {
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  
  // State untuk melacak kota yang dipilih di filter
  const [selectedKota, setSelectedKota] = useState('Semua');

  // Data daerah berdasarkan kota
  const areaKota = {
    Bandung: ['Bojongsoang', 'Buahbatu', 'Coblong', 'Lembang', 'Dago'],
    Sukabumi: ['Cikole', 'Limusnunggal', 'Nanggleng', 'Baros', 'Cisaat']
  };

  // Dummy data properti hasil pencarian
  const searchResults = [
    {
      id: 1,
      type: 'kost',
      gender: 'Campur',
      title: 'Kost Kavana Vista Tipe A',
      location: 'Bojongsoang, Bandung',
      price: 'Rp 1.500.000',
      period: 'bulan',
      rating: '4.8',
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80',
      tags: ['WiFi', 'AC', 'KM Dalam'],
      isAvailable: true
    },
    {
      id: 2,
      type: 'kontrakan',
      gender: 'Keluarga',
      title: 'Kontrakan Asri Pavilion 2 Kamar',
      location: 'Buahbatu, Bandung',
      price: 'Rp 24.000.000',
      period: 'tahun',
      rating: '4.9',
      reviews: 12,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=600&q=80',
      tags: ['2 KT', 'Garasi', 'R. Tamu'],
      isAvailable: true
    },
    {
      id: 3,
      type: 'kost',
      gender: 'Putri',
      title: 'Kost Eksklusif Heritage Suite',
      location: 'Coblong, Bandung',
      price: 'Rp 2.100.000',
      period: 'bulan',
      rating: '4.7',
      reviews: 30,
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80',
      tags: ['WiFi', 'Water Heater', 'Kasur'],
      isAvailable: false // Penuh
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#2D2321] font-sans selection:bg-[#B38E5D] selection:text-white">
      
      {/* SECTION 1: TOP SEARCH BAR (STICKY / FIXED) */}
      <div className="bg-[#FAF5EF]/90 backdrop-blur-md border-b border-[#D7C4B0] sticky top-0 z-40 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Input Pencarian */}
          <div className="relative w-full md:w-1/2 shadow-sm rounded-full overflow-hidden">
            <span className="absolute inset-y-0 left-4 flex items-center text-[#5C4A42]">🔍</span>
            <input 
              type="text" 
              placeholder="Cari lokasi, kota, atau nama kampus..."
              className="w-full pl-12 pr-4 py-3 border-none focus:outline-none focus:ring-2 focus:ring-[#B38E5D] text-sm bg-white text-[#2D2321]"
            />
          </div>
          
          {/* Tipe Properti Cepat & Button Filter Mobile */}
          <div className="flex gap-3 w-full md:w-auto justify-end">
            <select className="border border-[#D7C4B0] rounded-full px-5 py-3 text-sm bg-white font-semibold text-[#5C4A42] focus:outline-none focus:ring-2 focus:ring-[#B38E5D] cursor-pointer shadow-sm">
              <option>Semua Properti</option>
              <option>Kost</option>
              <option>Kontrakan</option>
            </select>
            <button 
              onClick={() => setShowFilterMobile(!showFilterMobile)}
              className="md:hidden flex-1 bg-[#2D2321] text-white px-5 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-center shadow-md"
            >
              Filter Data
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: MAIN CONTENT (SIDEBAR FILTER + LISTING) */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* KANVAS SIDEBAR FILTER (DESKTOP) */}
          <div className="hidden lg:block lg:col-span-3 space-y-8 bg-white border border-[#D7C4B0] rounded-3xl p-6 sticky top-28 h-fit shadow-sm">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <h3 className="font-serif font-bold text-[#2D2321] text-lg tracking-wide">Filter Pencarian</h3>
              <button 
                onClick={() => setSelectedKota('Semua')} 
                className="text-xs text-[#B38E5D] font-bold hover:text-[#2D2321] transition-colors"
              >
                Reset
              </button>
            </div>

            {/* KOTA & AREA DAERAH (BARU) */}
            <div className="space-y-3">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#5C4A42]">Pilih Kota &amp; Area</label>
              
              <div className="space-y-4">
                {/* Opsi Kota Bandung */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setSelectedKota(selectedKota === 'Bandung' ? 'Semua' : 'Bandung')}
                    className={`w-full flex justify-between items-center px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedKota === 'Bandung' ? 'bg-[#B38E5D] text-white shadow-sm' : 'bg-[#FAF5EF] text-[#2D2321] hover:bg-[#D7C4B0]/20'
                    }`}
                  >
                    <span>📍 Kota Bandung</span>
                    <span>{selectedKota === 'Bandung' ? '▲' : '▼'}</span>
                  </button>

                  {/* Sub-daerah Bandung yang muncul pas diklik */}
                  {selectedKota === 'Bandung' && (
                    <div className="pl-4 space-y-2 border-l-2 border-[#B38E5D] my-2 animate-fade-in text-sm font-medium text-[#2D2321]">
                      {areaKota.Bandung.map((area, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer group py-1">
                          <input type="checkbox" className="w-3.5 h-3.5 accent-[#B38E5D] cursor-pointer" />
                          <span className="text-xs group-hover:text-[#B38E5D] transition-colors">{area}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>

                {/* Opsi Kota Sukabumi */}
                <div className="space-y-2">
                  <button 
                    onClick={() => setSelectedKota(selectedKota === 'Sukabumi' ? 'Semua' : 'Sukabumi')}
                    className={`w-full flex justify-between items-center px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                      selectedKota === 'Sukabumi' ? 'bg-[#B38E5D] text-white shadow-sm' : 'bg-[#FAF5EF] text-[#2D2321] hover:bg-[#D7C4B0]/20'
                    }`}
                  >
                    <span>📍 Kota Sukabumi</span>
                    <span>{selectedKota === 'Sukabumi' ? '▲' : '▼'}</span>
                  </button>

                  {/* Sub-daerah Sukabumi yang muncul pas diklik */}
                  {selectedKota === 'Sukabumi' && (
                    <div className="pl-4 space-y-2 border-l-2 border-[#B38E5D] my-2 animate-fade-in text-sm font-medium text-[#2D2321]">
                      {areaKota.Sukabumi.map((area, idx) => (
                        <label key={idx} className="flex items-center gap-2 cursor-pointer group py-1">
                          <input type="checkbox" className="w-3.5 h-3.5 accent-[#B38E5D] cursor-pointer" />
                          <span className="text-xs group-hover:text-[#B38E5D] transition-colors">{area}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Jenis Kost */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#5C4A42]">Jenis Kost</label>
              <div className="space-y-2.5 text-sm font-medium text-[#2D2321]">
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Kost Putra</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Kost Putri</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Kost Campur</span></label>
              </div>
            </div>

            {/* Filter Fasilitas */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#5C4A42]">Fasilitas Kamar</label>
              <div className="space-y-2.5 text-sm font-medium text-[#2D2321]">
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Wi-Fi Internet</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">AC</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Kamar Mandi Dalam</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Parkir Mobil</span></label>
              </div>
            </div>

            {/* Sistem Sewa */}
            <div className="space-y-3 pt-2 border-t border-slate-100">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#5C4A42]">Sistem Sewa</label>
              <div className="space-y-2.5 text-sm font-medium text-[#2D2321]">
                <label className="flex items-center gap-3 cursor-pointer group"><input type="radio" name="durasi" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Per Bulan</span></label>
                <label className="flex items-center gap-3 cursor-pointer group"><input type="radio" name="durasi" className="w-4 h-4 accent-[#B38E5D] cursor-pointer" /> <span className="group-hover:text-[#B38E5D] transition-colors">Per Tahun</span></label>
              </div>
            </div>

          </div>

          {/* CATALOG / LISTING HUNIAN */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Urutan Hasil Pencarian Info */}
            <div className="flex justify-between items-center bg-white border border-[#D7C4B0] rounded-2xl px-6 py-4 shadow-sm">
              <p className="text-xs text-[#5C4A42] font-medium">
                Menampilkan <span className="text-[#B38E5D] font-bold">120 Properti</span> di Bandung &amp; Sukabumi
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs text-[#5C4A42] whitespace-nowrap">Urutkan:</label>
                <select className="border-0 bg-transparent text-xs font-bold text-[#2D2321] focus:outline-none cursor-pointer hover:text-[#B38E5D] transition-colors">
                  <option>Rekomendasi Utama</option>
                  <option>Harga: Rendah ke Tinggi</option>
                  <option>Harga: Tinggi ke Rendah</option>
                  <option>Ulasan Tertinggi</option>
                </select>
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {searchResults.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white border border-[#D7C4B0]/60 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group overflow-hidden cursor-pointer"
                >
                  
                  {/* Bagian Gambar + Status Badges */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-slate-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#2D2321] text-[9px] tracking-widest font-extrabold uppercase px-3 py-1.5 rounded-full shadow-sm">
                      {item.type} • {item.gender}
                    </span>

                    {!item.isAvailable && (
                      <div className="absolute inset-0 bg-[#2D2321]/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-red-500 text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-lg">
                          SUDAH PENUH
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Informasi Konten */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs text-[#5C4A42]">
                        <span className="font-semibold text-[#B38E5D]">📍 {item.location}</span>
                        <span className="font-bold text-[#2D2321]">★ {item.rating} <span className="text-slate-400 font-medium">({item.reviews})</span></span>
                      </div>
                      <h4 className="font-serif font-bold text-[#2D2321] text-lg leading-snug group-hover:text-[#B38E5D] transition-colors line-clamp-2">
                        {item.title}
                      </h4>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="bg-[#FAF5EF] border border-[#D7C4B0]/50 text-[#5C4A42] font-semibold text-[10px] px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Harga & Tombol Aksi */}
                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-[#5C4A42] font-bold">Mulai dari</p>
                        <p className="text-base font-black text-[#2D2321]">{item.price} <span className="text-[#5C4A42] font-medium text-[10px]">/{item.period}</span></p>
                      </div>
                      <button 
                        disabled={!item.isAvailable}
                        className={`px-5 py-2.5 rounded-xl text-[10px] tracking-widest font-bold uppercase transition-all duration-300 ${
                          item.isAvailable 
                            ? 'bg-[#2D2321] text-white hover:bg-[#B38E5D] shadow-md hover:shadow-lg' 
                            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                        }`}
                      >
                        Detail
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* PAGINATION / LOAD MORE */}
            <div className="pt-12 text-center pb-8">
              <button className="px-8 py-3.5 rounded-full border-2 border-[#2D2321] text-[#2D2321] text-xs font-bold tracking-widest uppercase hover:bg-[#2D2321] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                Tampilkan Lebih Banyak
              </button>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}