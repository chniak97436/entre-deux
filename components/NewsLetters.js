"use client";
import React from 'react'
import { useState } from 'react';

export default function NewsLetters() {
    
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(null);

    const newsSubmit = async (e) => {
      e.preventDefault();
      setSuccess(null);
      try {
        const response = await fetch("/api/newsletters/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
        
        if (!response.ok) {
          // Don't parse json() on error responses (avoids HTML parse fails)
          const errorText = await response.text();
          throw new Error(errorText || 'Erreur lors de l\'abonnement');
        }
        
        const data = await response.json();
        setSuccess(true);
        setEmail("");
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
      } catch (error) {
        console.error("Erreur abonnement newsletter:", error);
        setSuccess(false);
        setTimeout(() => {
          setSuccess(null);
        }, 3000);
        setEmail("");
      }
    }

  return (
    <div className="w-full bg-gray-50 py-10 mb-8 md:mb-15 lg:mb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-v mb-6">NEWSLETTERS</h2>
        <p className="text-sm font-semibold text-b text-center mb-4 md:text-lg">Abonnez-vous à notre newsletter pour recevoir les dernières nouvelles et mises à jour directement dans votre boîte de réception.</p>
        <form className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e)=> newsSubmit(e)}
        >   
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse e-mail"
            className="flex-1 px-4 py-2 border text-b border-emerald-300 rounded-md focus:outline-none focus:ring-2 focus:ring-v focus:border-transparent "
          />
          <button type="submit"
                  className="px-6 py-2 bg-v md:w-1/3 text-white rounded-md hover:bg-b transition-colors duration-300"
          >
            S'abonner
          </button>
        </form>
        {success && (
          <p className="mt-4 text-green-600 text-center font-bold">Merci pour votre abonnement !</p>
        )}
        {!success && success !== null && (
          <p className="mt-4 text-red-600 text-center font-bold">Une erreur est survenue. Veuillez réessayer.</p>
        )}
      </div>
    </div>
  );    
}
