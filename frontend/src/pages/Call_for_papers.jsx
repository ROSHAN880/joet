import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Call_for_papers = () => {
    const navigate = useNavigate();
  return (
    <div className='w-full'>
        <div className='max-w-7xl mx-auto px-4 lg:px-6 py-12'>
            <h1 className='text-4xl font-semibold mb-6' style={{ fontFamily: '"Times New Roman, Times, serif'}}>
                Call for Papers
            </h1>
            <div className='space-y-6 text-gray-600 leading-relaxed text-sm md:text-base'>
                <p className='mb-8'>The world’s first peer-reviewed scientific video journal. Amplify the impact of your research through high-quality visual production and global indexing.</p>
            </div>

            {/* ===== Title ====== */}
            <div className="flex gap-4 mb-10">
            <button 
            onClick={()=> navigate('/contact')}
            className="border border-[#065F46] text-[#065F46] bg-[#065F46] text-white transition px-6 py-3 rounded-lg font-medium">
            <img src="" alt="" />  Manuscript Submission
            </button>
            <button 
            onClick={()=> navigate('/archives')}
            className="border border-[#065F46] text-[#065F46] hover:bg-[#065F46] hover:text-white transition px-6 py-3 rounded-lg font-medium">
            Browse Archives
            </button>
            </div>

            {/* Middle Item */}
            <div className='max-w-7xl mx-auto px-4 lg:px-6 py-12'>
                <h1 className='text-4xl font-semibold mb-6 text-center' style={{ fontFamily: '"Times New Roman, Times, serif'}}>Why Publish with JoVE?</h1>
                <p className='text-center text-gray-600 mb-12'>Standardize your experimental protocols and increase the reproducibility of your scientific discoveries.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-16'>
                <div className='bg-[#E6EFED] border border-[#B2CDC6] p-6 rounded-lg'>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#F3F7F6] text-lg font-bold text-black">01</span>
                    <h3 className='text-xl font-semibold mt-2 mb-2' style={{fontFamily: '"Times New Roman, Times, serif'}}>High Visibility</h3>
                    <p className='text-gray-500'>
                    Indexed in PubMed, Web of Science, Scopus, and SciFinder. Your work
                    reaches millions of scientists worldwide.
                    </p>
                </div>
                <div className='bg-[#E6EFED] border border-[#B2CDC6] p-6 rounded-lg'>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-[#F3F7F6] text-lg font-bold text-black">02</span>
                    <h3 className='text-xl font-semibold mt-2 mb-2' style={{fontFamily: '"Times New Roman, Times, serif'}}>Rapid Review</h3>
                    <p className='text-gray-500'>
                    A streamlined editorial process with thorough peer-review ensures your research is published efficiently.
                    </p>
                </div>
            </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch'>
                    <div className='bg-[#E6EFED] border border-[#B2CDC6] p-6 rounded-lg h-full flex flex-col'>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Science, Engineering and Technology
                        </h3>
                        <ul className='list-disc list-inside text-sm text-gray-700 space-y-1'>
                            <li>Aeronautical and Aerospace Engineering</li>
                            <li>Agricultural Engineering</li>
                            <li>Applied Chemistry</li>
                            <li>Applied Physics</li>
                            <li>Architecture and Construction</li>
                            <li>Artificial Intelligence</li>
                            <li>Automobile Engineering</li>
                            <li>Biotechnology</li>
                            <li>Ceramic Technology</li>
                            <li>Chemical Engineering</li>
                            <li>Civil Engineering</li>
                            <li>Communication Engineering</li>
                            <li>Computer Engineering</li>
                            <li>Computer Science and Engineering</li>
                            <li>Earthquake Engineering</li>
                            <li>Electrical and Electronics Engineering</li>
                            <li>Electronics and Communication Engineering</li>
                            <li>Embedded Systems</li>
                            <li>Environmental Engineering</li>
                            <li>Food Engineering and Technology</li>
                            <li>Garment Technology</li>
                            <li>Highway Engineering</li>
                            <li>Industrial Engineering</li>
                            <li>Information Technology</li>
                            <li>Instrumentation Engineering and Technology</li>
                            <li>Interior Design and Decoration</li>
                            <li>Leather Technology</li>
                            <li>Electronics Engineering</li>
                            <li>Library and Information Sciences</li>
                            <li>Marine Engineering</li>
                            <li>Material Science</li>
                            <li>Mathematics</li>
                            <li>Mechanical Engineering</li>
                            <li>Medical Laboratory Technology</li>
                            <li>Metallurgical Engineering</li>
                            <li>Mining Engineering</li>
                            <li>Nanotechnology</li>
                            <li>Petroleum Engineering</li>
                            <li>Plastic Engineering and Technology</li>
                            <li>Polymer Engineering</li>
                            <li>Production and Industrial Engineering</li>
                            <li>Robotics</li>
                            <li>Rural Development and Technology</li>
                        </ul>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>Agriculture and Veterinary Sciences</h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Agriculture Science and Engineering</li>
                            <li>Agroecology</li>
                            <li>Agronomy</li>
                            <li>Animal Culture</li>
                            <li>Aquaculture</li>
                            <li>Biodiversity</li>
                            <li>Dairy Science and Technology</li>
                            <li>Date Palm</li>
                            <li>Environmental Science and Technology</li>
                            <li>Farming</li>
                            <li>Fisheries</li>
                            <li>Food Science and Technology</li>
                            <li>Forestry</li>
                            <li>Horticulture</li>
                            <li>Plant Breeding</li>
                            <li>Plant Culture</li>
                            <li>Soil Sciences</li>
                            <li>Veterinary Sciences</li>
                        </ul>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Dental Science
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Oral & Maxillofacial Surgery</li>
                            <li>Oral & Maxillofacial Radiology</li>
                            <li>Periodontics</li>
                            <li>Pedodontics</li>
                            <li>Preventive and Community Dentistry</li>
                            <li>Prosthodontics</li>
                            <li>Orthodontics</li>
                            <li>Oral & Maxillofacial Pathology</li>
                            <li>Conservative Dentistry & Endodontics</li>
                            <li>Implantology / Dentoalveolar Surgery</li>
                            <li>Research and Emerging Technologies</li>
                        </ul>

                        <h3 className='font-semibold mt-6 mb-4'>
                            Healtcare-viz
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Delivery System</li>
                            <li>Administration and regulation</li>
                            <li>Information and Technology</li>
                            <li>Policies</li>
                            <li>Research</li>
                            <li>Industry</li>
                        </ul>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Medical Science
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Cancer</li>
                            <li>Cardiology</li>
                            <li>Clinical Biochemistry</li>
                            <li>Hematology</li>
                            <li>Immunology</li>
                            <li>Medical Informatics</li>
                            <li>Medical & Rheumatolohy</li>
                            <li>Microbiology</li>
                            <li>Pharmol/ Forensic Medicine/ ToxicologySurgery </li>
                        </ul>
                    </div>

                    <div className='bg-[#E6EFED] border border-[#B2CDC6] p-6 rounded-lg h-full flex flex-col'>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Arts, Social Sciences and Humanities
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Administrative Sciences</li>
                            <li>Advertisement</li>
                            <li>Anthropology</li>
                            <li>Physical Anthropology</li>
                            <li>Archaeology</li>
                            <li>Criminology</li>
                            <li>Criticism</li>
                            <li>Cultural Aspects of Development</li>
                            <li>Economics</li>
                            <li>Education</li>
                            <li>English Language</li>
                            <li>Fine Arts</li>
                            <li>Geography</li>
                            <li>History</li>
                            <li>International Relations</li>
                            <li>Journalism</li>
                            <li>Languages and Literature</li>
                            <li>Law and Legislature</li>
                            <li>Library and Archival Sciences</li>
                            <li>Mass Communication</li>
                            <li>Museology (Museum Science)</li>
                            <li>Music</li>
                            <li>Philosophy</li>
                            <li>Photography</li>
                            <li>Physical Education and Sports</li>
                            <li>Political Studies</li>
                            <li>Political Science</li>
                            <li>Psychology</li>
                            <li>Public Administration</li>
                            <li>Recreational & Performing Arts</li>
                            <li>Religious Studies</li>
                            <li>Social Welfare</li>
                            <li>Sociology</li>
                            <li>Statistics</li>
                            <li>Teacher Education</li>
                            <li>Tourism Management</li>
                            <li>Visual Arts</li>
                            <li>Women Studies</li>
                        </ul>
                        
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Biomedical Engineering
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Biochemistry</li>
                            <li>Bio-engineering / Biotechnology</li>
                            <li>Biological Anthropology</li>
                            <li>Botanical Sciences</li>
                            <li>Botany</li>
                            <li>Cancer Biology</li>
                            <li>Cell Biology</li>
                            <li>Computational & Systems Biology</li>
                            <li>Dentistry</li>
                            <li>Dermatology</li>
                            <li>Developmental Biology</li>
                            <li>Epidemiology</li>
                            <li>Evolution & Genetics</li>
                            <li>Experimental Medicine</li>
                            <li>Gynecology (related medical specialties)</li>
                            <li>Human Anatomy, Cytology & Histology</li>
                            <li>Human Genetics</li>
                            <li>Human Physiology</li>
                            <li>Immunology</li>
                            <li>Incidence & Prevention of Disease</li>
                            <li>Internal Medicine</li>
                            <li>Marine Sciences (Biological Aspects)</li>
                            <li>Medicine</li>
                            <li>Microbiology</li>
                            <li>Molecular Medicine & Human Disease</li>
                            <li>Neurobiology</li>
                            <li>Nursing</li>
                            <li>Ophthalmology</li>
                            <li>Paleobotany</li>
                            <li>Paleo-zoology</li>
                            <li>Pathology</li>
                            <li>Pediatrics</li>
                            <li>Pharmacology</li>
                            <li>Pharmacy, Pharmacology & Therapeutics</li>
                            <li>Plant Molecular Biology</li>
                            <li>Promotion of Health</li>
                            <li>Proteomics</li>
                            <li>Pulmonology</li>
                            <li>Stem Cells, Epigenetics & Structural Biology</li>
                            <li>Surgery & Related Medical Specialties</li>
                            <li>Zoological Sciences</li>
                            <li>Zoology</li>
                        </ul>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Pharmacy
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'> 
                            <li>Chemical Processing of Pharmaceuticals</li>
                            <li>Crystallization</li>
                            <li>Lyophilization</li>
                            <li>Chemical Stability of Drugs</li>
                            <li>Pharmacokinetics</li>
                            <li>Biopharmaceutics</li>
                            <li>Pharmacodynamics</li>
                            <li>Pro-drug Development</li>
                            <li>Metabolic Disposition of Bioactive Agents</li>
                            <li>Dosage Form Design</li>
                            <li>Protein–Peptide Chemistry</li>
                            <li>Biotechnology</li>
                            <li>Pharmaceutical Technology</li>
                            <li>Targeted Drug Delivery</li>
                        </ul>
                    </div>
                    <div className='bg-[#E6EFED] p-6 border border-[#B2CDC6] rounded-lg h-full flex flex-col'>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Physical Sciences and Environment
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Analytical Chemistry</li>
                            <li>Applied Mathematics</li>
                            <li>Astro-geology</li>
                            <li>Astronomy</li>
                            <li>Astronomy & Allied Sciences</li>
                            <li>Astrophysics</li>
                            <li>Biochemistry</li>
                            <li>Climatology and Weather</li>
                            <li>Crystallography</li>
                            <li>Earth (Astronomical Geography)</li>
                            <li>Earth Sciences & Allied Sciences</li>
                            <li>Economic Geology</li>
                            <li>Electricity & Electronics</li>
                            <li>Environmental Science</li>
                            <li>Geology, Hydrology and Meteorology</li>
                            <li>Marine Sciences</li>
                            <li>Mathematical Geography</li>
                            <li>Mechanics</li>
                            <li>Modern Physics</li>
                            <li>Nuclear Physics</li>
                        </ul>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                            Management and Commerce
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Accounting and Banking</li>
                            <li>Business and Marketing</li>
                            <li>Business Ethics</li>
                            <li>Commerce</li>
                            <li>Database Management Systems (DBMS)</li>
                            <li>Economics</li>
                            <li>Energy Management</li>
                            <li>Entrepreneurship</li>
                            <li>Finance</li>
                            <li>Financial Development and Management</li>
                            <li>Human Resource Management</li>
                            <li>Human Resources Accounting</li>
                            <li>Insurance and Risk Management</li>
                            <li>Logistics</li>
                            <li>Management</li>
                            <li>Marketing</li>
                            <li>Management Information Systems (MIS)</li>
                            <li>Negotiation and Counselling</li>
                            <li>Operations Management</li>
                            <li>Organizational Behaviour</li>
                            <li>Production and Operation</li>
                            <li>Quality Management</li>
                            <li>Quantitative Methods</li>
                            <li>Sales and Distribution Management</li>
                            <li>Strategy</li>
                            <li>Supply Chain Management</li>
                            <li>Tourism Management</li>
                            <li>Travel Management</li>
                        </ul>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                         Biological & Medical Sciences
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Artificial Organs</li>
                            <li>Automated Patient Monitoring</li>
                            <li>Advanced Therapeutic and Surgical Devices</li>
                            <li>Application of Expert Systems and AI to Clinical Decision Making</li>
                            <li>Biomaterials Design</li>
                            <li>Biomechanics of Injury and Wound Healing</li>
                            <li>Blood Chemistry Sensors</li>
                            <li>Computer Modelling of Physiologic Systems</li>
                            <li>Design of Optimal Clinical Laboratories</li>
                            <li>Medical Imaging Systems</li>
                            <li>Sports Medicine</li>
                        </ul>

                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                        Integrative Medicine (viz.)
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Critical Care</li>
                            <li>Community</li>
                            <li>Preventive</li>
                            <li>Forensic and Legal</li>
                            <li>Addiction</li>
                            <li>Alternative Medicine</li>
                            <li>Occupational</li>
                            <li>Participatory</li>
                            <li>Sports</li>
                            <li>Transfusion</li>
                        </ul>
                        <h3 className='font-semibold mt-6 mb-4 text-2xl' style={{fontFamily: '"Times New Roman, Times, serif'}}>
                        Architectural and Design Research
                        </h3>
                        <ul className='list-disc disc-inside text-sm text-gray-700 space-y-1'>
                            <li>Architectural Technology</li>
                            <li>Environment and Behavior</li>
                            <li>Design Methods and Architectural Theory</li>
                            <li>Architectural Practice and Design Programming</li>
                            <li>Business Design Research</li>
                            <li>Computer Applications to Architectural Practice</li>
                            <li>Information Technologies for Design Professionals</li>
                            <li>Post-Occupancy Evaluation</li>
                            <li>Environmental Evaluation</li>
                            <li>Social Impact Assessment</li>
                            <li>Forecasting for the Environmental Professions</li>
                            <li>User Participation</li>
                            <li>Environmental Education for the Public</li>
                            <li>Energy</li>
                            <li>Site Planning and Topology</li>
                            <li>Building Configuration</li>
                        </ul>
                    </div>
                </div>
        </div>
      
    </div>
  )
}

export default Call_for_papers
