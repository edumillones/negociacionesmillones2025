"use server"

import { z } from "zod"

// Esquema de validación para el formulario de contacto
const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  subject: z.string().min(3, { message: "El asunto debe tener al menos 3 caracteres" }),
  message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres" }),
})

// Esquema de validación para el libro de reclamaciones
const ComplaintFormSchema = z.object({
  customerName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  documentType: z.enum(["DNI", "CE", "Pasaporte"], { message: "Selecciona un tipo de documento válido" }),
  documentNumber: z.string().min(8, { message: "El número de documento debe tener al menos 8 caracteres" }),
  email: z.string().email({ message: "Correo electrónico inválido" }),
  phone: z.string().min(9, { message: "El teléfono debe tener al menos 9 dígitos" }),
  address: z.string().min(10, { message: "La dirección debe tener al menos 10 caracteres" }),
  complaintType: z.enum(["Reclamo", "Queja"], { message: "Selecciona un tipo válido" }),
  description: z.string().min(20, { message: "La descripción debe tener al menos 20 caracteres" }),
  requestedAction: z.string().min(10, { message: "La acción solicitada debe tener al menos 10 caracteres" }),
})

type ContactFormData = z.infer<typeof ContactFormSchema>
type ComplaintFormData = z.infer<typeof ComplaintFormSchema>

export async function sendContactForm(formData: FormData) {
  try {
    // Extraer datos del formulario
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validar datos
    const result = ContactFormSchema.safeParse({
      name,
      email,
      subject,
      message,
    })

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      }
    }

    // En un entorno real, aquí enviarías el correo electrónico
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message: "Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.",
    }
  } catch (error) {
    console.error("Error al enviar el formulario:", error)
    return {
      success: false,
      message: "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.",
    }
  }
}

export async function submitComplaint(formData: FormData) {
  try {
    // Extraer datos del formulario
    const customerName = formData.get("customerName") as string
    const documentType = formData.get("documentType") as string
    const documentNumber = formData.get("documentNumber") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const address = formData.get("address") as string
    const complaintType = formData.get("complaintType") as string
    const description = formData.get("description") as string
    const requestedAction = formData.get("requestedAction") as string

    // Validar datos
    const result = ComplaintFormSchema.safeParse({
      customerName,
      documentType,
      documentNumber,
      email,
      phone,
      address,
      complaintType,
      description,
      requestedAction,
    })

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      }
    }

    // Simular procesamiento
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generar número de reclamo
    const complaintNumber = `REC-${Date.now().toString().slice(-6)}`

    return {
      success: true,
      complaintNumber,
      message: `Su reclamo ha sido registrado exitosamente con el número: ${complaintNumber}. Recibirá una respuesta en un plazo máximo de 30 días hábiles.`,
    }
  } catch (error) {
    console.error("Error al procesar el reclamo:", error)
    return {
      success: false,
      message: "Hubo un error al procesar su reclamo. Por favor, intente nuevamente.",
    }
  }
}
