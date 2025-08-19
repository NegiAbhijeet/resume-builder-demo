import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import FormButton from "./FormButton";

const Skill = ({ title }) => {
  const { resumeData, setResumeData } = useContext(ResumeContext);

  const skillType = resumeData.skills.find((s) => s.title === title);

  const handleSkill = (e, index) => {
    const updatedSkills = [...skillType.skills];
    updatedSkills[index] = e.target.value;

    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.title === title ? { ...s, skills: updatedSkills } : s
      ),
    }));
  };

  const addSkill = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.title === title ? { ...s, skills: [...s.skills, ""] } : s
      ),
    }));
  };

  const removeSkill = () => {
    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.title === title
          ? { ...s, skills: s.skills.slice(0, -1) }
          : s
      ),
    }));
  };

  if (!skillType) return null;

  return (
    <div className="space-y-4 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        {title}
      </h2>

      <div className="flex flex-wrap gap-2">
        {skillType.skills.map((skill, index) => (
          <input
            key={index}
            type="text"
            placeholder={title}
            value={skill}
            onChange={(e) => handleSkill(e, index)}
            className="px-3 py-1.5 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-150"
          />
        ))}
      </div>

      <FormButton
        size={skillType.skills.length}
        add={addSkill}
        remove={removeSkill}
      />
    </div>
  );
};

export default Skill;
