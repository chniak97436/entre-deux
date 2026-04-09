"use client"
import Image from "next/image";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar.js";
import ArowBack from "../components/Arow-back";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e5fafad8]/95 overflow-x-hidden">
      <ArowBack />
      <NavBar />
      <Banner />
      <main className="flex-1 max-w-4xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Bienvenue à l'Entre-Deux</h1>
        <div className="prose max-w-none">
          <h1>hhhhh</h1>
        </div>
      </main>
      <Footer />
    </div>
  );
}
