import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpages'; // Landing Page awal
import Home from './pages/home';
import UserProfile from './pages/profil';       // Jalur file profil
import AdminDashboard from './pages/admindashboard';
import AdminDataProperti from './pages/admindataproperti';
import CariHunian from './pages/carihunian';
import Login from './pages/login';
import Register from './pages/register';

// Placeholder untuk halaman lain (biar routing ga error dulu)
const BerandaUser = () => <div className="p-8 font-bold">Halaman Beranda User</div>;
const TrackFinanceUser = () => <div className="p-8 font-bold">Halaman Track Finance User</div>;

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Halaman Home bertema Seaside */}
          <Route path="/home" element={<Home />} />
          
          {/* Rute tunggal yang benar untuk halaman profile */}
          <Route path="/profile" element={<UserProfile />} />
          
          {/* User Routes */}
          <Route path="/beranda" element={<BerandaUser />} />
          <Route path="/finance" element={<TrackFinanceUser />} />
          <Route path="/carihunian" element={<CariHunian />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* DIPERBAIKI: Mengubah path agar sinkron dengan '/admin/properti' tanpa spasi di ujung */}
          <Route path="/admin/properti" element={<AdminDataProperti />} />
        </Routes>
      </div>
    </Router>
  );
}