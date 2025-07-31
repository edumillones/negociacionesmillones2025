import Link from "next/link"
import { HardHat, Eye, TreesIcon as Lungs, ShieldCheck, AlertTriangle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import LazyImage from "@/components/lazy-image"
import dynamic from "next/dynamic"

// Importar secciones de forma dinámica
const BrandsSection = dynamic(() => import("./brands-section"), {
  loading: () => (
    <div className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-blue-700">Cargando...</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
              <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
  ssr: true,
})

export const metadata = {
  title: "Productos | Negociaciones Millones - Equipos de Protección Personal",
  description:
    "Explora nuestra amplia gama de equipos de protección personal para garantizar la seguridad en el trabajo.",
}

export default function ProductosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Nuestros Productos</h1>
              <p className="text-xl text-blue-100">
                Explora nuestra amplia gama de equipos de protección personal para garantizar la seguridad en el
                trabajo.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="categorias" className="py-16 md:py-24">
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
              <div
                id="cabeza"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <HardHat className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección para Cabeza</h3>
                  <p className="text-gray-600 mb-4">
                    Cascos, gorras y otros equipos para proteger la cabeza en entornos industriales.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Productos
                  </Button>
                </div>
              </div>

              {/* Category 2 */}
              <div
                id="visual-auditiva"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Eye className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección Visual y Auditiva</h3>
                  <p className="text-gray-600 mb-4">
                    Gafas de seguridad, protectores auditivos y más para proteger tus sentidos.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Productos
                  </Button>
                </div>
              </div>

              {/* Category 3 */}
              <div
                id="respiratoria"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <Lungs className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección Respiratoria</h3>
                  <p className="text-gray-600 mb-4">
                    Mascarillas, respiradores y filtros para proteger tus vías respiratorias.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Productos
                  </Button>
                </div>
              </div>

              {/* Category 4 */}
              <div
                id="corporal"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <ShieldCheck className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Protección Corporal y Calzado</h3>
                  <p className="text-gray-600 mb-4">
                    Ropa de seguridad, guantes, calzado y más para protección integral.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Productos
                  </Button>
                </div>
              </div>

              {/* Category 5 */}
              <div
                id="senalizacion"
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 bg-blue-100 flex items-center justify-center">
                  <AlertTriangle className="h-24 w-24 text-blue-700" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Señalización y Accesorios</h3>
                  <p className="text-gray-600 mb-4">
                    Señales de seguridad, cintas y accesorios para entornos de trabajo seguros.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver Productos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-bold text-blue-700">Productos Destacados</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
              <p className="text-lg text-gray-600">
                Descubre nuestros productos más populares y mejor valorados por nuestros clientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Product 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <LazyImage
                    src="/products/product1.jpg"
                    alt="Casco de Seguridad"
                    fill
                    className="object-cover"
                    id="product1"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Casco de Seguridad MSA V-Gard</h3>
                  <p className="text-sm text-gray-600 mb-2">Protección para cabeza de alta resistencia</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 font-bold">S/ 45.00</span>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <LazyImage
                    src="/products/product2.jpg"
                    alt="Lentes de Seguridad"
                    fill
                    className="object-cover"
                    id="product2"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Lentes de Seguridad 3M</h3>
                  <p className="text-sm text-gray-600 mb-2">Protección visual con filtro UV</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 font-bold">S/ 25.00</span>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </div>
              </div>

              {/* Product 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <LazyImage
                    src="/products/product3.jpg"
                    alt="Respirador 3M"
                    fill
                    className="object-cover"
                    id="product3"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Respirador 3M 8210</h3>
                  <p className="text-sm text-gray-600 mb-2">Protección respiratoria N95</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 font-bold">S/ 15.00</span>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </div>
              </div>

              {/* Product 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 relative">
                  <LazyImage
                    src="/products/product4.jpg"
                    alt="Guantes de Seguridad"
                    fill
                    className="object-cover"
                    id="product4"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800">Guantes de Seguridad Truper</h3>
                  <p className="text-sm text-gray-600 mb-2">Protección para manos resistente a cortes</p>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-700 font-bold">S/ 35.00</span>
                    <Button size="sm">Ver Detalles</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link href="/catalogo">
                <Button className="bg-blue-700 hover:bg-blue-800">
                  Ver Catálogo Completo <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Brands Section - Cargado dinámicamente */}
        <BrandsSection />

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold">¿Necesitas una Cotización?</h2>
              <p className="text-xl">Solicita una cotización personalizada para tus necesidades específicas.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/catalogo">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Ver Catálogo Completo
                  </Button>
                </Link>
                <Link
                  href="https://api.whatsapp.com/send?phone=51941770505&text=Hola,%20tengo%20una%20consulta%20sobre%20NEGOCIACIONES%20MILLONES%20EIRL.%20%C2%BFPuedes%20ayudarme?"
                  target="_blank"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-green-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-1"
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
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
