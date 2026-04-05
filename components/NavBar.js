"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen h-14 bg-[#e5fafad8]/95 backdrop-blur-sm sticky top-0 flex shadow-lg shadow-emerald-400/30 z-50 border-b border-[#b2fdfd]/80 text-b">
      <div className="w-full max-w-7xl mx-auto h-14 flex items-center justify-between px-1 md:px-1 lg:px-1">
        <Link href="/" className="">
          <Image
            src="/logo_0.jpg"
            alt="Commune de L'Entre-Deux"
            width={42}
            height={42}
            className="border-2  border-[#8bfdfd] hover:shadow-emerald-300/50"
            loading="eager"
            priority={true}
          />
        </Link>

        <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-lg md:text-xl lg:text-2xl whitespace-nowrap  sm:block">
          Comunne de l'Entre-Deux
        </h1>
        {/* ------------------HAMBURGERS BUTTON----------------------------------- */}
        <div className="w-12 h-12 fixed right-1">
          <button
            className=" flex flex-col justify-center items-center w-12 h-12  hover:bg-[#d8fcfc]/60 active:bg-[#b2fdfd]/40 transition-all duration-200 p-2 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            <span
              className={`bg-black h-0.5 w-6 transition-all duration-300 origin-center ${
                isOpen ? "rotate-225 translate-y-1.5" : "mb-1.5"
              }`}
            ></span>
            <span
              className={`bg-black h-0.5 w-6 transition-all duration-300 ${
                isOpen ? "opacity-0 -translate-x-1" : ""
              }`}
            ></span>
            <span
              className={`bg-black h-0.5 w-6 transition-all duration-300 origin-center ${
                isOpen ? "-rotate-45 translate-y-0.5" : "mt-1.5"
              }`}
            ></span>
          </button>
        </div>
        {/* -----------------------MENUE OLNCLICK--------------------- */}
        {isOpen && (
          <div className=" w-full mt-14 text-center z-40 p-2  fade-in-0 zoom-in-95  duration-500">
            <nav className="w-50 bg-[#d8fcfcd8]  fixed right-0 space-y-0 px-0.5">
              {/* ITEM AVEC SOUS-MENU & FLÈCHE */}
              <div className="relative group">
                <div className="flex items-center justify-between p-3 font-bold text-b border border-transparent hover:border-[#8bfdfd] hover:bg-white/50 transition-all cursor-pointer">
                {/* Flèche Lucide qui tourne au survol du groupe */}
                  <ChevronDown
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-90 text-b"
                  />
                  <Link
                    href="/mairie"
                    className="flex-1 font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    La Mairie
                  </Link>
                </div>
                {/* SOUS-MENU (Apparaît au hover) */}
                <div className="hidden group-hover:flex flex-col absolute left-[-201px] top-0 w-50 bg-[#d8fcfcd8] shadow-xl border border-emerald-100  animate-in fade-in zoom-in-95">
                  <Link
                    href="/mairie/elus"
                    className="p-1 text-sm font-bold text-b hover:bg-emerald-50 hover:text-v"
                    onClick={() => setIsOpen(false)}
                  >
                    Le Maire est les Elus
                  </Link>
                  <Link
                    href="/mairie/histoire"
                    className="p-1 text-sm font-bold text-b hover:bg-emerald-50 hover:text-v"
                    onClick={() => setIsOpen(false)}
                  >
                    les conseils municipaux
                  </Link>
                  <Link
                    href="/mairie/demarches"
                    className="p-1 text-sm font-bold text-b hover:bg-emerald-50 hover:text-v"
                    onClick={() => setIsOpen(false)}
                  >
                    Urbanisme
                  </Link>
                  <Link
                    href="/mairie/demarches"
                    className="p-1 text-sm font-bold text-b hover:bg-emerald-50 hover:text-v"
                    onClick={() => setIsOpen(false)}
                  >
                    Démarches administratives
                  </Link>
                </div>
              </div>
                  
              <Link
                href="/actualites"
                className="block px-2 py-2 font-bold text-lg border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Enfance
              </Link>
              <Link
                href="/evenements"
                className="block  px-1 py-2 font-bold text-lg border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Adenda et Actualités
              </Link>
              <Link
                href="/services"
                className="block px-2 py-2 font-bold text-lg border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Sortie à l Entre-Deux
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-2 font-bold text-lg border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Divertissement
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-2 font-bold text-lg border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Innovations
              </Link>
            </nav>
          </div>
        )}
      </div>
    </nav>
  );
}
