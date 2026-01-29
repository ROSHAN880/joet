import React from 'react'

const Terms = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-10'>
      <h1
        className="mb-6 tracking-[2px]"
        style={{
          fontFamily: "Times New Roman",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        Terms & Conditions
      </h1>
      <p className="text-[#065F46] mb-4 ml-3" style={{fontFamily: "Times New Roman, Times, serif", fontWeight: "bold", fontSize: "32px"}}>
      By accessing or using our website and services, you agree to the following terms:
      </p>
      <p className='text-gray-700 ml-10 mb-7'>
      <li>Authors are responsible for the originality and accuracy of submitted manuscripts.</li>
      <li>Submission or payment does not guarantee acceptance or publication.</li>
      <li>Editorial decisions are final and based on peer review outcomes.</li>
      <li>All services are delivered digitally. No physical goods are sold or shipped.</li>
      <li>Misuse of the platform, plagiarism, or unethical practices may result in rejection without refund.</li>
      <li>These terms are subject to change without prior notice.</li>
      </p>

      <p className="text-[#065F46] mb-4 ml-3" style={{fontFamily: "Times New Roman, Times, serif", fontWeight: "bold", fontSize: "32px"}}>
      Governing Law & Jurisdiction
      </p>
      <p className='ml-10'>These terms shall be governed by the laws of India.</p>
      <p className='ml-10 mb-7'>All disputes shall be subject to the jurisdiction of courts in Andhra Pradesh, India.</p>

      <p className="text-[#065F46] mb-2 ml-10" style={{fontFamily: "Times New Roman, Times, serif", fontWeight: "bold", fontSize: "20px"}}>
      Grievance Redressal
      </p>
      <p className='ml-10 mb-2'>In accordance with applicable regulations, the grievance details are provided below:</p>

      <p className='ml-10 font-bold'>Grievance Officer / Proprietor: <span className='font-bold text-[#065F46]'>  Journal of Engineering Technology</span></p>

      <p className='ml-10 font-bold mb-2'>Email:<span className='text-[#065F46]'>  joetwork628@gmail.com</span></p>

      <p className='ml-10'>All grievances will be addressed within a reasonable time.</p>
    </div>
  )
}

export default Terms
