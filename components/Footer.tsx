'use client'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, Star, Info, Briefcase, FileText, Shield } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 z-49">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* Logo & About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image src={logo} alt="PN AD SOLUTION" className="w-16 h-16 rounded-full" />
              <span className="text-xl font-bold text-white">PN AD SOLUTION</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              <span className="font-bold">PN AD Solutions</span> specializes in comprehensive advertising solutions, 
              focusing on outdoor & indoor advertising, visual merchandising, and corporate gifting. 
              With a strong presence in major Indian cities, we enhance brand visibility & engagement.
            </p>
          </div>

          {/* Our Expertise (Services) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Expertise</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Design & Concept",
                "Visual Merchandising",
                "Retail Branding Activation",
                "Turnkey Job",
                "Events & Exhibitions",
                "Corporate Gifting"
              ].map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Star size={16} className="text-purple-500" /> {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section with Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: "About Us", icon: Info, link: "#" },
                { name: "Our Work", icon: Briefcase, link: "#" },
                { name: "Case Studies", icon: FileText, link: "#" },
                { name: "Privacy Policy", icon: Shield, link: "#" }
              ].map(({ name, icon: Icon, link }, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Icon size={16} className="text-purple-500" />
                  <a href={link} className="hover:text-purple-500">{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-3 text-sm">
              {[
                ["Noida Office", "A-140, Sector-63, Noida - 201301"],
                ["Bangalore Office", "Bannerghatta, Bangalore - 560029"],
                ["Pune Office", "Industrial Estate, Sinhgad Road, Pune - 411041"],
                ["Patna Office", "Exhibition Road, Patna - 800008"]
              ].map(([title, address], index) => (
                <li key={index} className="flex items-start gap-2">
                  <MapPin size={16} className="text-purple-500 mt-1" /> <span><span className="font-semibold">{title}:</span> {address}</span>
                </li>
              ))}
              <li className="flex items-center gap-2 mt-4"><Phone size={16} className="text-purple-500" /> Contact: 8750168282 | 9311992607 | 9899550217</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-purple-500" /> Email: <a href="mailto:sales.pnadsolutions@gmail.com" className="hover:text-purple-500">sales.pnadsolutions@gmail.com</a></li>
            </ul>
          </div>

        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <div className="flex justify-center space-x-6 mb-4">
            {[
              { icon: Facebook, link: "#" },
              { icon: Twitter, link: "#" },
              { icon: Linkedin, link: "#" },
              { icon: Instagram, link: "#" }
            ].map(({ icon: Icon, link }, index) => (
              <a key={index} href={link} className="hover:text-purple-500">
                <Icon size={20} />
              </a>
            ))}
          </div>
          <p>© 2024 PN AD SOLUTION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
