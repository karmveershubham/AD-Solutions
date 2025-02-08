"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "What services does PN AD SOLUTION offer?",
    answer: "We offer comprehensive advertising solutions including design & concept, visual merchandising, retail branding activation, turnkey jobs, events & exhibitions, and corporate gifting. Our services span across PAN India with expertise in both outdoor and indoor display advertising."
  },
  {
    question: "What areas do you cover for retail branding?",
    answer: "We handle retail branding for various sectors including automotive (Mahindra M Shoppe, Castrol), electronics (Dell, Vivo), fashion (Believe Cosmetics, Blackberrys), and more. Our services include store design, visual merchandising, and brand implementation."
  },
  {
    question: "What types of corporate gifts do you offer?",
    answer: "Our corporate gifting solutions include laptop bags, carry and travel bags, trophies, customized wall and table clocks, clip-on frames, LED clip-on frames, badges, and various promotional items."
  },
  {
    question: "What printing services do you provide?",
    answer: "We offer comprehensive printing services including T-shirt printing, diary printing, lanyard printing, business card printing, cap printing, pen printing, trophy printing, mug printing, pen holder printing, and roll-up standee printing."
  },
  {
    question: "What production capabilities do you have?",
    answer: "Our production facilities include research and development, wooden workshop, printing workshop, and fabrication team. We use advanced machinery like lamination auto machines, HP latex printing machines, solvent machines, plotter cutters, and eco-solvent machines."
  },
  {
    question: "Where are you located?",
    answer: "We are headquartered in Delhi with a PAN India presence through our associate network across India. This allows us to serve clients nationwide with consistent quality and local support."
  }
];

export default function FAQComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">

      <section className="relative bg-purple-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg opacity-90 mb-8">
               Find answers to common questions about our services and capabilities.
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-purple-600" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="p-6 pt-0">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}