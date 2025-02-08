"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Users2, Briefcase, ChartBar } from "lucide-react";

const departments = [
  {
    name: "Marketing",
    roles: [
      { title: "Marketing Manager", description: "Leads marketing strategy and campaigns" }
    ]
  },
  {
    name: "Creative",
    roles: [
      { title: "Creative Director", description: "Oversees creative direction and design" },
      { title: "Visualizer", description: "Creates visual concepts and designs" }
    ]
  },
  {
    name: "Operations",
    roles: [
      { title: "Client Servicing Manager", description: "Manages client relationships" },
      { title: "Operations Manager", description: "Oversees project execution" }
    ]
  }
];

const teamHighlights = [
  {
    icon: <Users2 className="w-12 h-12" />,
    title: "60+ Professionals",
    description: "Tech-savvy thinkers with extensive experience"
  },
  {
    icon: <Briefcase className="w-12 h-12" />,
    title: "Diverse Expertise",
    description: "Specialists in retail, marketing, and design"
  },
  {
    icon: <ChartBar className="w-12 h-12" />,
    title: "Strategic Planning",
    description: "Research-driven approach to solutions"
  }
];

export default function TeamComponent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-3xl md:text-3xl font-bold mb-6">Our Team</p>
          </motion.div>
        </div>

      {/* Team Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all">
                  <div className="text-purple-600 mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Organization Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <h3 className="text-xl font-semibold mb-4">{dept.name}</h3>
                  <div className="space-y-4">
                    {dept.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="border-l-2 border-purple-600 pl-4">
                        <h4 className="font-semibold">{role.title}</h4>
                        <p className="text-gray-600 text-sm">{role.description}</p>
                      </div>
                    ))}
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