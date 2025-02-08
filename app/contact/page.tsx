"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import ContactForm from "@/components/ContactForm"

const locations = [
  {
    city: "Noida",
    address: "123 Sector 18, Noida",
    state: "Uttar Pradesh 201301",
  },
  {
    city: "Bangalore",
    address: "456 Koramangala",
    state: "Karnataka 560034",
  },
  {
    city: "Pune",
    address: "789 Baner Road",
    state: "Maharashtra 411045",
  },
  {
    city: "Patna",
    address: "321 Fraser Road",
    state: "Bihar 800001",
  },
]

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    values: ["8750168282", "9311992607", "9899550217"],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    values: ["sales.pnadsolutions@gmail.com"],
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Shapes */}
      <section className="relative bg-[#5648C8] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg opacity-90 mb-8">
              Get in touch with our team for any inquiries or collaboration opportunities
            </p>
          </motion.div>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-1/4 w-8 h-8 border-2 border-orange-400 transform rotate-45"
            animate={{ rotate: 405 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-1/4 w-6 h-6 bg-green-400"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-orange-400 border-r-[12px] border-r-transparent"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* Contact Form and Information Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Let's Get In Touch</h2>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 md:p-8 rounded-lg shadow-sm"
              >
                <ContactForm />
              </motion.div>
            </div>

            {/* Right Column - Need More Help */}
            <div>
              <div className="bg-gray-50 p-6 md:p-12 rounded-lg">
                <h2 className="text-3xl font-bold mb-6">Need More Help?</h2>
                <p className="text-gray-600 mb-8">Contact us through any of these channels or visit our locations</p>

                {/* Contact Information */}
                <div className="space-y-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="text-[#5648C8] mt-1">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold mb-2">{info.label}</h3>
                        {info.values.map((value, idx) => (
                          <p key={idx} className="text-gray-600">
                            {value}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Locations */}
                <div className="space-y-6">
                  <h3 className="text-xl font-bold">Our Locations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {locations.map((location, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-4 rounded-lg shadow-sm"
                      >
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-[#5648C8] mt-1" />
                          <div>
                            <h3 className="font-semibold mb-1">{location.city}</h3>
                            <p className="text-gray-600 text-sm">{location.address}</p>
                            <p className="text-gray-600 text-sm">{location.state}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Shapes */}
                <div className="relative h-32 mt-12 hidden md:block">
                  <motion.div
                    className="absolute bottom-0 right-0 w-8 h-8 border-2 border-green-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute bottom-12 right-12 w-0 h-0 border-l-[8px] border-l-transparent border-b-[16px] border-b-[#5648C8] border-r-[8px] border-r-transparent"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

