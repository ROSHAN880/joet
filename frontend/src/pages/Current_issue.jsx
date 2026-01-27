import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DOI from "../assets/DOI.svg";

const dummyArticles = [
  {
    serial: 1,
    title:
      "IoT Enabled Animal Detection and Adaptive Sound Repellent System for aSustainable Crop Protection",
    authors: "Dr. R. Vasanthi, A. Girinath, M. Madhumitha, S.A. Prithika",
    pages: "1-20",
    doi: "20.14118/Jove/V26.I1/261101",
    abstract: "Responsible farmers are constantly faced with significant financial losses through wild animals that are able to easily get introduced into their agricultural fields which can usually be found close to forests and urban landscapes. We have designed an intelligent Sensor-driven Animal Movement Detection and Adaptive Sound Repellent System (STD-MS) to address this concern. The STD-MS utilizes microwave radar sensors that will detect movement in conjunction to a microcontroller which outputs sounds of different frequencies through speakers. The sounds chosen for the animal will be pitch and loudness adjusted specific to the size and/or behavior of the animal, thus mitigating the chance of habituation. The purpose of this project is to develop an IoT based system for animal detection as well as adaptive sound repellent system for environmentally sustainable crop protection. The system will use microwave radar sensors and microcontrollers to detect animal movement in near real-time within the agricultural fields with wireless IoT monitoring and data logging benefits.",
    downloadPdf: "/1_Jan_2026.pdf",
    viewCitation: "Dr. R. Vasanthi, A. Girinath, M. Madhumitha, S.A. Prithika (2025). IoT Enabled Animal Detection and Adaptive Sound Repellent System for Sustainable Crop Protection. Research Paper, 25(12), 1-20. https://joet.science/wp-content/uploads/1_Dec_2025.pdf",
  },
  {
    serial: 2,
    title: "Smart Irrigation System Using IoT for Efficient Water Management",
    authors: "A. Kumar, S. Ramesh",
    pages: "21-35",
    doi: "20.14118/Jove/V26.I1/261102",
    abstract: "Responsible farmers are constantly faced with significant financial losses through wild animals that are able to easily get introduced into their agricultural fields which can usually be found close to forests and urban landscapes. We have designed an intelligent Sensor-driven Animal Movement Detection and Adaptive Sound Repellent System (STD-MS) to address this concern. The STD-MS utilizes microwave radar sensors that will detect movement in conjunction to a microcontroller which outputs sounds of different frequencies through speakers. The sounds chosen for the animal will be pitch and loudness adjusted specific to the size and/or behavior of the animal, thus mitigating the chance of habituation. The purpose of this project is to develop an IoT based system for animal detection as well as adaptive sound repellent system for environmentally sustainable crop protection. The system will use microwave radar sensors and microcontrollers to detect animal movement in near real-time within the agricultural fields with wireless IoT monitoring and data logging benefits.",
    downloadPdf: "/2_Jan_2026.pdf",
    viewCitation: "Dr. R. Vasanthi, A. Girinath, M. Madhumitha, S.A. Prithika (2025). IoT Enabled Animal Detection and Adaptive Sound Repellent System for Sustainable Crop Protection. Research Paper, 25(12), 1-20. https://joet.science/wp-content/uploads/1_Dec_2025.pdf",
  },
];

const Current_issue = () => {
  const { volume, issue } = useParams();
  const [openAbstract, setOpenAbstract] = useState(null);
  const [openCitaion, setOpenCitation] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">
        Volume {volume || 26} Issue {issue || 1}
      </h1>

      {/* Articles */}
      <div className="space-y-6">
        {dummyArticles.map((article) => (
          <div
            key={article.serial}
            className="flex flex-col lg:flex-row justify-between bg-[#E6EFED] border-2 border-[#065F46] rounded-2xl p-6"
          >
            {/* Left */}
            <div className="lg:w-2/3">
              <p className="font-semibold text-sm mb-2">
                Serial: {article.serial}
              </p>

              <h2
                className="text-xl font-bold mb-3 text-gray-800"
                style={{ fontFamily: "'Times New Roman, Times, serif" }}
              >
                {article.title}
              </h2>

              <p className="mb-1 text-[#556275]">
                <span className="font-semibold text-black">Authors:</span>{" "}
                {article.authors}
              </p>

              <p className="mb-2 text-[#556275]">
                <span className="font-semibold text-black">Page No:</span>{" "}
                {article.pages}
              </p>

              <a
                href="#"
                className="text-emerald-700 font-semibold hover:underline"
                onClick={(e)=> {
                  e.preventDefault();
                  setOpenAbstract(
                    openAbstract === article.serial ? null : article.serial
                  );
                }}
              >
                {openAbstract === article.serial ? "Hide Abstract" : "View Abstract"}
              </a>
              {
                openAbstract === article.serial && (
                  <div className="mt-4 bg-[#E6EFED] p-4 rounded-lg text-gray-700 text-sm leading-relaxed">
                    {article.abstract}
                  </div>
                )
              }
            </div>

            {/* Right */}
            <div className="lg:w-1/3 text-right mt-4 lg:mt-0 flex flex-col items-end">
              <div className="flex items-center gap-2 mb-4">
                <img src={DOI} alt="DOI" className="w-10 h-10 object-contain" />
                <span className="text-sm text-gray-700 font-medium">
                  {article.doi}
                </span>
              </div>

              <button 
              onClick={()=> window.open(article.downloadPdf, "_blank")}
              className="bg-[#065F46] hover:bg-emerald-600 text-white px-4 py-2 rounded-md mb-3">
                Download PDF
              </button>

              <p className="text-sm">
                <span className="font-semibold">Journal:</span> Research Paper
              </p>

              <p className="text-sm mb-3">
                <span className="font-semibold">Vol/Issue:</span>{" "}
                {volume || 26} ({issue || 1})
              </p>

              <div className="fw-full flex flex-col items-end">
                <div className="flex gap-2 justify-end">
                <button 
                onClick={()=> setOpenCitation(openCitaion === article.serial ? null : article.serial)}
                className="bg-[#065F46] hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm">
                  {openCitaion === article.serial ? "Hide Citation" : "View Citation (APA)"}
                </button>
                
                <button className="bg-[#065F46] hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm">
                  Copy Citation
                </button>
                </div>
                {
                  openCitaion === article.serial && (
                    <div className="mt-3 w-full bg-[#E6EFED] p-3 rounded-lg text-gray-700 text-sm text-left">
                   {article.viewCitation}
                   </div>
                  )
                }
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Current_issue;
