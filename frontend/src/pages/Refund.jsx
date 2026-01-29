import React from 'react'

const Refund = () => {
  return (
    <div className='max-w-6xl mx-auto px-6 py-10'>
        <h1
        className="mb-6 tracking-[2px] text-gray-700"
        style={{
          fontFamily: "Times New Roman",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        Refund & Cancellation Policy
      </h1>
      <p className="text-gray-700 mb-4">
      Journal of Engineering Technology provides digital academic publishing and editorial services.
      </p>

      <p className="text-gray-700 mb-4">
       All payments collected are for:
       <li className='ml-5'>Article Processing Charges (APC)</li>
       <li className='ml-5'>Editorial and publication services</li>
       <li className='ml-5'>Online journal access</li>
      </p>

      <p className='text-[#065F46]' style={{fontFamily: "'Times New Roman, Times, serif", fontWeight: "bold", fontSize: "32px"}}>
      Refund Policy
      </p>


      <p className="text-gray-700 mb-4">
      Once manuscript processing, peer review, or editorial work has commenced, refunds are not applicable.
      If a duplicate or excess payment is made, the excess amount will be refunded after verification.
      If a payment is made but no service has been initiated, refund requests may be considered on a case-by-case basis.
      </p>

      <p className='text-[#065F46]' style={{fontFamily: "'Times New Roman, Times, serif", fontWeight: "bold", fontSize: "32px"}}>
      Cancellation Policy
      </p>

      <p className="text-gray-700 mb-4">
      Authors may request cancellation before editorial processing begins.
      </p>

      <p className="text-gray-700 mb-4">
      No cancellations are permitted once the review or publication process has started.
      </p>

      <p className="text-gray-700 mb-4">
      All approved refunds will be processed back to the original payment method within a reasonable timeframe as per payment gateway policies.
      </p>

      <p className="text-gray-700 mb-4">
      For refund or cancellation queries:
      </p>

      <p className='text-gray-700 mb-4 font-bold'>
        Contact: <span className='text-[#065F46]'> 6281501600</span>
      </p>

      <p className="text-gray-700 mb-4 font-bold">
      Email: <span className='text-[#065F46]'> joetwork628@gmail.com</span>
      </p>
      
    </div>
  )
}

export default Refund
