import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";
import { MdDelete, MdAdd } from "react-icons/md";

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

  const removeSkill = (index) => {
    const updatedSkills = [...skillType.skills];
    updatedSkills.splice(index, 1);

    setResumeData((prev) => ({
      ...prev,
      skills: prev.skills.map((s) =>
        s.title === title ? { ...s, skills: updatedSkills } : s
      ),
    }));
  };

  if (!skillType) return null;

  return (
    <div className="space-y-4 mb-6">
      <div className="flex flex-wrap gap-2">
        {skillType.skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-sm"
          >
            <input
              type="text"
              placeholder={title}
              value={skill}
              onChange={(e) => handleSkill(e, index)}
              className="bg-transparent outline-none text-sm"
            />
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-600 hover:text-red-800"
              aria-label="Delete Skill"
            >
              <MdDelete size={16} />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addSkill}
        aria-label="Add Skill"
        className="primary-btn mt-2"
      >
        <MdAdd className="text-xl" />
        <span>Add {skillType.title}</span>
      </button>
    </div>
  );
};

export default Skill;
