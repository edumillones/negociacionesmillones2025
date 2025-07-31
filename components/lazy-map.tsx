"use client"

import { useState, useEffect, useRef } from "react"

interface LazyMapProps {
  src: string
  title: string
  className?: string
  height?: string
}

export default function LazyMap({ src, title, className = "h-96 w-full", height = "100%" }: LazyMapProps) {
  const [isVisible, setIsVisible] = useState(false)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: "100px", // Cargar el mapa cuando esté a 100px de entrar en la pantalla
        threshold: 0.1,
      },
    )

    if (mapRef.current) {
      observer.observe(mapRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div ref={mapRef} className={className}>
      {isVisible ? (
        <iframe
          src={src}
          width="100%"
          height={height}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
          <p className="text-gray-500 text-sm">Cargando mapa...</p>
        </div>
      )}
    </div>
  )
}
