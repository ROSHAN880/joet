import React from 'react'

const Editorial = () => {

  const members = [
    {
      role: "EDITOR-IN-CHIEF",
      name: "Joseph Marsh",
      institution: "University of Texas",
      country: "USA"
    },
    {
      role: "SENIOR EDITOR",
      name: "Neil Marsh",
      institution: "University of Michigan",
      country: "USA"
    },
    {
      role: "ASSOCIATE EDITOR",
      name: "Karen Martinez",
      institution: "University of Copenhagen",
      country: "The Netherlands"
    },
    {
      role: "EDITORIAL BOARD",
      name: "Giuseppe Melacini",
      institution: "McMaster University",
      country: "Canada"
    },
    {
      role: "EDITORIAL BOARD",
      name: "Alireza mashaghi",
      institution: "Kavli Institute of Nanoscience",
      country: "The Netherlands"
    },
    {
      role: "EDITORIAL BOARD",
      name: "Monalisa Mukherjee",
      institution: "Amity University Uttar Pradesh",
      country: "India"
    }
  ]

  return (
    <div className='w-full bg-white'>
      {/* Header Section */}
      <div className='bg-[#065F46] text-white text-center py-16' style={{ fontFamily: '"Times New Roman, Times, serif'}}>
        <div className='inline-block px-4 py-1 mb-4 rounded-full bg-[#D1FAE5] text-[#065F46] text-sm'>
          Trusted by Scholars • Powered by Peer Review • Indexed by Scopus
        </div>
        <h1 className='text-4xl font-semibold mb-3'>Editorial Board</h1>
        <p className='max-w-2xl mx-auto text-sm opacity-90'>
        Distinguished experts from leading global institutions guiding the future of
          peer-reviewed visual scientific research.
        </p>
      </div>

      {/* Cards Section */}
      <div className='max-w-6xl mx-auto py-14 px-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {members.map((m, i) =>(
          <div key={i} className="bg-emerald-50 border border-[#B2CDC6] rounded-xl text-center py-6 px-4">
            <p className='text-xs tracking-widest font-semibold text-emerald-700 mb-2'>
              {m.role}
            </p>
            <h3 style={{ fontFamily: '"Times New Roman", Times, serif' }} className='text-lg font-semibold'>{m.name}</h3>
            <p className='text-sm mt-2'>{m.institution}</p>
            <p className='text-sm font-medium mt-1'>{m.country}</p>
          </div>
        ))}
      </div>

      {/* FOOTER SECTION */}
      <div className='text-center py-10'>
        <h2 className='text-emerald-900 tracking-widest font-semibold mb-2'>JOET.SCIENCE</h2>
        <p className='text-sm max-w-xl mx-auto text-gray-700'>
        Pioneering The Visual Publication Of Scientific Methodology To Improve
        Reproducibility And Transparency In Research.
        </p>
      </div>
    </div>
  )
}

export default Editorial
