import React from 'react'
import Image from 'next/image'
const ServiceCard = ({imageUrl, title, description}) => {
  return (
    <div>
        <div className ="h-80 md:h-xl rounded-t-xl relative group">
                <Image 
                    src={imageUrl}
                    layout='fill'
                    objectFit='contain'
                />
            <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">

            </div>
         </div>
         <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className="text-[#ADB7BE]">{description}</p>
         </div>
    </div>
  )
}

export default ServiceCard