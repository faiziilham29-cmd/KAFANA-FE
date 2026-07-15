import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  // State interaktif form profil
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "M. Faiz Ilham",
    email: "faiz.ilham@student.telkomuniversity.ac.id",
    phone: "+62 812-3456-7890",
    joinDate: "12 Januari 2026",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    currentRoom: "Kost Vista Exclusive Executive",
    roomNumber: "Kamar B-04",
    rentDue: "12 Agustus 2026",
    status: "Aktif"
  });

  const [formState, setFormState] = useState({ ...userData });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSave = (e) => {
    e.preventDefault();
    setUserData({ ...formState });
    setIsEditing(false);
    setSuccessMessage("Profil Anda berhasil diperbarui dengan aman!");
    setTimeout(() => setSuccessMessage(""), 4000);
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#2D2321] font-serif antialiased selection:bg-[#B38E5D] selection:text-white">
      
      {/* GLASSMORPHISM NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#FAF5EF]/90 backdrop-blur-md border-b border-[#B38E5D]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-widest text-[#2D2321] flex items-center gap-2">
            <span className="bg-[#2D2321] text-[#FAF5EF] px-3 py-1 rounded-sm shadow-md text-xl font-sans">KV</span>
            <span className="font-sans">Kafana<span className="text-[#B38E5D] font-light">Vista</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-sans text-xs uppercase tracking-widest font-semibold text-[#5C4A42]">
            <Link to="/home" className="hover:text-[#B38E5D] transition pb-1">Home</Link>
            <Link to="/beranda" className="hover:text-[#B38E5D] transition pb-1">Cari Hunian</Link>
            <Link to="/finance" className="hover:text-[#B38E5D] transition pb-1">Finance Tracker</Link>
            <Link to="/profile" className="text-[#B38E5D] transition border-b border-[#B38E5D] pb-1">Profil Saya</Link>
          </div>
          <div>
            <Link to="/home" className="font-sans text-xs uppercase tracking-widest font-bold bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-5 py-3 transition duration-300 shadow-md">
              Keluar
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        
        {/* SUCCESS MESSAGE */}
        {successMessage && (
          <div className="mb-6 p-4 bg-[#B38E5D] text-[#FAF5EF] font-sans text-xs uppercase tracking-widest font-bold text-center shadow-md animate-fade-in">
            ✨ {successMessage}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* SISI KIRI: KARTU IDENTITAS USER */}
          <div className="bg-[#2D2321] text-[#FAF5EF] p-8 border border-[#B38E5D]/20 shadow-xl space-y-6 text-center">
            <div className="relative inline-block">
              <img 
                src={userData.avatar} 
                alt={userData.name} 
                className="w-28 h-28 rounded-none object-cover mx-auto border-2 border-[#B38E5D]"
              />
              <span className="absolute bottom-0 right-2 bg-[#B38E5D] text-[#FAF5EF] text-[10px] font-sans font-bold uppercase px-2 py-0.5 tracking-wider">
                Member
              </span>
            </div>
            
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-wide">{userData.name}</h2>
              <p className="font-sans text-xs text-[#FAF5EF]/60 font-light lowercase tracking-normal">{userData.email}</p>
            </div>

            <div className="h-px bg-[#B38E5D]/20 w-full"></div>

            <div className="text-left font-sans text-xs uppercase tracking-wider space-y-3 text-[#FAF5EF]/80">
              <div className="flex justify-between">
                <span className="text-[#FAF5EF]/50 font-light">Terdaftar:</span>
                <span className="font-bold text-[#B38E5D]">{userData.joinDate}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#FAF5EF]/50 font-light">No. Handphone:</span>
                <span className="font-bold">{userData.phone}</span>
              </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={() => { setIsEditing(!isEditing); setFormState({ ...userData }); }}
                className="w-full font-sans text-xs uppercase tracking-widest font-bold border border-[#B38E5D] hover:bg-[#B38E5D] text-[#FAF5EF] py-3 transition duration-300"
              >
                {isEditing ? "Batal Ubah" : "Ubah Data Profil"}
              </button>
            </div>
          </div>

          {/* SISI KANAN: FORM EDIT & STATUS HUNIAN AKTIF */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* KARTU UNIT KOST YANG SEDANG DISEWA */}
            <div className="bg-[#F5EFEB] p-8 border border-[#B38E5D]/10 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-[#B38E5D]/20 pb-4">
                <div className="space-y-1">
                  <span className="font-sans text-[10px] font-bold text-[#B38E5D] uppercase tracking-widest block">Active Residential Status</span>
                  <h3 className="text-2xl font-bold tracking-tight text-[#2D2321]">Detail Hunian Berjalan</h3>
                </div>
                <span className="font-sans text-xs uppercase tracking-widest font-black bg-[#B38E5D] text-[#FAF5EF] px-4 py-1.5">
                  {userData.status}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans">
                <div className="space-y-1">
                  <h4 className="font-serif text-lg font-bold text-[#2D2321]">{userData.currentRoom}</h4>
                  <p className="text-xs text-[#5C4A42] font-semibold">{userData.roomNumber}</p>
                  <p className="text-xs text-[#5C4A42]/60 font-light mt-1">Batas Akhir Sewa / Jatuh Tempo Tagihan:</p>
                  <p className="text-sm font-bold text-[#2D2321] mt-0.5">{userData.rentDue}</p>
                </div>
                
                <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                  <Link to="/finance" className="flex-1 text-center text-xs uppercase tracking-widest font-bold bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-5 py-3 transition duration-300 shadow-sm">
                    Bayar Tagihan
                  </Link>
                  <Link to="/beranda" className="flex-1 text-center text-xs uppercase tracking-widest font-bold border border-[#5C4A42]/30 text-[#2D2321] hover:bg-[#FAF5EF] px-5 py-3 transition duration-300">
                    Bantuan CS
                  </Link>
                </div>
              </div>
            </div>

            {/* FORM EDIT DATA DATA PENGGUNA */}
            <div className="bg-white p-8 border border-[#B38E5D]/10 shadow-sm space-y-6">
              <div className="border-b border-[#B38E5D]/20 pb-4">
                <h3 className="text-xl font-bold tracking-tight text-[#2D2321]">
                  {isEditing ? "Formulir Pembaruan Data" : "Informasi Akun Pribadi"}
                </h3>
                <p className="font-sans text-xs text-[#5C4A42] mt-1">
                  {isEditing ? "Sesuaikan data akun resmi Anda, lalu klik Simpan." : "Gunakan menu tombol di panel kiri untuk mengubah informasi berkas Anda."}
                </p>
              </div>

              <form onSubmit={handleSave} className="space-y-6 font-sans text-xs uppercase tracking-widest font-bold text-[#5C4A42]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[#2D2321]">Nama Lengkap</label>
                    <input 
                      type="text"
                      disabled={!isEditing}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full p-4 border border-[#B38E5D]/20 bg-[#FAF5EF] text-[#2D2321] focus:outline-none focus:border-[#B38E5D] font-medium tracking-normal rounded-none disabled:opacity-70 transition duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[#2D2321]">Email Mahasiswa/User</label>
                    <input 
                      type="email"
                      disabled={!isEditing}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full p-4 border border-[#B38E5D]/20 bg-[#FAF5EF] text-[#2D2321] focus:outline-none focus:border-[#B38E5D] font-medium tracking-normal rounded-none disabled:opacity-70 transition duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[#2D2321]">Nomor WhatsApp Actif</label>
                    <input 
                      type="text"
                      disabled={!isEditing}
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full p-4 border border-[#B38E5D]/20 bg-[#FAF5EF] text-[#2D2321] focus:outline-none focus:border-[#B38E5D] font-medium tracking-normal rounded-none disabled:opacity-70 transition duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-[#2D2321]">Tautan Gambar Avatar</label>
                    <input 
                      type="text"
                      disabled={!isEditing}
                      value={formState.avatar}
                      onChange={(e) => setFormState({ ...formState, avatar: e.target.value })}
                      className="w-full p-4 border border-[#B38E5D]/20 bg-[#FAF5EF] text-[#2D2321] focus:outline-none focus:border-[#B38E5D] font-medium tracking-normal rounded-none disabled:opacity-70 transition duration-200"
                    />
                  </div>
                </div>

                {isEditing && (
                  <div className="pt-4 flex justify-end">
                    <button 
                      type="submit"
                      className="bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-8 py-4 tracking-widest font-bold transition duration-300 shadow-md"
                    >
                      Simpan Perubahan
                    </button>
                  </div>
                )}
              </form>
            </div>

          </div>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#2D2321] text-[#FAF5EF]/60 py-12 border-t border-[#B38E5D]/20 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-sans tracking-widest uppercase">
          <div className="text-xl font-bold text-[#FAF5EF] font-serif">
            Kafana<span className="text-[#B38E5D] font-light">Vista</span>
          </div>
          <p className="font-light">© 2026 Kafana Vista Proyek Team. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}