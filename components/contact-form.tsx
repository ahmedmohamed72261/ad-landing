"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { sendEmailAction } from "@/app/actions/send-email"

export default function ContactForm() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "support",
    message: "",
  })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!data.name || !data.email || !data.message) {
      toast({ title: "حقول مطلوبة", description: "يرجى تعبئة الاسم، البريد، والرسالة.", variant: "destructive" })
      return
    }

    setLoading(true)

    try {
      const result = await sendEmailAction({
        name: data.name,
        email: data.email,
        phone: data.phone,
        topic: data.topic,
        message: data.message,
      })

      if (result.success) {
        toast({
          title: "تم الإرسال بنجاح",
          description: "وصلتنا رسالتك وسنعاودك خلال 24 ساعة.",
        })
        setData({ name: "", email: "", phone: "", topic: "support", message: "" })
      } else {
        throw new Error(result.error || "Failed to send email")
      }
    } catch (error) {
      toast({
        title: "خطأ في الإرسال",
        description: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-label="نموذج تواصل">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">الاسم الكامل</Label>
          <Input
            id="name"
            placeholder="اكتب اسمك"
            value={data.name}
            onChange={(e) => setData((s) => ({ ...s, name: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            value={data.email}
            onChange={(e) => setData((s) => ({ ...s, email: e.target.value }))}
          />
        </div>
        <div>
          <Label htmlFor="phone">رقم الجوال (اختياري)</Label>
          <Input
            id="phone"
            placeholder="05xxxxxxxx"
            value={data.phone}
            onChange={(e) => setData((s) => ({ ...s, phone: e.target.value }))}
          />
        </div>
        <div>
          <Label>الموضوع</Label>
          <Select value={data.topic} onValueChange={(v) => setData((s) => ({ ...s, topic: v }))}>
            <SelectTrigger>
              <SelectValue placeholder="اختر موضوع" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="support">دعم فني</SelectItem>
              <SelectItem value="sales">مبيعات</SelectItem>
              <SelectItem value="billing">فواتير ومدفوعات</SelectItem>
              <SelectItem value="partnerships">شراكات</SelectItem>
              <SelectItem value="other">أخرى</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message">رسالتك</Label>
        <Textarea
          id="message"
          placeholder="اكتب تفاصيل طلبك أو استفسارك..."
          className="min-h-32"
          value={data.message}
          onChange={(e) => setData((s) => ({ ...s, message: e.target.value }))}
        />
      </div>

      <div className="flex items-center justify-end gap-3">
        <Button
          type="submit"
          className="rounded-full bg-teal-500 hover:bg-teal-600"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? "جارٍ الإرسال..." : "أرسل الرسالة"}
        </Button>
      </div>
    </form>
  )
}
