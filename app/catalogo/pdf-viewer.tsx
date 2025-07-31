"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, FileText, AlertTriangle } from "lucide-react"

export default function PDFCatalog() {
  const [isLoading, setIsLoading] = useState(false)
  const [showViewer, setShowViewer] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const pdfUrl = "/catalogo-negociaciones-millones.pdf"
  const pdfSize = "15.8 MB" // Tamaño aproximado del PDF
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100px" },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleViewPDF = () => {
    setIsLoading(true)
    setShowViewer(true)
    // Simular tiempo de carga
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="w-full max-w-4xl mx-auto" ref={containerRef}>
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
        <div className="flex flex-col items-center text-center mb-8">
          <FileText className="h-16 w-16 text-blue-700 mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Catálogo de Productos</h2>
          <p className="text-gray-600 max-w-2xl">
            Nuestro catálogo completo está disponible en formato PDF. Ten en cuenta que es un archivo grande ({pdfSize})
            y puede tardar en cargar dependiendo de tu conexión a internet.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href={pdfUrl} download>
            <Button size="lg" className="bg-blue-700 hover:bg-blue-800 w-full sm:w-auto">
              <Download className="mr-2 h-5 w-5" /> Descargar Catálogo
            </Button>
          </Link>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
            onClick={handleViewPDF}
            disabled={showViewer && isLoading}
          >
            {isLoading ? "Cargando..." : "Ver Catálogo Online"}
          </Button>
        </div>

        {!showViewer && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3 text-left">
            <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-amber-800">Recomendación</h3>
              <p className="text-amber-700 text-sm">
                Para una mejor experiencia, recomendamos descargar el catálogo. Si prefieres verlo online, ten en cuenta
                que puede tardar en cargar debido a su tamaño.
              </p>
            </div>
          </div>
        )}

        {showViewer && (
          <div className="w-full">
            {isLoading ? (
              <div className="w-full h-[600px] flex items-center justify-center bg-gray-100 rounded-lg">
                <div className="text-center">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700 mb-4"></div>
                  <p className="text-gray-600">Cargando catálogo...</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-[600px] rounded-lg overflow-hidden border border-gray-300">
                {isInView && (
                  <iframe
                    src={`${pdfUrl}#view=FitH`}
                    className="w-full h-full"
                    title="Catálogo de Negociaciones Millones"
                    loading="lazy"
                  ></iframe>
                )}
              </div>
            )}
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">¿No encuentras lo que buscas o prefieres una cotización personalizada?</p>
          <Link
            href="https://api.whatsapp.com/send?phone=51941770505&text=Hola,%20tengo%20una%20consulta%20sobre%20el%20catálogo%20de%20NEGOCIACIONES%20MILLONES%20EIRL.%20%C2%BFPuedes%20ayudarme?"
            target="_blank"
            className="inline-flex h-10 items-center justify-center rounded-md bg-green-600 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="mr-2 h-5 w-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar información por WhatsApp
          </Link>
        </div>
      </div>
    </div>
  )
}
