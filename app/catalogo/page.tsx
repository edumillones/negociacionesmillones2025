import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import PDFCatalog from "./pdf-viewer"

export const metadata = {
  title: "Catálogo | Negociaciones Millones - Equipos de Protección Personal",
  description:
    "Explora nuestro catálogo completo de equipos de protección personal para todas tus necesidades de seguridad industrial.",
}

export default function CatalogoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white py-12 md:py-16 lg:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">Catálogo de Productos</h1>
              <p className="text-lg md:text-xl text-blue-100">
                Explora nuestro catálogo completo de equipos de protección personal para todas tus necesidades de
                seguridad industrial.
              </p>
            </div>
          </div>
        </section>

        {/* PDF Catalog Section */}
        <section className="py-12 md:py-16 lg:py-24">
          <div className="container">
            <PDFCatalog />
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
