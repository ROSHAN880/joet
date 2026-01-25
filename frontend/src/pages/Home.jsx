import React from 'react'
import Hero from '../assets/Hero.png'
import peer from '../assets/peer.png'
import open from '../assets/open.png'
import author from '../assets/author.png'
import copyright from '../assets/copyright.png'
import paperFormat from '../assets/paperFormat.png'
import useradd from '../assets/useradd.png'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const features = [
    {
      title: "Sringent Peer Review",
      description: "Our Evaluation Process Upholds The Highest Standards Of Scientific Excellence, Ensuring Every Paper Adds Significant Value To The Academic Discourse.",
      icon: peer,
    },
    {
      title: "Open Access Model",
      description: "We Believe In The Democratization Of Knowledge. All Published Research Is Freely Accessible Globally, Fostering Cross-Disciplinary Collaboration.",
      icon: open,
    },
    {
      title: "Author Recognition",
      description: "Individual E-Certificates Are Provided To All Contributing Authors, Formally Acknowledging Their Role In Advancing Engineering Sciences.",
      icon: author,
    }
  ];


  return (
    <div>
      <div className='min-h-screen bg-white flex items-center px-12'>
        {/* ==== Left Section ==== */}
        <div className='w-1/2 text-[#065F46] space-y-6'>
        {/* ISSN Badge */}
        <div className='inline-flex items-center px-4 py-1 rounded-full bg-[#D1FAE5] text-bold'>
        ISSN: 1004-4523 • VOLUME 25 ISSUE 12
        </div>

        {/* Heading */}
        <h1 className='text-5xl font-serif leading-tight text-[#0F172A]'>
          Advancing the{" "}
          <br />
          <span className='italic text-[#065F46]'>Science of</span>
          <br />
          <span className='italic text-[#065F46]'>Engineering</span> &
          <br />
          <span className='text-[#0F172A]'>Technology.</span>
        </h1>
        <p className='text-gray-400 max-w-xl'>
         A premier peer-reviewed journal dedicated to disseminating high-impact
          research in engineering, technology management, and life sciences.
          Trusted by scholars since 2001.
        </p>

        {/* Buttons */}

        <div className='flex gap-4 pt-4'>
          <button
          onClick={()=> navigate('/contact')}
          className='border border-[#065F46] text-[#065F46] hover:bg-[#065F46] hover:text-white transition px-6 py-3 rounded-lg font-medium'>
            Manuscript Submission
          </button>

          <button 
          onClick={()=> navigate('/archives')}
          className='border border-[#065F46] text-[#065F46] hover:bg-[#065F46] hover:text-white transition px-6 py-3 rounded-lg font-medium'>
            Browse Archives
          </button>
        </div>
        </div>

        {/* Right Section */}
        <div className='w-1/2 flex justify-center'>
        <img src={Hero} alt="Journal of Engineering Technology Card" className='max-w-md drop-shadow-2xl' />
        </div>

      </div>
      {/* Aim Section */}
      <div className='border-1 border-[#065F46] bg-[#E6EFED] p-4 rounded-lg ml-10 mr-10'>
        <h1 className='text-4xl font-bold text-[#065F46]' style={{fontFamily: '"Times New Roman, Times, serif'}}>
          Aim and Scope
        </h1>
        <br />
        <p className='text-[#065F46] text-lg md:text-xl leading-relaxed font-small'>
        The Journal of Engineering and Technology aims to provide a
          high-quality, peer-reviewed platform for the publication of original
          research, review articles, and technical papers in the broad fields of
          engineering and technology. The journal seeks to promote the
          advancement of scientific knowledge by encouraging innovative,
          interdisciplinary, and applied research that addresses current
          challenges and emerging trends across engineering disciplines. It
          covers theoretical, experimental, and practical studies in areas
          including, but not limited to, computer science, information
          technology, electrical and electronics engineering, mechanical and
          civil engineering, data science, artificial intelligence, renewable
          energy, smart systems, and related applied sciences. The journal is
          intended to serve researchers, academicians, industry professionals,
          and students by facilitating the dissemination of high-quality
          research and fostering collaboration within the global engineering and
          technology community.
        </p>
      </div>

      <div className='w-full py-16 flex flex-col items-center'>
        <h1 className='text-[#94A3B8] mb-5'>INDEXED AND PARTNERED WITH</h1>
        <p className='mb-20'>
          <span className='bg-[#F3F3F3] text-[#D0D0D0] p-2 m-3 rounded'>SCOPUS</span> <span className='bg-[#F3F3F3] text-[#D0D0D0] p-2 m-3 rounded'>CROSSREF</span>  <span className='bg-[#F3F3F3] text-[#D0D0D0] p-2 m-3 rounded'>GOOGLE SCHOLAR</span>  <span className='bg-[#F3F3F3] text-[#D0D0D0] p-2 m-3 rounded'>ZENODO</span>  <span className='bg-[#F3F3F3] text-[#D0D0D0] p-2 m-3 rounded'>WORLDCAT</span>
        </p>

        <h1 className='text-3xl' style={{ fontFamily: "'Times New Roman, Times, serif"}}>
          Unrivaled Scholarly Excellence
        </h1>
        <p className='mt-8 text-[#475569]'>
          The Journal of Engineering and Technology is committed to the rapid dissemination of high quality research through a transparent and rigorous peer-review process.
        </p>
      </div>

      <div className='w-full bg-white py-12'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4'>
          {features.map((item, index) => (
            <div key={index} className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition'>
              {/* Icon Space */}
              <div className='w-12 h-12 mb-6 flex items-center justify-center rounded-lg bg-gray-100'>
                <img src={item.icon} alt="" className='w-8 h-8 object-contain' />
              </div>

              <h3 className='text-2xl font-semibold text-gray-900'>
                {item.title}
              </h3>

              <p className='text-gray-600 leading-relaxed text-base'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full bg-white text-white py-16 px-6'>
        <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center'>

          {/* Left Cards */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {/* Scopus Index */}
            <div className='bg-white text-gray-700 rounded-2xl flex flex-col items-center justify-center text-center h-48 shadow-2xl'>
              <div className='text-4xl mb-3'>🔍</div>
              <p className='font-semibold tracking-wide'>SCOPUS INDEX</p>
            </div>

            {/* Since 2001 */}
            <div className='bg-[#0F172A] from-slate-900 to-slate-800 rounded-2xl flex flex-col items-start justify-center h-48 px-6 shadow-md'>
              <p className='text-sm uppercase text-gray-300'>Since</p>
              <h2 className='text-4xl mt-1' style={{ fontFamily: "Prata"}}>2001</h2>
            </div>

            {/* Frequency */}
            <div className='bg-[#065F46] rounded-2xl flex flex-col items-start justify-center h-48 px-6 shadow-md sm:col-span-1'>
              <p className="uppercase text-sm text-emerald-200">Frequency</p>
              <h2 className="text-3xl  mt-1" style={{ fontFamily: "Prata"}}>Monthly</h2>
            </div>

            {/* Global Reach */}
            <div className='bg-white text-gray-700 rounded-2xl flex flex-col items-center justify-center text-center shadow-2xl'>
              <div className='text-4xl mb-3 justify-between'>🌍</div>
              <p className='font-semibold tracking-wide'>GLOBAL REACH</p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className='space-y-6'>
            <h1 className='text-3xl lg:text-4xl text-[#0F172A]' style={{ fontFamily: "'Times New Roman, Times, serif"}}> 
              A Trusted Hub For Global Research
            </h1>
            
            <div>
              <h3 className='text-xl font-semibold text-[#1E293B]'>
                Scopus & UGC Approved
              </h3>
              <p className='text-[#64748B]'>
              Verified Coverage From 2001 To 2025 In Major Academic Databases.
              </p>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-[#1E293B]'>
                High Impact Research
              </h3>
              <p className='text-[#64748B]'>
                Focusing On Engineering And Technology, Life Sciences, And Technology Management.
              </p>
            </div>

            <div>
              <h3 className='text-xl font-semibold text-[#1E293B]'>
              Rapid DOI Assignment
              </h3>
              <p className='text-[#64748B]'>
              Every Paper Receives A Unique Digital Object Identifier Via Crossref.
              </p>
            </div>

            <div className='border-l-4 border-emerald-500 pl-4 italic text-[#334155]'>
            "Authors Are Invited To Submit Manuscripts Directly Via Email To{" "}
            <span className="text-emerald-400 font-medium">
            Editor@Joet.Science
            </span>{" "}
            For Priority Review."
            </div>

            <div>
            <p className="font-semibold text-[#1E293B]">Joseph Marsh</p>
            <p className="text-gray-400">Editor-In-Chief</p>
            </div>
          </div>
        </div>

      </div>

      <div className='bg-[#0F172A] flex flex-col items-center'>
        <h1 className='text-white text-4xl pt-20 text-center ' style={{fontFamily: "'Times New Roman, Times, serif"}}>Author Resources & Forms</h1>
        <div className='mt-16 grid grid-cols-3 gap-10 mb-30'>

        {/* Card 1 */}
        <div className='bg-[#333A4A] w-80 h-44 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-700'>
          {/* Icon Placeholder */}
          <div className='w-10 h-10 mb-3'>
            <img src={paperFormat} alt="paperFormat" />
          </div>
          <h2 className='text-white text-xl font-semibold'>
            Paper Format
          </h2>
          <p className='text-gray-400 text-sm '>Doc Template</p>
        </div>
        {/* Card 2 */}
        <div className='bg-[#333A4A] w-80 h-44 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-700'>
          <div className='w-10 h-10 mb-3'>
            <img src={copyright} alt="CopyRight" />
          </div>
          <h2 className='text-white text-xl font-semibold'>
          Copyright Form
          </h2>
          <p className='text-gray-400 text-sm mt-1'>Rights Transfer</p>
        </div>

        {/* Card 3 */}
        <div className='bg-[#333A4A] w-80 h-44 rounded-2xl flex flex-col items-center justify-center shadow-lg border border-gray-700'>
          <div className='w-10 h-10 mb-3'>
            <img src={useradd} alt="" />
          </div>
          <h2 className='text-white text-xl font-semibold'>Registration</h2>
          <p className='text-gray-400 text-sm mt-1'>New Account</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home
