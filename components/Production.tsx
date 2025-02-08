"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Printer, PenTool as Tool, Lightbulb, Users, Cog, Ruler, Scissors, PenTool } from "lucide-react";

const facilities = [
  {
    title: "Research & Development",
    icon: <Lightbulb className="w-12 h-12" />,
    description: "State-of-the-art research facility for innovative design solutions",
    capabilities: [
      "Design Prototyping",
      "Material Research",
      "Innovation Lab"
    ]
  },
  {
    title: "Wooden Workshop",
    icon: <Tool className="w-12 h-12" />,
    description: "Fully equipped workshop for premium wooden fabrication",
    capabilities: [
      "Custom Furniture",
      "Display Units",
      "Retail Fixtures"
    ]
  },
  {
    title: "Printing Workshop",
    icon: <Printer className="w-12 h-12" />,
    description: "Advanced printing facility with latest technology",
    capabilities: [
      "Large Format Printing",
      "Digital Printing",
      "Screen Printing"
    ]
  },
  {
    title: "Fabrication Team",
    icon: <Users className="w-12 h-12" />,
    description: "Expert team for precision fabrication and execution",
    capabilities: [
      "Metal Fabrication",
      "Installation",
      "Quality Control"
    ]
  }
];

const equipment = [
  {
    name: "HP Latex Printer",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80",
    specs: "High-quality eco-friendly printing"
  },
  {
    name: "Solvent Machines",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    specs: "Professional solvent-based printing"
  },
  {
    name: "Plotter Cutters",
    image: "https://images.unsplash.com/photo-1531664037210-e0ac2c81f864?auto=format&fit=crop&q=80",
    specs: "Precision cutting for various materials"
  },
  {
    name: "Eco Solvent Machines",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
    specs: "Environmentally friendly printing solutions"
  }
];

const features = [
  { icon: <Cog className="w-6 h-6" />, title: "Advanced Machinery" },
  { icon: <Ruler className="w-6 h-6" />, title: "Precision Work" },
  { icon: <Scissors className="w-6 h-6" />, title: "Custom Solutions" },
  { icon: <PenTool className="w-6 h-6" />, title: "Expert Craftsmanship" }
];

export default function ProductionComponent() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Production & Capabilities</h1>
            <p className="text-lg opacity-90 mb-8">
              State-of-the-art facilities and expert teams delivering excellence in every project
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

      {/* features */}
    
        <section className="py-8">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
                  >
                    <div className="text-purple-600">{feature.icon}</div>
                    <div className="font-medium">{feature.title}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
    
      {/* Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <div className="text-purple-600 mb-4">{facility.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                  <p className="text-gray-600 mb-4">{facility.description}</p>
                  <ul className="space-y-2">
                    {facility.capabilities.map((capability, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {equipment.map((item, index) => (
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
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600">{item.specs}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}