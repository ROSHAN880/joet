import React from 'react'
import contact_joet_logo from '../assets/contact_joet_logo.svg'
import Rectangle from '../assets/Rectangle.png'

const Contact = () => {
  return (
    <div className='w-full'>
      {/* ======== Header Section ======= */}
      <div className='bg-[#065F46] text-white text-center py-16' style={{ fontFamily: '"Times New Roman, Times, serif'}}>
        <div className='inline-block px-4 py-1 mb-4 rounded-full bg-[#D1FAE5] text-[#065F46] text-sm'>
          Trusted by Scholars • Powered by Peer Review • Indexed by Scopus
        </div>
        <h1 className='text-4xl font-semibold mb-3'>Contact Us</h1>
        <p className='max-w-2xl mx-auto text-sm opacity-90'>
        Connect with the editorial office of the journal of Engineering and Technology for inquiries regarding submissions and technical reseaarch.
        </p>
      </div>

      {/* ======= Content Section ======= */}

      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='flex flex-col lg:flex-row gap-12 items-start'>

          {/* ======= Left: Contact Form ======= */}
          <div className='w-full lg:w-1/2 bg-white rounded-2xl shadow-xl p-8'>
          <h2 className='text-2xl font-semibold mb-6'>
            Send a <span className='text-[#065F46]'>Message</span>
          </h2>
          
          <form className='space-y-4'>

            {/* Name & Email in same row */}
             <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label htmlFor="name" className="block mb-1">Full Name *</label>
                  <input
                   type="text"
                   id="name"
                   placeholder="Full Name"
                    className="w-full border rounded-lg px-4 py-2"
                  />
             </div>

            <div>
            <label htmlFor="email" className="block mb-1">Email Address *</label>
            <input
            type="email"
            id="email"
            placeholder="yourmail@gmail.com"
            className="w-full border rounded-lg px-4 py-2"
            />
            </div>
          </div>

          {/* File upload */}
          <div>
           <label htmlFor="file" className="block mb-1">Upload your Document</label>
         <input
          type="file"
          id="file"
         className="w-full border rounded-lg px-4 py-2"
         />
         </div>

           {/* Message */}
         <div>
          <label htmlFor="message" className="block mb-1">Your Message (Optional)</label>
          <textarea
           id="message"
          placeholder="Message"
          rows="4"
          className="w-full border rounded-lg px-4 py-2"
          >
          </textarea>
         </div>

           <button
            className="w-full bg-[#065F46] text-white py-3 rounded-lg font-semibold hover:bg-[#064E3B] transition"
             type="submit"
            >
            SEND
          </button>
        </form>

          </div>

          {/* ====== Right: Image / Journal Card ======= */}

          <div className="w-full lg:w-1/2 flex flex-col gap-2">

  {/* Journal Card Image */}
  <img
    src={Rectangle}
    alt="Journal of Engineering Technology"
    className="w-full h-auto rounded-2xl shadow-xl"
  />

             {/* Editorial Office */}
              <div className="w-full bg-white rounded-2xl shadow-lg p-6">
               <h3 className="text-xl font-semibold mb-4">Editorial Office</h3>

              <div className="flex items-start gap-3 mb-3">
               <span className="text-[#065F46] text-lg">🕒</span>
             <div>
               <p className="font-medium">Hours</p>
              <p className="text-sm text-gray-600">Mon – Fri: 9:00 AM – 5:00 PM</p>
             </div>
             </div> 

            <div className="flex items-start gap-3">
            <span className="text-[#065F46] text-lg">✉️</span>
            <div>
              <p className="font-medium">Email</p>
             <p className="text-sm text-gray-600">editor@vibration-eng.org</p>
           </div>
          </div>
          </div>

          </div>


        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default Contact
