"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Building2, Users, Trophy, ArrowRight } from "lucide-react";

const projects = [
  {
    category: "Retail Branding",
    title: "Mahindra M Shoppe",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    description: "Complete retail branding and store design for Mahindra's flagship automotive showroom.",
    results: ["40% increase in footfall", "Enhanced brand visibility", "Improved customer experience"],
    tags: ["Retail Design", "Branding", "Visual Merchandising"]
  },
  {
    category: "Retail Branding",
    title: "Mahindra GSB",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&q=80",
    description: "Strategic retail branding implementation for Mahindra's Global Solution Business.",
    results: ["50% boost in customer engagement", "Modernized retail space", "Streamlined customer journey"],
    tags: ["Corporate Branding", "Store Design", "Customer Experience"]
  },
  {
    category: "Retail Branding",
    title: "Believe Cosmetics",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80",
    description: "End-to-end retail design and branding for premium cosmetics chain.",
    results: ["60% sales growth", "Enhanced brand perception", "Improved product display"],
    tags: ["Retail Design", "Visual Merchandising", "Brand Identity"]
  },
  {
    category: "Retail Branding",
    title: "Dell Exclusive Store",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    description: "Interior and exterior design for Dell's exclusive retail stores.",
    results: ["35% increase in store traffic", "Modern tech-focused ambiance", "Optimized product showcase"],
    tags: ["Store Design", "Tech Retail", "Brand Implementation"]
  },
  {
    category: "Retail Branding",
    title: "Castrol Car Care Center",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80",
    description: "Comprehensive branding and design for automotive care centers.",
    results: ["45% boost in service bookings", "Enhanced professional image", "Improved customer trust"],
    tags: ["Automotive Retail", "Service Center Design", "Brand Identity"]
  },
  {
    category: "Experiential Marketing",
    title: "Samsung Note 9 Launch",
    image: "https://images.unsplash.com/photo-1492044715545-15ddedd84e5e?auto=format&fit=crop&q=80",
    description: "Grand product launch event with immersive technology experiences.",
    results: ["2000+ attendees", "Extensive media coverage", "Successful product introduction"],
    tags: ["Event Management", "Product Launch", "Brand Experience"]
  },
  {
    category: "Experiential Marketing",
    title: "Fashion Show for Titan Zoop",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80",
    description: "Creative fashion show concept and execution for kids' watch brand.",
    results: ["300+ participants", "Strong social media presence", "Enhanced brand awareness"],
    tags: ["Fashion Event", "Brand Activation", "Youth Marketing"]
  },
  {
    category: "Experiential Marketing",
    title: "Reliance Vision Express Launch",
    image: "https://images.unsplash.com/photo-1577744168855-0391d2ed2b4e?auto=format&fit=crop&q=80",
    description: "Strategic store launch event with interactive customer experiences.",
    results: ["500+ opening day visitors", "Successful brand introduction", "Strong market positioning"],
    tags: ["Store Launch", "Event Planning", "Brand Activation"]
  }
];

const stats = [
  { icon: <Trophy className="w-6 h-6" />, value: "150+", label: "Successful Projects" },
  { icon: <Building2 className="w-6 h-6" />, value: "50+", label: "Major Brands" },
  { icon: <Users className="w-6 h-6" />, value: "1M+", label: "Customer Reach" }
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      {/* <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg text-gray-600 mb-8">
              Showcasing transformative projects that have helped our clients achieve their business objectives
            </p>
          </motion.div>
        </div>
      </section> */}

      <section className="relative bg-[#5648C8] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-lg opacity-90 mb-8">
              Showcasing transformative projects that have helped our clients achieve their business objectives
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


      {/* Stats Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center space-x-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="text-purple-600">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all">
                  <div className="relative h-48">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-4" variant="secondary">{project.category}</Badge>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Results:</h4>
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <ArrowRight className="w-4 h-4 text-purple-600 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Our team is ready to help bring your vision to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
          >
            Contact Us Today
          </motion.button>
        </div>
      </section>
    </main>
  );
}