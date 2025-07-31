"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface LazyImageProps extends Omit<ImageProps, "onLoad"> {
  lowQualitySrc?: string
  blurEffect?: boolean
}

export default function LazyImage({ src, alt, className, lowQualitySrc, blurEffect = true, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Configurar el Intersection Observer para detectar cuando la imagen está en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }, // Cargar la imagen cuando esté a 200px de entrar en la pantalla
    )

    // Obtener el elemento contenedor de la imagen
    const id = setTimeout(() => {
      const element = document.getElementById(`lazy-img-${props.id || Math.random().toString(36).substring(7)}`)
      if (element) {
        observer.observe(element)
      }
    }, 100)

    return () => {
      clearTimeout(id)
      observer.disconnect()
    }
  }, [props.id])

  return (
    <div
      id={`lazy-img-${props.id || Math.random().toString(36).substring(7)}`}
      className={cn("relative overflow-hidden", className)}
      style={{ ...props.style }}
    >
      {isInView && (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          className={cn(
            blurEffect && "transition-opacity duration-500",
            isLoaded ? "opacity-100" : "opacity-0",
            className,
          )}
          onLoadingComplete={() => setIsLoaded(true)}
          loading="lazy"
          {...props}
        />
      )}

      {/* Placeholder o imagen de baja calidad mientras carga */}
      {blurEffect && !isLoaded && isInView && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}

      {/* Mostrar un placeholder si la imagen aún no está en vista */}
      {!isInView && <div className="absolute inset-0 bg-gray-200" />}
    </div>
  )
}
