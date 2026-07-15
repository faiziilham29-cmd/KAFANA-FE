import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminDataProperti() {
  const location = useLocation();

  // 1. STATE UNTUK DATA KAMAR (READ)
  const [rooms, setRooms] = useState([
    { id: 1, name: "Kamar 01A (Premium)", type: "Putra", price: "1500000", facilities: "AC, WiFi, K. Mandi Dalam", status: "Tersedia" },
    { id: 2, name: "Kamar 02B (Standar)", type: "Putri", price: "850000", facilities: "Kipas, Lemari, Kasur", status: "Terisi" },
    { id: 3, name: "Paviliun Keluarga C", type: "Campur", price: "2500000", facilities: "Dapur, AC, Parkir Mobil", status: "Renovasi" },
  ]);

  // 2. STATE UNTUK MODAL & FORM (CREATE & UPDATE)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: '', type: 'Campur', price: '', facilities: '', status: 'Tersedia' });

  // Fungsi untuk buka modal Tambah Data (Create)
  const handleOpenAdd = () => {
    setFormData({ id: null, name: '', type: 'Campur', price: '', facilities: '', status: 'Tersedia' });
    setIsModalOpen(true);
  };

  // Fungsi untuk buka modal Edit Data (Update)
  const handleOpenEdit = (room) => {
    setFormData(room);
    setIsModalOpen(true);
  };

  // Fungsi untuk Hapus Data (Delete)
  const handleDelete = (id) => {
    if(window.confirm("Yakin ingin menghapus data kamar ini?")) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  // Fungsi untuk Handle perubahan input di Form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi untuk Submit Form (Simpan Data Baru atau Update Data Lama)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.id) {
      // Update data eksisting
      setRooms(rooms.map(room => (room.id === formData.id ? formData : room)));
    } else {
      // Tambah data baru
      const newRoom = { ...formData, id: Date.now() }; // Generate ID unik pakai Date.now()
      setRooms([...rooms, newRoom]);
    }
    setIsModalOpen(false); // Tutup modal setelah simpan
  };

  // Format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  // Array Menu Sidebar
  const sidebarMenus = [
    { name: 'Dashboard', path: '/admin', icon: <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/> },
    { name: 'Data Properti', path: '/admin/properti', icon: <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/> },
    { name: 'Penyewa Aktif', path: '#', icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/> },
    { name: 'Tagihan & Order', path: '#', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/> },
  ];

  return (
    <div className="flex h-screen bg-[#F8F9FD] font-sans text-slate-800 overflow-hidden relative">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#2A3F86] text-white flex flex-col justify-between shrink-0 h-full overflow-y-auto">
        <div>
          <div className="h-20 flex items-center px-6 border-b border-white/10">
            <div className="text-xl font-bold tracking-wide flex items-center gap-2">
              <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7l6 5.3v9.5h-2v-6H8v6H6v-9.5l6-5.3z"/></svg>
              <span>KAFANA<span className="text-amber-400">VISTA</span></span>
            </div>
          </div>
          <nav className="p-4 space-y-1 mt-2">
            {sidebarMenus.map((menu) => (
              <Link
                to={menu.path}
                key={menu.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === menu.path 
                    ? 'bg-[#4B62C8] text-white shadow-md' 
                    : 'text-indigo-200 hover:bg-[#3950A2] hover:text-white'
                }`}
              >
                <svg className="w-5 h-5 opacity-90" fill="currentColor" viewBox="0 0 24 24">{menu.icon}</svg>
                <span>{menu.name}</span>
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10">
          <div className="text-lg font-bold text-slate-700">Manajemen Kamar</div>
          <div className="flex items-center gap-6">
            <Link to="/profile" className="flex items-center gap-3 border-l border-slate-200 pl-6 cursor-pointer hover:opacity-80 transition">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-800">Admin Utama</p>
              </div>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Admin" className="w-10 h-10 rounded-full object-cover" />
            </Link>
          </div>
        </header>

        {/* CONTENT (CRUD TABLE) */}
        <div className="flex-1 overflow-y-auto p-8">
          
          <div className="flex justify-between items-end mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Data Kamar</h1>
              <p className="text-slate-500 mt-1">Kelola data kamar kost dan kontrakan Anda di sini.</p>
            </div>
            {/* TOMBOL CREATE */}
            <button 
              onClick={handleOpenAdd}
              className="flex items-center gap-2 px-5 py-2.5 bg-[#4B62C8] hover:bg-[#3950A2] text-white font-bold text-sm rounded-lg transition shadow-md shadow-[#4B62C8]/30"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              <span>Tambah Kamar Baru</span>
            </button>
          </div>

          {/* TABEL DATA KAMAR */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-[#F8F9FD] text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4">No. / Nama Kamar</th>
                    <th className="px-6 py-4">Tipe</th>
                    <th className="px-6 py-4">Fasilitas Utama</th>
                    <th className="px-6 py-4">Harga Sewa</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rooms.length > 0 ? rooms.map((room) => (
                    <tr key={room.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-bold text-slate-800">{room.name}</td>
                      <td className="px-6 py-4 text-slate-600">{room.type}</td>
                      <td className="px-6 py-4 text-slate-500 max-w-[200px] truncate">{room.facilities}</td>
                      <td className="px-6 py-4 font-semibold text-[#4B62C8]">{formatRupiah(room.price)}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                          room.status === 'Tersedia' ? 'bg-emerald-100 text-emerald-700' :
                          room.status === 'Terisi' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {room.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          {/* TOMBOL UPDATE / EDIT */}
                          <button onClick={() => handleOpenEdit(room)} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded transition" title="Edit">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                          </button>
                          {/* TOMBOL DELETE / HAPUS */}
                          <button onClick={() => handleDelete(room.id)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition" title="Hapus">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="6" className="px-6 py-8 text-center text-slate-400">Belum ada data kamar. Silakan tambah baru.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      {/* ================= MODAL FORM (CREATE & UPDATE) ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            
            {/* Header Modal */}
            <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-[#F8F9FD]">
              <h3 className="text-lg font-bold text-slate-800">
                {formData.id ? 'Edit Data Kamar' : 'Tambah Kamar Baru'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-rose-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>

            {/* Body Form Modal */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Nama / Nomor Kamar</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Contoh: Kamar 01A" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4B62C8]" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Tipe Kamar</label>
                  <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4B62C8]">
                    <option value="Putra">Putra</option>
                    <option value="Putri">Putri</option>
                    <option value="Campur">Campur</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Status</label>
                  <select name="status" value={formData.status} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4B62C8]">
                    <option value="Tersedia">Tersedia</option>
                    <option value="Terisi">Terisi</option>
                    <option value="Renovasi">Renovasi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Harga Sewa (Rp)</label>
                <input required type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Contoh: 1500000" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4B62C8]" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Fasilitas Utama</label>
                <textarea required name="facilities" value={formData.facilities} onChange={handleChange} rows="2" placeholder="AC, WiFi, K. Mandi Dalam..." className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-[#4B62C8]"></textarea>
              </div>

              {/* Footer Modal (Tombol Action) */}
              <div className="pt-4 flex items-center justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition">
                  Batal
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-bold text-white bg-[#4B62C8] hover:bg-[#3950A2] rounded-lg transition shadow-md shadow-[#4B62C8]/30">
                  Simpan Data
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}