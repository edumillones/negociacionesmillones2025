"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { sendContactForm } from "@/lib/actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    errors?: Record<string, string[]>
  }>({})

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    const formData = new FormData(event.currentTarget)
    const result = await sendContactForm(formData)

    setIsSubmitting(false)
    setFormStatus(result)

    if (result.success) {
      // Resetear el formulario si fue exitoso
      event.currentTarget.reset()
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h3>

      {formStatus.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md flex items-start gap-3">
          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
          <p className="text-green-700">{formStatus.message}</p>
        </div>
      )}

      {formStatus.message && !formStatus.success && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
          <p className="text-red-700">{formStatus.message}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full px-3 py-2 border ${
                formStatus.errors?.name ? "border-red-300 bg-red-50" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Tu nombre"
              required
            />
            {formStatus.errors?.name && <p className="text-sm text-red-600 mt-1">{formStatus.errors.name[0]}</p>}
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full px-3 py-2 border ${
                formStatus.errors?.email ? "border-red-300 bg-red-50" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              placeholder="Tu correo"
              required
            />
            {formStatus.errors?.email && <p className="text-sm text-red-600 mt-1">{formStatus.errors.email[0]}</p>}
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className={`w-full px-3 py-2 border ${
              formStatus.errors?.subject ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="Asunto del mensaje"
            required
          />
          {formStatus.errors?.subject && <p className="text-sm text-red-600 mt-1">{formStatus.errors.subject[0]}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`w-full px-3 py-2 border ${
              formStatus.errors?.message ? "border-red-300 bg-red-50" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="Tu mensaje"
            required
          ></textarea>
          {formStatus.errors?.message && <p className="text-sm text-red-600 mt-1">{formStatus.errors.message[0]}</p>}
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-700 hover:bg-blue-800 h-12 flex items-center justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Enviando...
            </>
          ) : (
            "Enviar Mensaje"
          )}
        </Button>
      </form>
    </div>
  )
}
