import React from 'react'

export default function Video() {
  return (
    <div className="relative w-full aspect-video">
      <iframe 
        className="absolute inset-0 w-full h-full rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/l1w17kP5WFw" 
        title="La Réunion-L'Entre-Deux-vue du ciel-Drone-2025" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />
    </div>
  )
}
