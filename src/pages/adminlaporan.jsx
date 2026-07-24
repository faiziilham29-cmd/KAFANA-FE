import React, { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AdminLaporanKeuangan() {
  const location = useLocation();

  // 1. STATE UNTUK DATA TRANSAKSI (DUMMY DATA)
  const [transactions, setTransactions] = useState([
    { id: "TRX-001", date: "2026-07-01", description: "Pembayaran Kost - Kamar 01A (Budi)", category: "Sewa Kamar", type: "income", amount: 1500000 },
    { id: "TRX-002", date: "2026-07-03", description: "Pembayaran Token Listrik Kost", category: "Operasional", type: "expense", amount: 500000 },
    { id: "TRX-003", date: "2026-07-05", description: "Pembayaran Kost - Kamar 02B (Siti)", category: "Sewa Kamar", type: "income", amount: 850000 },
    { id: "TRX-004", date: "2026-07-10", description: "Perbaikan Kran Air Paviliun C", category: "Maintenance", type: "expense", amount: 150000 },
    { id: "TRX-005", date: "2026-07-12", description: "Pembayaran Sewa Tahunan - Paviliun C", category: "Sewa Kamar", type: "income", amount: 25000000 },
    { id: "TRX-006", date: "2026-07-15", description: "Gaji Petugas Kebersihan (Juli)", category: "Gaji Pegawai", type: "expense", amount: 1200000 },
  ]);

  // 2. STATE UNTUK FILTER
  const [filterMonth, setFilterMonth] = useState("all");
  const [filterType, setFilterType] = useState("all");

  // 3. FUNGSI FORMAT RUPIAH
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  // 4. FUNGSI FILTER & KALKULASI DATA
  const filteredData = useMemo(() => {
    return transactions.filter(trx => {
      const matchMonth = filterMonth === "all" ? true : trx.date.startsWith(filterMonth);
      const matchType = filterType === "all" ? true : trx.type === filterType;
      return matchMonth && matchType;
    });
  }, [transactions, filterMonth, filterType]);

  const totalIncome = filteredData.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = filteredData.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const netBalance = totalIncome - totalExpense;

  // 5. FUNGSI EXPORT (Dummy Alert)
  const handleExport = () => {
    alert("Berhasil mengunduh Laporan Keuangan dalam format PDF/Excel.");
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
      
      {/* CSS Animasi Internal */}
      <style>
        {`
          @keyframes fadeSlideUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          .animate-fade-up {
            animation: fadeSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .delay-100 { animation-delay: 100ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-300 { animation-delay: 300ms; }
          .delay-400 { animation-delay: 400ms; }
          .delay-500 { animation-delay: 500ms; }
        `}
      </style>

      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#261C19] text-[#FAF5EF] flex flex-col justify-between shrink-0 h-full overflow-y-auto animate-fade-in">
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
                  location.pathname === menu.path || menu.name === 'Laporan Keuangan'
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
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* HEADER */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10 shadow-sm animate-fade-in">
          <div className="text-lg font-bold text-[#261C19]">Laporan & Keuangan</div>
          <div className="flex items-center gap-6">
            <Link to="/profile" className="flex items-center gap-3 border-l border-slate-200 pl-6 cursor-pointer hover:opacity-80 transition">
              <div className="text-right hidden md:block">
                <p className="text-sm font-bold text-slate-800">Faiz</p>
                <p className="text-xs text-slate-500">Administrator</p>
              </div>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="Admin" className="w-10 h-10 rounded-full object-cover border-2 border-[#B38E5D]" />
            </Link>
          </div>
        </header>

        {/* CONTENT */}
        <div className="flex-1 overflow-y-auto p-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 animate-fade-up delay-100">
            <div>
              <h1 className="text-3xl font-bold text-[#261C19] tracking-tight">Arus Kas</h1>
              <p className="text-slate-500 mt-1">Pantau pemasukan dan pengeluaran properti Anda.</p>
            </div>
            
            {/* FILTER KONTROL */}
            <div className="flex flex-wrap items-center gap-3">
              <select 
                value={filterMonth} 
                onChange={(e) => setFilterMonth(e.target.value)}
                className="bg-white border border-[#D7C4B0] text-[#261C19] text-sm font-medium rounded-lg px-4 py-2.5 outline-none shadow-sm focus:ring-1 focus:ring-[#B38E5D] transition-colors cursor-pointer"
              >
                <option value="all">Semua Waktu</option>
                <option value="2026-07">Juli 2026</option>
                <option value="2026-06">Juni 2026</option>
              </select>

              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-white border border-[#D7C4B0] text-[#261C19] text-sm font-medium rounded-lg px-4 py-2.5 outline-none shadow-sm focus:ring-1 focus:ring-[#B38E5D] transition-colors cursor-pointer"
              >
                <option value="all">Semua Tipe</option>
                <option value="income">Pemasukan Saja</option>
                <option value="expense">Pengeluaran Saja</option>
              </select>

              <button 
                onClick={handleExport}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#B38E5D] hover:bg-[#8F6E45] text-white font-bold text-sm rounded-lg transition-all duration-300 shadow-md shadow-[#B38E5D]/30 hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                <span>Export Laporan</span>
              </button>
            </div>
          </div>

          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card Pemasukan */}
            <div className="bg-white p-6 rounded-2xl border border-[#D7C4B0] shadow-sm flex flex-col justify-between animate-fade-up delay-200 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Pemasukan</p>
              </div>
              <h3 className="text-3xl font-black text-[#261C19] mt-2">{formatRupiah(totalIncome)}</h3>
            </div>

            {/* Card Pengeluaran */}
            <div className="bg-white p-6 rounded-2xl border border-[#D7C4B0] shadow-sm flex flex-col justify-between animate-fade-up delay-300 hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"></path></svg>
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Pengeluaran</p>
              </div>
              <h3 className="text-3xl font-black text-[#261C19] mt-2">{formatRupiah(totalExpense)}</h3>
            </div>

            {/* Card Saldo Bersih */}
            <div className="bg-[#261C19] p-6 rounded-2xl border border-[#3D2D29] shadow-md flex flex-col justify-between text-white relative overflow-hidden animate-fade-up delay-400 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#B38E5D]/20 rounded-lg text-[#B38E5D]">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
                  </div>
                  <p className="text-sm font-bold text-[#D7C4B0] uppercase tracking-wider">Saldo Bersih</p>
                </div>
                <h3 className="text-3xl font-black text-[#FAF5EF] mt-2">{formatRupiah(netBalance)}</h3>
              </div>
              <svg className="absolute bottom-0 right-0 w-32 h-32 text-[#3D2D29] opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
            </div>
          </div>

          {/* TABEL TRANSAKSI */}
          <div className="bg-white rounded-2xl border border-[#D7C4B0] shadow-sm overflow-hidden animate-fade-up delay-500">
            <div className="px-6 py-5 border-b border-[#D7C4B0] bg-[#FAF5EF]">
              <h2 className="text-lg font-bold text-[#261C19]">Rincian Transaksi</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-white text-slate-500 font-semibold border-b border-slate-100">
                  <tr>
                    <th className="px-6 py-4">Tanggal</th>
                    <th className="px-6 py-4">ID / Referensi</th>
                    <th className="px-6 py-4">Keterangan</th>
                    <th className="px-6 py-4">Kategori</th>
                    <th className="px-6 py-4 text-right">Nominal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredData.length > 0 ? filteredData.map((trx) => (
                    <tr key={trx.id} className="hover:bg-slate-50 transition-colors duration-200">
                      <td className="px-6 py-4 text-slate-600 font-medium">{trx.date}</td>
                      <td className="px-6 py-4 text-xs font-bold text-[#B38E5D] tracking-wider">{trx.id}</td>
                      <td className="px-6 py-4 text-[#261C19] font-medium">{trx.description}</td>
                      <td className="px-6 py-4 text-slate-500">{trx.category}</td>
                      <td className={`px-6 py-4 font-bold text-right ${trx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {trx.type === 'income' ? '+' : '-'} {formatRupiah(trx.amount)}
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="5" className="px-6 py-12 text-center text-slate-400 font-medium">
                        Tidak ada data transaksi yang ditemukan untuk filter ini.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}