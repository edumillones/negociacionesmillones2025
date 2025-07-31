import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import LazyMap from "@/components/lazy-map"
import ContactForm from "@/components/contact-form"
import dynamic from "next/dynamic"

// Importar secciones de forma dinámica
const FAQSection = dynamic(() => import("./faq-section"), {
  loading: () => (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-700">Cargando...</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto my-4"></div>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md h-32">
              <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
  ssr: true,
})

export const metadata = {
  title: "Contacto | Negociaciones Millones - Equipos de Protección Personal",
  description: "Ponte en contacto con Negociaciones Millones. Estamos ubicados en Las Malvinas, Lima, Perú.",
}

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-blue-700 text-white py-16 md:py-24">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Contacto</h1>
              <p className="text-xl text-blue-100">
                Estamos aquí para ayudarte. Ponte en contacto con nosotros y te responderemos a la brevedad.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
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

        {/* FAQ Section - Cargado dinámicamente */}
        <FAQSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}
