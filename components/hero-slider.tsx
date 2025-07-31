"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/slider/slide1.jpg",
    title: "Protección Garantizada desde 2007",
    subtitle: "Tu aliado confiable en seguridad industrial en Las Malvinas, Perú.",
  },
  {
    id: 2,
    image: "/slider/slide2.jpg",
    title: "Equipos de Protección Personal de Alta Calidad",
    subtitle: "Soluciones completas para la seguridad de tu equipo de trabajo.",
  },
  {
    id: 3,
    image: "/slider/slide3.jpg",
    title: "Distribuidores Autorizados",
    subtitle: "Trabajamos con las mejores marcas del mercado para garantizar tu seguridad.",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full overflow-hidden">
      {/* Franjas decorativas solo visibles en móvil */}
      <div className="absolute top-0 left-0 w-full z-10 sm:hidden">
        <div className="h-3 bg-blue-700"></div>
        <div className="h-2 bg-orange-500"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-10 sm:hidden">
        <div className="h-2 bg-orange-500"></div>
        <div className="h-3 bg-blue-700"></div>
      </div>

      {/* Elementos decorativos laterales solo visibles en móvil */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1/2 w-3 bg-blue-700 z-10 sm:hidden"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-1/2 w-3 bg-orange-500 z-10 sm:hidden"></div>

      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <Image src={slide.image || "/placeholder.svg"} alt={slide.title} fill className="object-cover z-0" priority />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container px-4 md:px-6">
              <div className="max-w-2xl mx-auto space-y-4 sm:space-y-6">
                {/* Título con fondo para mejor legibilidad en móvil */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white text-center sm:text-left px-3 py-2 sm:p-0 bg-black/30 sm:bg-transparent rounded-lg sm:rounded-none">
                  {slide.title}
                </h1>
                {/* Subtítulo con fondo para mejor legibilidad en móvil */}
                <p className="text-lg sm:text-xl md:text-2xl text-blue-100 text-center sm:text-left px-3 py-2 sm:p-0 bg-black/30 sm:bg-transparent rounded-lg sm:rounded-none">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-3 sm:mt-6 justify-center sm:justify-start">
                  <Link href="/productos">
                    <Button
                      size="lg"
                      className="bg-orange-500 hover:bg-orange-600 text-white text-base w-full sm:w-auto h-12 sm:h-11 px-6 sm:px-5 rounded-md"
                    >
                      Explora y Cotiza <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contacto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-base w-full sm:w-auto h-12 sm:h-11 px-6 sm:px-5 rounded-md"
                    >
                      Contáctanos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons - Más grandes y mejor posicionados en móvil */}
      <button
        onClick={prevSlide}
        className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-blue-700/80 hover:bg-blue-700 text-white p-3 sm:p-3 rounded-full shadow-lg"
        aria-label="Anterior slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-orange-500/80 hover:bg-orange-500 text-white p-3 sm:p-3 rounded-full shadow-lg"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators - Más grandes y mejor posicionados en móvil */}
      <div className="absolute bottom-8 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all ${
              index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
