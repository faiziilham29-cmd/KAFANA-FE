import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  // Data Dummy untuk Tabel Transaksi
  const recentTransactions = [
    { id: "INV-78299", name: "Nadilla Putri", location: "Kost Vista (Kamar 04)", type: "Kost Bulanan", status: "Lunas", date: "Jul 15, 2026", time: "10:15 AM", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "INV-78298", name: "Kahfi Al-Fatih", location: "Kontrakan Famili (Bojongsoang)", type: "Sewa Tahunan", status: "Berjalan", date: "Jul 14, 2026", time: "09:30 AM", statusColor: "bg-[#F0E6D8] text-[#8B6B43]" },
    { id: "INV-78297", name: "Adesuwa Johnson", location: "Kost Muslimah (Kamar 12)", type: "Kost Bulanan", status: "Pending", date: "Jul 15, 2026", time: "08:00 AM", statusColor: "bg-amber-100 text-amber-700" },
    { id: "INV-78296", name: "Bima Arya", location: "Kost Singgah (Kamar 01)", type: "Kost Bulanan", status: "Lunas", date: "Jul 12, 2026", time: "14:20 PM", statusColor: "bg-emerald-100 text-emerald-700" },
    { id: "INV-78295", name: "Ezekiel Adegoke", location: "Kost Vista (Kamar 09)", type: "Kost Bulanan", status: "Dibatalkan", date: "Jul 10, 2026", time: "11:10 AM", statusColor: "bg-rose-100 text-rose-700" },
  ];

  // Susunan Array Menu Sidebar yang Sudah Diperbaiki Kodenya & Dipasang Path
  const sidebarMenus = [
    { name: 'Dashboard', path: '/admin', icon: <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/> },
    { name: 'Data Properti', path: '/admin/properti', icon: <path d="M17 10H7v2h10v-2zm2-7h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zm-5-5H7v2h7v-2z"/> },
    { name: 'Penyewa Aktif', path: '#', icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/> },
    { name: 'Tagihan & Order', path: '#', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/> },
    { name: 'Laporan', path: '#', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/> },
    { name: 'Pengaturan', path: '#', icon: <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 C9.69,21.83,9.89,22,10.13,22h3.84c0.24,0,0.44-0.17,0.48-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/> },
  ];

  return (
    <div className="flex h-screen bg-[#FAF5EF] font-sans text-slate-800 overflow-hidden">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#261C19] text-[#FAF5EF] flex flex-col justify-between shrink-0 h-full overflow-y-auto">
        <div>
          {/* Logo Brand */}
          <div className="h-20 flex items-center px-6 border-b border-white/10">
            <div className="text-xl font-bold tracking-wide flex items-center gap-2">
              <svg className="w-6 h-6 text-[#B38E5D]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.7l6 5.3v9.5h-2v-6H8v6H6v-9.5l6-5.3z"/></svg>
              <span>KAFANA<span className="text-[#B38E5D]">VISTA</span></span>
            </div>
          </div>

          {/* Navigasi Menu Menggunakan Link */}
          <nav className="p-4 space-y-1 mt-2">
            {sidebarMenus.map((menu) => (
              <Link
                to={menu.path}
                key={menu.name}
                onClick={() => setActiveMenu(menu.name)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeMenu === menu.name 
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
        {/* HEADER TOP BAR */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10">
          {/* Search Bar */}
          <div className="relative w-96">
            <svg className="w-5 h-5 absolute left-3 top-2.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <input 
              type="text" 
              placeholder="Cari transaksi, penyewa, kamar..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-16 py-2.5 text-sm focus:outline-none focus:border-[#B38E5D] transition"
            />
            <span className="absolute right-3 top-2.5 text-xs text-slate-400 font-medium border border-slate-200 bg-white px-1.5 py-0.5 rounded">Ctrl + K</span>
          </div>

          {/* Right Header */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-600 font-medium text-sm">
              <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
              <span>Juli 15, 2026</span>
              <Link to="/home" className="font-sans text-xs uppercase tracking-widest font-bold bg-[#2D2321] hover:bg-[#B38E5D] text-[#FAF5EF] px-5 py-3 transition duration-300 shadow-md">
                Keluar
              </Link>
            </div>
            
            <button className="relative p-2 text-slate-400 hover:text-[#B38E5D] transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
            </button>

            <Link to="/profile" className="flex items-center gap-3 border-l border-slate-200 pl-6 cursor-pointer hover:opacity-80 transition">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-800">M. Faiz Ilham</p>
                <p className="text-xs text-slate-500">Head Admin</p>
              </div>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Admin" className="w-10 h-10 rounded-full border border-slate-200 object-cover" />
            </Link>
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard</h1>
              <p className="text-slate-500 mt-1">Overview operasional manajemen kost dan kontrakan</p>
            </div>
            <select className="bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-lg px-4 py-2.5 outline-none shadow-sm cursor-pointer hover:border-[#B38E5D]">
              <option>Minggu Ini</option>
              <option>Bulan Ini</option>
              <option>Tahun Ini</option>
            </select>
          </div>

          {/* 4 SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#F0E6D8] flex items-center justify-center text-[#B38E5D] shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Total Unit Kost & Kontrakan</p>
                  <h3 className="text-2xl font-black text-slate-900">45 Unit</h3>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4 z-10">
                <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">↑ 5% <span className="text-slate-400 font-normal">vs bulan lalu</span></span>
              </div>
              <svg className="absolute bottom-0 right-0 w-32 h-16 text-[#F0E6D8]/50" preserveAspectRatio="none" viewBox="0 0 100 100"><path fill="currentColor" d="M0,100 C20,80 40,90 60,60 C80,30 90,40 100,20 L100,100 Z" /></svg>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Penyewa Aktif</p>
                  <h3 className="text-2xl font-black text-slate-900">38 Orang</h3>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4 z-10">
                <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">↑ 12% <span className="text-slate-400 font-normal">vs bulan lalu</span></span>
              </div>
              <svg className="absolute bottom-0 right-0 w-32 h-16 text-emerald-100/50" preserveAspectRatio="none" viewBox="0 0 100 100"><path fill="currentColor" d="M0,100 C20,90 40,70 60,70 C80,70 90,40 100,30 L100,100 Z" /></svg>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Tagihan Pending</p>
                  <h3 className="text-2xl font-black text-slate-900">12 Order</h3>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4 z-10">
                <span className="text-xs font-semibold text-rose-500 bg-rose-50 px-2 py-1 rounded">↓ 5% <span className="text-slate-400 font-normal">vs minggu lalu</span></span>
              </div>
              <svg className="absolute bottom-0 right-0 w-32 h-16 text-amber-100/50" preserveAspectRatio="none" viewBox="0 0 100 100"><path fill="currentColor" d="M0,100 C30,90 40,60 60,80 C70,90 90,30 100,20 L100,100 Z" /></svg>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="flex gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Total Pendapatan</p>
                  <h3 className="text-2xl font-black text-slate-900">Rp 271T</h3>
                </div>
              </div>
              <div className="flex items-end justify-between mt-4 z-10">
                <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-1 rounded">↑ 18% <span className="text-slate-400 font-normal">vs bulan lalu</span></span>
              </div>
              <svg className="absolute bottom-0 right-0 w-32 h-16 text-purple-100/50" preserveAspectRatio="none" viewBox="0 0 100 100"><path fill="currentColor" d="M0,100 C20,95 40,70 60,60 C80,50 90,30 100,10 L100,100 Z" /></svg>
            </div>
          </div>

          {/* TABLE SECTION */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 flex flex-col sm:flex-row justify-between items-center border-b border-slate-100 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-slate-100 rounded-lg">
                  <svg className="w-5 h-5 text-slate-700" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>
                </div>
                <h2 className="text-lg font-bold text-slate-900">Transaksi Pembayaran Terbaru</h2>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 font-medium text-sm rounded-lg hover:bg-slate-50 transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
                  <span>Filter</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#B38E5D] hover:bg-[#8F6E45] text-white font-medium text-sm rounded-lg transition shadow-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                  <span>Export</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-[#FAF5EF] text-slate-600 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4">ID Order</th>
                    <th className="px-6 py-4">Nama Penyewa</th>
                    <th className="px-6 py-4">Properti / Lokasi</th>
                    <th className="px-6 py-4">Tipe Sewa</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Tgl Jatuh Tempo</th>
                    <th className="px-6 py-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentTransactions.map((tx, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-semibold text-[#B38E5D]">{tx.id}</td>
                      <td className="px-6 py-4 font-medium text-slate-800">{tx.name}</td>
                      <td className="px-6 py-4 flex items-center gap-2">
                        <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                        <span className="text-slate-600">{tx.location}</span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">{tx.type}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider ${tx.statusColor}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-600">
                        <div className="font-medium">{tx.date}</div>
                        <div className="text-xs text-slate-400">{tx.time}</div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <button className="p-1.5 text-slate-400 hover:text-[#B38E5D] hover:bg-slate-100 rounded transition">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-5 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500">
              <div>Menampilkan 1 hingga 5 dari 30 entri data</div>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100">&lt;</button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-[#B38E5D] text-white font-bold">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100">3</button>
                <span className="px-2">...</span>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-slate-100">&gt;</button>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}