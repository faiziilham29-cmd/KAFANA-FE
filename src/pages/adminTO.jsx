import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminTagihanOrder() {
  const location = useLocation();

  // 1. DUMMY DATA UNTUK TAGIHAN
  const [invoices, setInvoices] = useState([
    { id: "INV-78300", name: "Budi Santoso", room: "Kamar 01A (Premium)", amount: 1500000, dueDate: "2026-07-16", status: "Pending" },
    { id: "INV-78299", name: "Nadilla Putri", room: "Kost Vista (Kamar 04)", amount: 1200000, dueDate: "2026-07-15", status: "Lunas" },
    { id: "INV-78298", name: "Kahfi Al-Fatih", room: "Kontrakan Famili", amount: 25000000, dueDate: "2026-07-14", status: "Jatuh Tempo" },
    { id: "INV-78297", name: "Adesuwa Johnson", room: "Kost Muslimah (Kamar 12)", amount: 850000, dueDate: "2026-07-20", status: "Pending" },
    { id: "INV-78296", name: "Bima Arya", room: "Kost Singgah (Kamar 01)", amount: 900000, dueDate: "2026-07-10", status: "Lunas" },
  ]);

  // 2. STATE UNTUK FILTER
  const [filterStatus, setFilterStatus] = useState("Semua");

  // Filter Data
  const filteredInvoices = invoices.filter(inv => 
    filterStatus === "Semua" ? true : inv.status === filterStatus
  );

  // Kalkulasi Summary
  const totalPending = invoices.filter(i => i.status === "Pending").length;
  const totalLunas = invoices.filter(i => i.status === "Lunas").length;
  const totalJatuhTempo = invoices.filter(i => i.status === "Jatuh Tempo").length;

  // Format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  // Array Menu Sidebar
   const sidebarMenus = [
    { name: 'Dashboard', path: '/admin', icon: <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/> },
    { name: 'Data Properti', path: '/admin/properti', icon: <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/> },
    { name: 'Penyewa Aktif', path: '/adminpenyewa', icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/> },
    { name: 'Tagihan & Order', path: '/adminTO', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/> },
    { name: 'Laporan', path: '/adminlaporan', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/> },
    { name: 'Pengaturan', path: '/adminpengaturan', icon: <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 C9.69,21.83,9.89,22,10.13,22h3.84c0.24,0,0.44-0.17,0.48-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/> },
  ];

  return (
    <div className="flex h-screen bg-[#FAF5EF] font-sans text-slate-800 overflow-hidden relative">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#261C19] text-[#FAF5EF] flex flex-col justify-between shrink-0 h-full overflow-y-auto">
        <div>
          <div className="h-20 flex items-center px-6 border-b border-white/10">
            <div className="text-xl font-bold tracking-wide flex items-center gap-2">
              <svg className="w-6 h-6 text-[#B38E5D]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7l6 5.3v9.5h-2v-6H8v6H6v-9.5l6-5.3z"/></svg>
              <span>KAFANA<span className="text-[#B38E5D]">VISTA</span></span>
            </div>
          </div>
          <nav className="p-4 space-y-1 mt-2">
            {sidebarMenus.map((menu) => (
              <Link
                to={menu.path}
                key={menu.name}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === menu.path || menu.name === 'Tagihan & Order'
                    ? 'bg-[#B38E5D] text-white shadow-md' 
                    : 'text-[#D7C4B0] hover:bg-[#3D2D29] hover:text-white'
                }`}
              >
                <svg className="w-5 h-5 opacity-90" fill="currentColor" viewBox="0 0 24 24">{menu.icon}</svg>
                <span>{menu.name}</span>
              </Link>
            ))}
          </nav>
        </div>
        
        {/* Banner Promo Sidebar */}
        <div className="p-4 mb-4">
          <div className="bg-[#3D2D29] rounded-xl p-4 text-center">
            <p className="text-xs font-semibold mb-3 leading-relaxed text-[#D7C4B0]">Cek status kost atau update ketersediaan kamar baru</p>
            <div className="bg-[#FAF5EF] text-[#261C19] flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer hover:opacity-90 transition">
              <span className="text-sm font-bold">Update Sekarang</span>
              <span>➔</span>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10 shadow-sm">
          <div className="relative w-96 hidden md:block">
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Cari tagihan, penyewa, ID..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-16 py-2.5 text-sm focus:outline-none focus:border-[#B38E5D] transition"
            />
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
              <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
              <span>Juli 16, 2026</span>
              <Link to="/" className="font-sans text-xs uppercase tracking-widest font-bold bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-5 py-3 transition duration-300 shadow-md ml-2 rounded">
                Keluar
              </Link>
            </div>
            <Link to="/profile" className="flex items-center gap-3 border-l border-slate-200 pl-6 cursor-pointer hover:opacity-80 transition">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-800">M. Faiz Ilham</p>
                <p className="text-xs text-slate-500">Head Admin</p>
              </div>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Admin" className="w-10 h-10 rounded-full object-cover border border-slate-200" />
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#261C19] tracking-tight">Tagihan & Order</h1>
              <p className="text-slate-500 mt-1">Kelola invoice penyewa, status pembayaran, dan pengingat.</p>
            </div>
            
            <button className="flex items-center gap-2 px-5 py-2.5 bg-[#B38E5D] hover:bg-[#8F6E45] text-white font-bold text-sm rounded-lg transition shadow-md shadow-[#B38E5D]/30">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
              <span>Buat Tagihan Baru</span>
            </button>
          </div>

          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-[#B38E5D] transition" onClick={() => setFilterStatus("Semua")}>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Total Tagihan (Juli)</p>
              <h3 className="text-3xl font-black text-[#261C19]">{invoices.length}</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-amber-400 transition" onClick={() => setFilterStatus("Pending")}>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Menunggu Pembayaran</p>
              <h3 className="text-3xl font-black text-amber-500">{totalPending}</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-emerald-400 transition" onClick={() => setFilterStatus("Lunas")}>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Tagihan Lunas</p>
              <h3 className="text-3xl font-black text-emerald-500">{totalLunas}</h3>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between cursor-pointer hover:border-rose-400 transition" onClick={() => setFilterStatus("Jatuh Tempo")}>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Jatuh Tempo</p>
              <h3 className="text-3xl font-black text-rose-500">{totalJatuhTempo}</h3>
            </div>
          </div>

          {/* TABEL DATA TAGIHAN */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 bg-[#FAF5EF]/50">
              <h2 className="text-lg font-bold text-[#261C19]">Daftar Invoice</h2>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-500 font-medium">Filter Status:</span>
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg px-3 py-1.5 outline-none shadow-sm focus:ring-1 focus:ring-[#B38E5D]"
                >
                  <option value="Semua">Semua Tagihan</option>
                  <option value="Lunas">Lunas</option>
                  <option value="Pending">Pending</option>
                  <option value="Jatuh Tempo">Jatuh Tempo</option>
                </select>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4">ID Tagihan</th>
                    <th className="px-6 py-4">Nama Penyewa</th>
                    <th className="px-6 py-4">Properti / Kamar</th>
                    <th className="px-6 py-4">Nominal</th>
                    <th className="px-6 py-4">Tgl Jatuh Tempo</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredInvoices.length > 0 ? filteredInvoices.map((inv, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-bold text-[#B38E5D]">{inv.id}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{inv.name}</td>
                      <td className="px-6 py-4 text-slate-600">{inv.room}</td>
                      <td className="px-6 py-4 font-semibold text-[#261C19]">{formatRupiah(inv.amount)}</td>
                      <td className="px-6 py-4 text-slate-600">{inv.dueDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${
                          inv.status === 'Lunas' ? 'bg-emerald-100 text-emerald-700' :
                          inv.status === 'Jatuh Tempo' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {inv.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="px-3 py-1.5 text-xs font-bold text-[#B38E5D] bg-[#B38E5D]/10 hover:bg-[#B38E5D] hover:text-white rounded transition">
                            Detail
                          </button>
                          {inv.status !== 'Lunas' && (
                            <button className="px-3 py-1.5 text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-500 hover:text-white rounded transition">
                              Ingatkan
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="7" className="px-6 py-8 text-center text-slate-400">Tidak ada tagihan yang sesuai dengan filter.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            {/* Pagination Dummy */}
            <div className="p-5 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 bg-white">
              <div>Menampilkan {filteredInvoices.length} entri data</div>
              <div className="flex items-center gap-1">
                <button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50">&lt;</button>
                <button className="px-3 py-1 rounded bg-[#B38E5D] text-white font-bold">1</button>
                <button className="px-3 py-1 rounded border border-slate-200 hover:bg-slate-50">&gt;</button>
              </div>
            </div>
            
          </div>
        </div>
      </main>

    </div>
  );
}