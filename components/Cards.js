import Image from "next/image";
import Link from "next/link";

export default function Cards({ title, imageSrc }) {
  const cardData = [
    {
      title: "Card 1",
      imageSrc: "/Inscriptions-scolaires-2026-2027_0.png",
    },
    {
      title: "Card 2",
      imageSrc: "/Koze-jeunes-web.jpg",
    },
    {
      title: "Card 3",
      imageSrc: "/Plaq-Risque-Cyclonique-Reunion-verso-web_0.jpg",
    },
    {
      title: "Card 4",
      imageSrc: "/SICR-Dechets-REP.jpg",
    },
    {
      title: "Card 5",
      imageSrc: "/Investiture maire-Circulations.png",
    },
    {
      title: "Card 6",
      imageSrc: "/entre-deux-en-video-bg_1.jpg",
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
            <p className="text-sm opacity-80 mb-12 text-b/90">Découvrir cette actualité importante pour l'Entre-Deux</p>
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

