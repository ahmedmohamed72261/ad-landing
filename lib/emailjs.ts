import emailjs from "@emailjs/browser"

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1qqo5mm",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_vhxcxnh",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "zSKR6-7o21uKmRAGb",
}

// Initialize EmailJS
if (EMAILJS_CONFIG.PUBLIC_KEY) {
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
}

export interface EmailData {
  name: string
  email: string
  phone?: string
  company?: string
  subject?: string
  topic?: string
  message: string
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      console.error("EmailJS configuration is incomplete. Please check your environment variables.")
      return false
    }

    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "غير محدد",
      company: data.company || "غير محدد",
      subject: data.subject || data.topic || "رسالة جديدة",
      message: data.message,
      reply_to: data.email,
      to_email: "samehawed9@gmail.com",
    }

    const response = await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, templateParams)

    return response.status === 200
  } catch (error) {
    console.error("EmailJS Error:", error)
    return false
  }
}
