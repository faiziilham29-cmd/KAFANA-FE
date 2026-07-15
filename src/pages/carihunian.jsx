import React, { useState } from 'react';

export default function CariHunian() {
  const [showFilterMobile, setShowFilterMobile] = useState(false);
  
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
    <div className="min-h-screen bg-[#FDFBF7] text-neutral-800 font-sans selection:bg-[#8B6E4E] selection:text-white">
      
      {/* SECTION 1: TOP SEARCH BAR (STIKY / FIXED) */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-40 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Input Pencarian */}
          <div className="relative w-full md:w-1/2">
            <span className="absolute inset-y-0 left-3 flex items-center text-neutral-400">🔍</span>
            <input 
              type="text" 
              placeholder="Cari lokasi, kota, atau nama kampus dekat hunian..."
              className="w-full pl-10 pr-4 py-2.5 border border-neutral-300 focus:outline-none focus:border-[#8B6E4E] text-sm bg-[#FDFBF7]"
            />
          </div>
          
          {/* Tipe Properti Cepat & Button Filter Mobile */}
          <div className="flex gap-3 w-full md:w-auto justify-end">
            <select className="border border-neutral-300 px-4 py-2.5 text-sm bg-[#FDFBF7] focus:outline-none focus:border-[#8B6E4E]">
              <option>Semua Properti</option>
              <option>Kost</option>
              <option>Kontrakan</option>
            </select>
            <button 
              onClick={() => setShowFilterMobile(!showFilterMobile)}
              className="md:hidden flex-1 bg-[#8B6E4E] text-white px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-center"
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
          <div className="hidden lg:block lg:col-span-3 space-y-8 bg-white border border-neutral-200 p-6 sticky top-28 h-fit shadow-sm">
            <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
              <h3 className="font-serif font-bold text-neutral-900 tracking-wide">Filter Pencarian</h3>
              <button className="text-xs text-[#8B6E4E] font-semibold hover:underline">Reset</button>
            </div>

            {/* Kategori Aturan / Tipe Kost */}
            <div className="space-y-3">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400">Jenis Kost</label>
              <div className="space-y-2 text-sm text-neutral-600">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#8B6E4E]" /> Kost Putra</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#8B6E4E]" /> Kost Putri</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#8B6E4E]" /> Kost Campur</label>
              </div>
            </div>

            {/* Filter Fasilitas */}
            <div className="space-y-3">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400">Fasilitas Kamar</label>
              <div className="space-y-2 text-sm text-neutral-600">
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#8B6E4E]" /> Wi-Fi Internet</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#8B6E4E]" /> AC</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#8B6E4E]" /> Kamar Mandi Dalam</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="accent-[#8B6E4E]" /> Parkir Mobil</label>
              </div>
            </div>

            {/* Filter Metode Pembayaran */}
            <div className="space-y-3">
              <label className="block text-[10px] uppercase tracking-widest font-bold text-neutral-400">Sistem Sewa</label>
              <div className="space-y-2 text-sm text-neutral-600">
                <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="durasi" className="accent-[#8B6E4E]" /> Per Bulan</label>
                <label className="flex items-center gap-2 cursor-pointer"><input type="radio" name="durasi" className="accent-[#8B6E4E]" /> Per Tahun</label>
              </div>
            </div>
          </div>

          {/* CATALOG / LISTING HUNIAN */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Urutan Hasil Pencarian Info */}
            <div className="flex justify-between items-center bg-white border border-neutral-200 px-6 py-4 shadow-sm">
              <p className="text-xs text-neutral-500 font-medium">
                Menampilkan <span className="text-[#8B6E4E] font-bold">120 Properti</span> di Bandung
              </p>
              <div className="flex items-center gap-2">
                <label className="text-xs text-neutral-400 whitespace-nowrap">Urutkan:</label>
                <select className="border-0 bg-transparent text-xs font-bold text-[#8B6E4E] focus:outline-none cursor-pointer">
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
                <div key={item.id} className="bg-white border border-neutral-200 shadow-sm flex flex-col justify-between group relative">
                  
                  {/* Bagian Gambar + Status Badges */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge Jenis Hunian & Aturan */}
                    <span className="absolute top-3 left-3 bg-[#8B6E4E] text-white text-[9px] tracking-widest font-bold uppercase px-2 py-0.5 shadow-sm">
                      {item.type} • {item.gender}
                    </span>

                    {/* Badge Sisa/Penuh */}
                    {!item.isAvailable && (
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center">
                        <span className="bg-red-700 text-white text-xs font-bold tracking-widest uppercase px-3 py-1">SUDAH PENUH</span>
                      </div>
                    )}
                  </div>

                  {/* Informasi Konten */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-center text-[11px] text-neutral-500">
                        <span className="font-medium text-[#8B6E4E]">📍 {item.location}</span>
                        <span className="font-bold text-amber-600">★ {item.rating} ({item.reviews})</span>
                      </div>
                      <h4 className="font-serif font-semibold text-neutral-950 text-base leading-snug group-hover:text-[#8B6E4E] transition-colors line-clamp-2">
                        {item.title}
                      </h4>

                      {/* Mini Facility Icons / Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.tags.map((tag, idx) => (
                          <span key={idx} className="bg-[#F5F2EB] text-neutral-600 text-[10px] px-2 py-0.5">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Harga & Tombol Aksi */}
                    <div className="border-t border-neutral-100 pt-3 flex items-center justify-between mt-auto">
                      <div>
                        <p className="text-[9px] uppercase tracking-widest text-neutral-400 font-bold">Mulai dari</p>
                        <p className="text-sm font-bold text-neutral-900">{item.price} <span className="text-neutral-500 font-normal text-xs">/{item.period}</span></p>
                      </div>
                      <button 
                        disabled={!item.isAvailable}
                        className={`px-3 py-2 text-[10px] tracking-widest font-bold uppercase transition-all duration-300 border ${item.isAvailable ? 'border-neutral-300 hover:bg-[#8B6E4E] hover:text-white hover:border-[#8B6E4E] text-neutral-800' : 'border-neutral-200 text-neutral-300 cursor-not-allowed'}`}
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* PAGINATION / LOAD MORE */}
            <div className="pt-10 text-center">
              <button className="px-6 py-3 border border-[#8B6E4E] text-[#8B6E4E] text-xs font-bold tracking-widest uppercase hover:bg-[#8B6E4E] hover:text-white transition-all duration-300">
                TAMPILKAN LEBIH BANYAK HUNIAN
              </button>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}