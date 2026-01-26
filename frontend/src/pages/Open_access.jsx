import React from 'react'

const Open_access = () => {
  return (
    <div className='w-full'>
      {/* Hero Content */}
      <div className='max-w-7xl mx-auto px-4 lg:px-6 py-12'>
        {/* Title */}
        <h1 className='text-4xl font-semibold mb-6' style={{fontFamily: '"Times New Roman, Times, serif'}}>
            Open Access
        </h1>
        {/* Paragraph */}
        <div className='space-y-6 text-gray-600 leading-relaxed text-sm md:text-base'>
            <p>
            Open access (also known as open-access publishing and free online
            scholarship) is an ongoing publication practice which differs in the
            way traditional methods of publishing papers to the public get
            submitted, reviewed, authenticated and finally published. It
            proposes a new business model for academic publishing that enables
            immediate, worldwide, barrier-free, open access to the full text of
            research articles for the best interests of the scientific
            community.
            </p>
            <p>
            In Open Access publication model neither readers nor a reader’s
            institution are charged for access to articles or other resources.
            Users are free to read, download, copy, distribute, print, search,
            or link to the full texts of these articles without requiring a
            subscription to the journal in which these articles are published. 
            </p>
            <p>
            In this Open Access model, the publication cost should be covered by
            the author’s institution or research funds. These Open Access
            charges replace subscription charges and allow the publishers to
            give the published material away for free to all interested online
            visitors.
            </p>
        </div>
        {/* STATS CARD */}
        <div className='mt-16'>
            <div className='bg-[#EAF3F0] rounded-3xl border border-[#B2CDC6] h-[250px] px-6 py-6 w-full'>
                <div className='max-w-4xl mx-auto'>

                    <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-6 pt-15 '>
                    {/* Card 1 */}
                        <div>
                           <h2 className='text-4xl font-bold text-[#065F46]' style={{ fontFamily: '"Times New Roman, Times, serif'}}>1k+</h2>
                          <p className='text-[#3E836F] font-medium mt-1'> 
                            Institutions
                        </p>
                        </div>
                       {/* Card 2 */}
                        <div>
                          <h2 className='text-4xl font-bold text-[#065F46]' style={{ fontFamily: '"Times New Roman, Times, serif'}}>7M+</h2>
                          <p className='text-[#3E836F] font-medium mt-1'>
                            Users
                          </p>
                        </div>
                        <div>
                          <h2 className='text-4xl font-bold text-[#065F46]'>95%</h2>
                          <p className='text-[#3E836F] font-medium mt-1'>
                            Reproducibility Rate
                          </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Open_access
