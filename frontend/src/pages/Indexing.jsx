import React from 'react'
import Scopus from '../assets/Scopus.svg'
import GoogleScholar from '../assets/GoogleScholar.svg'
import crossDEfdoi from '../assets/crossDEfdoi.svg'
import CiteFactor from '../assets/CiteFactor.svg'
import archives from '../assets/archives.png'
import Archives from './Archives'
import { useNavigate } from 'react-router-dom'

const Indexing = () => {

  const navigate = useNavigate();
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Page Title */}
        <h1 className="text-3xl font-semibold mb-4" style={{ fontFamily: '"Times New Roman", Times, serif'}}>Indexing Service</h1>
        <p className="text-gray-600 mb-8 max-w-3xl">
          Elevate your research visibility with JOET's advanced metadata engine and
          institutional repository integration. Precision. Speed. Authority.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mb-10">
          <button 
           onClick={()=> navigate('/contact')}
           className="border border-[#065F46] hover:text-[#065F46] hover:bg-white bg-[#065F46] text-white transition px-6 py-3 rounded-lg font-medium">
          <img src="" alt="" />  Manuscript Submission
          </button>
          <button 
          onClick={()=> navigate('/archives')}
           className="border border-[#065F46]  text-[#065F46] hover:bg-[#065F46] hover:text-white transition px-6 py-3 rounded-lg font-medium">
            Browse Archives
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch auto-rows-fr">
          {/* Scopus Card */}
          <div className="border border-[#B2CDC6] rounded-lg p-6 bg-[#E6EFED] flex flex-col h-full">
            <div className="mb-4">
              <img src={Scopus} alt="Scopus Logo" className="h-10 mb-3" />
              <h2 className="font-semibold text-2xl text-[#065F46]" style={{ fontFamily: '"Times New Roman", Times, serif'}}>Scopus</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Scopus is one of the biggest citation databases for peer-reviewed publications,
              papers, and colloquiums that exists in the globe today. Any body who is of repute
              within the academic community seeks to have their research work published in Scopus
              indexed journals and publications because they are trusted and read by millions
              academics, researchers, scholars and other professionals across the world. One of the
              most well-known and prominent Journal For Basic Sciences get to be indexed in Scopus.
            </p>
          </div>

          {/* Google Scholar Card */}
          <div className="border border-[#B2CDC6] rounded-lg p-6 bg-[#E6EFED] flex flex-col h-full">
            <div className="mb-4">
              <img src={GoogleScholar} alt="Google Scholar Logo" className="h-10 mb-3" />
              <h2 className="font-semibold text-2xl text-[#065f46]" style={{ fontFamily: '"Times New Roman", Times, serif'}}>Google Scholar</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Google Scholar provides a simple way to broadly search for scholarly literature. From
              one place, you can search across many disciplines and sources: articles, theses,
              books, abstracts and court opinions, from academic publishers, professional societies,
              online repositories, universities and other web sites. Google Scholar helps you find
              relevant work across the world of scholarly research.
            </p>
          </div>

          {/* Crossref (DOI) Card */}
          <div className="border border-[#B2CDC6] rounded-lg p-6 bg-[#E6EFED] flex flex-col h-full">
            <div className="mb-4">
              <img src={crossDEfdoi} alt="Crossref DOI Logo" className="h-10 mb-3" />
              <h2 className="font-semibold text-2xl text-[#065F46]" style={{ fontFamily: '"Times New Roman", Times, serif'}}>Crossref</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crossref (formerly styled CrossRef) is an official digital object identifier (DOI)
              Registration Agency of the International DOI Foundation.
            </p>
          </div>

          {/* CiteFactor Card */}
          <div className="border border-[#B2CDC6] rounded-lg p-6 bg-[#E6EFED] flex flex-col h-full">
            <div className="mb-4">
              <img src={CiteFactor} alt="CiteFactor Logo" className="h-10 mb-3" />
              <h2 className="font-semibold text-2xl text-[#065F46]" style={{ fontFamily: '"Times New Roman", Times, serif'}}>CiteFactor</h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Citefactor is one of the Indexing and Abstracting periodicals which serve contents
              and citations to world wide users. In the era of computer & communication technology,
              dissemination of information has attained new dimensions particularly with respect to
              delivering speed and depth of reach.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Indexing
