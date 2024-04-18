"use client"
import Image from 'next/image'
import React, { useTransition, useState} from 'react'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Nos atouts",
        id: "nosAtouts",
        content: (
            <ul className='list-disc pl-2'>
                
            </ul>
        ),
    },
    {
        title: "Notre organisation",
        id: "NotreOrganisation",
        content: (
            <ul className='list-disc pl-2'>
                
            </ul>
        ),
    },
    {
        title: "Notre histoire",
        id: "notreHistoire",
        content: (
            <ul className='list-disc pl-2'>
                
            </ul>
        ),
    }
]

const AboutSection = () => {
  const [tab, setTab] = useState("Nos atouts");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
        setTab(id);
    })
  }
  return (
    <section id = "about" className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    src="/images/about_us.png"
                    width={500}
                    height={500}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">À propos de nous</h2>
                    <p className="text-base lg:text-lg">
                    FORMED QUALITY est une société spécialiste en consulting relatif à la mise en
                    conformité des locaux pour l’installation des équipements de Radiologie,
                    Radiothérapie et Médecine Nucléaire.
                    </p>
                    <div className="flex flex-row justify-start mt-8">
                        <TabButton selectTab ={() => handleTabChange("Nos atouts")} active = {tab === "Nos atouts"}>
                            {" "}
                            Nos atouts{" "}    
                        </TabButton>
                        <TabButton selectTab ={() => handleTabChange("Notre organisation")} active = {tab === "Notre organisation"}>
                            {" "}
                            Notre organisation{" "}    
                        </TabButton>
                        <TabButton selectTab ={() => handleTabChange("Notre histoire")} active = {tab === "Notre histoire"}>
                            {" "}
                            Notre histoire{" "}    
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.title === tab).content}
                    </div>
                </div>
            </div>
    </section>
  )
}

export default AboutSection