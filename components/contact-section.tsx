'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { toast } = useToast()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [service, setService] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget // ✅ FIX (store reference)

    if (!service) {
      alert('⚠️ Please select a service')
      setIsSubmitting(false)
      return
    }

    const formData = new FormData(form)

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      organization: formData.get('organization'),
      service,
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to send message')
      }

      toast({
        title: '✅ Message Sent Successfully',
        description: 'Our team will contact you soon.',
      })

      alert('✅ Message sent successfully!')

      form.reset() // ✅ USE STORED FORM
      setService('')

    } catch (error: any) {
      toast({
        title: '❌ Failed to Send Message',
        description: error.message || 'Something went wrong.',
      })

      alert(error.message || '❌ Failed to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: [
        '808, 8th Floor, Kosha Kommercial Komplex',
        'Poddar Park Road, Malad East',
        'Mumbai, Maharashtra 400097',
      ],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 8369149230'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@avabodhabharat.com'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 10:00 AM - 7:30 PM',
        'Saturday: 10:00 AM - 6:30 PM',
      ],
    },
  ]

  return (
    <section id="contact" className="py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's Build a Safer Workplace
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your compliance journey? Contact us today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{info.title}</h3>
                    {info.details.map((d, i) => (
                      <p key={i} className="text-sm text-muted-foreground">
                        {d}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Full Name *</Label>
                      <Input name="name" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input name="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>

                  {/* Phone + Org */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label>Phone</Label>
                      <Input name="phone" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <Label>Organization</Label>
                      <Input name="organization" placeholder="Enter your company name" />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <Label>Service *</Label>
                    <Select onValueChange={setService}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="posh">POSH Training</SelectItem>
                        <SelectItem value="pocso">POCSO</SelectItem>
                        <SelectItem value="ic">IC Training</SelectItem>
                        <SelectItem value="esg">ESG Advisory</SelectItem>
                        <SelectItem value="legal">Legal Advisory</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div>
                    <Label>Message *</Label>
                    <Textarea
                      name="message"
                      placeholder="Enter your message or requirements..."
                      required
                      rows={5}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}