"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ServiceCard = ({imageUrl, title, href}) => {
  return (
    <div>
        <div className ="h-80 md:h-xl rounded-t-xl relative group">
                <Link href={href}>
                  <Image 
                      src={imageUrl}
                      layout='fill'
                      objectFit='contain'
                  />
                </Link>
            <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
            </div>
         </div>
         <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
         </div>
    </div>
  )
}

export default ServiceCard