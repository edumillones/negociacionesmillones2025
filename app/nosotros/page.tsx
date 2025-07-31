import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata = {
  title: "Sobre Nosotros | Negociaciones Millones - Equipos de Protección Personal",
  description: "Conoce más sobre Negociaciones Millones, tu aliado confiable en seguridad industrial desde 2007.",
}

export default function NosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Sobre Nosotros</h1>
              <p className="text-xl text-blue-100">
                Conoce más sobre Negociaciones Millones, tu aliado confiable en seguridad industrial desde 2007.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/about-store.webp"
                  alt="Interior de la tienda Negociaciones Millones con equipos de seguridad industrial, cascos, guantes, calzado de seguridad y diversos productos de seguridad industrial"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[300px] md:h-[400px]"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-blue-700">Nuestra Historia</h2>
                <div className="w-20 h-1 bg-orange-500"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Negociaciones Millones nació en 2007 con la visión de ofrecer soluciones de seguridad industrial de la
                  más alta calidad a empresas y trabajadores en Perú.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Desde nuestros inicios, nos hemos comprometido con la excelencia en el servicio y la calidad de
                  nuestros productos, lo que nos ha permitido crecer y consolidarnos como un referente en el mercado de
                  equipos de protección personal.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ubicados estratégicamente en Las Malvinas, Lima, hemos logrado establecer relaciones sólidas con
                  nuestros clientes y proveedores, basadas en la confianza y el compromiso mutuo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-blue-700">Misión y Visión</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto my-4"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Nuestra Misión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Proporcionar equipos de protección personal de la más alta calidad, garantizando la seguridad y el
                  bienestar de los trabajadores en diversos sectores industriales, a través de un servicio
                  personalizado, asesoramiento experto y precios competitivos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">Nuestra Visión</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconocidos como el proveedor líder de equipos de protección personal en Perú, destacándonos por
                  nuestra excelencia en el servicio, innovación constante y compromiso con la seguridad laboral,
                  contribuyendo así a la creación de entornos de trabajo más seguros y saludables.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-blue-700">Nuestros Valores</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto my-4"></div>
              <p className="text-lg text-gray-600">
                Estos son los principios que guían nuestro trabajo diario y nuestras relaciones con clientes y
                proveedores.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Seguridad</h3>
                <p className="text-gray-600">
                  Priorizamos la seguridad en todo lo que hacemos, ofreciendo productos que cumplen con los más altos
                  estándares de calidad.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Confianza</h3>
                <p className="text-gray-600">
                  Construimos relaciones basadas en la confianza, cumpliendo nuestras promesas y siendo transparentes en
                  todas nuestras operaciones.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                    <line x1="16" x2="2" y1="8" y2="22" />
                    <line x1="17.5" x2="9" y1="15" y2="15" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Calidad</h3>
                <p className="text-gray-600">
                  Nos comprometemos a ofrecer productos de la más alta calidad que cumplan y superen las expectativas de
                  nuestros clientes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-700"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Servicio</h3>
                <p className="text-gray-600">
                  Brindamos un servicio excepcional, asesorando a nuestros clientes para que encuentren las soluciones
                  que mejor se adapten a sus necesidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">¿Listo para trabajar con nosotros?</h2>
              <p className="text-xl">
                Descubre cómo nuestros productos pueden ayudarte a crear un entorno de trabajo más seguro.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/productos">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Ver Productos
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/10 hover:bg-white/20 text-white border-white/30"
                  >
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
