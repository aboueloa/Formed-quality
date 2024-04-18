import React from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    href: "#formation",
    image: "/images/f555.webp",
    title: "Formation",
    description : (
      <ul className='list-disc pl-2'>
          <li>Radioprotection des travailleurs en imagerie médicale.</li>  
          <li>Radioprotection des travailleurs en Radiothérapie.</li>
      </ul>
    ),
  },
  {
    href: "#equipements",
    image: "/images/f77.jpeg",
    title: "Equipements biomédicaux",
    description : (
      <ul className='list-disc pl-2'>
          <li>Commercialisation des accessoires de la radioprotection en Médecine
nucléaire, Radiothérapie, Radiologie.</li>  
          <li>Commercialisation des dispositifs biomédicaux.</li>
      </ul>
    ),
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
              <div key={index}>
                <ServiceCard imageUrl={service.image} title={service.title} href={service.href} description={service.description} />
              </div>
            ))
          }
          
        </div>
        
    </>
  )
}

export default ServiceSection