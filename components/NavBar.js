"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  // Ferme submenu si menu principal ferme
  useEffect(() => {
    if (!isOpen) setSubmenuOpen(false);
  }, [isOpen]);

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

        <h1 className="absolute left-1/2 -translate-x-1/2 font-bold text-sm md:text-xl lg:text-2xl xl:text-4xl whitespace-nowrap  sm:block">
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
              className={`bg-black h-0.5 w-6 transition-all duration-300 origin-center ${isOpen ? "rotate-225 translate-y-1.5" : "mb-1.5"
                }`}
            ></span>
            <span
              className={`bg-black h-0.5 w-6 transition-all duration-300 ${isOpen ? "opacity-0 -translate-x-1" : ""
                }`}
            ></span>
            <span
              className={`bg-black h-0.5 w-6 transition-all duration-300 origin-center ${isOpen ? "-rotate-45 translate-y-0.5" : "mt-1.5"
                }`}
            ></span>
          </button>
        </div>
        {/* -----------------------MENUE OLNCLICK--------------------- */}
        {isOpen && (
          <div className=" w-screen mt-14 text-center z-40 p-2  fade-in-0 zoom-in-95  duration-500">
            <nav className="w-3/5 bg-[#d8fcfcd8]  fixed right-0 space-y-0 px-0.5 md:w-1/3 lg:w-1/4">
              {/* ITEM AVEC SOUS-MENU & FLÈCHE */}
              <div
                className="relative group"
                onClick={() => setSubmenuOpen(!submenuOpen)}
                onTouchStart={() => setSubmenuOpen(true)}
              >
                <div className="flex items-center justify-between p-3 font-bold text-b border border-transparent hover:border-[#8bfdfd] hover:bg-white/50 transition-all cursor-pointer active:bg-white/30">
                  {/* Flèche */}
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-300 ${submenuOpen ? 'rotate-90' : ''} text-b`}
                  />
                  <Link
                    href="/#"
                    className="flex-1 font-bold  text-b text-sm md:text-xl lg:text-2xl xl:text-4xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsOpen(false);
                    }}
                  >
                    La Mairie
                  </Link>
                </div>
                {/* SOUS-MENU (Apparaît au hover) */}
                <div className={`flex flex-col absolute left-[-201px] top-0 w-50 bg-[#d8fcfcd8] shadow-xl border border-emerald-100 animate-in fade-in zoom-in-95 ${submenuOpen ? 'block' : 'hidden'}`}>
                  <Link
                    href="/mairie/elus"
                    className="p-1 text-sm font-bold text-b hover:bg-emerald-50 hover:text-v md:text-xl lg:text-2xl xl:text-4xl"
                    onClick={() => {
                      setIsOpen(false);
                      setSubmenuOpen(false);
                    }}
                  >
                    Le Maire et les Elus
                  </Link>
                  <Link
                    href="/mairie/histoire"
                    className="p-1 text-sm font-bold text-b hover:bg-emerald-50 hover:text-v md:text-xl lg:text-2xl xl:text-4xl"
                    onClick={() => {
                      setIsOpen(false);
                      setSubmenuOpen(false);
                    }}
                  >
                    les conseils municipaux
                  </Link>

                  <Link
                    href="/mairie/demarches"
                    className="p-1 text-sm md:text-xl lg:text-2xl xl:text-4xl font-bold text-b hover:bg-emerald-50 hover:text-v"
                    onClick={() => {
                      setIsOpen(false);
                      setSubmenuOpen(false);
                    }}
                  >
                    Urbanisme
                  </Link>
                  <Link
                    href="/mairie/demarches"
                    className="p-1 text-sm md:text-xl lg:text-2xl xl:text-4xl font-bold text-b hover:bg-emerald-50 hover:text-v"
                    onClick={() => {
                      setIsOpen(false);
                      setSubmenuOpen(false);
                    }}
                  >
                    Démarches administratives
                  </Link>
                </div>
              </div>

              <Link
                href="/actualites"
                className="block px-2 py-2 font-bold text-sm md:text-xl lg:text-2xl xl:text-4xl border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Enfance
              </Link>
              <Link
                href="/evenements"
                className="block  px-1 py-2 font-bold text-sm md:text-xl lg:text-2xl xl:text-4xl border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Adenda et Actualités
              </Link>
              <Link
                href="/services"
                className="block px-2 py-2 font-bold text-sm md:text-xl lg:text-2xl xl:text-4xl border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Sortie à l Entre-Deux
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-2 font-bold text-sm md:text-xl lg:text-2xl xl:text-4xl border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsOpen(false)}
              >
                Divertissement
              </Link>
              <Link
                href="/contact"
                className="block px-2 py-2 font-bold text-sm md:text-xl lg:text-2xl xl:text-4xl border border-[#b2fdfd]/60 hover:border-[#8bfdfd] hover:bg-[#d8fcfcd8]/80 hover:shadow-lg hover:shadow-emerald-200/50 hover:scale-[1.02] transition-all duration-200 active:scale-[0.98]"
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
