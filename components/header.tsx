"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, X, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Negociaciones Millones Logo"
              width={50}
              height={40}
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
          <span className="text-base sm:text-lg font-bold text-blue-700">Negociaciones Millones</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Nosotros
          </Link>
          <Link href="/productos" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Productos
          </Link>
          <Link href="/catalogo" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Catálogo
          </Link>
          <Link href="/contacto" className="text-sm font-medium hover:text-blue-700 transition-colors">
            Contacto
          </Link>
        </nav>
        <Button variant="outline" className="hidden md:flex">
          <Phone className="mr-2 h-4 w-4" /> 941 77 0505
        </Button>
        <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 absolute w-full shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-base font-medium hover:text-blue-700 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="/nosotros"
              className="text-base font-medium hover:text-blue-700 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/productos"
              className="text-base font-medium hover:text-blue-700 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/catalogo"
              className="text-base font-medium hover:text-blue-700 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Catálogo
            </Link>
            <Link
              href="/contacto"
              className="text-base font-medium hover:text-blue-700 transition-colors py-2 px-4 rounded-md hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="pt-2 border-t">
              <Link
                href="tel:+51941770505"
                className="flex items-center text-blue-700 font-medium py-2 px-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="mr-2 h-5 w-5" /> 941 77 0505
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
