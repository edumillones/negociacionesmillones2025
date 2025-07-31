"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { submitComplaint } from "@/lib/actions"
import { CheckCircle, AlertCircle, Loader2, X } from "lucide-react"
import Image from "next/image"

interface ComplaintsBookProps {
  isOpen: boolean
  onClose: () => void
}

export default function ComplaintsBook({ isOpen, onClose }: ComplaintsBookProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
    complaintNumber?: string
    errors?: Record<string, string[]>
  }>({})

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus({})

    const formData = new FormData(event.currentTarget)
    const result = await submitComplaint(formData)

    setIsSubmitting(false)
    setFormStatus(result)

    if (result.success) {
      // Resetear el formulario si fue exitoso
      event.currentTarget.reset()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/libro-reclamaciones-logo.jpg"
              alt="Libro de Reclamaciones Digital"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-2">Libro de Reclamaciones Digital</h2>
            <p className="text-gray-600">
              Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición
              nuestro libro de reclamaciones.
            </p>
          </div>

          {formStatus.success && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-green-700 font-medium">¡Reclamo registrado exitosamente!</p>
                  <p className="text-green-600 text-sm mt-1">{formStatus.message}</p>
                  {formStatus.complaintNumber && (
                    <p className="text-green-600 text-sm font-medium mt-2">
                      Número de reclamo: {formStatus.complaintNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {formStatus.message && !formStatus.success && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
              <p className="text-red-700">{formStatus.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  className={`w-full px-3 py-2 border ${
                    formStatus.errors?.customerName ? "border-red-300 bg-red-50" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {formStatus.errors?.customerName && (
                  <p className="text-sm text-red-600 mt-1">{formStatus.errors.customerName[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="documentType" className="block text-sm font-medium text-gray-700 mb-1">
                  Tipo de documento *
                </label>
                <select
                  id="documentType"
                  name="documentType"
                  className={`w-full px-3 py-2 border ${
                    formStatus.errors?.documentType ? "border-red-300 bg-red-50" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                >
                  <option value="">Seleccionar</option>
                  <option value="DNI">DNI</option>
                  <option value="CE">Carné de Extranjería</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
                {formStatus.errors?.documentType && (
                  <p className="text-sm text-red-600 mt-1">{formStatus.errors.documentType[0]}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Número de documento *
                </label>
                <input
                  type="text"
                  id="documentNumber"
                  name="documentNumber"
                  className={`w-full px-3 py-2 border ${
                    formStatus.errors?.documentNumber ? "border-red-300 bg-red-50" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {formStatus.errors?.documentNumber && (
                  <p className="text-sm text-red-600 mt-1">{formStatus.errors.documentNumber[0]}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className={`w-full px-3 py-2 border ${
                    formStatus.errors?.phone ? "border-red-300 bg-red-50" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                />
                {formStatus.errors?.phone && <p className="text-sm text-red-600 mt-1">{formStatus.errors.phone[0]}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full px-3 py-2 border ${
                  formStatus.errors?.email ? "border-red-300 bg-red-50" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              {formStatus.errors?.email && <p className="text-sm text-red-600 mt-1">{formStatus.errors.email[0]}</p>}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                Dirección *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className={`w-full px-3 py-2 border ${
                  formStatus.errors?.address ? "border-red-300 bg-red-50" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              {formStatus.errors?.address && (
                <p className="text-sm text-red-600 mt-1">{formStatus.errors.address[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo *
              </label>
              <select
                id="complaintType"
                name="complaintType"
                className={`w-full px-3 py-2 border ${
                  formStatus.errors?.complaintType ? "border-red-300 bg-red-50" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              >
                <option value="">Seleccionar</option>
                <option value="Reclamo">Reclamo</option>
                <option value="Queja">Queja</option>
              </select>
              {formStatus.errors?.complaintType && (
                <p className="text-sm text-red-600 mt-1">{formStatus.errors.complaintType[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción del reclamo/queja *
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                className={`w-full px-3 py-2 border ${
                  formStatus.errors?.description ? "border-red-300 bg-red-50" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              {formStatus.errors?.description && (
                <p className="text-sm text-red-600 mt-1">{formStatus.errors.description[0]}</p>
              )}
            </div>

            <div>
              <label htmlFor="requestedAction" className="block text-sm font-medium text-gray-700 mb-1">
                Acción solicitada *
              </label>
              <textarea
                id="requestedAction"
                name="requestedAction"
                rows={3}
                className={`w-full px-3 py-2 border ${
                  formStatus.errors?.requestedAction ? "border-red-300 bg-red-50" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              {formStatus.errors?.requestedAction && (
                <p className="text-sm text-red-600 mt-1">{formStatus.errors.requestedAction[0]}</p>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1 bg-blue-700 hover:bg-blue-800" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Reclamo"
                )}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancelar
              </Button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-gray-50 rounded-md text-sm text-gray-600">
            <p className="font-medium mb-2">Información importante:</p>
            <ul className="space-y-1 text-xs">
              <li>• El proveedor deberá dar respuesta al reclamo en un plazo no mayor a treinta (30) días hábiles.</li>
              <li>• La formulación del reclamo no impide acudir a otras vías de solución de controversias.</li>
              <li>
                • Para presentar un reclamo debe identificarse consignando su nombre y número de documento de identidad.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
