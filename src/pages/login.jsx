import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mencoba masuk dengan email: ${email}`);
  };

  return (
    <div className="flex min-h-screen bg-[#FAF5EF] w-full items-center justify-center p-4 font-sans selection:bg-[#B38E5D] selection:text-white">
      <div className="flex w-full max-w-[1100px] min-h-[650px] bg-white rounded-md shadow-2xl overflow-hidden border border-[#D7C4B0]">
        
        {/* SISI KIRI: BANNER COKLAT GELAP */}
        <div className="hidden md:flex flex-1 bg-[#261C19] text-[#FAF5EF] p-12 flex-col justify-between items-center relative select-none">
          <div className="absolute inset-0 opacity-40 mix-blend-luminosity pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=600&auto=format&fit=crop" 
              alt="Building Architecture" 
              className="w-full h-full object-cover grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#261C19] via-transparent to-transparent"></div>
          </div>
          <div className="flex-grow"></div>
          <div className="relative z-10 flex flex-col items-center text-center mt-auto">
            <div className="mb-4">
              <svg className="w-20 h-20 text-[#B38E5D]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 20V80H35V53L55 80H68L45 49L65 20H52L35 43V20H25Z" fill="currentColor" />
                <path d="M72 20L56 50L61 57L79 25H72Z" fill="currentColor" />
                <path d="M81 60L70 77L75 80L88 60H81Z" fill="currentColor" />
              </svg>
            </div>
            <h1 className="text-3xl font-light tracking-[0.2em] uppercase font-mono">KAFANA VISTA</h1>
          </div>
        </div>

        {/* SISI KANAN: FORM LOGIN */}
        <div className="flex-1 bg-white p-8 md:p-14 flex flex-col justify-between items-center text-[#261C19]">
          <div className="w-full max-w-[380px] mx-auto my-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">Selamat Datang di <br /> KAFANA VISTA,</h2>
              <p className="text-sm text-gray-500">Platform Kelola Kost & Kontrakan</p>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="w-20 h-20 bg-white border-[1.5px] border-[#B38E5D] rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-[#B38E5D]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md font-bold">OM FAIZ</h3>
                <p className="text-xs text-gray-500">Pemilik</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase">Email</label>
                <input 
                  type="email" 
                  placeholder="contoh@email.com" 
                  className="w-full px-4 py-2 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D] focus:border-[#B38E5D]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase">Password</label>
                <input 
                  type="password" 
                  placeholder="Masukkan Password" 
                  className="w-full px-4 py-2 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D] focus:border-[#B38E5D]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              {/* 1. Tombol Masuk Utama (Warna Emas) */}
              <button type="submit" className="w-full bg-[#B38E5D] text-white py-2.5 text-xs font-bold uppercase tracking-widest rounded hover:bg-[#8F6E45] transition shadow-md shadow-[#B38E5D]/20">
                MASUK KE DASHBOARD
              </button>

              {/* 2. TOMBOL JALAN PINTAS AKSES DETAIL KAMAR (Garis Coklat) */}
              <Link 
                to="/detail-kamar" 
                className="block w-full text-center bg-white text-[#261C19] border border-[#261C19] py-2.5 text-xs font-bold uppercase tracking-widest rounded hover:bg-[#261C19] hover:text-[#FAF5EF] transition mt-2"
              >
                🔍 CEK DETAIL KAMAR
              </Link>
            </form>

            <div className="text-center text-xs font-medium text-gray-600">
              <span>Belum bergabung? </span>
              <Link to="/register" className="underline font-bold text-[#261C19] hover:text-[#B38E5D] transition">
                Daftar Akun Baru
              </Link>
            </div>
          </div>
          
          <div className="text-center text-[10px] font-semibold text-gray-400 uppercase mt-4">
            © 2026 KAFANA VISTA. Hak Cipta Dilindungi.
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;