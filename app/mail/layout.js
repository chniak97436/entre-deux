"use client"
import ArowBack from '../../components/Arow-back';
import NavBar from '../../components/NavBar.js';
import Footer from '../../components/Footer.js';

export default function MailLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-emerald-50 overflow-hidden">
      <ArowBack />
      <NavBar />
      <main className="flex-1 max-w-4xl mx-auto p-6 md:p-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
