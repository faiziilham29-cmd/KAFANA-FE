import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FinanceTracker() {
  // 1. STATE UNTUK DATA TRANSAKSI
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2026-07-01', description: 'Uang Saku Bulanan', category: 'Pemasukan', type: 'income', amount: 3500000 },
    { id: 2, date: '2026-07-02', description: 'Bayar Kost KAFANA VISTA', category: 'Tagihan Kost', type: 'expense', amount: 1500000 },
    { id: 3, date: '2026-07-05', description: 'Makan & Groceries', category: 'Makanan', type: 'expense', amount: 350000 },
    { id: 4, date: '2026-07-10', description: 'Laundry', category: 'Kebutuhan', type: 'expense', amount: 50000 },
  ]);

  // 2. STATE UNTUK FORM INPUT
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    type: 'expense',
    category: 'Makanan',
    date: new Date().toISOString().split('T')[0] // Default hari ini
  });

  // 3. FUNGSI HANDLE INPUT & SUBMIT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount) return alert("Lengkapi data transaksi!");
    
    const newTransaction = {
      id: Date.now(),
      date: formData.date,
      description: formData.description,
      category: formData.type === 'income' ? 'Pemasukan' : formData.category,
      type: formData.type,
      amount: parseInt(formData.amount)
    };

    setTransactions([newTransaction, ...transactions]); // Masukin di urutan paling atas
    setFormData({ ...formData, description: '', amount: '' }); // Reset form
  };

  const handleDelete = (id) => {
    if(window.confirm("Hapus transaksi ini?")) {
      setTransactions(transactions.filter(t => t.id !== id));
    }
  };

  // 4. KALKULASI SALDO
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const currentBalance = totalIncome - totalExpense;

  // Format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(angka);
  };

  return (
    <div className="min-h-screen bg-[#FAF5EF] text-[#261C19] font-sans selection:bg-[#B38E5D] selection:text-white pb-12">
      
      {/* ================= ELEGANT NAVBAR (USER VIEW) ================= */}
      <nav className="sticky top-0 z-50 bg-[#FAF5EF]/90 backdrop-blur-md border-b border-[#B38E5D]/20 shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-widest text-[#261C19] flex items-center gap-2">
            <span className="bg-[#261C19] text-[#FAF5EF] px-3 py-1 rounded-sm shadow-md text-xl font-sans">KV</span>
            <span className="font-sans">KAFANA<span className="text-[#B38E5D] font-light">VISTA</span></span>
          </div>
          <div className="hidden md:flex space-x-8 font-sans text-xs uppercase tracking-widest font-semibold text-[#5C4A42]">
            <Link to="/" className="hover:text-[#B38E5D] transition pb-1">Home</Link>
            <Link to="/carihunian" className="hover:text-[#B38E5D] transition pb-1">Cari Hunian</Link>
            <Link to="/finance" className="text-[#B38E5D] transition border-b border-[#B38E5D] pb-1">Finance Tracker</Link>
            <Link to="/profile" className="hover:text-[#B38E5D] transition pb-1">Profil Saya</Link>
          </div>
          <div>
            <Link to="/profile" className="flex items-center gap-3">
              <span className="font-sans text-xs uppercase tracking-widest font-bold text-[#261C19] hidden sm:block">Hai, Faiz</span>
              <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80" alt="User" className="w-10 h-10 rounded-full border-2 border-[#B38E5D] object-cover" />
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= HEADER SECTION ================= */}
      <header className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-8 text-center sm:text-left">
        <span className="font-sans text-xs font-bold text-[#B38E5D] uppercase tracking-widest block mb-2">Personal Assistant</span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#261C19]">Tracker Keuangan Saya</h1>
        <p className="text-[#5C4A42] mt-2 font-sans max-w-2xl">Pantau uang masuk dan pengeluaran harianmu di sini biar budget bulanan dan bayar tagihan kost tetap aman terkendali.</p>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-[#261C19] p-6 rounded-xl shadow-lg border border-[#3D2D29] text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold text-[#D7C4B0] uppercase tracking-wider mb-2">Saldo Saat Ini</p>
              <h3 className="text-3xl font-black text-[#FAF5EF]">{formatRupiah(currentBalance)}</h3>
            </div>
            <svg className="absolute bottom-0 right-0 w-24 h-24 text-[#3D2D29] opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D7C4B0]">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Total Pemasukan
            </p>
            <h3 className="text-2xl font-black text-[#261C19]">{formatRupiah(totalIncome)}</h3>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D7C4B0]">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500"></span> Total Pengeluaran
            </p>
            <h3 className="text-2xl font-black text-[#261C19]">{formatRupiah(totalExpense)}</h3>
          </div>
        </div>

        {/* TWO COLUMNS: FORM & TABLE */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI: FORM TAMBAH TRANSAKSI */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#D7C4B0]">
              <h2 className="text-lg font-bold text-[#261C19] mb-4 border-b border-slate-100 pb-3">Catat Transaksi</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Jenis Transaksi */}
                <div className="flex gap-4">
                  <label className={`flex-1 text-center py-2 rounded border cursor-pointer font-bold text-xs uppercase tracking-widest transition-all ${formData.type === 'income' ? 'bg-emerald-50 border-emerald-500 text-emerald-700' : 'border-slate-200 text-slate-400 hover:bg-slate-50'}`}>
                    <input type="radio" name="type" value="income" checked={formData.type === 'income'} onChange={handleChange} className="hidden" />
                    Pemasukan
                  </label>
                  <label className={`flex-1 text-center py-2 rounded border cursor-pointer font-bold text-xs uppercase tracking-widest transition-all ${formData.type === 'expense' ? 'bg-rose-50 border-rose-500 text-rose-700' : 'border-slate-200 text-slate-400 hover:bg-slate-50'}`}>
                    <input type="radio" name="type" value="expense" checked={formData.type === 'expense'} onChange={handleChange} className="hidden" />
                    Pengeluaran
                  </label>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-600 uppercase">Keterangan</label>
                  <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Cth: Makan Siang" className="w-full px-4 py-2 bg-slate-50 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D]" required />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-600 uppercase">Nominal (Rp)</label>
                  <input type="number" name="amount" value={formData.amount} onChange={handleChange} placeholder="Cth: 50000" className="w-full px-4 py-2 bg-slate-50 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D]" required />
                </div>

                {formData.type === 'expense' && (
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-600 uppercase">Kategori Kebutuhan</label>
                    <select name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D]">
                      <option value="Makanan">Makanan & Minuman</option>
                      <option value="Transportasi">Transportasi</option>
                      <option value="Tagihan Kost">Tagihan Kost / Kontrakan</option>
                      <option value="Kebutuhan">Kebutuhan Harian</option>
                      <option value="Hiburan">Hiburan & Jajan</option>
                      <option value="Lainnya">Lainnya</option>
                    </select>
                  </div>
                )}

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-600 uppercase">Tanggal</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full px-4 py-2 bg-slate-50 border border-[#D7C4B0] rounded text-sm outline-none focus:ring-1 focus:ring-[#B38E5D]" required />
                </div>

                <button type="submit" className="w-full bg-[#B38E5D] hover:bg-[#8F6E45] text-white py-3 mt-2 text-xs font-bold uppercase tracking-widest rounded transition shadow-md shadow-[#B38E5D]/20">
                  Simpan Transaksi
                </button>
              </form>
            </div>
          </div>

          {/* KOLOM KANAN: TABEL RIWAYAT */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-[#D7C4B0] overflow-hidden flex flex-col h-full">
              <div className="px-6 py-4 border-b border-slate-100 bg-[#FAF5EF]/50 flex justify-between items-center">
                <h2 className="text-lg font-bold text-[#261C19]">Riwayat Mutasi</h2>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{transactions.length} Catatan</span>
              </div>
              
              <div className="flex-1 overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-white text-slate-500 font-semibold border-b border-slate-100">
                    <tr>
                      <th className="px-6 py-3">Tanggal</th>
                      <th className="px-6 py-3">Keterangan</th>
                      <th className="px-6 py-3">Kategori</th>
                      <th className="px-6 py-3 text-right">Nominal</th>
                      <th className="px-6 py-3 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {transactions.length > 0 ? transactions.map((trx) => (
                      <tr key={trx.id} className="hover:bg-slate-50 transition">
                        <td className="px-6 py-4 text-slate-500">{trx.date}</td>
                        <td className="px-6 py-4 font-bold text-[#261C19]">{trx.description}</td>
                        <td className="px-6 py-4">
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded text-xs font-semibold">
                            {trx.category}
                          </span>
                        </td>
                        <td className={`px-6 py-4 font-bold text-right ${trx.type === 'income' ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {trx.type === 'income' ? '+' : '-'} {formatRupiah(trx.amount)}
                        </td>
                        <td className="px-6 py-4 text-center">
                          <button onClick={() => handleDelete(trx.id)} className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded transition" title="Hapus">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                          </button>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan="5" className="px-6 py-12 text-center text-slate-400">Belum ada transaksi. Mulai catat keuanganmu!</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}