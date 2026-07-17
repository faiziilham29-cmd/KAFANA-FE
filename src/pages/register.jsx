import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Pendaftaran berhasil untuk: ${name}`);
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

        {/* SISI KANAN: FORM REGISTER */}
        <div className="flex-1 bg-white p-8 md:p-14 flex flex-col justify-between items-center text-[#261C19]">
          <div className="w-full max-w-[380px] mx-auto my-auto space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-3xl font-extrabold tracking-tight leading-tight">Mulai Kelola <br /> Properti Anda,</h2>
              <p className="text-sm text-gray-500">Daftarkan akun pengelola baru di sini.</p>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase">Nama Lengkap</label>
                <input 
                  type="text" 
                  placeholder="Masukkan nama Anda" 
                  className="w-full px-4 py-2 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D] focus:border-[#B38E5D]"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required 
                />
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-bold uppercase">Alamat Email</label>
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
                <label className="block text-xs font-bold uppercase">Kata Sandi Baru</label>
                <input 
                  type="password" 
                  placeholder="Buat Kata Sandi" 
                  className="w-full px-4 py-2 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D] focus:border-[#B38E5D]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="w-full bg-[#B38E5D] text-white py-2.5 text-xs font-bold uppercase tracking-widest rounded hover:bg-[#8F6E45] transition shadow-md shadow-[#B38E5D]/20">
                DAFTAR SEKARANG
              </button>
            </form>

            <div className="text-center text-xs font-medium text-gray-600">
              <span>Sudah punya akun? </span>
              {/* Pindah balik ke Halaman Login */}
              <Link to="/login" className="underline font-bold text-[#261C19] hover:text-[#B38E5D] transition">
                Masuk ke Akun
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

export default Register;