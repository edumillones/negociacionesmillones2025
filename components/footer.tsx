"use client"

import { useState } from "react"
import Image from "next/image"
import ComplaintsBook from "./complaints-book"

export default function Footer() {
  const [isComplaintsBookOpen, setIsComplaintsBookOpen] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6 md:mb-0 text-center sm:text-left">
              <Image
                src="/logo.png"
                alt="Negociaciones Millones Logo"
                width={60}
                height={48}
                className="h-10 sm:h-12 w-auto"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Negociaciones Millones</h3>
                <p className="text-sm sm:text-base text-gray-400">Protección Garantizada desde 2007</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setIsComplaintsBookOpen(true)}
                className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-md transition-colors text-sm"
              >
                <Image
                  src="/libro-reclamaciones-logo.jpg"
                  alt="Libro de Reclamaciones"
                  width={80}
                  height={24}
                  className="h-5 w-auto"
                />
              </button>

              <div className="text-center md:text-right">
                <p className="text-sm sm:text-base text-gray-400">
                  © {new Date().getFullYear()} Negociaciones Millones. Todos los derechos reservados.
                </p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">
                  by{" "}
                  <a
                    href="https://edumillones.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    @edu.millones
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ComplaintsBook isOpen={isComplaintsBookOpen} onClose={() => setIsComplaintsBookOpen(false)} />
    </>
  )
}
