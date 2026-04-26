"use client"

import React, { useState } from 'react'
import { Play } from 'lucide-react'

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = "l1w17kP5WFw"
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return (
    <div className="relative w-full aspect-video bg-black">
      {isPlaying ? (
        <iframe 
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
          title="La Réunion-L'Entre-Deux-vue du ciel-Drone-2025" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      ) : (
        <>
          <img 
            src={thumbnailUrl} 
            alt="Miniature vidéo L'Entre-Deux vue du ciel"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <button 
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center group cursor-pointer"
            aria-label="Lire la vidéo"
          >
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-white fill-white ml-1" />
            </div>
          </button>
        </>
      )}
    </div>
  )
}

