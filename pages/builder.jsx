import React, { useState, createContext } from "react";
import Language from "../components/form/Language";
import FormCP from "../components/form/FormCP";
import Preview from "../components/preview/Preview";
import DefaultResumeData from "../components/utility/DefaultResumeData";
import SocialMedia from "../components/form/SocialMedia";
import WorkExperience from "../components/form/WorkExperience";
import Skill from "../components/form/Skill";
import PersonalInformation from "../components/form/PersonalInformation";
import Summary from "../components/form/Summary";
import Projects from "../components/form/Projects";
import Education from "../components/form/Education";
import dynamic from "next/dynamic";
import Certification from "../components/form/certification";

const ResumeContext = createContext(DefaultResumeData);
const Print = dynamic(() => import("../components/utility/WinPrint"), { ssr: false });

const Accordion = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-gray-300">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex justify-between items-center px-4 py-3 text-left bg-white hover:bg-gray-50 transition"
      >
        <span className="input-heading">{title}</span>
        <span
          className={`transform transition-transform duration-200 ${isOpen ? "rotate-90" : ""
            }`}
        >
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
      {isOpen && <div className="px-4 pb-4 pt-1 bg-white">{children}</div>}
    </div>
  );
};

export default function Builder() {
  const [resumeData, setResumeData] = useState(DefaultResumeData);
  const [formClose, setFormClose] = useState(false);
  const [openAccordions, setOpenAccordions] = useState([0]);

  const handleProfilePicture = (e) => {
    const file = e.target.files[0];
    if (file instanceof Blob) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setResumeData({ ...resumeData, profilePicture: event.target.result });
      };
      reader.readAsDataURL(file);
    } else {
      console.error("Invalid file type");
    }
  };

  const handleChange = (e) => {
    setResumeData({ ...resumeData, [e.target.name]: e.target.value });
  };

  const toggleAccordion = (index) => {
    setOpenAccordions((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const formSections = [
    { title: "Personal Information", component: <PersonalInformation /> },
    { title: "Social Media", component: <SocialMedia /> },
    { title: "Summary", component: <Summary /> },
    { title: "Education", component: <Education /> },
    { title: "Work Experience", component: <WorkExperience /> },
    { title: "Projects", component: <Projects /> },
    {
      title: "Skills",
      component: resumeData.skills.map((skill, index) => (
        <Skill title={skill.title} key={index} />
      )),
    },
    { title: "Languages", component: <Language /> },
    { title: "Certifications", component: <Certification /> },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <ResumeContext.Provider
        value={{ resumeData, setResumeData, handleProfilePicture, handleChange }}
      >
        <div className="flex max-w-7xl mx-auto h-screen">
          {/* Left - Form */}
          {!formClose && (
            <form className="w-1/2 h-full overflow-y-auto bg-white p-4">
              {formSections.map((section, index) => (
                <Accordion
                  key={index}
                  title={section.title}
                  isOpen={openAccordions.includes(index)}
                  onClick={() => toggleAccordion(index)}
                >
                  {section.component}
                </Accordion>
              ))}
            </form>
          )}

          {/* Right - Preview */}
          <div className="w-1/2 h-full overflow-y-auto p-4 bg-gray-50">
            <Preview />
          </div>
        </div>

        <FormCP formClose={formClose} setFormClose={setFormClose} />
        <Print />
      </ResumeContext.Provider>
    </div>
  );
}

export { ResumeContext };
