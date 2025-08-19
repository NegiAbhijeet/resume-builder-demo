import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

const Certification = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "certifications";

  const handleSkills = (e, index) => {
    const updated = [...resumeData[skillType]];
    updated[index] = e.target.value;
    setResumeData({ ...resumeData, [skillType]: updated });
  };

  const addSkill = () => {
    setResumeData({
      ...resumeData,
      [skillType]: [...resumeData[skillType], ""],
    });
  };

  const removeSkill = () => {
    const updated = [...resumeData[skillType]];
    updated.splice(-1, 1);
    setResumeData({ ...resumeData, [skillType]: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Certifications
      </h2>
      {resumeData[skillType].map((cert, index) => (
        <input
          key={index}
          type="text"
          placeholder="Certification"
          value={cert}
          onChange={(e) => handleSkills(e, index)}
          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand focus:outline-none"
        />
      ))}
      <FormButton
        size={resumeData[skillType].length}
        add={addSkill}
        remove={removeSkill}
      />
    </div>
  );
};

export default Certification;
