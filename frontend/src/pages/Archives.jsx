import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const years = [2025, 2024, 2023, 2022]

const  getIssuesForYear = (year) => {
  const volume = year % 100;
  return Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Volume ${volume} issue ${i + 1} ${year}`
  }))
}

const Archives = () => {

  const [selectedYear, setSelectedYear] = useState(2025);
  const issues = getIssuesForYear(selectedYear);
  const navigate = useNavigate();

  return (
    <div className='p-6 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-semibold mb-4' style={{ fontFamily: '"Times New Roman", Times, serif'}}>Archives</h1>
      <div className='flex gap-5 mb-6 flex-wrap'>
        <h1 className='px-4 py-2 text-2xl font-semibold' style={{ fontFamily: '"Times New Roman", Times, serif'}}>Years</h1>
        {years.map((year) => (
          <button
          key={year}
          onClick={()=> setSelectedYear(year)}
          className={`w-[100px] h-10 px-4 py-2 rounded-full border ${selectedYear === year ? 'bg-[#065F46] text-white' : 'bg-white hover:bg-gray-100'}`}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] bg-[#065F46]/10 py-6">
       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-[50px] gap-y-[30px] justify-items-center font-semibold">
       {issues.map(issue => (
        <button
        key={issue.id}
        onClick={() => navigate(`/current_issue/${selectedYear}/${issue.id}`)}
        className="bg-[#065F46] text-white px-4 py-2 rounded-md hover:bg-[#054c38 ]"
        >
        {issue.title}
       </button>
      ))}
       </div>
    </div>

  </div>
  )
}

export default Archives
