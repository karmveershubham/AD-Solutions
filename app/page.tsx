"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Gift, Layout, Package, Palette, Users, ThumbsUp, Shield, Users2, Trophy, Star } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ProductSlider from "@/components/product/product-slider";
import ServicesPageComponent from "@/components/services";
import FAQComponent from "@/components/faq";
import ProductionComponent from "@/components/Production";

export default function Home() {
  const services = [
    { icon: <Palette className="w-8 h-8" />, title: "Design", description: "Creative design solutions that make your brand stand out" },
    { icon: <Layout className="w-8 h-8" />, title: "Visual Merchandising", description: "Strategic display solutions to enhance product visibility" },
    { icon: <Building2 className="w-8 h-8" />, title: "Retail Branding", description: "Comprehensive retail branding strategies" },
    { icon: <Package className="w-8 h-8" />, title: "Turnkey Jobs", description: "End-to-end project management solutions" },
    { icon: <Users className="w-8 h-8" />, title: "Events", description: "Memorable event planning and execution" },
    { icon: <Gift className="w-8 h-8" />, title: "Corporate Gifting", description: "Unique corporate gifting solutions" }
  ];

  const features = [
    { icon: <ThumbsUp className="w-6 h-6" />, title: "Best Quality", description: "Premium quality in every project" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure Process", description: "Trusted and reliable workflow" },
    { icon: <Users2 className="w-6 h-6" />, title: "Professional Team", description: "Expert creative professionals" },
    { icon: <Trophy className="w-6 h-6" />, title: "Competitive Pricing", description: "Value for your investment" }
  ];

  const testimonials = [
    {
      name: "Mahindra Group",
      role: "Automotive Industry",
      content: "PN AD SOLUTION has transformed our retail presence with their innovative visual merchandising solutions.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
    },
    {
      name: "Dell Technologies",
      role: "Technology Sector",
      content: "Their corporate gifting ideas were unique and perfectly aligned with our brand values.",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80"
    },
    {
      name: "Taj Hotels",
      role: "Hospitality Industry",
      content: "Exceptional event management services that exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
    }
  ];

  const projects = [
    {
      title: "Retail Store Design",
      client: "Fashion Brand",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
    },
    {
      title: "Corporate Event",
      client: "Tech Company",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80"
    },
    {
      title: "Brand Identity",
      client: "Startup",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 jusyify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-purple-900 font-extrabold mb-4 text-2xl ">PN AD SOLUTION</h1>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Creative Design And Branding Agency</h1>
              <p className="text-gray-600 text-lg">Complete Outdoor & Indoor Display Advertising & Corporate Gifting Solutions.</p>
              <p className="text-gray-600 text-lg mb-8">End-to-end branding solutions for maximum visibility and impact.</p>

              <div className="flex space-x-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">Enquiry Now</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
            <ProductSlider/>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Features */}
       <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-4"
              >
                <div className="text-purple-600">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <ServicesPageComponent/>
      

      {/* client Section */}
    

      {/* production */}
      <ProductionComponent/>

      {/* FAQS section */}
      <FAQComponent/>

      {/* Stats Section */}
      <section className="py-16 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">22+</div>
              <div className="text-purple-200">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">142+</div>
              <div className="text-purple-200">Completed Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">362+</div>
              <div className="text-purple-200">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-purple-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for the latest creative insights</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">Subscribe</Button>
          </div>
        </div>
      </section>
     
    </main>
  );
}
