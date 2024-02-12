import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    href: "#formation",
    image: "/images/f555.webp",
    title: "Formation",
  },
  {
    href: "#equipements",
    image: "/images/f77.jpeg",
    title: "Equipements biomédicaux",
  }
]

const ServiceSection = () => {
  return (
    <>
        <h2 id = "services" className="text-center text-4xl font-bold text-white mt-4 mb-4">
            Nos services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {
            services.map((service, index) => (
              <ServiceCard imageUrl={service.image} title={service.title} href={service.href} />
            ))
          }
          
        </div>
        
    </>
  )
}

export default ServiceSection