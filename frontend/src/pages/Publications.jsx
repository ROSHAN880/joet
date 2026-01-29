import React from "react";

const Publications = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1
        className="mb-6 tracking-[2px]"
        style={{
          fontFamily: "Times New Roman",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        Publication Ethics And Policies
      </h1>

      <p className="text-gray-700 mb-4">
        Publication Ethics promotes and encourages developing high quality
        scientific contents during publication process. Graphy Publications
        endorses COPE and JETI guidelines to handle the submitted manuscript in
        case suspected for any duplication or substantial overlap.
      </p>

      <p className="text-gray-700 mb-6">
        All articles published under Graphy Publications follow a standard
        Editorial Process to maintain quality scientific content. The process
        involves strict measures to prevent plagiarism, redundancy of
        manuscripts, multiple submissions, fabrication and falsification of data.
      </p>

      <Section title="Plagiarism">
        The author should develop their own contents while preparing any
        manuscript and should avoid plagiarizing the contents of another
        author’s paper without proper citation. Any manuscript found to be
        plagiarized, whether published or unpublished, will be considered as
        plagiarism.
      </Section>

      <Section title="Duplicate Submission">
        Duplicate publication is the publication of a paper that shares the same
        hypotheses, data, discussion, and conclusions substantially with one
        already published, without clear visible reference to the previous
        publication.
      </Section>

      <Section title="Redundant Publication">
        Redundant publication is the publication of a paper that overlaps
        substantially with material that has already been published or submitted
        elsewhere.
      </Section>

      <Section title="Data Fabrication or Falsification">
        Data fabrication is making up data or results. Data falsification
        involves manipulating research materials, processes, changing or omitting
        data without scientific justification.
      </Section>

      <Section title="Improper Authorship / Contributorship">
        Authorship should be given only to those who made substantial
        contributions to conception, design, data acquisition, analysis, drafting
        or revising the article, and final approval of the version to be
        published.
      </Section>

      <Section title="Citation Manipulation">
        Citation manipulation includes excessive or irrelevant citations made
        solely to increase citation counts of certain authors or journals.
      </Section>

      <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2">
        <li>Rejection of the infringing manuscript</li>
        <li>Rejection of every other manuscript submitted to Graphy journals</li>
        <li>Minimum 3-year ban for all authors involved</li>
        <li>Minimum 3-year prohibition from serving on any Editorial Board</li>
      </ul>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2
      className="mb-2 tracking-[1px] text-[#065F46]"
      style={{
        fontFamily: "Times New Roman",
        fontWeight: "semibold",
        fontSize: "32px",
      }}
    >
      {title}
    </h2>
    <p className="text-gray-700">{children}</p>
  </div>
);

export default Publications;
