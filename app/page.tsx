import Link from "next/link"
import Image from "next/image"
import { HardHat, Eye, TreesIcon as Lungs, ShieldCheck, AlertTriangle, MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import HeroSlider from "@/components/hero-slider"
import LazyMap from "@/components/lazy-map"
import ContactForm from "@/components/contact-form"
import dynamic from "next/dynamic"

// Importar componentes de forma dinámica
const TruperPartnership = dynamic(() => import("@/components/truper-partnership"), {
  loading: () => (
    <div className="py-10 md:py-12 bg-white border-y border-gray-200">
      <div className="container">
        <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
      </div>
    </div>
  ),
  ssr: true,
})

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Slider */}
        <section id="inicio" className="relative">
          <HeroSlider />
        </section>

        {/* About Us Section */}
        <section id="nosotros" className="py-8 md:py-16 lg:py-24 bg-gray-50">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src="/homepage-about-image.webp"
                  alt="Interior de la tienda Negociaciones Millones mostrando equipos de protección personal: cascos de seguridad blancos, guantes coloridos, calzado de seguridad, respiradores en vitrinas y diversos productos organizados profesionalmente"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full h-[250px] sm:h-[300px] md:h-[400px]"
                  priority
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-blue-700">Sobre Nosotros</h2>
                <div className="w-20 h-1 bg-orange-500"></div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  En Negociaciones Millones nos dedicamos a ofrecer soluciones de seguridad industrial de la más alta
                  calidad. Desde el 2007 hasta hoy, hemos sido el aliado confiable de empresas y trabajadores en Perú.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Descubre nuestra amplia gama de productos en nuestro catálogo en línea.
                </p>
                <div className="pt-4">
                  <Link href="/nosotros">
                    <Button className="bg-blue-700 hover:bg-blue-800 h-11 px-6 w-full sm:w-auto">
                      Conoce Nuestra Historia
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Truper Partnership Section - Cargado dinámicamente */}
        <TruperPartnership />

        {/* Product Categories */}
        <section id="productos" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-bold text-blue-700">Categorías de Productos</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-lg text-gray-600">
                Ofrecemos una amplia gama de equipos de protección personal para garantizar la seguridad en el trabajo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <HardHat className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección para Cabeza</h3>
                  <p className="text-gray-600 mb-4">
                    Cascos, gorras y otros equipos para proteger la cabeza en entornos industriales.
                  </p>
                  <Link href="/productos#cabeza" className="block">
                    <Button variant="outline" className="w-full h-11 bg-transparent">
                      Ver Productos
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Category 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Eye className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección Visual y Auditiva</h3>
                  <p className="text-gray-600 mb-4">
                    Gafas de seguridad, protectores auditivos y más para proteger tus sentidos.
                  </p>
                  <Link href="/productos#visual-auditiva" className="block">
                    <Button variant="outline" className="w-full h-11 bg-transparent">
                      Ver Productos
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Category 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Lungs className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección Respiratoria</h3>
                  <p className="text-gray-600 mb-4">
                    Mascarillas, respiradores y filtros para proteger tus vías respiratorias.
                  </p>
                  <Link href="/productos#respiratoria" className="block">
                    <Button variant="outline" className="w-full h-11 bg-transparent">
                      Ver Productos
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Category 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <ShieldCheck className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección Corporal y Calzado</h3>
                  <p className="text-gray-600 mb-4">
                    Ropa de seguridad, guantes, calzado y más para protección integral.
                  </p>
                  <Link href="/productos#corporal" className="block">
                    <Button variant="outline" className="w-full h-11 bg-transparent">
                      Ver Productos
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Category 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <AlertTriangle className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Señalización y Accesorios</h3>
                  <p className="text-gray-600 mb-4">
                    Señales de seguridad, cintas y accesorios para entornos de trabajo seguros.
                  </p>
                  <Link href="/productos#senalizacion" className="block">
                    <Button variant="outline" className="w-full h-11 bg-transparent">
                      Ver Productos
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog / Quote Section */}
        <section id="catalogo" className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">¿Necesitas una Cotización?</h2>
              <p className="text-xl">
                Explora nuestro catálogo completo o solicita una cotización personalizada para tus necesidades
                específicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/catalogo" className="block w-full sm:w-auto">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white w-full h-12 px-6">
                    Ver Catálogo Completo
                  </Button>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=51941770505&text=Hola,%20tengo%20una%20consulta%20sobre%20NEGOCIACIONES%20MILLONES%20EIRL.%20%C2%BFPuedes%20ayudarme?"
                  target="_blank"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-green-600 px-6 text-base font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1 w-full sm:w-auto"
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
                  Cotizar por WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-16 md:py-24">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold text-blue-700">Ponte en contacto con nosotros</h2>
                <div className="w-20 h-1 bg-orange-500"></div>
                <p className="text-lg text-gray-600">
                  Te invitamos a visitar nuestras instalaciones. Estamos convenientemente ubicados al frente de Repsol,
                  listos para atenderte y asesorarte en todo lo que necesites.
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Dirección</h3>
                      <p className="text-gray-600">JR. HUAROCHIRI N574, C.C. PLAZA FERRETERO</p>
                      <p className="text-gray-600">Las Malvinas, Lima, Perú</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Teléfono</h3>
                      <p className="text-gray-600">941 77 0505</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Correo</h3>
                      <p className="text-gray-600">ventas@negociacionesmillones.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Horario</h3>
                      <p className="text-gray-600">9:00 – 19:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* Map Section - Usando el componente LazyMap */}
        <LazyMap
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.9763124333396!2d-77.04143232394823!3d-12.043963888118762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8c6a3662a67%3A0x45e95a8e0f0a9882!2sJr.%20Huarochir%C3%AD%20574%2C%20Lima%2015001%2C%20Per%C3%BA!5e0!3m2!1ses!2s!4v1713483198101!5m2!1ses!2s"
          title="Ubicación de Negociaciones Millones"
        />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
