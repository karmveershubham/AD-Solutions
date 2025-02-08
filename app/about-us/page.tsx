"use client";
import { Users, PenToolIcon } from "lucide-react"
import { ExpertiseCard } from "@/components/expertise-card"
import { CheckCircle, Layout, Target, Tent, Gift, Globe, Star } from "lucide-react"
import { motion } from "framer-motion"
import TeamComponent from "@/components/team";
import Image from "next/image";
import logo from '@/public/assets/logo.png'


export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative bg-[#5648C8] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <h1 className="text-1xl md:text-1xl font-bold mb-2">PN AD SOLUTION</h1>
            <p className="text-lg opacity-90 mb-8">
              A complete Outdoor and Indoor Display Advertising Solutions & Corporate Gifting
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

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          
          {/* Left Side - Image */}
          <div className="md:w-1/2 w-full">
            <Image 
              src={logo}
              alt="PN AD SOLUTION Team" 
              width={600} 
              height={400} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
           <div className="md:w-1/2 w-full md:pl-12 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-500 mb-4">PN AD SOLUTION</h2>
          <p className="text-gray-600 leading-relaxed">
            PN AD SOLUTION  is a leading provider of comprehensive outdoor and indoor advertising solutions, specializing in retail branding, 
            visual merchandising, corporate gifting, and experiential marketing. With a strong base in Delhi and an extensive Pan-India network, 
            we help brands establish a powerful presence through creative, innovative, and impactful advertising strategies.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Backed by a team of 60+ skilled professionals, including marketing strategists, creative designers, and operations experts, 
            we bring years of experience in retail and POS design planning, rural and urban activations, client brand marketing, media planning, 
            and strategic advertising. Our expertise spans across industries, having worked with top brands like Mahindra, Dell, Titan, Castrol, and Mother Dairy.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Whether it's retail branding, corporate gifting, production services, or large-scale event activations, 
            we have the expertise and resources to bring your brand to life in the most innovative way.
          </p>
        </div>
        </div>
      </section>


      {/* Team Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Professional Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Marketing Excellence</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Client brand marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Research & Media Planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Strategic account planning</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Creative Solutions</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Retail and POS design planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Rural and Urban activations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Experiential marketing Innovations</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-primary">Team Strength</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Users className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>60+ tech-savvy thinkers</span>
                </li>
                <li className="flex items-start">
                  <Star className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Enriched professionals with mammoth experience</span>
                </li>
                <li className="flex items-start">
                  <Globe className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Outdoor & Ambient expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TeamComponent/>
    </div>
  )
}

