import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar.fixed.js";
import ArowBack from "../components/Arow-back";
import Banner from "../components/Banner";
import Footer from "../components/Footer.js";

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "L'Entre-Deux - Village de l'Entre-Deux",
  description: "Mairie de L'Entre-Deux, actualités, services municipaux, événements et informations pour les habitants du village de l'Entre-Deux à La Réunion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${poppins.variable} w-[100%] mx-auto min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
