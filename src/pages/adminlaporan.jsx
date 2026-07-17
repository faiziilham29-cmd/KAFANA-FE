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
    { name: 'Penyewa Aktif', path: '#', icon: <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/> },
    { name: 'Laporan Keuangan', path: '/admin/laporan', icon: <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/> },
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
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10 shadow-sm">
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
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-[#261C19] tracking-tight">Arus Kas</h1>
              <p className="text-slate-500 mt-1">Pantau pemasukan dan pengeluaran properti Anda.</p>
            </div>
            
            {/* FILTER KONTROL */}
            <div className="flex flex-wrap items-center gap-3">
              <select 
                value={filterMonth} 
                onChange={(e) => setFilterMonth(e.target.value)}
                className="bg-white border border-[#D7C4B0] text-[#261C19] text-sm font-medium rounded-lg px-4 py-2.5 outline-none shadow-sm focus:ring-1 focus:ring-[#B38E5D]"
              >
                <option value="all">Semua Waktu</option>
                <option value="2026-07">Juli 2026</option>
                <option value="2026-06">Juni 2026</option>
              </select>

              <select 
                value={filterType} 
                onChange={(e) => setFilterType(e.target.value)}
                className="bg-white border border-[#D7C4B0] text-[#261C19] text-sm font-medium rounded-lg px-4 py-2.5 outline-none shadow-sm focus:ring-1 focus:ring-[#B38E5D]"
              >
                <option value="all">Semua Tipe</option>
                <option value="income">Pemasukan Saja</option>
                <option value="expense">Pengeluaran Saja</option>
              </select>

              <button 
                onClick={handleExport}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#B38E5D] hover:bg-[#8F6E45] text-white font-bold text-sm rounded-lg transition shadow-md shadow-[#B38E5D]/30"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                <span>Export Laporan</span>
              </button>
            </div>
          </div>

          {/* SUMMARY CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Card Pemasukan */}
            <div className="bg-white p-6 rounded-2xl border border-[#D7C4B0] shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Pemasukan</p>
              </div>
              <h3 className="text-3xl font-black text-[#261C19] mt-2">{formatRupiah(totalIncome)}</h3>
            </div>

            {/* Card Pengeluaran */}
            <div className="bg-white p-6 rounded-2xl border border-[#D7C4B0] shadow-sm flex flex-col justify-between">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-rose-50 rounded-lg text-rose-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"></path></svg>
                </div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Pengeluaran</p>
              </div>
              <h3 className="text-3xl font-black text-[#261C19] mt-2">{formatRupiah(totalExpense)}</h3>
            </div>

            {/* Card Saldo Bersih */}
            <div className="bg-[#261C19] p-6 rounded-2xl border border-[#3D2D29] shadow-md flex flex-col justify-between text-white relative overflow-hidden">
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
          <div className="bg-white rounded-2xl border border-[#D7C4B0] shadow-sm overflow-hidden">
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
                    <tr key={trx.id} className="hover:bg-slate-50 transition">
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