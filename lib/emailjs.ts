'use client'

import emailjs from "@emailjs/browser"

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_1qqo5mm",
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_vhxcxnh",
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "zSKR6-7o21uKmRAGb",
}

// Initialize EmailJS
if (typeof window !== 'undefined' && EMAILJS_CONFIG.PUBLIC_KEY) {
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

// Direct EmailJS implementation for sending emails
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Check if EmailJS configuration is complete
    if (!EMAILJS_CONFIG.SERVICE_ID || !EMAILJS_CONFIG.TEMPLATE_ID || !EMAILJS_CONFIG.PUBLIC_KEY) {
      console.error("EmailJS configuration is incomplete")
      return false
    }

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || "غير محدد",
      company: data.company || "غير محدد",
      subject: data.subject || data.topic || "رسالة جديدة",
      message: data.message
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )

    console.log("Email sent successfully:", response)
    return true
  } catch (error) {
    console.error("Email sending error:", error)
    return false
  }
}
