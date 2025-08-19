import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

const Language = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const skillType = "languages";

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
    updated.pop();
    setResumeData({ ...resumeData, [skillType]: updated });
  };

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Languages
      </h2>

      <div className="flex flex-wrap gap-2">
        {resumeData[skillType].map((language, index) => (
          <input
            key={index}
            type="text"
            placeholder="Language"
            value={language}
            onChange={(e) => handleSkills(e, index)}
            className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-150"
          />
        ))}
      </div>

      <FormButton
        size={resumeData[skillType].length}
        add={addSkill}
        remove={removeSkill}
      />
    </div>
  );
};

export default Language;
