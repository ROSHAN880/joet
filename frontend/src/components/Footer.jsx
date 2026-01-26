import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div className='bg-[#E6EFED] py-12 border border-2xl border-gray-200'>
      <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12'>

        {/* Left Section */}
        <div className='space-y-4 w-full text-left'>
          <div className='flex items-center gap-3'>
            <img src={logo} alt="logo" className="w-10 h-10" />
            <h2 className='text-lg font-semibold text-gray-800'>
              JOURNAL OF ENGINEERING AND TECHNOLOGY
            </h2>
          </div>
          <p className='text-sm leading-relaxed text-gray-600'>
            A monthly international publication fostering innovation in
            mechanical systems, analysis, and technology ethics.
          </p>
        </div>

        {/* Quick Links */}
        <div className='max-w-[200px] mx-auto text-left'>
          <h3 className="text-md font-semibold mb-4 text-gray-800">Quick Links</h3>
          <ul className='space-y-3 text-sm text-gray-600'>
            <li><Link to="/call-for-papers" className='hover:text-[#054c38] transition'>Call For Papers</Link></li>
            <li><Link to="/editorial" className='hover:text-[#054c38] transition'>Editorial Board</Link></li>
            <li><Link to="/publication-charges" className='hover:text-[#054c38 ] transition'>Publication Charges</Link></li>
            <li><Link to="/contact" className='hover:text-[#054c38] transition'>Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className='max-w-[200px] mx-auto text-left'>
          <h3 className="text-md font-semibold mb-4 text-gray-800">Legal</h3>
          <ul className='space-y-3 text-sm text-gray-600'>
            <li><Link to="/publications" className='hover:text-green-600 transition'>Privacy Policy</Link></li>
            {/* <li><Link to="" className='hover:text-green-600 transition'>Ethics Statement</Link></li>
            <li><Link to="/publications" className='hover:text-green-600 transition'>Terms of Service</Link></li> */}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-10 pt-6'>
        <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600'>
          <p>© 2025 Journal of Engineering and Technology. All Rights Reserved.</p>
          <p className='mt-2 md:mt-0'>
            Powered by Peer Review • Indexed by Scopus
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
