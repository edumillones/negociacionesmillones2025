import LazyImage from "@/components/lazy-image"

export default function BrandsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl font-bold text-blue-700">Marcas con las que Trabajamos</h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          <p className="text-lg text-gray-600">
            Colaboramos con las mejores marcas del mercado para ofrecerte productos de la más alta calidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
            <LazyImage
              src="/brands/truper.png"
              alt="Truper"
              width={150}
              height={80}
              className="object-contain h-full w-auto"
              id="brand-truper"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
            <LazyImage
              src="/brands/3m.png"
              alt="3M"
              width={150}
              height={80}
              className="object-contain h-full w-auto"
              id="brand-3m"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
            <LazyImage
              src="/brands/msa.png"
              alt="MSA"
              width={150}
              height={80}
              className="object-contain h-full w-auto"
              id="brand-msa"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-24">
            <LazyImage
              src="/brands/steelpro.png"
              alt="Steelpro"
              width={150}
              height={80}
              className="object-contain h-full w-auto"
              id="brand-steelpro"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
