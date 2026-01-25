import React from "react";
import { useParams } from "react-router-dom";
import DOI from "../assets/DOI.svg"

const dummyArticles = [
  {
    serial: 1,
    title:
      "IoT Enabled Animal Detection and Adaptive Sound Repellent System for Sustainable Crop Protection",
    authors: "Dr. R. Vasanthi, A. Girinath, M. Madhumitha, S.A. Prithika",
    pages: "1-20",
    doi: "20.14118/Jove/V25.I12/251201",
  },
  {
    serial: 2,
    title: "Smart Irrigation System Using IoT for Efficient Water Management",
    authors: "A. Kumar, S. Ramesh",
    pages: "21-35",
    doi: "20.14118/Jove/V25.I12/251202",
  },
];

const Current_issue = () => {
  const { year, issue } = useParams();   // Fix: useParams()
  const volume = year % 100;

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">
        Volume {volume} Issue {issue} {year}
      </h1>

      {/* Articles */}
      <div className="space-y-6">
        {dummyArticles.map((article, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row justify-between bg-[#E6EFED] border-2 border-[#065F46] rounded-2xl p-6"
          >
            {/* Left Section */}
            <div className="lg:w-2/3">
              <p className="font-semibold text-sm mb-2">
                Serial: {article.serial}
              </p>

              <h2 className="text-xl font-bold mb-3 text-gray-800" style={{fontFamily: "'Times New Roman, Times, serif"}}>
                {article.title}
              </h2>

              <p className="mb-1 text-[#556275]">
                <span className="font-semibold text-[#000000]">Authors:</span>{" "}
                {article.authors}
              </p>

              <p className="mb-2 text-[#556275]">
                <span className="font-semibold text-[#000000]">Page No:</span>{" "}
                {article.pages}
              </p>

              <a
                href="#"
                className="text-emerald-700 font-semibold hover:underline"
              >
                View Abstract
              </a>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/3 text-right mt-4 lg:mt-0 flex flex-col items-end">
              <div className="flex items-center gap-2 mb-4">
               <img src={DOI} alt="DOI" className="w-10 h-10 object-contain" />
               <span className="text-sm text-gray-700 font-medium">
               {article.doi}
               </span>
              </div>

              <button className="bg-[#065F46] hover:bg-emerald-600 text-white px-4 py-2 rounded-md mb-3">
                Download PDF
              </button>

              <p className="text-sm">
                <span className="font-semibold">Journal:</span> Research Paper
              </p>
              <p className="text-sm mb-3">
                <span className="font-semibold">Vol/Issue:</span> {volume} (
                {issue})
              </p>

              <div className="flex gap-2">
                <button className="bg-[#065F46] hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm">
                  View Citation (APA)
                </button>
                <button className="bg-[#065F46] hover:bg-emerald-600 text-white px-3 py-1.5 rounded-md text-sm">
                  Copy Citation
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Current_issue;
