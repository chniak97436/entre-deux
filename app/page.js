"use client"
import Banner from "../components/Banner";
import NavBar from "../components/NavBar.js";
import ArowBack from "../components/Arow-back";
import Footer from "../components/Footer.js";
import Iris from "../components/Iris";
import Cards from "../components/Cards";
import AlaUne from "../components/A-la-une.js";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#e5fafad8]/95 overflow-x-hidden pt-14">

      <ArowBack />

      <NavBar />

      <div className="flex-1">

        <Iris />

        <Banner />

        <Iris />

        <main className="w-[90%] mx-auto mt-6 md:mt-12">
          <hr className="my-6 text-b/90" />
          <p className="text-center text-v text-sm pb-6 md:pb-6"><strong>Ouverture mairie :</strong> du lundi au jeudi de 7h45 à 16h15 - <strong>Fermeture</strong> à 15h le vendredi <br /> <strong>Contact :</strong> 0 262 39 50 50 </p>
          <h1 className="text-xl text-center  font-bold text-b mb-8 md:text-4xl">Bienvenue à l'Entre-Deux</h1>
          <hr className="my-6 text-b/90" />

          <AlaUne />

          <hr className="my-6 text-b/90" />
          
          <Cards />

          <div className="prose max-w-none">
          </div>
        </main>
        <Iris />
        <Footer />
      </div>
    </div>
  );
}

