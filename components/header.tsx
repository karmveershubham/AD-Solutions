import React from 'react'
import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import { Button } from './ui/button'
function headerComponent() {
  return (
     <header className="fixed top-0 left-0 right-0 bg-white z-50 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="PN AD SOLUTION" className="w-1/3  rounded-full" />
            {/* <span className="text-xl font-bold">PN AD SOLUTION</span> */}
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-purple-600">Home</a>
            <a href="/about-us" className="text-gray-600 hover:text-purple-600">About Us</a>
            <a href="/services" className="text-gray-600 hover:text-purple-600">Our Services</a>
            <a href="/work" className="text-gray-600 hover:text-purple-600">Our Work</a>
            <a href="/clients" className="text-gray-600 hover:text-purple-600">Our Clients</a>
            <a href="/contact" className="text-gray-600 hover:text-purple-600">Contact Us</a>
          </nav>
          <Button className="bg-purple-600 hover:bg-purple-700">Enquiry Now</Button>
        </div>
      </header>
  )
}

export default headerComponent;