import Image from "next/image"

export default function TruperPartnership() {
  return (
    <section className="py-6 md:py-10 lg:py-12 bg-white border-y border-gray-200">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          <div className="md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700">Socios Oficiales de Truper Perú</h2>
            <p className="text-sm sm:text-base text-gray-700">
              En Negociaciones Millones nos enorgullece ser socios oficiales de Truper Perú, lo que nos permite
              ofrecerte productos de la más alta calidad con garantía y respaldo de una marca reconocida
              internacionalmente.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-md max-w-sm md:max-w-md">
              <Image
                src="/truper-logo.png"
                alt="Truper Perú Logo"
                width={400}
                height={160}
                className="object-contain h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
