import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpages'; 
import Home from './pages/home';
import UserProfile from './pages/profil';       
import AdminDashboard from './pages/admindashboard';
import AdminDataProperti from './pages/admindataproperti';
import CariHunian from './pages/carihunian';
import Login from './pages/login';
import Register from './pages/register';
import AdminLaporanKeuangan from './pages/adminlaporan';
import AdminTagihanOrder from './pages/adminTO';
import AdminPenyewa from './pages/adminpenyewa';
import AdminPengaturan from './pages/adminpengaturan';
import Pembayaran from './pages/pembayaran';
import FinanceTracker from './pages/FinanceTracker';
import RiwayatTransaksi from './pages/riwayattransaksi';

// Placeholder untuk beranda user saja (yang finance udah dihapus)
const BerandaUser = () => <div className="p-8 font-bold">Halaman Beranda User</div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Halaman Home bertema Seaside */}
          <Route path="/home" element={<Home />} />
          
          {/* Rute profil */}
          <Route path="/profile" element={<UserProfile />} />
          
          {/* User Routes */}
          <Route path="/beranda" element={<BerandaUser />} />
          <Route path="/FinanceTracker" element={<FinanceTracker />} />
          <Route path="/carihunian" element={<CariHunian />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
          <Route path="/riwayattransaksi" element={<RiwayatTransaksi />} />


          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/adminlaporan" element={<AdminLaporanKeuangan />} />
          <Route path="/adminTO" element={<AdminTagihanOrder />} />
          <Route path="/adminpenyewa" element={<AdminPenyewa />} />
          <Route path="/adminpengaturan" element={<AdminPengaturan />} />
          <Route path="/admin/properti" element={<AdminDataProperti />} />
        </Routes>
      </div>
    </Router>
  );
}