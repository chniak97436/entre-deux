"use client"
import ArowBack from '../../components/Arow-back';
import NavBar from '../../components/NavBar.fixed.js';
import Footer from '../../components/Footer.js';

export default function MailLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-emerald-200 overflow-hidden">
      <ArowBack />
      <NavBar />
      <main className="flex flex-1 flex-col w-screen h-screen justify-center items-center mx-auto p-6 md:p-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
