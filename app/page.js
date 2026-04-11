"use client"
import Banner from "../components/Banner";
import NavBar from "../components/NavBar.js";
import ArowBack from "../components/Arow-back";
import Footer from "../components/Footer.js";
import Iris from "../components/Iris";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e5fafad8]/95 overflow-x-hidden pt-14">
      <ArowBack />
      <NavBar />
      <div className="flex-1">
        <Banner />
        <Iris />
        <main className="max-w-5xl mx-auto p-6 md:p-12">
          <p className="text-center text-sm pb-6 md:pb-12">Ouverture mairie : du lundi au jeudi de 7h45 à 16h15 - Fermeture à 15h le vendredi - Contact: 0 262 39 50 50 - Mail : mairie@entredeux.re</p>
          <h1 className="text-xl font-bold text-gray-800 mb-8">Bienvenue à l'Entre-Deux</h1>
          <div className="prose max-w-none">
            <h1>hhhhh</h1>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

