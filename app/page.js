"use client"
import Banner from "../components/Banner";
import NavBar from "../components/NavBar.js";
import ArowBack from "../components/Arow-back";
import Footer from "../components/Footer.js";
import Iris from "../components/Iris";
import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e5fafad8]/95 overflow-x-hidden pt-14">
      <ArowBack />
      <NavBar />
      <div className="flex-1">
        <Banner />
        <Iris />
        <main className="max-w-5xl mx-auto p-6 md:p-6">
          <p className="text-center text-v text-sm pb-6 md:pb-6"><strong>Ouverture mairie :</strong> du lundi au jeudi de 7h45 à 16h15 - <strong>Fermeture</strong> à 15h le vendredi <br/> Contact: 0 262 39 50 50 </p>
          <h1 className="text-xl text-center  font-bold text-b mb-8 md:text-4xl">Bienvenue à l'Entre-Deux</h1>
            <Cards />
          <div className="prose max-w-none">
            <h1>hhhhh</h1>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

