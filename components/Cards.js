"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Cards() {
  // 1. On crée une référence pour accéder à la zone de défilement (le conteneur des cartes)
  const scrollRef = useRef(null);
  const cardData = [
    {
      title: "Permanences en mairie",
      imageSrc: "/Permanences-du-Maire.png",
      text: "Découvrez les permanences en mairie de L'Entre-Deux, avec les horaires et les services disponibles pour les habitants de la commune."
    },
    {
      title: "Inscriptions scolaires 2026-2027",
      imageSrc: "/Inscriptions-scolaires-2026-2027_0.png",
      text: "Découvrez les démarches pour les inscriptions scolaires à L'Entre-Deux pour l'année 2026-2027, avec les dates clés et les documents nécessaires pour inscrire votre enfant dans les écoles de la commune."
    },
    {
      title: "Koze Jeunes",
      imageSrc: "/Koze-jeunes-web.jpg",
      text: "Koze Jeunes est un programme dédié aux jeunes de L'Entre-Deux, offrant des activités éducatives, culturelles et sportives pour favoriser leur épanouissement et leur engagement dans la vie locale."
    },
    {
      title: "Risque cyclonique",
      imageSrc: "/Plaq-Risque-Cyclonique-Reunion-verso-web_0.jpg",
      text: "Informez-vous sur les mesures de prévention et les consignes de sécurité en cas de risque cyclonique à L'Entre-Deux, pour protéger votre famille et votre domicile pendant la saison des cyclones."
    },
    {
      title: "SICR Déchets REP",
      imageSrc: "/SICR-Dechets-REP.jpg",
      text: "Le SICR Déchets REP est un service de gestion des déchets à L'Entre-Deux, proposant des solutions de tri, de collecte et de recyclage pour réduire l'impact environnemental et promouvoir une commune plus propre."
    },
    {
      title: "Investiture du Maire",
      imageSrc: "/Investiture maire-Circulations.png",
      text: "Découvrez les détails de l'investiture du nouveau maire de L'Entre-Deux et les promesses qu'il a formulées pour améliorer la vie locale."

    },
    {
      title: "L'Entre-Deux en vidéo",
      imageSrc: "/entre-deux-en-video-bg_1.jpg",
      text: "Découvrez L'Entre-Deux à travers une vidéo immersive qui met en valeur la beauté naturelle, la culture et les événements de cette charmante commune de La Réunion."
    }
  ];
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      // clientWidth correspond à la largeur visible de la zone de défilement
      const { scrollLeft, clientWidth } = scrollRef.current;

      // On décide de défiler de 70% de la largeur pour que l'utilisateur garde un repère visuel
      const offset = clientWidth * 0.7;

      // La méthode scrollTo permet un mouvement fluide vers la gauche ou la droite
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - offset : scrollLeft + offset,
        behavior: "smooth",
      });
    }
  };
  //   return (
  //     <div className="w-full mx-auto  md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  //       {cardData.map((card, index) => (
  //         <div
  //           key={index}
  //           className="group bg-[#d8fcfcd8]/95 backdrop-blur-sm rounded-xl shadow-lg shadow-emerald-400/30 hover:shadow-emerald-300/50 hover:shadow-2xl hover:scale-[1.02] hover:border-[#8bfdfd] hover:border-2 transition-all duration-300 overflow-hidden relative font-poppins text-b"
  //         >
  //           <div className="relative overflow-hidden">
  //             <Image
  //               src={card.imageSrc}
  //               alt={card.title}
  //               width={1000}
  //               height={200}
  //               className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
  //               priority={index < 3}
  //             />
  //             <div className="absolute inset-0 bg-gradient-to-top from-b/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  //           </div>
  //           <div className="p-6">
  //             <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-v transition-colors">{card.title}</h2>
  //             <p className="text-sm opacity-80 mb-12 text-b/90">{card.text}</p>
  //           </div>
  //           <Link
  //             href="/details"
  //             className="absolute  inset-0 flex items-end p-4 bg-gradient-to-top from-b/60 group-hover:from-b/80"
  //             aria-label={`Voir plus sur ${card.title}`}
  //           >
  //             <span className="text-white font-bold  text-base md:text-lg poppins bg-v/90 px-4 py-2 rounded-lg shadow-lg hover:bg-v hover:shadow-emerald-300/50 transition-all duration-300 w-full text-center">VOIR PLUS</span>
  //           </Link>
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  return (
    <div className="w-full bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4">

        {/* --- SECTION EN-TÊTE --- */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-[#1a3a3a]">À la une</h2>
            {/* Indicateur visuel pour mobile uniquement */}
            <p className="text-emerald-600 text-sm font-medium md:hidden animate-bounce mt-2">
              ← Glissez pour voir →
            </p>
          </div>

          {/* --- BOUTONS DE NAVIGATION (Cachés sur mobile) --- */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => handleScroll("left")}
              className="p-3 bg-white border border-emerald-100 rounded-full shadow-sm hover:bg-emerald-500 hover:text-white transition-all"
              title="Précédent"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3 bg-white border border-emerald-100 rounded-full shadow-sm hover:bg-emerald-500 hover:text-white transition-all"
              title="Suivant"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* --- CONTENEUR PRINCIPAL DU SLIDER --- */}
        <div
          ref={scrollRef} // On lie le useRef ici pour contrôler ce div
          className="flex flex-nowrap gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Cache la barre sur Firefox et IE
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[85vw] sm:w-[350px] snap-center group bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 overflow-hidden relative flex flex-col"
            >
              {/* Image avec zoom au survol */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority={index < 2}
                />
              </div>

              {/* Contenu de la carte */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors">
                  {card.title}
                </h3>
                {/* line-clamp-3 limite le texte à 3 lignes pour garder une uniformité */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-14">
                  {card.text}
                </p>
              </div>

              {/* Bouton Voir Plus - Positionné en bas de carte */}
              <Link
                href="/details"
                className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white via-white"
              >
                <div className="bg-emerald-500 text-white text-center py-3 rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-emerald-200 group-hover:bg-emerald-600 transition-all">
                  VOIR PLUS
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* --- INDICATEUR DE PROGRESSION (Visual Dot) --- */}
        <div className="flex justify-center gap-1.5 mt-4">
          {cardData.map((_, i) => (
            <div key={i} className="h-1 w-6 bg-emerald-200 rounded-full group-hover:bg-emerald-400 transition-colors" />
          ))}
        </div>

      </div>
    </div>
  );
}

