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
      <div className="flex flex-wrap gap-2">
        {resumeData[skillType].map((language, index) => (
          <input
            key={index}
            type="text"
            placeholder="Language"
            value={language}
            onChange={(e) => handleSkills(e, index)}
            className="tag-pill"
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
