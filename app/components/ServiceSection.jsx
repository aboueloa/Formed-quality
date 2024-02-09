import React from 'react'
import ServiceCard from './ServiceCard'

const ServiceSection = () => {
    const projectsData = [
        {
          id: 1,
          title: "Formation",
          description: "Project 1 description",
          image: "/images/D12.png",
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 2,
          title: "Equipements Biomédicaux",
          description: "Project 2 description",
          image: "/images/D22.png",
          gitUrl: "/",
          previewUrl: "/",
        },
        {
          id: 3,
          title: "Contrôle qualité",
          description: "Project 3 description",
          image: "/images/D23.png",
          gitUrl: "/",
          previewUrl: "/",
        },
      ];
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4">
            Nos services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            
        </div>
    </>
  )
}

export default ServiceSection