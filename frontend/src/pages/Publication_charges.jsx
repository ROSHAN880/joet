import React from "react";

const Publication_charges = () => {
  return (
    <div className="w-full">
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">
        {/* Title */}
        <h1
          className="text-4xl font-semibold mb-6"
          style={{ fontFamily: '"Times New Roman, Times, serif"' }}
        >
          Publication Charges
        </h1>

        {/* Description */}
        <div className="space-y-6 text-gray-600 leading-relaxed text-sm md:text-base">
          <p>
            Publishing a manuscript in the Journal of Engineering and Technology
            requires manuscript publication charges that will be paid by the
            submitting author upon acceptance of the manuscript for publication
            in accordance with the following criteria:
          </p>
        </div>

        {/* Charges Section */}
        <div className="mt-10 space-y-10">
          {/* Indian Authors */}
          <div>
            <h2
              className="text-2xl font-semibold text-[#065F46] mb-3"
              style={{ fontFamily: '"Times New Roman, Times, serif"' }}
            >
              Indian Authors:
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The processing charge for your manuscript is{" "}
              <span className="font-semibold text-gray-800">3000 INR</span>, which
              includes online publication, assignment of a Digital Object
              Identifier (DOI), and E-certificates for each listed author.
            </p>
          </div>

          {/* International Authors */}
          <div>
            <h2
              className="text-2xl font-semibold text-[#065F46] mb-3"
              style={{ fontFamily: '"Times New Roman, Times, serif"' }}
            >
              International Authors:
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              The processing charge for your manuscript is{" "}
              <span className="font-semibold text-gray-800">220 USD</span>, which
              includes online publication, assignment of a Digital Object
              Identifier (DOI), and E-certificates for each listed author.
            </p>
          </div>
        </div>

        {/* INFO CARD (same style as Open Access stats card) */}
        <div className="mt-16">
          <div className="bg-[#E6EFED] rounded-3xl border border-[#065F46] px-6 py-10 w-full">
            <p className="text-[#3E836F] font-medium text-center leading-relaxed text-sm md:text-base">
              After completing the payment process, authors are requested to
              submit the filled-in Registration Form, Copyright Form, and a
              scanned copy of the payment proof. All documents should be sent via
              email to{" "}
              <a
                href="mailto:editor@joet.science"
                className="font-semibold underline text-[#065F46]"
              >
                editor@joet.science
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication_charges;
