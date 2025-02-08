import { motion } from "framer-motion";
import { 
  Palette, 
  Layout, 
  Building2, 
  Package, 
  Users, 
  Gift,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <Palette className="w-12 h-12" />,
    title: "Design & Concept",
    description: "Creative design solutions that bring your vision to life. From brand identity to marketing materials, we craft designs that make lasting impressions.",
    features: ["Brand Identity", "Marketing Collateral", "Digital Design", "Print Design"],
    link:"/corporate-gifting"
  },
  {
    icon: <Layout className="w-12 h-12" />,
    title: "Visual Merchandising",
    description: "Strategic display solutions that enhance product visibility and drive customer engagement in retail spaces.",
    features: ["Store Layout Design", "Window Displays", "Product Presentation", "Visual Strategy"],
    link:"/corporate-gifting"
  },
  {
    icon: <Building2 className="w-12 h-12" />,
    title: "Retail Branding Activation",
    description: "Comprehensive retail branding strategies that create immersive shopping experiences and strengthen brand presence.",
    features: ["Brand Implementation", "Retail Design", "Customer Experience", "Brand Activation"],
    link:"/corporate-gifting"
  },
  {
    icon: <Package className="w-12 h-12" />,
    title: "Turnkey Jobs",
    description: "End-to-end project management solutions that handle every aspect of your retail or corporate space transformation.",
    features: ["Project Management", "Space Planning", "Implementation", "Quality Control"],
    link:"/corporate-gifting"
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Events & Exhibitions",
    description: "Memorable event planning and execution services that bring your brand to life through immersive experiences.",
    features: ["Exhibition Design", "Event Planning", "Brand Experiences", "Trade Shows"],
    link:"/corporate-gifting"
  },
  {
    icon: <Gift className="w-12 h-12" />,
    title: "Corporate Gifting",
    description: "Unique corporate gifting solutions that strengthen business relationships and reflect your brand values.",
    features: ["Custom Gifts", "Branded Merchandise", "Gift Strategy", "Bulk Orders"],
    link:"/corporate-gifting"
  }
];

export default function ServicesPageComponent() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our services</h1>
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
      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-all">
                  <div className="mb-6 text-purple-600">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <ArrowRight className="w-4 h-4 text-purple-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <a href={service.link} className="text-white">Learn More</a>
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-black">Ready to Transform Your Brand?</h2>
            <p className="text-purple-800 mb-8">
              Let's discuss how our services can help achieve your business goals
            </p>
            <Button className=" bg-purple-600  hover:bg-purple-700 border-white">
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}