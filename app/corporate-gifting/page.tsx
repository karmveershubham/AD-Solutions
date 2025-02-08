"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Printer, Package, Award, Clock, Coffee } from "lucide-react";

const products = [
  {
    category: "Corporate Gifts",
    items: [
      {
        title: "Premium Laptop Bags",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80",
        description: "Professional laptop bags with customizable branding options"
      },
      {
        title: "Custom Trophies & Awards",
        image: "https://images.unsplash.com/photo-1564974288343-7cce73c4b71a?auto=format&fit=crop&q=80",
        description: "Elegant trophies and awards for corporate recognition"
      },
      {
        title: "Travel Accessories",
        image: "https://images.unsplash.com/photo-1553531580-a000ac8df244?auto=format&fit=crop&q=80",
        description: "High-quality travel bags and accessories with company branding"
      },
      {
        title: "Designer Wall Clocks",
        image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&q=80",
        description: "Modern wall clocks with customizable designs"
      }
    ]
  },
  {
    category: "Printing Solutions",
    items: [
      {
        title: "Custom T-Shirts",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80",
        description: "High-quality printed t-shirts for events and promotions"
      },
      {
        title: "Business Cards",
        image: "https://images.unsplash.com/photo-1544168190-79c17527004f?auto=format&fit=crop&q=80",
        description: "Professional business cards with premium finishes"
      },
      {
        title: "Branded Lanyards",
        image: "https://images.unsplash.com/photo-1586105449897-20b5efeb3233?auto=format&fit=crop&q=80",
        description: "Custom lanyards for corporate events and staff"
      },
      {
        title: "Promotional Mugs",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80",
        description: "Customized mugs with company logos and designs"
      }
    ]
  }
];

const features = [
  { icon: <Gift className="w-6 h-6" />, title: "Custom Designs" },
  { icon: <Printer className="w-6 h-6" />, title: "Quality Printing" },
  { icon: <Package className="w-6 h-6" />, title: "Bulk Orders" },
  { icon: <Award className="w-6 h-6" />, title: "Premium Quality" },
  { icon: <Clock className="w-6 h-6" />, title: "Quick Delivery" },
  { icon: <Coffee className="w-6 h-6" />, title: "Personal Service" }
];

export default function CorporateGiftingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}      
      <section className="relative bg-[#5648C8] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Corporate Gifting Solutions</h1>
            <p className="text-lg opacity-90 mb-8">
             Premium corporate gifts and printing solutions to strengthen your business relationships
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

      {/* Products Grid */}
      {products.map((section, sectionIndex) => (
        <section key={sectionIndex} className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="relative h-48">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}