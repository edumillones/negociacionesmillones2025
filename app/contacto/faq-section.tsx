export default function FAQSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-blue-700">Preguntas Frecuentes</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto my-4"></div>
          <p className="text-lg text-gray-600">
            Respuestas a las preguntas más comunes sobre nuestros productos y servicios.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">¿Realizan envíos a nivel nacional?</h3>
            <p className="text-gray-700">
              Sí, realizamos envíos a todo el Perú. El costo y tiempo de entrega dependerá de la ubicación y el volumen
              del pedido.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">¿Ofrecen descuentos por compras al por mayor?</h3>
            <p className="text-gray-700">
              Sí, contamos con precios especiales para compras al por mayor. Contáctanos para obtener una cotización
              personalizada.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">¿Cuáles son los métodos de pago aceptados?</h3>
            <p className="text-gray-700">
              Aceptamos transferencias bancarias, depósitos, efectivo y tarjetas de crédito/débito en nuestra tienda
              física.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-2">¿Ofrecen asesoramiento técnico?</h3>
            <p className="text-gray-700">
              Sí, nuestro equipo está capacitado para brindarte asesoramiento técnico sobre los equipos de protección
              personal más adecuados para tus necesidades específicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
