"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  {
    name: "Livfast",
    logo: "https://images.seeklogo.com/logo-png/40/1/livfast-logo-png_seeklogo-400087.png?v=1957911488826334768",
  },
  {
    name: "Mahindra",
    logo: "https://th.bing.com/th/id/OIP.lErwVXxGi4CKlScVOT7j3AHaDt?rs=1&pid=ImgDetMain",
  },
  {
    name: "Clovia",
    logo: "https://logos-world.net/wp-content/uploads/2022/12/Clovia-Logo-500x281.png",
  },
  {
    name: "Vivo",
    logo: "https://th.bing.com/th/id/OIP.KXSChhmcyVUnwuRsdRdNKgHaB8?rs=1&pid=ImgDetMain",
  },
  {
    name: "Mother Dairy",
    logo: "https://th.bing.com/th/id/OIP.0CUNvmIm6tUm5_gVFa5W1AHaD4?rs=1&pid=ImgDetMain",
  },
  {
    name: "Titan",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/10/titan-company_logo-freelogovectors.net_.png",
  },
  {
    name: "Mobil",
    logo: "https://mahindraspareparts.com/images/brand16.png",
  },
  {
    name: "JSW",
    logo: "https://th.bing.com/th/id/OIP.mF0zyYPddF9TAPHLJbr6pAHaDh?rs=1&pid=ImgDetMain",
  },
  {
    name: "Dell",
    logo: "https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-2010-2016.png",
  },
  {
    name: "Blackberry",
    logo: "https://th.bing.com/th/id/OIP.sJRAhnfG9fysmu4VGUurHgHaEC?rs=1&pid=ImgDetMain",
  },
  {
    name:"Hero Electric",
    logo: "https://th.bing.com/th/id/OIP.Fe4SMAlBnHrbfmb0zw63vwHaE9?rs=1&pid=ImgDetMain"
  },
  {
    name:"TVS",
    logo: "https://static.vecteezy.com/system/resources/previews/020/336/393/original/tvs-logo-tvs-icon-transparent-png-free-vector.jpg"
  }
]

export default function ClientPortfolio() {
  return (
    <div className="min-h-screen">
      <div>
      <section className="relative bg-[#5648C8] text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto relative z-10"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Clients</h1>
            <h1 className="text-1xl md:text-1xl font-bold mb-2">PN AD SOLUTION</h1>
            <p className="text-lg opacity-90 mb-8">
             Some of our Clients who trust us with their brand.
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


        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-center justify-items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="relative w-48 h-28 flex items-center justify-center group"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gray-100 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.2 },
                }}
              />
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                fill
                className="object-fill p-4 group-hover:opacity-80 transition-opacity duration-200"
              />
            </motion.div>

            //  <motion.div
            //     className="relative flex items-center justify-center w-36 h-20 bg-white shadow-md rounded-lg cursor-pointer overflow-hidden"
            //     whileHover="hover"
            //     >
            //     <Image
            //     src={client.logo || "/placeholder.svg"}
            //     alt={`${client.name} logo`}
            //     fill
            //     className="object-fill p-4 group-hover:opacity-80 transition-opacity duration-200"
            //   />
            //     {/* Moving Blue Line */}
            //     <motion.div
            //         className="absolute bottom-0 left-0 w-full h-2 bg-blue-600"
            //         variants={{
            //         hover: { width: "100%" },
            //         initial: { width: "0%" },
            //         }}
            //         initial="initial"
            //         transition={{ duration: 5 }}
            //     />
            // </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

