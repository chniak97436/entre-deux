import Image from "next/image";
import Link from "next/link";

export default function Cards({ title, imageSrc }) {
  const cardData = [
    {
      title: "Permanences en mairie",
      imageSrc: "/permanences-du-Maire.png",
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

  return ( 
    <div className="w-full max-w-7xl mx-auto p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <div 
          key={index} 
          className="group bg-[#d8fcfcd8]/95 backdrop-blur-sm rounded-xl shadow-lg shadow-emerald-400/30 hover:shadow-emerald-300/50 hover:shadow-2xl hover:scale-[1.02] hover:border-[#8bfdfd] hover:border-2 transition-all duration-300 overflow-hidden relative font-poppins text-b"
        >
          <div className="relative overflow-hidden">
            <Image 
              src={card.imageSrc} 
              alt={card.title} 
              width={400} 
              height={200} 
              className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500" 
              priority={index < 3}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-b/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-v transition-colors">{card.title}</h2>
            <p className="text-sm opacity-80 mb-12 text-b/90">{card.text}</p>
          </div>
          <Link 
            href="/details" 
            className="absolute  inset-0 flex items-end p-4 bg-gradient-to-t from-b/60 group-hover:from-b/80"
            aria-label={`Voir plus sur ${card.title}`}
          >
            <span className="text-white font-bold  text-base md:text-lg poppins bg-v/90 px-4 py-2 rounded-lg shadow-lg hover:bg-v hover:shadow-emerald-300/50 transition-all duration-300 w-full text-center">VOIR PLUS</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

