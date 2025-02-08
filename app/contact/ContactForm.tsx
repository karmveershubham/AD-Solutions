"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name*
          </label>
          <Input id="firstName" placeholder="Enter your first name" className="w-full border-gray-300" required />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name*
          </label>
          <Input id="lastName" placeholder="Enter your last name" className="w-full border-gray-300" required />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Your Phone*
          </label>
          <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="w-full border-gray-300" required />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Your Email*
          </label>
          <Input
            id="email"
            type="email"
            placeholder="youremail@domain.com"
            className="w-full border-gray-300"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message*
        </label>
        <Textarea id="message" placeholder="Enter message" className="w-full border-gray-300 min-h-[360px]" required />
      </div>

      <Button type="submit" className="w-full h-96 sm:w-auto bg-[#FF8C4B] hover:bg-[#ff7c33] text-white px-8 py-2 rounded">
        Send Message
      </Button>
    </form>
  )
}

