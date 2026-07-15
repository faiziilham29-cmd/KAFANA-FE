import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  // State filter interaktif
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  // Data rekomendasi kost & kontrakan terpopuler (Tema Warna Seaside)
  const premiumRooms = [
    {
      id: 1,
      name: "NAFA PRISTIANI ANJANI",
      category: "Kost",
      gender: "Putri",
      price: "Rp 1.500.000",
      period: "bulan",
      location: "Cimahi, Bandung",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
      rating: "4.9",
      badge: "Sisa 2 Kamar!",
      desc: "Nikmati hunian eksklusif dengan fasilitas lengkap standar hotel bintang lima, sangat dekat dengan area kampus."
    },
    {
      id: 2,
      name: "PURI ANDRA KAHFI",
      category: "Kontrakan",
      gender: "Campur",
      price: "Rp 2.500.000",
      period: "bulan",
      location: "Buah Batu, Bandung",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
      rating: "4.8",
      badge: "Diskon Khusus",
      desc: "Hunian keluarga bernuansa asri dengan desain modern minimalis, keamanan 24 jam, dan carport luas."
    },
    {
      id: 3,
      name: "ACA VISTA",
      category: "Kontrakan",
      gender: "Campur/Family",
      price: "Rp 1.000.000",
      period: "bulan",
      location: "Limusnunggal, Sukabumi",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
      rating: "4.8",
      badge: "Terpopuler",
      desc: "Kontrakan dengan lingkungan yang tenang, aman, bersih, serta dilengkapi dapur bersama super nyaman."
    },
    {
      id: 4,
      name: "FAIZ HOUSE KV",
      category: "Kost",
      gender: "Putra",
      price: "Rp 5.000.000",
      period: "bulan",
      location: "Nanggleng, Sukabumi",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80",
      rating: "5.0",
      badge: "Sisa 1 Kamar!",
      desc: "Kamar sewa khusus putra dengan suasana modern, fasilitas Wi-Fi kecepatan tinggi, dan parkiran motor yang luas."
    }
  ];

  // Logika Filter
  const filteredRooms = premiumRooms.filter(room => {
    const matchSearch = room.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        room.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'Semua' || room.category === selectedCategory || room.gender === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#2D2321] font-serif antialiased selection:bg-[#B38E5D] selection:text-white">
      
      {/* 1. ELEGANT HEADER / NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#FAF5EF]/90 backdrop-blur-md border-b border-[#FAF5EF]/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-widest text-[#2D2321] flex items-center gap-2">
            <span className="bg-[#2D2321] text-[#FAF5EF] px-3 py-1 rounded-sm shadow-md text-xl font-sans">KV</span>
            <span className="font-sans">KAFANA<span className="text-[#B38E5D] font-light">VISTA</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-sans text-xs uppercase tracking-widest font-semibold text-[#5C4A42]">
            <Link to="/" className="text-[#B38E5D] transition border-b border-[#B38E5D] pb-1">Home</Link>
            <Link to="/carihunian" className="hover:text-[#B38E5D] transition pb-1">Cari Hunian</Link>
            <Link to="/finance" className="hover:text-[#B38E5D] transition pb-1">Finance Tracker</Link>
            <Link to="/profile" className="hover:text-[#B38E5D] transition pb-1">Profil Saya</Link>
          </div>
          <div>
            <Link to="/admin" className="font-sans text-xs uppercase tracking-widest font-bold bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-6 py-3 rounded-none transition duration-300 shadow-md">
              Eksplorasi Properti
            </Link>
          </div>
        </div>
      </nav>

      {/* 2. MAJESTIC HERO SECTION */}
      <header className="relative min-h-[85vh] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(rgba(45, 35, 33, 0.7), rgba(45, 35, 33, 0.65)), url('https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="max-w-5xl mx-auto px-6 text-center text-[#FAF5EF] space-y-8 py-16">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-none text-xs font-sans font-bold uppercase tracking-widest bg-[#B38E5D] text-[#FAF5EF]">
              ✨ Exclusive Residential Collection
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight leading-tight">
            Enjoy Your <br />
            <span className="font-bold text-[#FAF5EF] tracking-wider italic">Dream Living Space</span>
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#FAF5EF]/80 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Kafana Vista menghadirkan pilihan sewa kamar kost eksklusif dan kontrakan modern premium dengan penawaran harga terbaik, fasilitas tervalidasi, serta proses booking instan yang tepercaya.
          </p>

          {/* Luxury Search Engine Integration */}
          <div className="bg-[#FAF5EF] p-2.5 shadow-2xl border border-[#FAF5EF]/20 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto rounded-none text-[#2D2321]">
            <div className="flex-1 flex items-center px-4 gap-3">
              <span className="text-[#B38E5D] text-lg">🔍</span>
              <input 
                type="text" 
                placeholder="Cari lokasi premium, Bojongsoang, Sukabirus..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 bg-transparent placeholder-[#5C4A42]/50 text-[#2D2321] focus:outline-none font-sans text-sm"
              />
            </div>
            <Link to="/beranda" className="font-sans text-xs uppercase tracking-widest font-bold bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-8 py-4 transition duration-300 text-center flex items-center justify-center">
              Cari Sekarang
            </Link>
          </div>
        </div>
      </header>

      {/* 3. INFO BAR / OPENING TIMINGS (Directly styled from template layout) */}
      <section className="bg-[#B38E5D] text-[#FAF5EF] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#FAF5EF]/20 font-sans text-xs tracking-wider uppercase font-semibold">
        <div className="p-8 flex items-center justify-center gap-4">
          <span className="text-2xl">🕒</span>
          <div className="text-left">
            <p className="text-[#FAF5EF]/60 font-light">Layanan CS Online</p>
            <p className="font-bold mt-1">Monday - Sunday: 09:00 - 21:00 WIB</p>
          </div>
        </div>
        <div className="p-8 flex items-center justify-center gap-4">
          <span className="text-2xl">📍</span>
          <div className="text-left">
            <p className="text-[#FAF5EF]/60 font-light">Lokasi Fokus</p>
            <p className="font-bold mt-1">Bandung & Sukabumi</p>
          </div>
        </div>
        <div className="p-8 flex items-center justify-center gap-4">
          <span className="text-2xl">📞</span>
          <div className="text-left">
            <p className="text-[#FAF5EF]/60 font-light">Hubungi WhatsApp</p>
            <p className="font-bold mt-1">+62 812-3456-7890</p>
          </div>
        </div>
      </section>

      {/* 4. PREMIUM CATALOGUE / OUR ROOMS (Seaside Style Layout) */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 space-y-16">
        <div className="text-center space-y-3">
          <span className="font-sans text-xs font-bold text-[#B38E5D] uppercase tracking-widest block">Premium Living Units</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2D2321] border-b border-[#B38E5D]/20 pb-4 inline-block">Our Finest Rooms</h2>
          <p className="font-sans text-sm text-[#5C4A42] max-w-xl mx-auto">Kami mengumpulkan katalog sewa pilihan dengan jaminan orisinalitas foto lokasi dan fasilitas penunjang terlengkap.</p>
          
          {/* Kategori Filter Tab */}
          <div className="flex flex-wrap gap-2 justify-center pt-6 font-sans text-xs tracking-wider uppercase font-bold">
            {['Semua', 'Kost', 'Kontrakan', 'Putra', 'Putri'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 border border-[#B38E5D]/30 transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-[#2D2321] text-[#FAF5EF] border-[#2D2321]' 
                    : 'bg-white text-[#5C4A42] hover:bg-[#FAF5EF]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredRooms.map((room) => (
            <div key={room.id} className="group bg-[#F5EFEB] border border-[#B38E5D]/10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-200">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-4 left-4 font-sans text-[10px] uppercase font-black tracking-widest bg-[#FAF5EF]/95 text-[#2D2321] px-3 py-1 border border-[#B38E5D]/20">
                  {room.category}
                </span>
                <span className="absolute bottom-4 right-4 font-sans text-[10px] uppercase font-black tracking-widest bg-[#B38E5D] text-[#FAF5EF] px-3 py-1">
                  {room.badge}
                </span>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between font-sans text-[10px] font-bold tracking-widest text-[#B38E5D] uppercase">
                  <span>📍 {room.location}</span>
                  <span>★ {room.rating}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#2D2321] group-hover:text-[#B38E5D] transition duration-300">
                  {room.name}
                </h3>
                
                <p className="font-sans text-xs text-[#5C4A42] leading-relaxed line-clamp-3">
                  {room.desc}
                </p>

                <div className="pt-4 border-t border-[#B38E5D]/10 flex items-center justify-between">
                  <div>
                    <span className="font-sans text-[9px] text-[#5C4A42]/60 uppercase block">Harga Sewa</span>
                    <span className="text-base font-bold text-[#2D2321]">{room.price} <span className="font-sans text-xs text-[#5C4A42] font-normal">/{room.period}</span></span>
                  </div>
                  <Link to="/beranda" className="font-sans text-xs uppercase tracking-widest font-bold bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-4 py-3 transition duration-300">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. ELEGANT EXCLUSIVE FEATURES & STORY SECTION */}
      <section className="bg-[#2D2321] text-[#FAF5EF] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Frame Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=600&q=80" alt="Interior Details" className="w-full object-cover aspect-[3/4] border-2 border-[#B38E5D]/20 shadow-lg" />
              <div className="bg-[#B38E5D] p-6 text-[#FAF5EF] text-center space-y-2">
                <p className="text-3xl font-black">100%</p>
                <p className="font-sans text-xs uppercase tracking-widest">Verified Properties</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-[#F5EFEB] text-[#2D2321] p-6 text-center space-y-2 border border-[#B38E5D]/20">
                <p className="text-3xl font-black text-[#B38E5D]">Instant</p>
                <p className="font-sans text-xs uppercase tracking-widest font-bold text-[#5C4A42]">Booking Confirmation</p>
              </div>
              <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80" alt="Room Lifestyle" className="w-full object-cover aspect-[3/4] border-2 border-[#B38E5D]/20 shadow-lg" />
            </div>
          </div>

          {/* Right Text Column */}
          <div className="space-y-8">
            <span className="font-sans text-xs font-bold text-[#B38E5D] uppercase tracking-widest block">The Luxury Living Experience</span>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Hunian Sewa Sempurna <br />Yang Akan Selalu <span className="italic font-light text-[#B38E5D]">Kamu Ingat</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#B38E5D]"></div>
            <p className="font-sans text-sm sm:text-base text-[#FAF5EF]/80 leading-relaxed tracking-wide">
              Mencari hunian di sekitar kota bukan lagi perkara melelahkan. Kafana Vista menghapus kerumitan tersebut dengan validitas data survei lapangan, transparansi administrasi transaksi, dan integrasi penuh untuk keamanan dan kenyamanan tinggal Anda.
            </p>
            <div className="pt-4">
              <Link to="/beranda" className="font-sans text-xs uppercase tracking-widest font-bold bg-[#FAF5EF] hover:bg-[#B38E5D] text-[#2D2321] hover:text-[#FAF5EF] px-8 py-4 transition duration-300 inline-block shadow-md">
                Eksplorasi Semua Kost dan Kontrakan
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TESTIMONIAL SECTION (Cozy Hotel Warm Style) */}
      <section className="bg-[#FAF5EF] py-24 border-t border-[#B38E5D]/15">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <span className="font-sans text-xs font-bold text-[#B38E5D] uppercase tracking-widest block">Customer Testimonials</span>
          <h2 className="text-3xl font-bold text-[#2D2321]">What They Say</h2>
          
          <div className="relative pt-6">
            <span className="text-6xl text-[#B38E5D]/30 absolute top-0 left-1/2 -translate-x-1/2 font-serif">“</span>
            <blockquote className="text-xl sm:text-2xl font-medium text-[#2D2321] leading-relaxed italic relative z-10 pt-4">
              Proses pencarian dan booking kost di Kafana Vista benar-benar luar biasa praktis. Fotonya 100% akurat sama aslinya di lapangan, nggak ada tipu-tipu fasilitas. Tim validasinya profesional banget!
            </blockquote>
          </div>
          
          <div className="space-y-1">
            <p className="font-sans text-xs uppercase tracking-widest font-bold text-[#2D2321]">M. Faiz Ilham</p>
            <p className="font-sans text-[11px] uppercase tracking-widest text-[#B38E5D]">Mahasiswa Telkom University, Penyewa</p>
          </div>
        </div>
      </section>

      {/* 7. ELEGANT FOOTER (Dark Cocoa Palette) */}
      <footer className="bg-[#2D2321] text-[#FAF5EF]/60 py-16 border-t border-[#B38E5D]/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-xs font-sans tracking-widest uppercase">
          <div className="text-xl font-bold text-[#FAF5EF] tracking-wider font-serif">
            Kafana<span className="text-[#B38E5D] font-light">Vista</span>
          </div>
          <p className="text-center font-light">© 2026 Kafana Vista Proyek Team. All rights reserved.</p>
          <div className="flex space-x-6 text-[#FAF5EF]/80">
            <a href="#" className="hover:text-[#B38E5D] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#B38E5D] transition">Terms & Conditions</a>
          </div>
        </div>
      </footer>

    </div>
  );
}